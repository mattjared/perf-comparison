import Link from "next/link";

export default function Home() {
  return (
    <main className="grid items-center justify-items-start gap-12 font-mono p-20">
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Perf Comparison</h1>
            <p className="text-lg"> A site to compare the performance benefits of using Next.js native features compared to standard implementations.</p>
        </div>  
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex flex-col gap-2 bg-slate-100 p-4 rounded-md">
            <h4 className="text-lg font-bold">Next.js Font</h4>
            <h5>Methodology</h5>
            <p>I have two pages created both using 5,000 lines of HTML including a bunch of different elements. The first page using Google Fonts </p>
            <Link href="/font-before" className="text-sm text-blue-500">Before Next Font</Link>
            <Link href="/font-after" className="text-sm text-blue-500">After Next Font</Link>
          </div>
          <div className="flex flex-col gap-2 bg-slate-100 p-4 rounded-md">
            <h4 className="text-lg font-bold">Next.js Link</h4>
            <p className="text-sm">Before: 100ms</p>
            <p className="text-sm">After: 10ms</p>
            <Link href="/link" className="text-sm text-blue-500">View Example</Link>
          </div>  
          <div className="flex flex-col gap-2 bg-slate-100 p-4 rounded-md">
            <h4 className="text-lg font-bold">Next.js Image</h4>
            <p className="text-sm">Before: 100ms</p>
            <p className="text-sm">After: 10ms</p>
            <Link href="/image" className="text-sm text-blue-500">View Example</Link>
          </div>
          <div className="flex flex-col gap-2 bg-slate-100 p-4 rounded-md">
            <h4 className="text-lg font-bold">Next.js Script</h4>
            <p className="text-sm">Before: 100ms</p>
            <p className="text-sm">After: 10ms</p>
            <Link href="/script" className="text-sm text-blue-500">View Example</Link>
          </div>
          <div className="flex flex-col gap-2 bg-slate-100 p-4 rounded-md">
            <h4 className="text-lg font-bold">Next.js Rendering</h4>
            <p className="text-sm">Before: 100ms</p>
            <p className="text-sm">After: 10ms</p>
            <Link href="/rendering" className="text-sm text-blue-500">View Example</Link>
          </div>
        </div>
    </main>
  );
}
