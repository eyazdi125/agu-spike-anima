import React from "react";
import { Button } from "../../components/Button";
import { IconsAccessTime24Px1 } from "../../icons/IconsAccessTime24Px1";

export const Screen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[1440px] h-[900px] items-center justify-center px-0 py-[320px] relative bg-[color:var(--syslightsurface-container-low)]">
      <div className="flex flex-col items-center gap-[35px] px-[16px] py-[24px] relative self-stretch w-full flex-[0_0_auto] mt-[-21.00px] mb-[-21.00px]">
        <div className="flex flex-col items-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:var(--display-medium-font-family)] font-[number:var(--display-medium-font-weight)] text-black text-[length:var(--display-medium-font-size)] text-center tracking-[var(--display-medium-letter-spacing)] leading-[var(--display-medium-line-height)] ">
            Can you tell us about yourself?
          </p>
          <p className="relative self-stretch [font-family:'Inter',_Helvetica] font-normal text-black text-[24px] text-center tracking-[0] leading-[32px]">
            This will help us customize your learning plan
          </p>
        </div>
        <Button
          border
          className="!flex-[0_0_auto] !bg-[color:var(--syslightprimary)]"
          icon="none"
          shape="rounded"
          size="large"
          style="contained"
          text="show"
          text1="I’d love to"
        />
        <div className="flex items-center justify-center gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
          <IconsAccessTime24Px1 className="!relative !w-[24px] !h-[24px]" />
          <div className="relative w-fit [font-family:var(--label-large-font-family)] font-[number:var(--label-large-font-weight)] text-[color:var(--black)] text-[length:var(--label-large-font-size)] text-center tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] whitespace-nowrap ">
            Takes 3 minutes
          </div>
        </div>
      </div>
    </div>
  );
};
