import { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center justify-center font-sans dark:bg-black">
      {props.children}
    </div>
  );
};
