import SkillTree from '@/components/SkillTree';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <div className="max-w-6xl mx-auto p-12 flex flex-col items-center">

        <div className="w-full max-w-6xl flex-grow">
          <SkillTree />
        </div>

      </div>

      <div className="mt-8 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4 p-12 mx-auto">
        {/* Legend / Info Cards */}
        <div className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1">
          <h2 className={`mb-3 text-xl font-black text-slate-900 tracking-tighter uppercase`}>
            Novice{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-blue-500">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm font-medium text-slate-500`}>
            Master the basics: Pods, ConfigMaps, and YAML.
          </p>
        </div>

        <div className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1">
          <h2 className={`mb-3 text-xl font-black text-slate-900 tracking-tighter uppercase`}>
            Admin{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-green-500">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm font-medium text-slate-500`}>
            Cluster Architecture, Networking, and Scheduling.
          </p>
        </div>

        <div className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1">
          <h2 className={`mb-3 text-xl font-black text-slate-900 tracking-tighter uppercase`}>
            Security{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-red-500">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm font-medium text-slate-500`}>
            Hardening, Policies, and Vulnerability Scanning.
          </p>
        </div>
      </div>
    </main>
  );
}
