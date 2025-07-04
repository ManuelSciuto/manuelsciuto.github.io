interface Props {
  className?: string;
}

const RustSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 106 106"
    className={className}
  >
    <g transform="translate(53 53)">
      <path
        stroke="#FA510B"
        strokeLinejoin="round"
        d="M-8.5-14.5h13c8 0 8 8 0 8h-13Zm-31 37h40v-11h-9v-8h10c11 0 5 19 14 19h25v-19h-6v2c0 8-9 7-10 2s-5-9-6-9c15-8 6-24-6-24h-47v11h10v26h-15Z"
      />
      <g mask="url(#a)">
        <circle r={43} fill="none" stroke="#FA510B" strokeWidth={9} />
        <path
          id="b"
          stroke="#FA510B"
          strokeLinejoin="round"
          strokeWidth={3}
          d="m46 3 5-3-5-3z"
        />
        <use href="#b" transform="rotate(11.25)" />
        <use href="#b" transform="rotate(22.5)" />
        <use href="#b" transform="rotate(33.75)" />
        <use href="#b" transform="rotate(45)" />
        <use href="#b" transform="rotate(56.25)" />
        <use href="#b" transform="rotate(67.5)" />
        <use href="#b" transform="rotate(78.75)" />
        <use href="#b" transform="rotate(90)" />
        <use href="#b" transform="rotate(101.25)" />
        <use href="#b" transform="rotate(112.5)" />
        <use href="#b" transform="rotate(123.75)" />
        <use href="#b" transform="rotate(135)" />
        <use href="#b" transform="rotate(146.25)" />
        <use href="#b" transform="rotate(157.5)" />
        <use href="#b" transform="rotate(168.75)" />
        <use href="#b" transform="rotate(180)" />
        <use href="#b" transform="rotate(191.25)" />
        <use href="#b" transform="rotate(202.5)" />
        <use href="#b" transform="rotate(213.75)" />
        <use href="#b" transform="rotate(225)" />
        <use href="#b" transform="rotate(236.25)" />
        <use href="#b" transform="rotate(247.5)" />
        <use href="#b" transform="rotate(258.75)" />
        <use href="#b" transform="rotate(270)" />
        <use href="#b" transform="rotate(281.25)" />
        <use href="#b" transform="rotate(292.5)" />
        <use href="#b" transform="rotate(303.75)" />
        <use href="#b" transform="rotate(315)" />
        <use href="#b" transform="rotate(326.25)" />
        <use href="#b" transform="rotate(337.5)" />
        <use href="#b" transform="rotate(348.75)" />
        <path
          id="c"
          stroke="#FA510B"
          strokeLinejoin="round"
          strokeWidth={6}
          d="m-7-42 7 7 7-7z"
        />
        <use href="#c" transform="rotate(72)" />
        <use href="#c" transform="rotate(144)" />
        <use href="#c" transform="rotate(216)" />
        <use href="#c" transform="rotate(288)" />
      </g>
      <mask id="a">
        <path fill="#fff" d="M-60-60H60V60H-60z" />
        <circle id="d" cy={-40} r={3} />
        <use href="#d" transform="rotate(72)" />
        <use href="#d" transform="rotate(144)" />
        <use href="#d" transform="rotate(216)" />
        <use href="#d" transform="rotate(288)" />
      </mask>
    </g>
  </svg>
);
export default RustSvg;
