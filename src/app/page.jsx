import Sidebar from "./components/Sidebar";
import CssAndImage from "./components/CssAndImage";
import DataFetch from "./components/DataFetch";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Hii Next js home
        <br />
        {/* <h1>Below are server side components</h1> */}
        <ul>
          <li>Paranthesis folder will not come in route, pls refer allcourses folder</li>
          <li>Square bracket folder is used for dynamic routing like for user id etc, pls refer user folder</li>
          <li>Square bracket with ... like [...posts] folder is used for dynamic routing, will catch all routes like /blog/1 or /blog/1/asas etc, pls refer blog folder</li>
          <li>Double square bracket with ... like [[...posts]] folder is used for dynamic routing, will catch all routes like /blog/1 or /blog/1/asas etc, and its folder is not necessary to be present in routing (can ignore /blog)</li>
          <li>
            For parallel routing we can use @ with folder name and add layout in its parents folder, pls refer colorbox folder
          </li>
          <li>Please refer admin folder for using components</li>
          <li>Plaese check Sidebar component for Linking</li>
          <li>Plaese check CssAndImage component for CSS and Image</li>
          
        </ul>
        <Sidebar />
        <CssAndImage />
        <DataFetch />
      </main>
    </div>
  );
}
