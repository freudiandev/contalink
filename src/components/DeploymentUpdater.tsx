"use client";

import { useEffect } from "react";

const CHECK_INTERVAL_MS = 60_000;

export function DeploymentUpdater({
  basePath,
  buildId,
}: {
  basePath: string;
  buildId?: string;
}) {
  useEffect(() => {
    if (!buildId) return;

    let reloading = false;

    const checkForUpdate = async () => {
      if (reloading) return;

      try {
        const response = await fetch(
          `${basePath}/version.json?t=${Date.now()}`,
          { cache: "no-store" },
        );
        if (!response.ok) return;

        const current = (await response.json()) as { buildId?: string };
        if (current.buildId && current.buildId !== buildId) {
          reloading = true;
          window.location.reload();
        }
      } catch {
        // A temporary network failure should not interrupt the visitor.
      }
    };

    const interval = window.setInterval(checkForUpdate, CHECK_INTERVAL_MS);
    const checkWhenVisible = () => {
      if (document.visibilityState === "visible") void checkForUpdate();
    };

    void checkForUpdate();
    window.addEventListener("focus", checkForUpdate);
    document.addEventListener("visibilitychange", checkWhenVisible);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", checkForUpdate);
      document.removeEventListener("visibilitychange", checkWhenVisible);
    };
  }, [basePath, buildId]);

  return null;
}
