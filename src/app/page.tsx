import SkillTree from '@/components/SkillTree';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-8">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          KubeMastery <span className="text-blue-600">Path</span>
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="text-slate-500">CKA / CKAD / CKS Roadmap</p>
        </div>
      </div>

      <div className="w-full max-w-6xl flex-grow">
        <SkillTree />
      </div>

      <div className="mt-8 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
        {/* Legend / Info Cards */}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Novice{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Master the basics: Pods, ConfigMaps, and YAML.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Admin{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Cluster Architecture, Networking, and Scheduling.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Security{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Hardening, Policies, and Vulnerability Scanning.
          </p>
        </div>
      </div>
    </main>
  );
}
