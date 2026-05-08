import React from 'react'
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Polygon,
  Rect,
  Stop,
} from 'react-native-svg'

export const OpenAILogo = ({
  size = 28,
  color = '#10a37f',
}: {
  size?: number
  color?: string
}) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2057 5.9847 5.9847 0 0 0 3.998-2.9001 6.0557 6.0557 0 0 0-.7478-7.0731z'
      fill={color}
    />
    <Path
      d='M12.0166 12L12 12.0001'
      stroke='#fff'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </Svg>
)

export const NetflixLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M16 2.5L8 18'
      stroke='#E50914'
      strokeWidth='4'
      strokeLinecap='round'
    />
    <Path
      d='M8 2.5V18'
      stroke='#E50914'
      strokeWidth='3'
      strokeLinecap='round'
    />
    <Path
      d='M16 2.5V18'
      stroke='#E50914'
      strokeWidth='3'
      strokeLinecap='round'
    />
  </Svg>
)

export const SpotifyLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Circle cx='12' cy='12' r='10' fill='#1DB954' />
    <Path
      d='M16.5 15.5C14.5 14.5 9.5 14 7 15'
      stroke='#fff'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <Path
      d='M17.5 12.5C15 11 9 10.5 6 12'
      stroke='#fff'
      strokeWidth='1.8'
      strokeLinecap='round'
    />
    <Path
      d='M18.5 9C15.5 7 8 6.5 5 8.5'
      stroke='#fff'
      strokeWidth='2.2'
      strokeLinecap='round'
    />
  </Svg>
)

export const AmazonLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M5 16C8 19 15 19 19 15'
      stroke='#FF9900'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <Path
      d='M18 14V16H16'
      stroke='#FF9900'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <Path
      d='M9 10C9 10 11 7 14 7C16 7 17 8 17 10C17 13 14 13 14 13'
      stroke='#232F3E'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </Svg>
)

export const ClaudeLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width='24' height='24' rx='6' fill='#D1CAB9' />
    <Path d='M8 16V8L16 12L8 16Z' fill='#191919' />
  </Svg>
)

export const GeminiLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Defs>
      <LinearGradient id='gemGrad' x1='0' y1='0' x2='24' y2='24'>
        <Stop offset='0%' stopColor='#4A90E2' />
        <Stop offset='100%' stopColor='#D0021B' />
      </LinearGradient>
    </Defs>
    <Path
      d='M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z'
      fill='url(#gemGrad)'
    />
  </Svg>
)

export const AppleLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Path d='M15 5C15 5 14.5 3 12 3C11.5 5 12.5 7 15 5Z' fill='#333' />
    <Path
      d='M16 19C14 21 10 21 8 19C4 15 4 9 7 9C8.5 9 10 10 11 10C12 10 13.5 9 15 9C18 9 19 13 19 15C18.5 15.5 18 17 16 19Z'
      fill='#333'
    />
  </Svg>
)

export const GrokLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={4} fill='#000' />
    <Path d='M8 6L16 18' stroke='#FFF' strokeWidth='3' strokeLinecap='square' />
    <Path d='M16 6L8 18' stroke='#FFF' strokeWidth='3' strokeLinecap='square' />
  </Svg>
)

export const MidjourneyLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={12} fill='#FFF' />
    <Path
      d='M6 14H18M12 6V18M8 10L16 14M8 14L16 10'
      stroke='#000'
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
  </Svg>
)

export const PerplexityLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={6} fill='#0d9488' />
    <Path
      d='M12 6V18M6 12H18M8 8L16 16M8 16L16 8'
      stroke='#FFF'
      strokeWidth='2.5'
      strokeLinecap='round'
    />
  </Svg>
)

export const CopilotLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Circle cx='12' cy='12' r='10' fill='#24292e' />
    <Path
      d='M9 13A3 3 0 1 0 15 13C15 11 12 9 12 9C12 9 9 11 9 13Z'
      fill='#FFF'
    />
  </Svg>
)

export const NotionLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={6} fill='#F7F7F5' />
    <Path d='M8 7H16V17H8z' stroke='#000' strokeWidth='1.5' />
    <Path
      d='M10 9V15L14 9V15'
      stroke='#000'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export const RunwayLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Path d='M4 4H20V20H4z' fill='#000' />
    <Path
      d='M8 16V12C8 10 10 8 12 8H16V10H12C11 10 10 11 10 12V16H8Z'
      fill='#fff'
    />
  </Svg>
)

export const ElevenLabsLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={12} fill='#FFF' />
    <Path
      d='M8 10V14M11 7V17M14 9V15M17 11V13'
      stroke='#000'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </Svg>
)

export const JasperLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={6} fill='#0d1117' />
    <Path
      d='M12 6V16C12 18 10 19 8 19'
      stroke='#E1EEFF'
      strokeWidth='2.5'
      strokeLinecap='round'
    />
  </Svg>
)

