import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="shareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
            </defs>
            
            {/* Abstract "S" shape representing Share with connection dots */}
            <g>
                {/* Connection points */}
                <circle cx="15" cy="15" r="5" fill="#2563EB" opacity="0.9" />
                <circle cx="45" cy="15" r="5" fill="#7C3AED" opacity="0.9" />
                <circle cx="15" cy="45" r="5" fill="#10B981" opacity="0.9" />
                <circle cx="45" cy="45" r="5" fill="#F59E0B" opacity="0.9" />
                
                {/* Curved connection paths forming an "S" for Share */}
                <path
                    d="M15 15 Q30 10 45 15 Q50 25 45 35 Q40 40 35 35 Q30 30 35 25 Q40 20 45 25 Q50 30 45 45"
                    stroke="url(#shareGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                />
                
                {/* Arrowhead indicating sharing direction */}
                <path
                    d="M45 45 L55 45 L51 41 M55 45 L51 49"
                    stroke="url(#shareGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                
                {/* Center dot for focus */}
                <circle cx="30" cy="30" r="3" fill="url(#shareGradient)" />
            </g>
        </svg>
    );
}