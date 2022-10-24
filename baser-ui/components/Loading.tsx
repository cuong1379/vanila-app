export interface ILoading {
    isLoading: boolean
    isFullWidth?: boolean
    showLoadingIcon?: boolean
    showLoadingBackground?: boolean
    loadingText?: string
    iconSize?: '12px' | '14px' | '16px' | '18px' | '20px' | '24px' | '28px' | '32px' | '40px' | '48px' | '60px' | '128px'
    iconColor?: string
    textSize?: '13px' | '14px' | '16px'
    textColor?: string
  }
  
  export function Loading({
    isLoading,
    isFullWidth,
    showLoadingIcon = true,
    showLoadingBackground = true,
    loadingText,
    iconSize = '40px',
    iconColor,
    textSize = '16px',
    textColor
  }: ILoading) {
    return !isLoading ? null : (
      <div className={`loading-overlay is-active ${isFullWidth ? 'is-full-page' : ''}`}>
        {showLoadingBackground && <div className="loading-background" />}
        {showLoadingIcon && <div className="loading-icon" />}
        {loadingText && <div className="loading-text ml-2">{loadingText}</div>}
        <style jsx>{`
          .loading-overlay {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            align-items: center;
            display: none;
            justify-content: center;
            overflow: hidden;
            z-index: 999;
  
            .loading-background {
              bottom: 0;
              left: 0;
              position: absolute;
              right: 0;
              top: 0;
              background: hsla(0, 0%, 100%, 0.5);
            }
  
            .loading-icon {
              position: relative;
              width: ${iconSize};
              height: ${iconSize};
  
              &:after {
                animation: spinAround 0.5s infinite linear;
                border: 2px solid ${iconColor ?? 'rgba(54,54,54,0.3)'};
                border-radius: 100%;
                border-top-color: transparent; // 3/4 circle
                /* border-right-color: transparent; // 1/2 circle */
                content: '';
                display: block;
                position: relative;
                position: absolute;
                width: 100%;
                height: 100%;
              }
            }
  
            &.is-active {
              display: flex;
            }
  
            &.is-full-page {
              position: fixed;
  
              .loading-icon:after {
                top: calc(50% - 40px);
                left: calc(50% - 40px);
                width: 72px;
                height: 72px;
              }
            }
  
            .loading-text {
              font-size: ${textSize};
              color: ${textColor ?? 'var(--indigo-7)'};
            }
          }
  
          @keyframes spinAround {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    )
  }
  