"use client";

import { useState } from "react";
import { PACKAGES, ROOMS, seatsWord } from "@/data/content";
import { tenge } from "@/lib/format";
import { waRoom } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { Smoke } from "./Smoke";
import styles from "./Rooms.module.css";

export function Rooms() {
  const [roomId, setRoomId] = useState(ROOMS[0].id);
  const room = ROOMS.find((r) => r.id === roomId) ?? ROOMS[0];

  const perHour = room.prices.map((p, i) => p / PACKAGES[i].hours);
  const best = Math.min(...perHour);

  return (
    <section id="rooms" className={`${styles.section} sec`} aria-labelledby="rooms-title">
      <Smoke
        puffs={[
          { width: 600, height: 600, right: -260, top: 120, background: "#8A0E19", opacity: 0.4 },
          { width: 520, height: 520, left: -260, bottom: 0, background: "#B3121F", opacity: 0.35, animationDelay: "-8s" },
        ]}
      />
      <div className="wrap" style={{ position: "relative" }}>
        <div className={`${styles.head} reveal`}>
          <div className={styles.headText}>
            <span className="kicker">01 / ЗАЛЫ И ЦЕНЫ</span>
            <h2 id="rooms-title" className={`${styles.h2} h2 glow`}>
              ВЫБЕРИ ЗАЛ
            </h2>
          </div>
          <p className={styles.headLead}>
            <span className={styles.leadLong}>
              Нажми на зал — увидишь все тарифы и сможешь сразу забронировать его в WhatsApp.
            </span>
            <span className={styles.leadShort}>Листай залы и нажми на нужный — увидишь тарифы.</span>
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.list} role="group" aria-label="Залы">
            {ROOMS.map((r) => (
              <button
                key={r.id}
                type="button"
                className={styles.btn}
                aria-pressed={r.id === room.id}
                onClick={() => setRoomId(r.id)}
              >
                <span className={styles.btnText}>
                  <span className={styles.btnName}>
                    {r.name}
                    {r.kind === "ZONE" ? " ZONE" : ""}
                  </span>
                  <span className={styles.btnSeats}>
                    {r.seats} {seatsWord(r.seats)}
                  </span>
                </span>
                <span className={styles.btnFrom}>от {tenge(r.prices[0])}</span>
              </button>
            ))}
          </div>

          <div key={room.id} className={`${styles.panel} panel swap`} aria-live="polite">
            <div className={styles.panelHead}>
              <div className={styles.nameBox}>
                <h3 className={`${styles.name} glow`}>{room.name}</h3>
                <span className={styles.kind}>{room.kind}</span>
              </div>
              <div className={styles.seats} aria-label={`${room.seats} ${seatsWord(room.seats)}`}>
                {Array.from({ length: room.seats }, (_, i) => (
                  <span key={i} className={styles.seat} aria-hidden="true" />
                ))}
                <span className={`${styles.seatsLabel} glow`} aria-hidden="true">
                  {room.seats} {seatsWord(room.seats).toUpperCase()}
                </span>
              </div>
            </div>

            <div className={styles.rows}>
              {PACKAGES.map((pk, i) => {
                const isBest = i > 0 && perHour[i] === best;
                return (
                  <div key={pk.name} className={`${styles.row} prow dash`}>
                    <div className={styles.rowL}>
                      <span className={styles.rowName}>{pk.name}</span>
                      <span className={styles.rowNote}>{pk.note}</span>
                    </div>
                    <div className={styles.rowR}>
                      <span className={`${styles.price} glow`}>{tenge(room.prices[i])}</span>
                      <span className={`${styles.per} ${isBest ? styles.best : ""}`}>
                        {i === 0 ? "за час" : `${isBest ? "выгоднее всего · " : ""}≈ ${tenge(perHour[i])}/ч`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.cta}>
              <div className={styles.ctaWrap}>
                <span className="ring-p" aria-hidden="true" />
                <a className={`${styles.book} wa`} href={waRoom(room)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className={styles.bookIcon} />
                  ЗАБРОНИРОВАТЬ {room.name}
                </a>
              </div>
              <span className={styles.hint}>Откроется WhatsApp с готовым сообщением — останется указать время.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
