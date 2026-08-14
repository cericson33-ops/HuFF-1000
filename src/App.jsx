import React, { useState, useEffect, useMemo } from "react";
import { ChevronRight, ChevronDown, Droplets, Users2, Cone, Dumbbell } from "lucide-react";

const LOGO = "data:image/png;base64,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";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap');
`;

// Giltiga aktiveringskoder. Lägg till/ta bort koder här vid behov.
const VALID_CODES = ["HUFF-ADMIN-9K2X", "HUFF-TRANARE-BPXE"];

// Enkla grafiska diagram som illustrerar övningens uppställning.
// Nyckeln måste matcha övningens namn exakt.
const DIAGRAMS = {
  Tunnelkull: {
    caption: "Kullad spelare står med benen isär. En lagkamrat slår en tunnel (bollen mellan benen) för att befria dem.",
    svg: (
      <svg viewBox="0 0 300 190" className="w-full h-auto">
        <rect x="10" y="10" width="280" height="170" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />
        {/* jagande spelare (röd), med boll */}
        <g>
          <circle cx="70" cy="55" r="9" fill="#C8102E" />
          <circle cx="81" cy="63" r="4" fill="#221A17" />
        </g>
        <g>
          <circle cx="230" cy="140" r="9" fill="#C8102E" />
          <circle cx="241" cy="148" r="4" fill="#221A17" />
        </g>
        {/* fria spelare (mörk), med boll var */}
        <g>
          <circle cx="130" cy="40" r="8" fill="#221A17" />
          <circle cx="140" cy="47" r="4" fill="#7A1620" />
        </g>
        <g>
          <circle cx="250" cy="60" r="8" fill="#221A17" />
          <circle cx="260" cy="67" r="4" fill="#7A1620" />
        </g>
        {/* kullad spelare, står med benen isär (tunnel) */}
        <circle cx="160" cy="105" r="8" fill="#221A17" />
        <path d="M154 112 L146 130 M166 112 L174 130" stroke="#221A17" strokeWidth="3" strokeLinecap="round" />
        {/* lagkamrat med boll som slår tunnel genom benen */}
        <g>
          <circle cx="70" cy="150" r="8" fill="#221A17" />
          <circle cx="81" cy="157" r="4" fill="#7A1620" />
        </g>
        <path d="M85 155 Q120 150 155 122" fill="none" stroke="#7A1620" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#7A1620" />
          </marker>
        </defs>
      </svg>
    ),
  },
  Stoppljus: {
    caption: "Alla driver boll fritt i ytan. Frys på RÖTT, kör vidare på GRÖNT.",
    svg: (
      <svg viewBox="0 0 300 190" className="w-full h-auto">
        <rect x="10" y="10" width="280" height="170" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />
        {/* spelare med boll */}
        {[[60,50],[110,120],[170,50],[230,110],[90,150],[250,60]].map(([x,y],idx)=>(
          <g key={idx}>
            <circle cx={x} cy={y} r="8" fill="#221A17" />
            <circle cx={x+11} cy={y+8} r="4" fill="#7A1620" />
          </g>
        ))}
        {/* signal-ikon */}
        <rect x="255" y="20" width="20" height="42" rx="5" fill="#fff" stroke="#221A17" strokeWidth="2" />
        <circle cx="265" cy="30" r="5" fill="#C8102E" />
        <circle cx="265" cy="52" r="5" fill="#4C9A5A" />
      </svg>
    ),
  },
  Svansleken: {
    caption: "Varje spelare har boll och en \u2018svans\u2019 (band i shortsen). Skydda din egen — samla andras.",
    svg: (
      <svg viewBox="0 0 300 190" className="w-full h-auto">
        <rect x="10" y="10" width="280" height="170" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />
        {[[70,60],[150,45],[230,70],[100,140],[200,130]].map(([x,y],idx)=>(
          <g key={idx}>
            <circle cx={x} cy={y} r="9" fill={idx===2 ? "#C8102E" : "#221A17"} />
            <rect x={x-3} y={y+9} width="6" height="16" rx="2" fill="#F5A05A" />
            <circle cx={x+12} cy={y+9} r="4" fill="#7A1620" />
          </g>
        ))}
        {/* pil - jagar en svans */}
        <path d="M230 70 q-20 20 -50 55" fill="none" stroke="#7A1620" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow2)" />
        <defs>
          <marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#7A1620" />
          </marker>
        </defs>
      </svg>
    ),
  },
  Poängjakten: {
    caption: "Alla driver boll fritt i ytan och samlar poäng genom att driva bollen genom konade portar.",
    svg: (
      <svg viewBox="0 0 300 190" className="w-full h-auto">
        <rect x="10" y="10" width="280" height="170" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />
        {/* portar (koner i par) */}
        {[
          { x: 90, y: 50, rot: 0 },
          { x: 210, y: 90, rot: 30 },
          { x: 120, y: 145, rot: -20 },
        ].map((g, gi) => (
          <g key={gi} transform={`translate(${g.x} ${g.y}) rotate(${g.rot})`}>
            <path d="M-16 0 l6 -12 l6 12 z" fill="#F5A05A" />
            <path d="M16 0 l-6 -12 l-6 12 z" fill="#F5A05A" />
          </g>
        ))}
        {/* spelare med boll */}
        {[[55,90],[150,40],[250,50],[60,150],[190,150],[250,130]].map(([x,y],idx)=>(
          <g key={idx}>
            <circle cx={x} cy={y} r="8" fill="#221A17" />
            <circle cx={x+11} cy={y+7} r="4" fill="#7A1620" />
          </g>
        ))}
        {/* pil genom en port */}
        <path d="M60 90 Q75 65 90 50" fill="none" stroke="#7A1620" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow3)" />
        <defs>
          <marker id="arrow3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#7A1620" />
          </marker>
        </defs>
      </svg>
    ),
  },
  Djurgården: {
    caption: "Spelarna driver in mot central kon och utför olika finter/dribblingar och går antigen till höger eller vänster, där lämnar man över boll till nästa spelare i ledet.",
    svg: (
      <svg viewBox="0 0 280 300" className="w-full h-auto">
        {/* träningsyta */}
        <rect x="15" y="15" width="250" height="270" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />

        {/* central kona, mitt i triangeln */}
        <path d="M140 155 l8 -15 l8 15 z" fill="#C8102E" />

        {/* topp-station: kona + spelarled */}
        <path d="M140 55 l8 -15 l8 15 z" fill="#C8102E" />
        <circle cx="140" cy="40" r="7" fill="#221A17" />
        <circle cx="140" cy="24" r="7" fill="#221A17" />
        <circle cx="147" cy="47" r="4.5" fill="#fff" stroke="#221A17" strokeWidth="1.5" />

        {/* vänster station: kona + spelarled */}
        <path d="M55 220 l8 -15 l8 15 z" fill="#C8102E" />
        <circle cx="38" cy="240" r="7" fill="#221A17" />
        <circle cx="20" cy="255" r="7" fill="#221A17" />
        <circle cx="45" cy="232" r="4.5" fill="#fff" stroke="#221A17" strokeWidth="1.5" />

        {/* höger station: kona + spelarled */}
        <path d="M225 220 l8 -15 l8 15 z" fill="#C8102E" />
        <circle cx="242" cy="240" r="7" fill="#221A17" />
        <circle cx="260" cy="255" r="7" fill="#221A17" />
        <circle cx="235" cy="232" r="4.5" fill="#fff" stroke="#221A17" strokeWidth="1.5" />
      </svg>
    ),
  },
  "1v1": {
    caption: "Anfallare möter försvarare på ca 10 meter. Anfallaren väljer en av de två portarna att driva igenom. Börja utan boll, bygg på med boll.",
    svg: (
      <svg viewBox="0 0 220 260" className="w-full h-auto">
        <rect x="10" y="10" width="200" height="240" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />

        {/* startkoner uppe (försvarare) och nere (anfallare) */}
        <path d="M110 30 l7 -14 l7 14 z" fill="#F5A05A" />
        <path d="M110 230 l7 14 l7 -14 z" fill="#F5A05A" />

        {/* försvarare (röd), upptill */}
        <circle cx="117" cy="40" r="9" fill="#C8102E" />

        {/* anfallare (mörk) med boll ovanför spelaren */}
        <circle cx="117" cy="220" r="9" fill="#221A17" />
        <circle cx="117" cy="203" r="4" fill="#7A1620" />

        {/* två portar i mitten, vänster och höger om anfallarens linje */}
        <g transform="translate(70 130)">
          <path d="M-20 -12 l6 -10 l6 10 z" fill="#F5A05A" />
          <path d="M20 -12 l-6 -10 l-6 10 z" fill="#F5A05A" />
        </g>
        <g transform="translate(160 130)">
          <path d="M-20 -12 l6 -10 l6 10 z" fill="#F5A05A" />
          <path d="M20 -12 l-6 -10 l-6 10 z" fill="#F5A05A" />
        </g>
      </svg>
    ),
  },
  Reaktionskull: {
    caption: "Alla driver egen boll fritt. På signal lämnas den egna bollen genast — närmaste spelare rusar för att erövra en grannes boll innan de hinner reagera.",
    svg: (
      <svg viewBox="0 0 300 190" className="w-full h-auto">
        <rect x="10" y="10" width="280" height="170" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />

        {/* signal/visselpipa i hörnet */}
        <g transform="translate(255 30)">
          <circle cx="0" cy="0" r="12" fill="none" stroke="#7A1620" strokeWidth="2" />
          <circle cx="0" cy="0" r="3" fill="#7A1620" />
          <path d="M10 0 L20 0" stroke="#7A1620" strokeWidth="2" />
        </g>

        {/* spelare i lugnt läge, egen boll var */}
        <g>
          <circle cx="60" cy="60" r="8" fill="#221A17" />
          <circle cx="71" cy="67" r="4" fill="#7A1620" />
        </g>
        <g>
          <circle cx="150" cy="45" r="8" fill="#221A17" />
          <circle cx="161" cy="52" r="4" fill="#7A1620" />
        </g>
        <g>
          <circle cx="90" cy="150" r="8" fill="#221A17" />
          <circle cx="101" cy="157" r="4" fill="#7A1620" />
        </g>

        {/* spelaren som lämnar sin boll (övergiven boll, streckad) och rusar mot grannens */}
        <circle cx="200" cy="140" r="4" fill="none" stroke="#8C8177" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="200" cy="123" r="8" fill="#221A17" />
        <path d="M195 130 Q170 100 155 55" fill="none" stroke="#7A1620" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowReak)" />

        <defs>
          <marker id="arrowReak" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#7A1620" />
          </marker>
        </defs>
      </svg>
    ),
  },
  "Byta yta": {
    caption: "Spelarna delas i två ytor och kör kull eller egna bollövningar. På tränarens signal byter alla yta med varandra, snabbt och samtidigt.",
    svg: (
      <svg viewBox="0 0 300 190" className="w-full h-auto">
        {/* två ytor sida vid sida */}
        <rect x="10" y="10" width="128" height="170" rx="12" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />
        <rect x="162" y="10" width="128" height="170" rx="12" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />

        {/* signal/visselpipa mitt emellan ytorna */}
        <g transform="translate(150 30)">
          <circle cx="0" cy="0" r="11" fill="none" stroke="#7A1620" strokeWidth="2" />
          <circle cx="0" cy="0" r="3" fill="#7A1620" />
        </g>

        {/* spelare i vänster yta, egen boll var */}
        <g>
          <circle cx="45" cy="70" r="8" fill="#221A17" />
          <circle cx="56" cy="77" r="4" fill="#7A1620" />
        </g>
        <g>
          <circle cx="90" cy="55" r="8" fill="#221A17" />
          <circle cx="101" cy="62" r="4" fill="#7A1620" />
        </g>
        <g>
          <circle cx="60" cy="145" r="8" fill="#221A17" />
          <circle cx="71" cy="152" r="4" fill="#7A1620" />
        </g>

        {/* spelare i höger yta, egen boll var */}
        <g>
          <circle cx="255" cy="65" r="8" fill="#C8102E" />
          <circle cx="266" cy="72" r="4" fill="#221A17" />
        </g>
        <g>
          <circle cx="210" cy="90" r="8" fill="#C8102E" />
          <circle cx="221" cy="97" r="4" fill="#221A17" />
        </g>
        <g>
          <circle cx="240" cy="150" r="8" fill="#C8102E" />
          <circle cx="251" cy="157" r="4" fill="#221A17" />
        </g>

        {/* pilar som visar bytet mellan ytorna */}
        <path d="M100 110 Q150 100 200 110" fill="none" stroke="#7A1620" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowByta)" />
        <path d="M200 130 Q150 140 100 130" fill="none" stroke="#7A1620" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowByta)" />

        <defs>
          <marker id="arrowByta" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#7A1620" />
          </marker>
        </defs>
      </svg>
    ),
  },
  Fotbollshjärnan: {
    caption: (
      <>
        Alla driver runt varsin boll i ytan. Barnen får hjälpa till att ta fram två roliga ord som ska fungera som kommando. Tex ord 1 = vända med bollen, ord 2 = stanna med sula på bollen.
        <br />
        <br />
        När som helst under övningen kan en ledare ropa en färg. Då ska barnen driva bollen ut till den väst vars färg ropas ut och sen tillbaka in i ytan. Då blir det ett naturligt break där man till exempel kan göra en koordinationsövning.
      </>
    ),
    svg: (
      <svg viewBox="0 0 320 240" className="w-full h-auto">
        {/* yta, större */}
        <rect x="25" y="25" width="270" height="160" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />

        {/* spelare i ytan, egen boll var (6 st) */}
        <g><circle cx="90" cy="65" r="8" fill="#221A17" /><circle cx="101" cy="72" r="4" fill="#7A1620" /></g>
        <g><circle cx="175" cy="55" r="8" fill="#221A17" /><circle cx="186" cy="62" r="4" fill="#7A1620" /></g>
        <g><circle cx="250" cy="70" r="8" fill="#221A17" /><circle cx="261" cy="77" r="4" fill="#7A1620" /></g>
        <g><circle cx="75" cy="150" r="8" fill="#221A17" /><circle cx="86" cy="157" r="4" fill="#7A1620" /></g>
        <g><circle cx="160" cy="160" r="8" fill="#221A17" /><circle cx="171" cy="167" r="4" fill="#7A1620" /></g>
        <g><circle cx="235" cy="145" r="8" fill="#221A17" /><circle cx="246" cy="152" r="4" fill="#7A1620" /></g>

        {/* västar utanför ytan, ca 1m ut, 3 färger med dubbletter */}
        <g transform="translate(70 10)"><rect x="-8" y="-9" width="16" height="18" rx="3" fill="#C8102E" /><path d="M-4 -9 L0 -3 L4 -9 Z" fill="#FBF8F1" /></g>
        <g transform="translate(245 202)"><rect x="-8" y="-9" width="16" height="18" rx="3" fill="#C8102E" /><path d="M-4 -9 L0 -3 L4 -9 Z" fill="#FBF8F1" /></g>

        <g transform="translate(10 95)"><rect x="-8" y="-9" width="16" height="18" rx="3" fill="#E8899E" /><path d="M-4 -9 L0 -3 L4 -9 Z" fill="#FBF8F1" /></g>
        <g transform="translate(310 135)"><rect x="-8" y="-9" width="16" height="18" rx="3" fill="#E8899E" /><path d="M-4 -9 L0 -3 L4 -9 Z" fill="#FBF8F1" /></g>

        <g transform="translate(245 10)"><rect x="-8" y="-9" width="16" height="18" rx="3" fill="#4C7EA8" /><path d="M-4 -9 L0 -3 L4 -9 Z" fill="#FBF8F1" /></g>
        <g transform="translate(90 202)"><rect x="-8" y="-9" width="16" height="18" rx="3" fill="#4C7EA8" /><path d="M-4 -9 L0 -3 L4 -9 Z" fill="#FBF8F1" /></g>

        {/* pilar: ut till röd väst och tillbaka in i ytan */}
        <path d="M90 58 Q80 32 70 18" fill="none" stroke="#7A1620" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowHjarna)" />
        <path d="M70 18 Q60 40 78 58" fill="none" stroke="#7A1620" strokeWidth="1.5" strokeDasharray="2 3" markerEnd="url(#arrowHjarna)" />

        <path d="M235 152 Q242 178 245 195" fill="none" stroke="#7A1620" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowHjarna)" />
        <path d="M245 195 Q225 175 220 155" fill="none" stroke="#7A1620" strokeWidth="1.5" strokeDasharray="2 3" markerEnd="url(#arrowHjarna)" />

        <defs>
          <marker id="arrowHjarna" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#7A1620" />
          </marker>
        </defs>
      </svg>
    ),
  },
  "Fri yta": {
    caption: "Spelarna driver fritt i ytan och testar olika finter, dribblingar och vändningar.",
    svg: <DribbleAreaDiagram />,
  },
  Kvadraten: {
    caption: "Fyra spelare i en kvadrat passar bollen mellan sig, en spelare jagar i mitten. Ledaren kan stå i mitten och agera passivt för att göra det enklare.",
    svg: (
      <svg viewBox="0 0 260 260" className="w-full h-auto">
        <rect x="15" y="15" width="230" height="230" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />

        {/* kvadraten koner + spelare står på */}
        <rect x="55" y="55" width="150" height="150" fill="none" stroke="#D8CFBB" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* fyra koner i hörnen */}
        <path d="M55 45 l8 15 l-16 0 z" fill="#F5A05A" />
        <path d="M205 45 l8 15 l-16 0 z" fill="#F5A05A" />
        <path d="M205 205 l8 15 l-16 0 z" fill="#F5A05A" />
        <path d="M55 205 l8 15 l-16 0 z" fill="#F5A05A" />

        {/* fyra spelare mitt emellan konerna, på varje sida */}
        <circle cx="130" cy="55" r="9" fill="#221A17" />
        <circle cx="205" cy="130" r="9" fill="#221A17" />
        <circle cx="130" cy="205" r="9" fill="#221A17" />
        <circle cx="55" cy="130" r="9" fill="#221A17" />

        {/* boll hos en av spelarna */}
        <circle cx="141" cy="44" r="4.5" fill="#7A1620" />

        {/* jagare/ledare i mitten */}
        <circle cx="130" cy="130" r="9" fill="#C8102E" />
      </svg>
    ),
  },
  "Kvadraten (4v1 & 3v1)": {
    caption: "Två varianter sida vid sida: kvadrat med 4 mot 1, och kvadrat med 3 mot 1 (en sida utan spelare). Samma princip, färre passningsalternativ.",
    svg: (
      <svg viewBox="0 0 540 260" className="w-full h-auto">
        {/* vänster panel: 4 mot 1 i kvadrat */}
        <g>
          <rect x="15" y="15" width="230" height="230" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />
          <rect x="55" y="55" width="150" height="150" fill="none" stroke="#D8CFBB" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M55 45 l8 15 l-16 0 z" fill="#F5A05A" />
          <path d="M205 45 l8 15 l-16 0 z" fill="#F5A05A" />
          <path d="M205 205 l8 15 l-16 0 z" fill="#F5A05A" />
          <path d="M55 205 l8 15 l-16 0 z" fill="#F5A05A" />
          <circle cx="130" cy="55" r="9" fill="#221A17" />
          <circle cx="205" cy="130" r="9" fill="#221A17" />
          <circle cx="130" cy="205" r="9" fill="#221A17" />
          <circle cx="55" cy="130" r="9" fill="#221A17" />
          <circle cx="141" cy="44" r="4.5" fill="#7A1620" />
          <circle cx="130" cy="130" r="9" fill="#C8102E" />
          <text x="130" y="250" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="13" fontWeight="700" fill="#7A1620">
            4 MOT 1
          </text>
        </g>

        {/* höger panel: 3 mot 1 i kvadrat, en sida utan spelare */}
        <g transform="translate(295 0)">
          <rect x="15" y="15" width="230" height="230" rx="14" fill="none" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />
          <rect x="55" y="55" width="150" height="150" fill="none" stroke="#D8CFBB" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M55 45 l8 15 l-16 0 z" fill="#F5A05A" />
          <path d="M205 45 l8 15 l-16 0 z" fill="#F5A05A" />
          <path d="M205 205 l8 15 l-16 0 z" fill="#F5A05A" />
          <path d="M55 205 l8 15 l-16 0 z" fill="#F5A05A" />
          <circle cx="130" cy="55" r="9" fill="#221A17" />
          <circle cx="205" cy="130" r="9" fill="#221A17" />
          <circle cx="55" cy="130" r="9" fill="#221A17" />
          <circle cx="141" cy="44" r="4.5" fill="#7A1620" />
          <circle cx="130" cy="130" r="9" fill="#C8102E" />
          <text x="130" y="250" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="13" fontWeight="700" fill="#7A1620">
            3 MOT 1
          </text>
        </g>
      </svg>
    ),
  },
};

// Ritar N mini-spelplaner sida vid sida med angivet format (t.ex. "3v3").
function PitchDiagram({ count, format, configs }) {
  const pitchW = 150;
  const pitchH = 100;
  const gap = 14;

  // Om configs skickas in används de (t.ex. olika antal mål per plan).
  // Annars byggs en enhetlig lista utifrån count/format.
  const pitches = configs || Array.from({ length: count }, () => ({ format, goalsPerSide: 1 }));

  const renderGoals = (offsetX, side, goalsPerSide) => {
    const goalH = 18;
    const spacing = pitchH / (goalsPerSide + 1);
    return Array.from({ length: goalsPerSide }, (_, gi) => {
      const y = spacing * (gi + 1) - goalH / 2;
      const x = side === "left" ? offsetX - 3 : offsetX + pitchW - 3;
      return <rect key={side + gi} x={x} y={y} width="6" height={goalH} fill="#7A1620" rx="1" />;
    });
  };

  const renderPitch = (offsetX, config, idx) => {
    const perTeam = parseInt((config.format.match(/\d+/g) || [3])[0], 10);
    const goalsPerSide = config.goalsPerSide || 1;
    const darkPositions = Array.from({ length: perTeam }, (_, k) => ({
      x: offsetX + 20 + (k % 2) * 14,
      y: 20 + k * ((pitchH - 40) / Math.max(perTeam - 1, 1)),
    }));
    const redPositions = Array.from({ length: perTeam }, (_, k) => ({
      x: offsetX + pitchW - 20 - (k % 2) * 14,
      y: 20 + k * ((pitchH - 40) / Math.max(perTeam - 1, 1)),
    }));
    return (
      <g key={idx}>
        <rect
          x={offsetX}
          y={0}
          width={pitchW}
          height={pitchH}
          rx="8"
          fill="#EFE9DA"
          stroke="#C9BFA9"
          strokeWidth="2"
        />
        {/* mittlinje */}
        <line x1={offsetX + pitchW / 2} y1={4} x2={offsetX + pitchW / 2} y2={pitchH - 4} stroke="#C9BFA9" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* mål */}
        {renderGoals(offsetX, "left", goalsPerSide)}
        {renderGoals(offsetX, "right", goalsPerSide)}
        {darkPositions.map((p, i) => (
          <circle key={"d" + i} cx={p.x} cy={p.y} r="6.5" fill="#221A17" />
        ))}
        {redPositions.map((p, i) => (
          <circle key={"r" + i} cx={p.x} cy={p.y} r="6.5" fill="#C8102E" />
        ))}
      </g>
    );
  };

  const totalW = pitches.length * pitchW + (pitches.length - 1) * gap;

  return (
    <svg viewBox={`0 0 ${totalW} ${pitchH}`} className="w-full h-auto">
      {pitches.map((cfg, i) => renderPitch(i * (pitchW + gap), cfg, i))}
    </svg>
  );
}

// Visar en yta där spelare driver runt med varsin boll, med pilar som antyder rörelse.
function DribbleAreaDiagram() {
  const players = [
    { x: 55, y: 45, angle: 20 },
    { x: 140, y: 30, angle: -35 },
    { x: 220, y: 55, angle: 60 },
    { x: 90, y: 110, angle: -60 },
    { x: 180, y: 130, angle: 15 },
    { x: 250, y: 105, angle: -20 },
  ];

  return (
    <svg viewBox="0 0 300 170" className="w-full h-auto">
      <rect x="8" y="8" width="284" height="154" rx="14" fill="#EFE9DA" stroke="#C9BFA9" strokeWidth="2" strokeDasharray="6 6" />
      {players.map((p, i) => {
        const rad = (p.angle * Math.PI) / 180;
        const ax = p.x + Math.cos(rad) * 22;
        const ay = p.y + Math.sin(rad) * 22;
        return (
          <g key={i}>
            <path
              d={`M${p.x} ${p.y} L${ax} ${ay}`}
              stroke="#7A1620"
              strokeWidth="2"
              strokeDasharray="3 3"
              markerEnd="url(#dribArrow)"
            />
            <circle cx={p.x} cy={p.y} r="8" fill="#221A17" />
            <circle
              cx={p.x + Math.cos(rad) * 13}
              cy={p.y + Math.sin(rad) * 13}
              r="4"
              fill="#C8102E"
            />
          </g>
        );
      })}
      <defs>
        <marker id="dribArrow" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 z" fill="#7A1620" />
        </marker>
      </defs>
    </svg>
  );
}

const AGE_GROUPS = [
  {
    id: "6-7",
    label: "6–7 år",
    totalTime: "45–55 min",
    blocks: [
      {
        title: "Bolluppvärmning",
        time: "10 min",
        points: [
          "Varje spelare egen boll.",
          "Lekar med boll. Kull, Svansleken, Stoppljus etc.",
          "Blanda in enklare koordination i denna del.",
        ],
        exercises: [
          "Tunnelkull",
          "Stoppljus",
          "Svansleken",
          "Poängjakten",
          "Reaktionskull",
          "Byta yta",
          "Fotbollshjärnan",
        ],
      },
      {
        title: "Fritt smålagsspel",
        time: "15 min",
        points: [
          "2v2 eller 3v3 på flera småmål/koner, flera planer parallellt.",
          "3–4 min matcher, rotera motstånd.",
          "Ingen instruktion under spelet — låt dem prova och göra fel.",
        ],
        pitchLayout: {
          configs: [
            { format: "3v3", goalsPerSide: 1 },
            { format: "3v3", goalsPerSide: 2 },
          ],
        },
      },
      {
        title: "Tekniskt block",
        time: "8 min",
        points: [
          "Egen boll och ett tekniskt fokus, t.ex. driva bollen med fel fot, driva boll snabbt och stanna på signal.",
          "Kombinera med en lek, tex kull.",
        ],
        dribbleArea: true,
      },
      {
        title: "Fritt eller tematiskt smålagsspel",
        time: "15 min",
        points: ["Spela 2v2 eller 3v3."],
        themed: true,
        pitchLayout: { count: 2, format: "3v3" },
      },
    ],
    equipment: ["1 boll/spelare (str 3)", "Koner & minimål", "Västar i 2–4 färger"],
    rules: [
      "Egen boll så mycket som möjligt.",
      "Minimalt med kö.",
      "Förbered ytan väl så du inte behöver kona om.",
      "Vattenzon, 1 minut vattenpaus.",
      "Starta och avsluta alltid med samling.",
    ],
  },
  {
    id: "8-9",
    label: "8–9 år",
    totalTime: "55–65 min",
    blocks: [
      {
        title: "Bolluppvärmning",
        time: "12 min",
        points: [
          "Egen boll. Coerver-inspirerade moment: inner-/utsida, sulrullningar, enkla finter. Kan göras i lekform.",
          "Introducera kognitiva moment. Scanna, reagera på färger, kommandon etc.",
          "Blanda in koordination i denna del.",
        ],
        dribbleArea: true,
        altExercises: ["Fotbollshjärnan"],
      },
      {
        title: "Fritt smålagsspel",
        time: "15 min",
        points: [
          "2v2, 3v3/4v4 på flera mindre planer, roterande motståndare.",
          "Korta matcher om 3–4 minuter i taget håller intensiteten uppe.",
          "Minimal instruktion — låt spelarna lösa situationerna själva.",
        ],
        pitchLayout: {
          configs: [
            { format: "3v3", goalsPerSide: 1 },
            { format: "3v3", goalsPerSide: 2 },
          ],
        },
      },
      {
        title: "Tekniskt block",
        time: "15 min",
        points: [
          "Teknisk övning som gärna är kopplad till träningens tema.",
          "Max 3–4 spelare per boll, ingen kö längre än 2–3.",
          "Börja introducera 1v1, först utan boll sedan bygga vidare med boll.",
        ],
        exercises: ["Fri yta", "Djurgården", "1v1", "Kvadraten"],
      },
      {
        title: "Tematiskt smålagsspel",
        time: "15–18 min",
        points: [
          "3v3/4v4 med tydlig begränsning kopplad till temat.",
          "Avsluta gärna öppet sista minuterna.",
        ],
        themed: true,
        pitchLayout: {
          configs: [
            { format: "3v3", goalsPerSide: 1 },
            { format: "3v3", goalsPerSide: 2 },
          ],
        },
      },
    ],
    equipment: ["1 boll/spelare (str 3)", "Småmål & mål inom spelform", "Koner för zoner/mål", "Västar i 2–4 färger"],
    rules: [
      "Hellre fler 3v3 än få 4v4/5v5.",
      "Max 3–4 spelare per boll i teknikövning.",
      "Förbered ytan väl.",
      "Vattenzon, 1 min vattenpaus.",
      "Starta och avsluta alltid med samling.",
    ],
  },
  {
    id: "10",
    label: "10 år",
    totalTime: "70–75 min",
    blocks: [
      {
        title: "Bolluppvärmning",
        time: "15 min",
        points: [
          "Egen boll per spelare. Bredare rörelsebank: båda fötter, riktningsförändringar, enkla finter.",
          "Fortsätt att baka in kognitiva utmaningar samt koordination.",
        ],
        dribbleArea: true,
        altExercises: ["Fotbollshjärnan"],
      },
      {
        title: "Fritt smålagsspel",
        time: "20 min",
        points: [
          "2v2, 3v3 eller 4v4, flera parallella planer.",
          "Roterande lag/motståndare var 3–4:e minut.",
          "Minimal instruktion — spelförståelse tränas bäst i själva spelet.",
        ],
        pitchLayout: {
          configs: [
            { format: "3v3", goalsPerSide: 1 },
            { format: "3v3", goalsPerSide: 2 },
          ],
        },
      },
      {
        title: "Tekniskt block",
        time: "15 min",
        points: [
          "Teknisk övning som gärna är kopplad till träningens tema.",
          "Max 3–4 spelare per boll/station, ingen kö längre än 2–3.",
        ],
        exercises: ["Fri yta", "Djurgården", "1v1", "Kvadraten (4v1 & 3v1)"],
      },
      {
        title: "Tematiskt smålagsspel",
        time: "20 min",
        points: [
          "3v3–4v4 med tydlig taktisk begränsning kopplad till veckans tema.",
          "Avsluta öppet sista minuterna för att befästa temat.",
        ],
        themed: true,
        pitchLayout: {
          configs: [
            { format: "3v3", goalsPerSide: 1 },
            { format: "3v3", goalsPerSide: 2 },
          ],
        },
      },
    ],
    equipment: ["1 boll/spelare (str 4)", "Småmål & mål inom spelformen", "Koner för zoner/gates", "Västar i 3–4 färger"],
    rules: [
      "Hellre 3v3/4v4 än 5v5+.",
      "Minimalt med kö.",
      "Förbered ytan väl så du inte behöver kona om.",
      "Vattenzon, 1 minut vattenpaus.",
      "Starta och avsluta alltid med samling.",
    ],
  },
];

// Weekly theme bank — universella teman och constraints (källa: Fotbollsteman och constraints v3).
const THEMES = [
  {
    id: "1mot1",
    name: "1 mot 1",
    purpose: "Utmana, dribbla och skydda bollen",
    constraints: [
      {
        text: "Mål efter lyckad dribbling.",
        explanation: "Mål räknas bara om spelaren först dribblat förbi en försvarare.",
      },
      {
        text: "Bonus för lyckad 1 mot 1.",
        explanation: "Extra poäng när en spelare vinner en 1 mot 1-duell, offensivt eller defensivt.",
      },
      {
        text: "Alla rör bollen före mål.",
        explanation: "Målet godkänns bara om samtliga i laget haft en bollberöring under anfallet.",
      },
      {
        text: "Bredare plan.",
        explanation: "Planen görs bredare, vilket ger mer utrymme att dribbla och driva bollen i sidled.",
      },
    ],
  },
  {
    id: "passning",
    name: "Passningsspel",
    purpose: "Passa, ta emot och skapa spelbarhet",
    constraints: [
      {
        text: "Minst tre passningar före mål.",
        explanation: "Laget måste göra minst tre passningar innan ett mål får räknas.",
      },
      {
        text: "Bonus för väggspel.",
        explanation: "Extra poäng när en spelare gör en väggpassning (passar och löper för retur).",
      },
      {
        text: "Passning genom port ger bonus.",
        explanation: "Extra poäng när en passning spelas genom en markerad \u2018port\u2019 av koner.",
      },
      {
        text: "Begränsat antal tillslag.",
        explanation: "Spelarna får bara röra bollen ett visst antal gånger, t.ex. två, innan de måste passa.",
      },
    ],
  },
  {
    id: "scanning",
    name: "Scanning & beslut",
    purpose: "Orientera sig och fatta bättre beslut",
    constraints: [
      {
        text: "Färg styr vilket mål som gäller.",
        explanation: "En visad färg avgör vilket mål som är giltigt, vilket tvingar spelarna att läsa av signalen.",
      },
      {
        text: "Mål byts på signal.",
        explanation: "Vilket mål som gäller ändras plötsligt på en given signal, mitt i spelet.",
      },
      {
        text: "Bonus för spelvändning.",
        explanation: "Extra poäng när laget lyckas växla spelet från ena sidan av planen till den andra.",
      },
      {
        text: "Fyra småmål.",
        explanation: "Fyra mål placeras runt planen, vilket ökar antalet valmöjligheter och kräver ständig avläsning.",
      },
    ],
  },
  {
    id: "forsvarsspel",
    name: "Försvarsspel",
    purpose: "Pressa och vinna tillbaka bollen",
    constraints: [
      {
        text: "Poäng för bollvinst inom fem sekunder.",
        explanation: "Extra poäng om laget vinner tillbaka bollen inom fem sekunder efter en bollförlust.",
      },
      {
        text: "Mål efter bollvinst.",
        explanation: "Ett mål räknas bara om det föregåtts av att laget erövrat bollen.",
      },
      {
        text: "Direkt omstart.",
        explanation: "Spelet startas om direkt utan avbrott, för att hålla tempot uppe och pressa spelarna.",
      },
      {
        text: "Smalare plan.",
        explanation: "Planen görs smalare, vilket ökar tätheten och tvingar fram press och erövringssituationer.",
      },
    ],
  },
  {
    id: "omstallning",
    name: "Omställning",
    purpose: "Utnyttja ögonblicket direkt efter bollvinst eller bollförlust",
    constraints: [
      {
        text: "5-sekundersregeln.",
        explanation: "Efter bollvinst har laget 5 sekunder på sig att avsluta.",
      },
      {
        text: "Vinn tillbaka inom 5 sekunder.",
        explanation: "Efter bolltapp får laget bonuspoäng om de återerövrar bollen inom 5 sekunder.",
      },
      {
        text: "Närmaste spelare pressar direkt.",
        explanation: "Vid bollförlust ska närmaste spelare pressa direkt istället för att organisera om — tvingar fram en omedelbar återerövringsreaktion.",
      },
      {
        text: "Riktning byts direkt.",
        explanation: "När ett lag vinner bollen måste de direkt attackera motsatt riktning/mål.",
      },
    ],
  },
];

// Förenklade teman för 6–7 år: bara begreppsintroduktion i block 4, inga constraints.
const YOUNG_THEMES = [
  {
    id: "anfallsspel",
    name: "Anfallsspel",
    points: ["Försök spela bollen framåt", "Vem i laget är fri?"],
  },
  {
    id: "forsvarsspel",
    name: "Försvarsspel",
    points: ["Stå mellan bollen och målet", "Var snabb tillbaka om vi tappar bollen"],
  },
  {
    id: "omstallning",
    name: "Omställning",
    points: ["Reagera snabbt när bollen byter ägare"],
  },
];

// Extra övningar i block 1 som bara visas när ett visst tema är valt (gäller inte 6–7 år —
// där ligger alla övningar, inklusive Reaktionskull/Byta yta/Fotbollshjärnan, fast utan temakoppling).
const THEME_BLOCK1_EXTRAS = {
  omstallning: ["Reaktionskull", "Byta yta"],
};

// Coachningspunkter per övning i block 3 (8–9 och 10 år bara — inte 6–7 år).
const COACHING_POINTS = {
  "Fri yta": [
    "Beror på vilken typ av fint eller vändning spelaren gör — anpassa coachningen efter momentet.",
  ],
  Djurgården: ["Överdriv rörelsen", "Tempoväxla", "Höj blicken"],
  "1v1": ["Överdriv rörelsen", "Tempoväxla", "Defensivt: ta spelaren först, sedan bollen"],
  Kvadraten: [
    "Bli spelbar för kompisen",
    "Ha nästa passning redo innan du får bollen",
    "Ropa till dig bollen",
  ],
  "Kvadraten (4v1 & 3v1)": [
    "Bli spelbar för kompisen",
    "Ha nästa passning redo innan du får bollen",
    "Ropa till dig bollen",
  ],
};

export default function App() {
  const [ageId, setAgeId] = useState("6-7");
  const [themeId, setThemeId] = useState("anfallsspel");
  const [loaded, setLoaded] = useState(false);
  const [openBlocks, setOpenBlocks] = useState({});
  const [openExercise, setOpenExercise] = useState(null);
  const [constraintsOpen, setConstraintsOpen] = useState(false);

  const [accessGranted, setAccessGranted] = useState(false);
  const [accessChecked, setAccessChecked] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [codeError, setCodeError] = useState(false);

  const normalizeCode = (c) => c.trim().toUpperCase();

  const handleCodeSubmit = () => {
    const cleaned = normalizeCode(codeInput);
    if (VALID_CODES.includes(cleaned)) {
      setAccessGranted(true);
      setCodeError(false);
      try {
        localStorage.setItem("huff1000:access-code", cleaned);
      } catch (e) {
        // ignorera lagringsfel
      }
    } else {
      setCodeError(true);
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("huff1000:access-code");
      if (saved && VALID_CODES.includes(normalizeCode(saved))) {
        setAccessGranted(true);
      }
    } catch (e) {
      // ingen sparad kod ännu
    } finally {
      setAccessChecked(true);
    }
  }, []);

  const toggleBlock = (i) => {
    setOpenBlocks((prev) => ({ ...prev, [i]: !prev[i] }));
    setOpenExercise(null);
    setConstraintsOpen(false);
  };

  const toggleExercise = (key) => {
    setOpenExercise((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("huff1000:last-selection");
      if (saved) {
        const v = JSON.parse(saved);
        if (v.ageId) setAgeId(v.ageId);
        if (v.themeId) setThemeId(v.themeId);
      }
    } catch (e) {
      // ingen sparad val ännu
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem("huff1000:last-selection", JSON.stringify({ ageId, themeId }));
    } catch (e) {
      // lagring otillgänglig, strunta i det
    }
  }, [ageId, themeId, loaded]);

  const age = useMemo(() => AGE_GROUPS.find((a) => a.id === ageId), [ageId]);
  const activeThemes = ageId === "6-7" ? YOUNG_THEMES : THEMES;
  const theme = useMemo(() => activeThemes.find((t) => t.id === themeId), [themeId, ageId]);

  // Om åldern byts till en grupp vars temalista inte innehåller det just nu valda temat,
  // väljs första temat i den nya listan automatiskt.
  useEffect(() => {
    const list = ageId === "6-7" ? YOUNG_THEMES : THEMES;
    if (!list.find((t) => t.id === themeId)) {
      setThemeId(list[0].id);
    }
  }, [ageId]);

  // Väntar på att vi kollat om en giltig kod redan finns sparad, för att undvika en flimrande låsskärm.
  if (!accessChecked) {
    return <div className="min-h-screen w-full" style={{ background: "#F5F1E8" }} />;
  }

  if (!accessGranted) {
    return (
      <div className="min-h-screen w-full flex flex-col" style={{ background: "#F5F1E8" }}>
        <style>{FONTS}</style>
        <div
          className="px-6 text-center"
          style={{
            background: "#7A1620",
            paddingTop: "max(3.5rem, calc(env(safe-area-inset-top) + 2.5rem))",
            paddingBottom: "2.5rem",
          }}
        >
          <div
            className="mx-auto rounded-full flex items-center justify-center"
            style={{
              width: 86,
              height: 86,
              background: "#F5F1E8",
              padding: 7,
              boxShadow: "0 8px 22px rgba(0,0,0,0.32)",
            }}
          >
            <img src={LOGO} alt="Hudiksvalls FF" style={{ width: 72, height: 72, display: "block" }} />
          </div>
          <h1
            className="mt-4"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.8rem", color: "#F5F1E8" }}
          >
            HuFF-1000
          </h1>
          <p className="mt-2 text-sm" style={{ color: "#E8B4A8", lineHeight: 1.5 }}>
            Träningskonceptet för Hudiksvalls FF:s ungdomslag i åldrarna 6–10 år — ange din
            aktiveringskod för att fortsätta
          </p>
        </div>

        <div className="flex-1 flex flex-col px-6 pt-8 pb-8 max-w-md mx-auto w-full">
          <label
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.66rem",
              letterSpacing: "0.07em",
              color: "#8A8272",
              marginBottom: "0.5rem",
              display: "block",
            }}
          >
            AKTIVERINGSKOD
          </label>
          <input
            value={codeInput}
            onChange={(e) => {
              setCodeInput(e.target.value);
              if (codeError) setCodeError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleCodeSubmit()}
            placeholder="HUFF-XXXXXX"
            className="w-full text-center"
            style={{
              padding: "17px 14px",
              borderRadius: 12,
              border: `2px solid ${codeError ? "#C8102E" : "#E4DCC9"}`,
              background: "#fff",
              fontSize: "1.2rem",
              color: "#221A17",
              marginBottom: codeError ? "0.75rem" : "1.1rem",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.12em",
              fontWeight: 700,
            }}
          />
          {codeError && (
            <div
              className="flex items-center gap-2 text-sm"
              style={{
                background: "#FBEDE9",
                border: "1px solid #E8B4A8",
                borderRadius: 10,
                padding: "10px 12px",
                color: "#7A1620",
                marginBottom: "1.1rem",
              }}
            >
              ⚠ Koden stämmer inte. Kontrollera att du skrivit rätt.
            </div>
          )}
          <button
            onClick={handleCodeSubmit}
            className="w-full"
            style={{
              padding: "16px 0",
              borderRadius: 12,
              background: "#7A1620",
              color: "#F5F1E8",
              fontWeight: 700,
              fontSize: "0.96rem",
            }}
          >
            Lås upp
          </button>

          <p
            className="text-center mt-auto pt-8 text-sm"
            style={{ color: "#8A8272", lineHeight: 1.6 }}
          >
            Ingen kod? Fråga din ungdomsansvarige inom HuFF.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full" style={{ background: "#F5F1E8" }}>
      <style>{FONTS}</style>
      <div
        className="mx-auto w-full max-w-md pb-16"
        style={{ fontFamily: "'Inter', sans-serif", color: "#221A17" }}
      >
        {/* Header */}
        <header
          className="px-5 pb-6"
          style={{
            background: "#7A1620",
            paddingTop: "max(2rem, calc(env(safe-area-inset-top) + 0.75rem))",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={LOGO}
                alt="Hudiksvalls FF"
                style={{ width: 44, height: 44, flexShrink: 0 }}
              />
              <h1
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 900,
                  fontSize: "2rem",
                  color: "#F5F1E8",
                  letterSpacing: "-0.01em",
                }}
              >
                HuFF-1000
              </h1>
            </div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#E8B4A8",
                fontSize: "0.7rem",
              }}
            >
              6–10 år
            </span>
          </div>
          <p style={{ color: "#E8B4A8", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            Dagens träning — välj åldersgrupp och veckans tema
          </p>
        </header>

        {/* Age selector */}
        <div className="px-5 -mt-4">
          <div
            className="flex rounded-xl overflow-hidden shadow-md"
            style={{ background: "#fff", border: "1px solid #E4DCC9" }}
          >
            {AGE_GROUPS.map((a) => (
              <button
                key={a.id}
                onClick={() => {
                  const list = a.id === "6-7" ? YOUNG_THEMES : THEMES;
                  setAgeId(a.id);
                  if (!list.find((t) => t.id === themeId)) {
                    setThemeId(list[0].id);
                  }
                }}
                className="flex-1 py-3 text-sm font-semibold transition-colors"
                style={{
                  background: a.id === ageId ? "#7A1620" : "transparent",
                  color: a.id === ageId ? "#F5F1E8" : "#7A1620",
                }}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Theme selector */}
        <div className="px-5 mt-5">
          <label
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              color: "#8C8177",
              letterSpacing: "0.06em",
            }}
          >
            VECKANS TEMA
          </label>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {activeThemes.map((t) => (
              <button
                key={t.id}
                onClick={() => setThemeId(t.id)}
                className="whitespace-nowrap px-3.5 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0"
                style={{
                  background: t.id === themeId ? "#C8102E" : "#fff",
                  color: t.id === themeId ? "#fff" : "#221A17",
                  border: t.id === themeId ? "1px solid #C8102E" : "1px solid #E4DCC9",
                }}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        {/* Session summary strip */}
        <div className="px-5 mt-6">
          <div
            className="rounded-2xl px-5 py-4"
            style={{ background: "#221A17" }}
          >
            <div style={{ color: "#B8ADA1", fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace" }}>
              TOTAL TID
            </div>
            <div style={{ color: "#F5F1E8", fontSize: "1.15rem", fontWeight: 700 }}>
              {age.totalTime}
            </div>
          </div>
        </div>

        {/* Blocks */}
        <div className="px-5 mt-6 space-y-4">
          {age.blocks.map((b, i) => {
            const isThemed = b.themed;
            const isOpen = !!openBlocks[i];
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#fff",
                  border: isThemed ? "1.5px solid #C8102E" : "1px solid #E4DCC9",
                }}
              >
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 flex items-center justify-center rounded-full font-bold"
                        style={{
                          width: 28,
                          height: 28,
                          background: "#7A1620",
                          color: "#F5F1E8",
                          fontSize: "0.85rem",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.05rem" }}>
                          {b.title}
                        </h3>
                        {isThemed && (
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.65rem",
                              color: "#C8102E",
                              letterSpacing: "0.05em",
                            }}
                          >
                            TEMA: {theme?.name?.toUpperCase() || ""}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#7A1620" }}>{b.time}</div>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 pl-1">
                    {b.points.map((p, j) => (
                      <li key={j} className="flex gap-2 text-sm" style={{ color: "#3A322D" }}>
                        <ChevronRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#C8102E" }} />
                        <span>{p}</span>
                      </li>
                    ))}
                    {isThemed && ageId === "6-7" && (
                      <>
                        {(theme?.points || []).map((pt, pj) => (
                          <li
                            key={pj}
                            className="flex gap-2 text-sm mt-2 rounded-lg p-2.5"
                            style={{ background: "#FBEDE9", color: "#7A1620" }}
                          >
                            <ChevronRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#C8102E" }} />
                            <span style={{ fontWeight: 500 }}>{pt}</span>
                          </li>
                        ))}
                      </>
                    )}
                    {isThemed && ageId !== "6-7" && (
                      <li
                        className="flex gap-2 text-sm mt-2 rounded-lg p-2.5"
                        style={{ background: "#FBEDE9", color: "#7A1620" }}
                      >
                        <ChevronRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#C8102E" }} />
                        <span style={{ fontWeight: 500 }}>{theme?.purpose}</span>
                      </li>
                    )}
                  </ul>
                </div>

                <button
                  onClick={() => toggleBlock(i)}
                  className="w-full flex items-center justify-between px-4 py-2.5 transition-colors"
                  style={{
                    borderTop: "1px solid #EFE9DA",
                    background: isOpen ? "#FBF8F1" : "transparent",
                  }}
                >
                  <span
                    className="flex items-center gap-1.5"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.68rem",
                      letterSpacing: "0.05em",
                      color: "#7A1620",
                      fontWeight: 600,
                    }}
                  >
                    <Dumbbell size={13} />
                    EXEMPEL PÅ ÖVNINGAR
                  </span>
                  <ChevronDown
                    size={16}
                    style={{
                      color: "#7A1620",
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1" style={{ background: "#FBF8F1" }}>
                    {b.pitchLayout ? (
                      <div className="space-y-2">
                        <div
                          className="rounded-lg p-3"
                          style={{ background: "#fff", border: "1px solid #E4DCC9" }}
                        >
                          <PitchDiagram
                            count={b.pitchLayout.count}
                            format={b.pitchLayout.format}
                            configs={b.pitchLayout.configs}
                          />
                        </div>

                        {isThemed && ageId !== "6-7" && (
                          <div
                            className="rounded-xl overflow-hidden"
                            style={{ background: "#fff", border: "1px solid #E4DCC9" }}
                          >
                            <button
                              onClick={() => setConstraintsOpen((prev) => !prev)}
                              className="w-full flex items-center justify-between px-3 py-2.5"
                            >
                              <span
                                style={{
                                  fontFamily: "'JetBrains Mono', monospace",
                                  fontSize: "0.68rem",
                                  letterSpacing: "0.05em",
                                  color: "#7A1620",
                                  fontWeight: 600,
                                }}
                              >
                                EXEMPEL PÅ REGLER/CONSTRAINTS
                              </span>
                              <ChevronDown
                                size={15}
                                style={{
                                  color: "#7A1620",
                                  transition: "transform 0.2s ease",
                                  transform: constraintsOpen ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                              />
                            </button>
                            {constraintsOpen && (
                              <div className="px-3 pb-3 space-y-1.5">
                                {(theme?.constraints || []).map((c, ci) => {
                                  const cKey = `${themeId}-${ci}`;
                                  const isCOpen = openExercise === `constraint-${cKey}`;
                                  return (
                                    <div
                                      key={ci}
                                      className="rounded-lg overflow-hidden"
                                      style={{ background: "#FBF8F1", border: "1px solid #EFE9DA" }}
                                    >
                                      <button
                                        onClick={() =>
                                          setOpenExercise((prev) =>
                                            prev === `constraint-${cKey}` ? null : `constraint-${cKey}`
                                          )
                                        }
                                        className="w-full flex items-center gap-2 px-2.5 py-2 text-left"
                                      >
                                        <ChevronRight
                                          size={14}
                                          className="flex-shrink-0"
                                          style={{ color: "#C8102E" }}
                                        />
                                        <span className="flex-1 text-sm" style={{ color: "#3A322D" }}>
                                          {c.text}
                                        </span>
                                        <ChevronDown
                                          size={14}
                                          style={{
                                            color: "#8C8177",
                                            flexShrink: 0,
                                            transition: "transform 0.2s ease",
                                            transform: isCOpen ? "rotate(180deg)" : "rotate(0deg)",
                                          }}
                                        />
                                      </button>
                                      {isCOpen && (
                                        <p
                                          className="px-2.5 pb-2.5 text-xs"
                                          style={{ color: "#7A1620", paddingLeft: "2rem" }}
                                        >
                                          {c.explanation}
                                        </p>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : b.dribbleArea ? (
                      <div className="space-y-2">
                        <div
                          className="rounded-lg p-3"
                          style={{ background: "#fff", border: "1px solid #E4DCC9" }}
                        >
                          <DribbleAreaDiagram />
                        </div>

                        {b.altExercises &&
                          b.altExercises.map((ov, k) => {
                            const exKey = `alt-${i}-${k}`;
                            const isExOpen = openExercise === exKey;
                            const diagram = DIAGRAMS[ov];
                            return (
                              <div
                                key={exKey}
                                className="rounded-xl overflow-hidden"
                                style={{ background: "#fff", border: "1px solid #E4DCC9" }}
                              >
                                <button
                                  onClick={() => toggleExercise(exKey)}
                                  className="w-full px-3 py-2.5 flex items-center gap-3 text-left"
                                >
                                  <span
                                    className="flex-1"
                                    style={{ fontSize: "0.88rem", fontWeight: 500, color: "#3A322D" }}
                                  >
                                    {ov}
                                  </span>
                                  <span
                                    style={{
                                      fontFamily: "'JetBrains Mono', monospace",
                                      fontSize: "0.62rem",
                                      color: "#8C8177",
                                      marginRight: 4,
                                    }}
                                  >
                                    ALTERNATIV
                                  </span>
                                  <ChevronDown
                                    size={15}
                                    style={{
                                      color: "#8C8177",
                                      transition: "transform 0.2s ease",
                                      transform: isExOpen ? "rotate(180deg)" : "rotate(0deg)",
                                    }}
                                  />
                                </button>
                                {isExOpen && diagram && (
                                  <div className="px-3 pb-3">
                                    <div
                                      className="rounded-lg p-2"
                                      style={{ background: "#FBF8F1", border: "1px solid #EFE9DA" }}
                                    >
                                      {diagram.svg}
                                      <p
                                        className="mt-1 text-xs text-center"
                                        style={{ color: "#7A1620", padding: "0 0.25rem" }}
                                      >
                                        {diagram.caption}
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    ) : (
                    <div className="space-y-2">
                      {(b.exercises || ["Övning 1", "Övning 2", "Övning 3"]).map((ov, k) => {
                        const exKey = `${i}-${k}`;
                        const isExOpen = openExercise === exKey;
                        const diagram = DIAGRAMS[ov];
                        return (
                          <div
                            key={k}
                            className="rounded-xl overflow-hidden"
                            style={{ background: "#fff", border: "1px solid #E4DCC9" }}
                          >
                            <button
                              onClick={() => toggleExercise(exKey)}
                              className="w-full px-3 py-2.5 flex items-center gap-3 text-left"
                            >
                              <div
                                className="flex-shrink-0 flex items-center justify-center rounded-full"
                                style={{
                                  width: 22,
                                  height: 22,
                                  background: "#EFE9DA",
                                  color: "#7A1620",
                                  fontSize: "0.68rem",
                                  fontFamily: "'JetBrains Mono', monospace",
                                  fontWeight: 700,
                                }}
                              >
                                {k + 1}
                              </div>
                              <span
                                className="flex-1"
                                style={{ fontSize: "0.88rem", fontWeight: 500, color: "#3A322D" }}
                              >
                                {ov}
                              </span>
                              <ChevronDown
                                size={15}
                                style={{
                                  color: "#8C8177",
                                  transition: "transform 0.2s ease",
                                  transform: isExOpen ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                              />
                            </button>

                            {isExOpen && (
                              <div className="px-3 pb-3">
                                {diagram ? (
                                  <div
                                    className="rounded-lg p-2"
                                    style={{ background: "#FBF8F1", border: "1px solid #EFE9DA" }}
                                  >
                                    {diagram.svg}
                                    <p
                                      className="mt-1 text-xs text-center"
                                      style={{ color: "#7A1620", padding: "0 0.25rem" }}
                                    >
                                      {diagram.caption}
                                    </p>
                                  </div>
                                ) : (
                                  <div
                                    className="rounded-lg py-6 text-center text-xs"
                                    style={{
                                      background: "#FBF8F1",
                                      border: "1px dashed #D8CFBB",
                                      color: "#B0A79B",
                                    }}
                                  >
                                    Ingen bild tillagd ännu för den här övningen
                                  </div>
                                )}

                                {ageId !== "6-7" && COACHING_POINTS[ov] && (
                                  <div
                                    className="rounded-lg mt-2 p-2.5"
                                    style={{ background: "#fff", border: "1px solid #EFE9DA" }}
                                  >
                                    <div
                                      style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: "0.62rem",
                                        letterSpacing: "0.05em",
                                        color: "#7A1620",
                                        fontWeight: 700,
                                        marginBottom: "0.4rem",
                                      }}
                                    >
                                      COACHNINGSPUNKTER
                                    </div>
                                    <ul className="space-y-1">
                                      {COACHING_POINTS[ov].map((pt, pi) => (
                                        <li
                                          key={pi}
                                          className="flex gap-2 text-sm"
                                          style={{ color: "#3A322D" }}
                                        >
                                          <ChevronRight
                                            size={14}
                                            className="flex-shrink-0 mt-0.5"
                                            style={{ color: "#C8102E" }}
                                          />
                                          <span>{pt}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    )}

                    {/* Bonusövningar: visas i block 1 för teman som har egna kopplade övningar.
                        Gäller inte 6–7 år — där ligger samma övningar fast, utan temakoppling. */}
                    {i === 0 &&
                      ageId !== "6-7" &&
                      THEME_BLOCK1_EXTRAS[themeId] &&
                      THEME_BLOCK1_EXTRAS[themeId].map((exName, exIdx) => {
                        const bonusKey = `theme-bonus-${i}-${exIdx}`;
                        const isBonusOpen = openExercise === bonusKey;
                        return (
                          <div
                            key={bonusKey}
                            className="rounded-xl overflow-hidden mt-2"
                            style={{ background: "#fff", border: "1.5px solid #C8102E" }}
                          >
                            <button
                              onClick={() => toggleExercise(bonusKey)}
                              className="w-full px-3 py-2.5 flex items-center gap-3 text-left"
                            >
                              <div
                                className="flex-shrink-0 flex items-center justify-center rounded-full"
                                style={{
                                  width: 22,
                                  height: 22,
                                  background: "#FBEDE9",
                                  color: "#C8102E",
                                  fontSize: "0.68rem",
                                  fontFamily: "'JetBrains Mono', monospace",
                                  fontWeight: 700,
                                }}
                              >
                                +
                              </div>
                              <span
                                className="flex-1"
                                style={{ fontSize: "0.88rem", fontWeight: 500, color: "#7A1620" }}
                              >
                                {exName}
                              </span>
                              <span
                                style={{
                                  fontFamily: "'JetBrains Mono', monospace",
                                  fontSize: "0.62rem",
                                  color: "#C8102E",
                                  marginRight: 4,
                                }}
                              >
                                TEMA
                              </span>
                              <ChevronDown
                                size={15}
                                style={{
                                  color: "#8C8177",
                                  transition: "transform 0.2s ease",
                                  transform: isBonusOpen ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                              />
                            </button>
                            {isBonusOpen && (
                              <div className="px-3 pb-3">
                                <div
                                  className="rounded-lg p-2"
                                  style={{ background: "#FBF8F1", border: "1px solid #EFE9DA" }}
                                >
                                  {DIAGRAMS[exName].svg}
                                  <p
                                    className="mt-1 text-xs text-center"
                                    style={{ color: "#7A1620", padding: "0 0.25rem" }}
                                  >
                                    {DIAGRAMS[exName].caption}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Equipment + rules */}
        <div className="px-5 mt-6 grid grid-cols-1 gap-4">
          <div className="rounded-2xl p-4" style={{ background: "#fff", border: "1px solid #E4DCC9" }}>
            <div className="flex items-center gap-2 mb-2">
              <Cone size={16} style={{ color: "#7A1620" }} />
              <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.05em", color: "#7A1620" }}>
                UTRUSTNING
              </h4>
            </div>
            <ul className="space-y-1">
              {age.equipment.map((e, i) => (
                <li key={i} className="text-sm" style={{ color: "#3A322D" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-4" style={{ background: "#fff", border: "1px solid #E4DCC9" }}>
            <div className="flex items-center gap-2 mb-2">
              <Users2 size={16} style={{ color: "#7A1620" }} />
              <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.05em", color: "#7A1620" }}>
                TRÄNARENS TUMREGLER
              </h4>
            </div>
            <ul className="space-y-1">
              {age.rules.map((r, i) => (
                <li key={i} className="text-sm flex gap-2" style={{ color: "#3A322D" }}>
                  <Droplets size={13} className="flex-shrink-0 mt-1" style={{ color: "#C8102E", opacity: 0.6 }} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="px-5 mt-6 text-xs text-center" style={{ color: "#B0A79B" }}>
          1000 relevanta touch per spelare — en princip, inte en regel.
        </p>
      </div>
    </div>
  );
}
