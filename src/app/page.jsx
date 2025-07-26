import CssAndImage from "./components/CssAndImage";

export default function Home() {
  return (
    <div>
        Hii Next js home
        <br />
        <h1 className="text-2xl font-bold my-4">Routing</h1>
        <ul className="space-y-2">
          <ol>Paranthesis folder will not come in route, pls refer allcourses folder</ol>
          <ol>Square bracket folder is used for dynamic routing like for user id etc, pls refer user folder</ol>
          <ol>Square bracket with ... like [...posts] folder is used for dynamic routing, will catch all routes like /blog/1 or /blog/1/asas etc, pls refer blog folder</ol>
          <ol>Double square bracket with ... like [[...posts]] folder is used for dynamic routing, will catch all routes like /blog/1 or /blog/1/asas etc, and its folder is not necessary to be present in routing (can ignore /blog)</ol>
          <ol>
            For parallel routing we can use @ with folder name and add layout in its parents folder, pls refer colorbox folder
          </ol>
        </ul>

        <h1 className="text-2xl font-bold my-4">Notes</h1>
        <ul className="space-y-2">
          <ol>Hooks dont work in server components</ol>
          <ol>Browser interactivity is not allowed in Server components like onClick etc.</ol>
          <ol>We can directly call api inside of server components which we do inside of useEfect in Client comp. (refer users in sidebar)</ol>
          <ol>All components are generally Server components until we expicitly define it like in city comp (client comp)</ol>
          <ol>Need to give full api url for server side components but notin client side (refer city in sidebar)</ol>
          <ol>we can define metadata, layout etc. for each comp separately </ol>
        </ul>

        <CssAndImage />
    </div>
  );
}
