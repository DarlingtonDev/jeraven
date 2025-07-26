import type { Dispatch, SetStateAction } from "react";

export default function ScrollToView(
  id: string,
  setter?: Dispatch<SetStateAction<boolean>>
) {
  const element: null | HTMLElement = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    if (setter) {
      setter((prev) => !prev);
    }
  }
}
