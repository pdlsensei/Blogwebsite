import Image from "next/image";
import Link from "next/link";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-gray-600 p-8 my-6  rounded-lg">
        <Image
          
          src="/hrh.png"
          width={40}
          height={40}
          className="mx-auto rounded-md"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Anime Blog</h1>
        </Link>
        <p className="text-slate-400"> Welcome to my anime blog. </p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-blue-600">
        <h3 >Developed by @pdlsensei</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head>
        {process.env.NODE_ENV === "production" && (
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9727145484029256"
     crossorigin="anonymous"></script>
      )}
      </head>
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
