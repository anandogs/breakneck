module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                thunderhouse: "Thunderhouse",
                brother: "Brother"
            },
            fontSize: {
                'header-fluid-h1': 'clamp(3.125rem, 3.76vw, 4.0625rem)',
                'header-fluid-h2': 'clamp(1.875rem, 2.60vw, 2.8125rem)',
                'h1-fluid':'clamp(1.875rem, 4.34vw, 4.6875rem)',
                'h2-fluid':'clamp(1.375rem, 2.89vw, 3.125rem)',
                'h3-fluid':'clamp(0.625rem, 1.04vw, 1.125rem)',
                'p-fluid':'clamp(0.5625rem, 1.04vw, 1.125rem)',
                'coordinates':'clamp(0.5625rem, 0.7523148148vw, 0.8125rem)',
                'footer-fluid-h1': 'clamp(4.5rem, 15.0462962963vw, 16.25rem)',
                'footer-fluid-p': 'clamp(0.5rem, 0.9259259259vw, 1rem)',
            },
            margin: {
                mob: '3.5625rem',
                'bottom-h1': '0.81vh',
                'burger-closed-left': '10.22vw',
                'burger-closed-right': '1.9875rem',
                'burger-open-left': '10.22vw',
                'burger-open-right': '2.1rem',
                
                'mob-content': '0.25rem',
                'tab-content': '0.625rem'
            },
            width: {
                'burger-closed':'4.56vw',
                'burger-open':'4.14vw',
            },

            height: {
                mob: '12.5vh',
                tab: '13.13vw',
                'burger-closed':'1.55vh',
                'burger-open':'1.88vh',
                'mob-foot': '35.5vh',
                'tab-foot': '86.2130707252vh',
            },
            lineHeight: {
                'h1-fluid': 'clamp(1.93125rem, 4.47vw, 4.83rem',
                'h2-fluid': 'clamp(1.41625rem, 2.98vw, 3.21875rem',
                'h3-fluid': 'clamp(0.75rem, 1.25vw, 1.35rem)',
                'p-fluid': 'clamp(0.75rem, 1.25vw, 1.35rem)',
                'coordinates': 'clamp(0.675rem, 0.9027777778vw, 0.975rem)',
                'footer-fluid-h1':  'clamp(2.8125rem, 9.2592592593vw, 10rem)',
                'footer-fluid-p':  'clamp(0.75rem, 1.4467592593vw, 1.5625rem)',
              },
        }
    },
    variants: {},
    plugins: [],
  }