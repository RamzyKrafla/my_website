import { withBasePath } from "@/lib/paths";

const cvPath = withBasePath("/Ramzy_CV.pdf");

export default function Home() {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-white px-6 text-center text-neutral-900">
      <meta httpEquiv="refresh" content={`0;url=${cvPath}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(cvPath)})`,
        }}
      />
      <a href={cvPath} className="text-lg underline underline-offset-4">
        Ramzy Rafla CV
      </a>
    </main>
  );
}
