import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    // <div className="grid min-h-screen flex-col gap-10 space-y-5 bg-slate-400 py-20 px-20">
    //   <div className="rounded-3xl bg-white p-6 shadow-xl">
    //     <span className="text-2xl font-semibold">Select Item</span>
    //     <ul>
    //       {[1, 2, 3, 4, 5].map((i) => (
    //         <div
    //           key={i}
    //           className="my-2 flex justify-between odd:bg-blue-50 even:bg-yellow-500"
    //         >
    //           <span className="text-gray-500">Grey Chair</span>
    //           <span className="font-semibold">$19</span>
    //         </div>
    //       ))}
    //     </ul>
    //     <ul>
    //       {" "}
    //       {["a", "b", "c", ""].map((c, i) => (
    //         <li className="bg-red-500 py-2 empty:hidden" key={i}>
    //           {c}
    //         </li>
    //         // empty- 비워진칸  empty:hidden 도 가능
    //       ))}
    //     </ul>

    //     <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
    //       <span>Total</span>
    //       <span className="font-semibold">$10</span>
    //     </div>
    //     <div className="flex items-center">
    //       <button className="mx-auto mt-5 w-3/4 rounded-xl bg-blue-500 p-3  text-center text-white hover:bg-teal-500 hover:text-black focus:text-red-500 active:bg-yellow-500">
    //         Checkout
    //       </button>
    //     </div>
    //   </div>

    //   <div className="group overflow-hidden rounded-3xl bg-white shadow-xl">
    //     {/* group을 className에 지정 */}
    //     <div className="bg-blue-500 p-6 pb-14">
    //       <span className="text-2xl text-white">Profile</span>
    //     </div>

    //     <div className="relative -top-5 rounded-3xl bg-white p-6">
    //       <div className="relative -top-16 flex items-end justify-between">
    //         <div className="flex flex-col items-center">
    //           <span className="text-sm text-gray-500">Orders</span>
    //           <span className="font-medium">340</span>
    //         </div>

    //         <div className="h-24 w-24 rounded-full bg-gray-400 transition-colors group-hover:bg-red-300" />
    //         {/* group에 호버됬을때 변하는 부분을 지정 */}
    //         <div className="flex flex-col items-center">
    //           <span className="text-sm text-gray-500">Spent</span>
    //           <span className="font-medium">$5000</span>
    //         </div>
    //       </div>
    //       <div className="relative  -mt-10 -mb-5 flex flex-col items-center">
    //         <span className="text-lg font-extrabold">Tony Molloy</span>
    //         <span className="text-sm text-gray-500">New York, USA</span>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="rounded-2xl bg-white p-10 shadow-xl">
    //     <div className="flex items-center justify-between">
    //       <span>⬅️</span>
    //       <div className="space-x-3">
    //         <span>⭐️4.9</span>
    //         <span className="rounded-md p-2 shadow-xl">💖</span>
    //       </div>
    //     </div>
    //     <div className="mb-5 h-72 bg-zinc-400" />
    //     <div className="flex flex-col">
    //       <span className="mb-1.5 text-xl font-medium">Swoon Lounge</span>
    //       <span className="text-xs text-gray-500">Chair</span>
    //       <div className="mt-3 mb-5 flex items-center justify-between">
    //         <div className="space-x-2">
    //           <button className="h-5 w-5 rounded-full   bg-yellow-500  ring-yellow-500 ring-offset-2 transition focus:ring-2 " />
    //           <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2 " />
    //           <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2 " />
    //         </div>
    //         <div className="flex items-center space-x-5">
    //           <button className="aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl font-medium text-gray-500">
    //             -
    //           </button>
    //           <span>1</span>
    //           <button className="aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl font-medium text-gray-500">
    //             +
    //           </button>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-around">
    //         <span className="text-2xl font-medium">$460</span>
    //         <button className="rounded-lg bg-blue-500 py-2 px-8 text-center text-xs text-white">
    //           Add to Vart
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <form className="flex flex-col space-y-2  bg-blue-500 p-5 focus-within:bg-blue-100">
    //   <input
    //     type="text"
    //     required
    //     placeholder="Username"
    //     className="peer rounded-md border border-gray-400 p-1 "
    //     // peer modifier는 input의 상태에 따라서 span의 스타일을 변화시킬 수 있다.
    //   />
    //   <span className="hidden peer-invalid:block peer-invalid:text-red-500">
    //     This input is invalid
    //   </span>
    //   <span className="hidden peer-valid:block peer-valid:text-teal-500">
    //     Awesome username
    //   </span>
    //   <span className="hidden peer-hover:block peer-hover:text-amber-500">
    //     Hello
    //   </span>
    //   <input type="submit" value="Login" className="bg-white" />
    // </form>
    <div className="flex flex-col space-y-2 p-5">
      {/* <details className="selct-none open:bg-indigo-400 open:text-white">
        <summary className="cursor-pointer ">What is my fav. food.</summary>
        <span className="selection:bg-indigo-600 selection:text-white">
          육개장
        </span>
      </details> */}
      {/* <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul> */}
      {/* <input
        type="file"
        className="file:cursor-pointer file:rounded-xl file:border-0 file:bg-purple-400 file:px-5 file:text-white file:transition-colors file:hover:border-2 file:hover:bg-white file:hover:text-purple-400"
        // selecter가 없으면 전체에 반영된 file 로 지정해야 함 2가지 modifier도 사용가능 file:hover처럼
      /> */}
      <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed vel,
        accusantium nisi eius fuga officia consectetur vero. Velit nam fugiat
        ullam consectetur quam sequi maxime enim est, laudantium tempora!
      </p>
    </div>
  );
};

export default Home;
