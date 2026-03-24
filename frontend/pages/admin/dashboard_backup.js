// Placeholder — redirects to admin dashboard
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DashboardBackup() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin'); }, [router]);
  return null;
}
