import { useI18n } from "@solid-primitives/i18n";

export default function Title() {
  const [t] = useI18n();
  return (
    <h1 data-testid="title" class="text-3xl">
      {t("title")}
    </h1>
  );
}
