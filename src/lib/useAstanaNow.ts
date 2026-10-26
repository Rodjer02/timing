"use client";

import { useSyncExternalStore } from "react";

/** Астана — UTC+5. */
const OFFSET_MS = 5 * 3600 * 1000;

let now = 0;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | null = null;

function subscribe(cb: () => void) {
  listeners.add(cb);
  if (!timer) {
    now = Date.now();
    timer = setInterval(() => {
      now = Date.now();
      listeners.forEach((l) => l());
    }, 1000);
  }
  return () => {
    listeners.delete(cb);
    if (!listeners.size && timer) {
      clearInterval(timer);
      timer = null;
    }
  };
}

export type AstanaTime = { h: number; m: number; s: number };

let cache: { ts: number; value: AstanaTime } | null = null;

function getSnapshot(): AstanaTime | null {
  const ts = Math.floor((now || Date.now()) / 1000);
  if (cache?.ts === ts) return cache.value;
  const t = new Date(ts * 1000 + OFFSET_MS);
  cache = { ts, value: { h: t.getUTCHours(), m: t.getUTCMinutes(), s: t.getUTCSeconds() } };
  return cache.value;
}

/** На сервере — null (время рендерится только на клиенте, без hydration mismatch). */
const getServerSnapshot = (): AstanaTime | null => null;

/** Текущее время Астаны, тикает раз в секунду. */
export function useAstanaNow(): AstanaTime | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