export const CopyAILogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Circle cx={12} cy={12} r={10} fill='#f3f4f6' />
    <Path
      d='M15 9A4 4 0 1 0 15 15'
      stroke='#2563eb'
      strokeWidth='2.5'
      strokeLinecap='round'
    />
  </Svg>
)

export const SynthesiaLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={8} fill='#2A1B54' />
    <Polygon points='10,8 16,12 10,16' fill='#00E5FF' />
  </Svg>
)

export const OtterLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Circle cx={12} cy={12} r={10} fill='#0072C6' />
    <Path
      d='M8 14S10 17 12 17 16 14 16 14V10C16 10 14 7 12 7S8 10 8 10V14Z'
      fill='#FFF'
    />
  </Svg>
)

export const CanvaLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Circle cx={12} cy={12} r={10} fill='#00C4CC' />
    <Path
      d='M8 12C8 9 10 8 12 8C14 8 14 10 14 10H16C16 8 14 6 12 6C9 6 6 8 6 12C6 16 9 18 12 18C15 18 16 16 16 16H14C14 16 14 18 12 18C10 18 8 16 8 12Z'
      fill='#fff'
    />
  </Svg>
)

export const HBOMaxLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={6} fill='#4600E5' />
    <Path
      d='M7 8V16M12 8L9 16H15L12 8ZM17 8H21M19 8V16'
      stroke='#FFF'
      strokeWidth='1.5'
      strokeLinejoin='bevel'
    />
  </Svg>
)

export const DisneyLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={4} fill='#001242' />
    <Path d='M5 12H19' stroke='#FFF' strokeWidth='2.5' strokeLinecap='round' />
    <Path d='M15 8V16' stroke='#FFF' strokeWidth='2.5' strokeLinecap='round' />
    <Path d='M9 9C12 9 14 10.5 14 13C14 15.5 12 17 9 17V9Z' fill='#FFF' />
  </Svg>
)

export const HuluLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={4} fill='#1CE783' />
    <Path
      d='M6 10V18 M6 10H10V18 M14 10V18 M18 10V18H14'
      stroke='#000'
      strokeWidth='2'
    />
    <Path d='M8 12H20' stroke='#000' strokeWidth='4' />
  </Svg>
)

export const YouTubeLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width='22' height='15' x='1' y='4.5' rx='4' fill='#FF0000' />
    <Polygon points='10,8 15,12 10,16' fill='#FFF' />
  </Svg>
)

export const ParamountLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Circle cx={12} cy={12} r={11} fill='#0F4BAA' />
    <Path d='M12 6L16 16H8L12 6Z' fill='#FFF' />
    <Circle cx='6' cy='12' r='1.5' fill='#FFF' />
    <Circle cx='18' cy='12' r='1.5' fill='#FFF' />
    <Circle cx='9' cy='8' r='1.5' fill='#FFF' />
    <Circle cx='15' cy='8' r='1.5' fill='#FFF' />
  </Svg>
)

export const PeacockLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Circle cx={12} cy={18} r={3} fill='#0d1117' />
    <Circle cx={8} cy={12} r={2.5} fill='#34A853' />
    <Circle cx={12} cy={9} r={2.5} fill='#EA4335' />
    <Circle cx={16} cy={12} r={2.5} fill='#FBBC05' />
  </Svg>
)

export const CrunchyrollLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Circle cx={12} cy={12} r={10} fill='#F47521' />
    <Circle cx={12} cy={12} r={6} fill='#FFF' />
    <Circle cx={12} cy={12} r={3} fill='#F47521' />
  </Svg>
)

export const TwitchLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={14} height={14} x={5} y={5} fill='#9146FF' />
    <Path d='M4 6V20H9V23L12 20H16L20 16V6H4Z' fill='#9146FF' />
    <Path d='M18 15L15 18H11L8 21V18H6V7H18V15Z' fill='#FFF' />
    <Rect x={10} y={10} width={2} height={4} fill='#9146FF' />
    <Rect x={14} y={10} width={2} height={4} fill='#9146FF' />
  </Svg>
)

export const TidalLogo = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Rect width={24} height={24} rx={2} fill='#000' />
    <Path d='M12 5L15 8L12 11L9 8L12 5Z' fill='#FFF' />
    <Path d='M12 13L15 16L12 19L9 16L12 13Z' fill='#FFF' />
    <Path d='M16 9L19 12L16 15L13 12L16 9Z' fill='#FFF' />
    <Path d='M8 9L11 12L8 15L5 12L8 9Z' fill='#FFF' />
  </Svg>
)

export const GenericLogo = ({
  size = 28,
  color = '#666',
}: {
  size?: number
  color?: string
}) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Circle cx='12' cy='12' r='11' stroke={color} strokeWidth='2' />
    <Path
      d='M9 16L12 8L15 16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <Path d='M10 13H14' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </Svg>
)
