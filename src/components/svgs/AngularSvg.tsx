interface Props {
  className?: string;
}

const AngularSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 271"
    preserveAspectRatio="xMidYMid"
    className={className}
  >
    <defs>
      <linearGradient
        id="a"
        x1="25.071%"
        x2="96.132%"
        y1="90.929%"
        y2="55.184%"
      >
        <stop offset="0%" stopColor="#E40035" />
        <stop offset="24%" stopColor="#F60A48" />
        <stop offset="35.2%" stopColor="#F20755" />
        <stop offset="49.4%" stopColor="#DC087D" />
        <stop offset="74.5%" stopColor="#9717E7" />
        <stop offset="100%" stopColor="#6C00F5" />
      </linearGradient>
      <linearGradient id="b" x1="21.863%" x2="68.367%" y1="12.058%" y2="68.21%">
        <stop offset="0%" stopColor="#FF31D9" />
        <stop offset="100%" stopColor="#FF5BE1" stopOpacity={0} />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="m256 45.179-9.244 145.158L158.373 0 256 45.179Zm-61.217 187.697-66.782 38.105-66.784-38.105L74.8 199.958h106.4l13.583 32.918ZM128.001 72.249l34.994 85.076h-69.99l34.996-85.076ZM9.149 190.337 0 45.179 97.627 0 9.149 190.337Z"
    />
    <path
      fill="url(#b)"
      d="m256 45.179-9.244 145.158L158.373 0 256 45.179Zm-61.217 187.697-66.782 38.105-66.784-38.105L74.8 199.958h106.4l13.583 32.918ZM128.001 72.249l34.994 85.076h-69.99l34.996-85.076ZM9.149 190.337 0 45.179 97.627 0 9.149 190.337Z"
    />
  </svg>
);
export default AngularSvg;
