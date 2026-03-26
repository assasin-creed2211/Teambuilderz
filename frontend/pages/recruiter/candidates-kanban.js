import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { Users, Home, FileText, AlertTriangle, CircleUser, LogOut } from 'lucide-react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import KanbanBoard from '../../components/KanbanBoard';
import PDFExportButton from '../../components/ui/pdf-export-button';
import useAuthState from '../../lib/useAuthState';
import API_URL from '../../lib/api';
import { useCandidatesQuery } from '../../lib/queryHooks';
import { getSidebarLinks } from '../../lib/sidebarLinks';
import { handleError } from '../../components/ui/error-handler';

const CandidatesKanbanPage = () => {
  const router = useRouter();
  const { token, userName, userRole, ready, logout } = useAuthState();
  const { data: candidatesData, isLoading, error } = useCandidatesQuery(token);

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/api/v1/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      toast.success('Logged out successfully');
    } catch (logoutError) {
      console.warn('Failed to log out cleanly', logoutError);
      toast.error('Logout failed, but clearing local session');
    }
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    router.push('/login');
  };

  // Sidebar links
  const sidebarLinks = getSidebarLinks(userRole);

  // Handle candidate move
  const handleCandidateMove = useCallback(
    async (candidateId, newStage) => {
      try {
        const response = await fetch(`${API_URL}/api/v1/candidates/${candidateId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            current_stage: newStage,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to update candidate stage');
        }

        // Refetch candidates
        toast.success('Candidate stage updated');
      } catch (err) {
        handleError(err, 'Failed to update candidate stage');
      }
    },
    [token]
  );

  // Handle card click
  const handleCardClick = useCallback(
    (candidate) => {
      router.push(`/recruiter/candidate/${candidate.id}`);
    },
    [router]
  );

  // Handle add candidate
  const handleAddCandidate = useCallback(() => {
    router.push('/recruiter/candidates');
  }, [router]);

  // Check authentication
  if (!ready || !token) {
    return (
      <DashboardLayout title="Candidates" subtitle="Pipeline" links={sidebarLinks}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-[600px]">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-full rounded-xl border bg-muted/20 p-4 space-y-4 animate-pulse">
               <div className="h-8 w-2/3 rounded bg-muted" />
               <div className="h-32 w-full rounded-lg bg-muted" />
               <div className="h-32 w-full rounded-lg bg-muted" />
               <div className="h-32 w-full rounded-lg bg-muted" />
            </div>
          ))}
        </div>
      </DashboardLayout>
    );
  }

  // Handle error
  if (error) {
    return (
      <DashboardLayout title="Candidates" subtitle="Error loading candidates" links={sidebarLinks}>
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <p className="font-semibold">Error loading candidates</p>
          <p className="text-sm mt-1">{error.message}</p>
        </div>
      </DashboardLayout>
    );
  }

  const candidates = candidatesData?.candidates || [];

  return (
    <DashboardLayout
      title="Candidates Pipeline"
      subtitle="Drag and drop to manage candidate stages"
      links={sidebarLinks}
      actions={
        <div className="flex items-center gap-2">
          <PDFExportButton
            reportType="candidates"
            data={{ candidates }}
            filename="candidates-report"
            size="sm"
          />
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      }
    >
      <KanbanBoard
        candidates={candidates}
        loading={isLoading}
        onCandidateMove={handleCandidateMove}
        onCardClick={handleCardClick}
        onAddCandidate={handleAddCandidate}
      />
    </DashboardLayout>
  );
};

export default CandidatesKanbanPage;
