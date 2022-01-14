module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                thunderhouse: "Thunderhouse",
                brother: "Brother"
            },
            fontSize: {
                'havelock-mob': '3.125rem',
                'menu-others': '1.875rem'
            },
            margin: {
                mob: '3.5625rem',
                'mob-content': '0.25rem'
            },
            height: {
                mob: '6.25rem',
                'mob-foot': '17.75rem'
            },
            lineHeight: {
                'havelock-mob': '3.21875rem',
                'menu-others': '1.93125rem',
              },
        }
    },
    variants: {},
    plugins: [],
  }