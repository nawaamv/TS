import { Sidebar } from '@/components/Sidebar';
import { GuideContent } from '@/components/GuideContent';
import { MobileNav } from '@/components/MobileNav';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <MobileNav />
      <Sidebar className="hidden md:flex w-72 flex-col fixed inset-y-0 z-50 border-r border-slate-200 bg-white" />
      <main className="flex-1 md:pl-72">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <GuideContent />
        </div>
      </main>
    </div>
  );
}
