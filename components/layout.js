import Header from "./header";
import Footer from "./footer";
import Sidebar from "./Sidebar";
import PubBanner from "./PubBanner";

export default function Layout(props) {
  return (
    // <div className="flex flex-col min-h-screen">
    //   {/* <Header /> */}

    //   <main className="flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
    //     {props.children}
    //   </main>

    //   {/* <Footer /> */}
    // </div>
    <div className="flex flex-row min-h-screen bg-backcolor-500">
      <Sidebar className="z-50 absolute" />
      <main className="flex-1 lg:container px-4 py-2 md:py-3 mx-auto md:px-6">
        <PubBanner />
        {props.children}
      </main>
    </div>
  );
}
