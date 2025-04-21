"use client";

import { signOutAction } from "@/app/actions/signout";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function SignOutButton() {
  const t = useTranslations("HomePage");
  return (
    <Button
      variant="outline"
      type="button"
      onClick={signOutAction}
    >
      {t("logout")}
    </Button>
  );
}
