import { cn } from '@/lib/utils'

interface IGeneralIcons {
  className?: string
}

export const GeneralIcons = {
  Spinner: (props: IGeneralIcons): JSX.Element => (
    <svg
      className={cn('animate-spin h-5 w-5 text-white', props?.className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className={`opacity-25`}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className={`opacity-75`}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  ),
  Magnifier: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <path
        d="M1.94 3.82C2.62 2.79333 3.5 2.02 4.58 1.5C5.62 1.00667 6.71333 0.799999 7.86 0.879999C9.02 0.946666 10.08 1.28667 11.04 1.9C12.0667 2.56667 12.8533 3.46667 13.4 4.6C13.92 5.68 14.1267 6.82 14.02 8.02C13.9133 9.22 13.5067 10.3133 12.8 11.3L12.68 11.5L16.6 15.42C16.92 15.74 17.1267 15.96 17.22 16.08C17.2733 16.16 17.3067 16.2467 17.32 16.34L17.34 16.38C17.38 16.6733 17.3 16.9133 17.1 17.1C16.9 17.3 16.66 17.38 16.38 17.34L16.34 17.32C16.2467 17.3067 16.16 17.2733 16.08 17.22C15.96 17.1267 15.74 16.92 15.42 16.6L11.5 12.68L11.32 12.8C10.7067 13.2133 10.1267 13.5133 9.58 13.7C8.39333 14.0867 7.20667 14.1467 6.02 13.88C4.92667 13.6267 3.94667 13.1267 3.08 12.38C2.24 11.6467 1.64 10.7933 1.28 9.82C0.906667 8.80667 0.773333 7.77333 0.88 6.72C1 5.66667 1.35333 4.7 1.94 3.82ZM7.02 2.52C6.54 2.58667 6.14667 2.67333 5.84 2.78C5.04 3.06 4.35333 3.50667 3.78 4.12C3.22 4.73333 2.84 5.43333 2.64 6.22C2.58667 6.42 2.55333 6.61333 2.54 6.8C2.52667 6.92 2.52 7.13333 2.52 7.44C2.52 8.4 2.75333 9.26667 3.22 10.04C3.64667 10.7467 4.22 11.3067 4.94 11.72C5.66 12.12 6.43333 12.34 7.26 12.38C8.1 12.42 8.89333 12.2533 9.64 11.88C10.44 11.4933 11.0933 10.9067 11.6 10.12C12.0667 9.4 12.3267 8.61333 12.38 7.76C12.4333 6.96 12.2867 6.18667 11.94 5.44C11.6067 4.68 11.12 4.04667 10.48 3.54C9.81333 3.00667 9.04667 2.67333 8.18 2.54C8.1 2.52667 7.90667 2.52 7.6 2.52C7.30667 2.50667 7.11333 2.50667 7.02 2.52Z"
        fill="currentColor"
      />
    </svg>
  ),
  BurgerMenu: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <path
        d="M0.7 1.14C0.7 0.859999 0.8 0.639999 1 0.479999C1.12 0.399999 1.22667 0.353333 1.32 0.339999C1.4 0.326666 3.65333 0.32 8.08 0.32C12.52 0.32 14.78 0.326666 14.86 0.339999C14.9667 0.353333 15.0733 0.399999 15.18 0.479999C15.3933 0.639999 15.5 0.866666 15.5 1.16C15.5 1.44 15.3933 1.66 15.18 1.82C15.0733 1.9 14.9667 1.94667 14.86 1.96C14.78 1.97333 12.5267 1.98 8.1 1.98C3.67333 1.98 1.42 1.97333 1.34 1.96C1.23333 1.94667 1.12667 1.9 1.02 1.82C0.806667 1.66 0.7 1.43333 0.7 1.14ZM0.7 6.1C0.7 5.80667 0.8 5.58667 1 5.44C1.12 5.36 1.22667 5.30667 1.32 5.28C1.4 5.28 3.65333 5.28 8.08 5.28C12.52 5.28 14.78 5.28 14.86 5.28C14.9667 5.30667 15.0733 5.36 15.18 5.44C15.3933 5.58667 15.5 5.80667 15.5 6.1C15.5 6.39333 15.3933 6.61333 15.18 6.76C15.0733 6.84 14.9667 6.89333 14.86 6.92C14.78 6.92 12.5267 6.92 8.1 6.92C3.67333 6.92 1.42 6.92 1.34 6.92C1.23333 6.89333 1.12667 6.84 1.02 6.76C0.806667 6.61333 0.7 6.39333 0.7 6.1ZM1.32 10.24C1.22667 10.2533 1.12 10.3 1 10.38C0.8 10.54 0.7 10.7667 0.7 11.06C0.7 11.34 0.806667 11.56 1.02 11.72C1.12667 11.8 1.23333 11.8467 1.34 11.86C1.42 11.8733 3.67333 11.88 8.1 11.88C12.5267 11.88 14.78 11.8733 14.86 11.86C14.9667 11.8467 15.0733 11.8 15.18 11.72C15.3933 11.56 15.5 11.34 15.5 11.06C15.5 10.7667 15.3933 10.54 15.18 10.38C15.0733 10.3 14.9667 10.2533 14.86 10.24C14.78 10.2267 12.52 10.22 8.08 10.22C3.65333 10.22 1.4 10.2267 1.32 10.24Z"
        fill="currentColor"
      />
    </svg>
  ),
  Mail: (props: IGeneralIcons): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={cn(props.className)}
    >
      <path
        d="M2 4.66732C2 4.3137 2.14048 3.97456 2.39052 3.72451C2.64057 3.47446 2.97971 3.33398 3.33333 3.33398H12.6667C13.0203 3.33398 13.3594 3.47446 13.6095 3.72451C13.8595 3.97456 14 4.3137 14 4.66732M2 4.66732V11.334C2 11.6876 2.14048 12.0267 2.39052 12.2768C2.64057 12.5268 2.97971 12.6673 3.33333 12.6673H12.6667C13.0203 12.6673 13.3594 12.5268 13.6095 12.2768C13.8595 12.0267 14 11.6876 14 11.334V4.66732M2 4.66732L8 8.66732L14 4.66732"
        stroke="#2A3547"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Bell: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <path
        d="M3.81023 0.859999C4.02357 0.819999 4.22357 0.859999 4.41023 0.979999C4.65023 1.12667 4.77023 1.36 4.77023 1.68C4.77023 1.81333 4.7569 1.92 4.73023 2C4.6769 2.09333 4.5769 2.20667 4.43023 2.34C3.92357 2.82 3.4969 3.30667 3.15023 3.8C2.95023 4.06667 2.74357 4.40667 2.53023 4.82C2.4369 5.00667 2.37023 5.13333 2.33023 5.2C2.26357 5.30667 2.19023 5.38667 2.11023 5.44C1.8969 5.57333 1.6769 5.60667 1.45023 5.54C1.2369 5.47333 1.07023 5.34667 0.950234 5.16C0.830234 4.97333 0.796901 4.77333 0.850234 4.56C0.970234 4.21333 1.2169 3.75333 1.59023 3.18C1.96357 2.60667 2.35023 2.10667 2.75023 1.68C3.20357 1.18667 3.5569 0.913333 3.81023 0.859999ZM6.71023 2.62C6.88357 2.06 7.1969 1.62 7.65023 1.3C8.0769 1.00667 8.5569 0.859999 9.09023 0.859999C9.62357 0.859999 10.0969 1.00667 10.5102 1.3C10.9769 1.62 11.2969 2.06667 11.4702 2.64C11.4836 2.72 11.4969 2.77333 11.5102 2.8C11.5236 2.81333 11.5569 2.83333 11.6102 2.86C11.9169 3.04667 12.1702 3.21333 12.3702 3.36C12.9969 3.86667 13.5102 4.46 13.9102 5.14C14.3236 5.82 14.6036 6.55333 14.7502 7.34C14.8036 7.58 14.8302 7.79333 14.8302 7.98C14.8436 8.16667 14.8569 8.62667 14.8702 9.36L14.8902 10.84C14.9436 11.1067 15.0236 11.3333 15.1302 11.52C15.3302 11.88 15.6169 12.18 15.9902 12.42C16.1369 12.5133 16.2636 12.6333 16.3702 12.78C16.5169 12.98 16.5636 13.18 16.5102 13.38C16.4569 13.62 16.2569 13.84 15.9102 14.04H12.3902L12.3702 14.3C12.3036 15.1133 12.0036 15.7933 11.4702 16.34C10.9902 16.8333 10.3902 17.14 9.67024 17.26C8.96357 17.3933 8.29024 17.3133 7.65023 17.02C6.97023 16.7 6.4569 16.1867 6.11023 15.48C5.92357 15.08 5.8169 14.66 5.79023 14.22V14.04H2.27023C1.9369 13.8533 1.7369 13.6333 1.67023 13.38C1.6169 13.2067 1.64357 13.0333 1.75023 12.86C1.80357 12.74 1.86357 12.66 1.93023 12.62L2.19023 12.44C2.63023 12.16 2.95023 11.7667 3.15023 11.26L3.17023 11.22C3.2369 11.0467 3.2769 10.8867 3.29023 10.74C3.30357 10.5933 3.31023 10.18 3.31023 9.5C3.31023 8.75333 3.3169 8.25333 3.33023 8C3.3569 7.73333 3.40357 7.44 3.47023 7.12C3.63023 6.4 3.90357 5.72 4.29023 5.08C4.69023 4.44 5.18357 3.88667 5.77023 3.42C6.06357 3.16667 6.33023 2.98 6.57023 2.86C6.62357 2.83333 6.6569 2.81333 6.67023 2.8C6.68357 2.77333 6.6969 2.72 6.71023 2.64V2.62ZM13.4102 1.68C13.4102 1.42667 13.4836 1.23333 13.6302 1.1C13.7769 0.953333 13.9502 0.873332 14.1502 0.859999C14.3636 0.846666 14.5436 0.893333 14.6902 1L14.7702 1.06C14.8769 1.15333 14.9636 1.23333 15.0302 1.3C15.4569 1.7 15.8636 2.16 16.2502 2.68C16.5836 3.14667 16.8502 3.58667 17.0502 4C17.2636 4.4 17.3636 4.67333 17.3502 4.82C17.3236 5.02 17.2436 5.19333 17.1102 5.34C16.9769 5.47333 16.8102 5.55333 16.6102 5.58C16.4236 5.59333 16.2369 5.54667 16.0502 5.44C15.9836 5.38667 15.9102 5.30667 15.8302 5.2C15.7902 5.12 15.7169 4.98667 15.6102 4.8C15.3969 4.38667 15.1969 4.04667 15.0102 3.78C14.6902 3.32667 14.3036 2.88667 13.8502 2.46C13.6636 2.28667 13.5436 2.15333 13.4902 2.06C13.4369 1.96667 13.4102 1.84 13.4102 1.68ZM9.13023 2.5C8.98357 2.5 8.8769 2.51333 8.81023 2.54C8.7169 2.56667 8.6169 2.63333 8.51023 2.74C8.4169 2.83333 8.35023 2.94 8.31023 3.06C8.28357 3.12667 8.26357 3.22667 8.25023 3.36C8.22357 3.53333 8.18357 3.66667 8.13023 3.76C8.05023 3.90667 7.8969 4.03333 7.67023 4.14C7.1769 4.39333 6.74357 4.71333 6.37023 5.1C5.6769 5.80667 5.23023 6.68 5.03023 7.72C5.00357 7.89333 4.98357 8.46667 4.97023 9.44C4.9569 10.4 4.9369 10.9733 4.91023 11.16C4.84357 11.52 4.69023 11.9333 4.45023 12.4H13.7302C13.5569 12.0533 13.4369 11.7933 13.3702 11.62C13.3036 11.4067 13.2636 11.1467 13.2502 10.84C13.2369 10.6133 13.2236 10.1533 13.2102 9.46V9.44C13.1969 8.65333 13.1836 8.17333 13.1702 8C13.1569 7.82667 13.1236 7.62 13.0702 7.38C12.9369 6.80667 12.7102 6.28 12.3902 5.8C11.9236 5.09333 11.2969 4.54 10.5102 4.14C10.2969 4.03333 10.1502 3.92667 10.0702 3.82C10.0036 3.71333 9.9569 3.54667 9.93024 3.32C9.89024 3.04 9.77024 2.82 9.57024 2.66C9.42357 2.55333 9.2769 2.5 9.13023 2.5ZM7.45023 14.14C7.45023 14.3667 7.51023 14.6 7.63023 14.84C7.76357 15.08 7.95023 15.2733 8.19023 15.42C8.4569 15.6067 8.7569 15.7 9.09023 15.7C9.42357 15.7 9.72357 15.6067 9.99023 15.42C10.2302 15.2733 10.4102 15.08 10.5302 14.84C10.6636 14.6 10.7302 14.3667 10.7302 14.14V14.04H7.45023V14.14Z"
        fill="currentColor"
      />
    </svg>
  ),
  Bell2: (props: IGeneralIcons): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={cn(props.className)}
    >
      <path
        d="M9 17.5V18.5C9 19.2956 9.31607 20.0587 9.87868 20.6213C10.4413 21.1839 11.2044 21.5 12 21.5C12.7956 21.5 13.5587 21.1839 14.1213 20.6213C14.6839 20.0587 15 19.2956 15 18.5V17.5M10 5.5C10 4.96957 10.2107 4.46086 10.5858 4.08579C10.9609 3.71071 11.4696 3.5 12 3.5C12.5304 3.5 13.0391 3.71071 13.4142 4.08579C13.7893 4.46086 14 4.96957 14 5.5C15.1484 6.04303 16.1274 6.88833 16.8321 7.9453C17.5367 9.00227 17.9404 10.2311 18 11.5V14.5C18.0753 15.1217 18.2954 15.7171 18.6428 16.2381C18.9902 16.7592 19.4551 17.1914 20 17.5H4C4.54494 17.1914 5.00981 16.7592 5.35719 16.2381C5.70457 15.7171 5.92474 15.1217 6 14.5V11.5C6.05956 10.2311 6.4633 9.00227 7.16795 7.9453C7.8726 6.88833 8.85159 6.04303 10 5.5Z"
        stroke="#5A6A85"
        strokeWidth="1.91667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Trash: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <path
        d="M4 7.5H20M10 11.5V17.5M14 11.5V17.5M5 7.5L6 19.5C6 20.0304 6.21071 20.5391 6.58579 20.9142C6.96086 21.2893 7.46957 21.5 8 21.5H16C16.5304 21.5 17.0391 21.2893 17.4142 20.9142C17.7893 20.5391 18 20.0304 18 19.5L19 7.5M9 7.5V4.5C9 4.23478 9.10536 3.98043 9.29289 3.79289C9.48043 3.60536 9.73478 3.5 10 3.5H14C14.2652 3.5 14.5196 3.60536 14.7071 3.79289C14.8946 3.98043 15 4.23478 15 4.5V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Edit: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <path
        d="M7 7.5H6C5.46957 7.5 4.96086 7.71071 4.58579 8.08579C4.21071 8.46086 4 8.96957 4 9.5V18.5C4 19.0304 4.21071 19.5391 4.58579 19.9142C4.96086 20.2893 5.46957 20.5 6 20.5H15C15.5304 20.5 16.0391 20.2893 16.4142 19.9142C16.7893 19.5391 17 19.0304 17 18.5V17.5M16 5.5L19 8.5M20.385 7.085C20.7788 6.69115 21.0001 6.15698 21.0001 5.6C21.0001 5.04302 20.7788 4.50885 20.385 4.115C19.9912 3.72115 19.457 3.49989 18.9 3.49989C18.343 3.49989 17.8088 3.72115 17.415 4.115L9 12.5V15.5H12L20.385 7.085Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  MembershipFree: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <g id="package symbol">
        <circle
          id="Ellipse 973"
          cx="15"
          cy="15"
          r="15"
          fill="url(#paint0_radial_146_18)"
        />
        <g id="Vector" filter="url(#filter0_i_146_18)">
          <path
            d="M18.8166 14.388L15.4923 10.9676C15.4355 10.9089 15.3666 10.862 15.2898 10.8299C15.213 10.7978 15.13 10.7812 15.0462 10.7812C14.9623 10.7812 14.8793 10.7978 14.8025 10.8299C14.7257 10.862 14.6568 10.9089 14.6 10.9676L11.2757 14.388C11.1891 14.4765 11.0757 14.5371 10.9512 14.5613C10.8267 14.5854 10.6973 14.5719 10.5813 14.5226L8.82176 13.7775C8.72366 13.7359 8.61573 13.7199 8.509 13.7311C8.40227 13.7423 8.30057 13.7802 8.21429 13.8411C8.12801 13.902 8.06024 13.9836 8.01792 14.0775C7.9756 14.1715 7.96024 14.2745 7.9734 14.376L8.69607 19.1908C8.71651 19.3285 8.78847 19.4546 8.89873 19.5459C9.00898 19.6371 9.15013 19.6874 9.2962 19.6875H20.7867C20.9327 19.6874 21.0739 19.6371 21.1841 19.5459C21.2944 19.4546 21.3664 19.3285 21.3868 19.1908L22.1095 14.376C22.1226 14.2745 22.1073 14.1715 22.065 14.0775C22.0226 13.9836 21.9549 13.902 21.8686 13.8411C21.7823 13.7802 21.6806 13.7423 21.5739 13.7311C21.4671 13.7199 21.3592 13.7359 21.2611 13.7775L19.5016 14.5226C19.3867 14.5698 19.2593 14.5822 19.1368 14.5582C19.0143 14.5341 18.9025 14.4746 18.8166 14.388Z"
            fill="url(#paint1_radial_146_18)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_146_18"
          x="7.96883"
          y="10.7812"
          width="14.1452"
          height="10.1562"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.25" />
          <feGaussianBlur stdDeviation="0.625" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_146_18"
          />
        </filter>
        <radialGradient
          id="paint0_radial_146_18"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.3125 22.7344) rotate(-132.138) scale(19.9122 15.3989)"
        >
          <stop stopColor="#D8F4DD" />
          <stop offset="1" stopColor="#92C99E" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_146_18"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.9063 10.7812) rotate(54.2933) scale(11.6993 18.5812)"
        >
          <stop stopColor="#24A53F" stopOpacity="0.31" />
          <stop offset="0.635417" stopColor="#1C8632" />
        </radialGradient>
      </defs>
    </svg>
  ),
  MembershipSilver: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <g id="package symbol">
        <circle
          id="Ellipse 972"
          cx="15"
          cy="15"
          r="15"
          fill="url(#paint0_radial_146_26)"
        />
        <g id="Vector" filter="url(#filter0_i_146_26)">
          <path
            d="M18.7531 14.388L15.4482 10.9676C15.3918 10.9089 15.3232 10.862 15.2469 10.8299C15.1705 10.7978 15.0881 10.7812 15.0047 10.7812C14.9213 10.7812 14.8389 10.7978 14.7625 10.8299C14.6862 10.862 14.6176 10.9089 14.5611 10.9676L11.2563 14.388C11.1702 14.4765 11.0574 14.5371 10.9336 14.5613C10.8099 14.5854 10.6813 14.5719 10.5659 14.5226L8.81669 13.7775C8.71917 13.7359 8.61187 13.7199 8.50576 13.7311C8.39966 13.7423 8.29855 13.7802 8.21277 13.8411C8.127 13.902 8.05963 13.9836 8.01756 14.0775C7.97548 14.1715 7.96021 14.2745 7.9733 14.376L8.69174 19.1908C8.71206 19.3285 8.7836 19.4546 8.89321 19.5459C9.00282 19.6371 9.14314 19.6874 9.28837 19.6875H20.7116C20.8569 19.6874 20.9972 19.6371 21.1068 19.5459C21.2164 19.4546 21.2879 19.3285 21.3083 19.1908L22.0267 14.376C22.0398 14.2745 22.0245 14.1715 21.9824 14.0775C21.9404 13.9836 21.873 13.902 21.7872 13.8411C21.7015 13.7802 21.6003 13.7423 21.4942 13.7311C21.3881 13.7199 21.2808 13.7359 21.1833 13.7775L19.4341 14.5226C19.3198 14.5698 19.1932 14.5822 19.0714 14.5582C18.9496 14.5341 18.8384 14.4746 18.7531 14.388Z"
            fill="url(#paint1_radial_146_26)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_146_26"
          x="7.96875"
          y="10.7812"
          width="14.0625"
          height="11.4062"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.5" />
          <feGaussianBlur stdDeviation="1.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_146_26"
          />
        </filter>
        <radialGradient
          id="paint0_radial_146_26"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.3125 22.7344) rotate(-132.138) scale(19.9122 15.3989)"
        >
          <stop stopColor="#C2D4DF" />
          <stop offset="1" stopColor="#9EB6C5" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_146_26"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.8715 10.7812) rotate(54.4524) scale(11.676 18.5094)"
        >
          <stop stopColor="#A1BBC7" />
          <stop offset="0.595577" stopColor="#698B9D" />
        </radialGradient>
      </defs>
    </svg>
  ),
  MembershipGold: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <g id="package symbol">
        <circle
          id="Ellipse 975"
          cx="15"
          cy="15"
          r="15"
          fill="url(#paint0_radial_146_34)"
        />
        <g id="Vector" filter="url(#filter0_i_146_34)">
          <path
            d="M18.7531 14.388L15.4482 10.9676C15.3918 10.9089 15.3232 10.862 15.2469 10.8299C15.1705 10.7978 15.0881 10.7812 15.0047 10.7812C14.9213 10.7812 14.8389 10.7978 14.7625 10.8299C14.6862 10.862 14.6176 10.9089 14.5611 10.9676L11.2563 14.388C11.1702 14.4765 11.0574 14.5371 10.9336 14.5613C10.8099 14.5854 10.6813 14.5719 10.5659 14.5226L8.81669 13.7775C8.71917 13.7359 8.61187 13.7199 8.50576 13.7311C8.39966 13.7423 8.29855 13.7802 8.21277 13.8411C8.127 13.902 8.05963 13.9836 8.01756 14.0775C7.97548 14.1715 7.96021 14.2745 7.9733 14.376L8.69174 19.1908C8.71206 19.3285 8.7836 19.4546 8.89321 19.5459C9.00282 19.6371 9.14314 19.6874 9.28837 19.6875H20.7116C20.8569 19.6874 20.9972 19.6371 21.1068 19.5459C21.2164 19.4546 21.2879 19.3285 21.3083 19.1908L22.0267 14.376C22.0398 14.2745 22.0245 14.1715 21.9824 14.0775C21.9404 13.9836 21.873 13.902 21.7872 13.8411C21.7015 13.7802 21.6003 13.7423 21.4942 13.7311C21.3881 13.7199 21.2808 13.7359 21.1833 13.7775L19.4341 14.5226C19.3198 14.5698 19.1932 14.5822 19.0714 14.5582C18.9496 14.5341 18.8384 14.4746 18.7531 14.388Z"
            fill="url(#paint1_radial_146_34)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_146_34"
          x="7.96875"
          y="10.7812"
          width="14.0625"
          height="11.4062"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.5" />
          <feGaussianBlur stdDeviation="1.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_146_34"
          />
        </filter>
        <radialGradient
          id="paint0_radial_146_34"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.3125 22.7344) rotate(-132.138) scale(19.9122 15.3989)"
        >
          <stop stopColor="#FEE784" />
          <stop offset="1" stopColor="#D3A93D" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_146_34"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.8715 10.7812) rotate(54.4524) scale(11.676 18.5094)"
        >
          <stop stopColor="#D58C28" stopOpacity="0.18" />
          <stop offset="0.595577" stopColor="#B7812F" />
        </radialGradient>
      </defs>
    </svg>
  ),
  MembershipPlatinum: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <g id="package symbol">
        <circle
          id="Ellipse 972"
          cx="15"
          cy="15"
          r="15"
          fill="url(#paint0_radial_146_42)"
        />
        <g id="Vector" filter="url(#filter0_i_146_42)">
          <path
            d="M18.753 14.388L15.4482 10.9676C15.3917 10.9089 15.3231 10.862 15.2468 10.8299C15.1704 10.7978 15.088 10.7812 15.0046 10.7812C14.9212 10.7812 14.8388 10.7978 14.7624 10.8299C14.6861 10.862 14.6175 10.9089 14.561 10.9676L11.2562 14.388C11.1701 14.4765 11.0573 14.5371 10.9336 14.5613C10.8098 14.5854 10.6812 14.5719 10.5659 14.5226L8.81662 13.7775C8.71909 13.7359 8.61179 13.7199 8.50569 13.7311C8.39958 13.7423 8.29847 13.7802 8.2127 13.8411C8.12692 13.902 8.05956 13.9836 8.01748 14.0775C7.97541 14.1715 7.96013 14.2745 7.97322 14.376L8.69167 19.1908C8.71198 19.3285 8.78352 19.4546 8.89314 19.5459C9.00275 19.6371 9.14307 19.6874 9.28829 19.6875H20.7116C20.8568 19.6874 20.9971 19.6371 21.1067 19.5459C21.2163 19.4546 21.2879 19.3285 21.3082 19.1908L22.0266 14.376C22.0397 14.2745 22.0244 14.1715 21.9824 14.0775C21.9403 13.9836 21.8729 13.902 21.7871 13.8411C21.7014 13.7802 21.6003 13.7423 21.4942 13.7311C21.3881 13.7199 21.2808 13.7359 21.1832 13.7775L19.434 14.5226C19.3198 14.5698 19.1932 14.5822 19.0713 14.5582C18.9495 14.5341 18.8384 14.4746 18.753 14.388Z"
            fill="url(#paint1_radial_146_42)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_146_42"
          x="7.96867"
          y="10.7812"
          width="14.0625"
          height="11.4062"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.5" />
          <feGaussianBlur stdDeviation="1.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_146_42"
          />
        </filter>
        <radialGradient
          id="paint0_radial_146_42"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.3125 22.7344) rotate(-132.138) scale(19.9122 15.3989)"
        >
          <stop stopColor="#B1B1B1" />
          <stop offset="1" stopColor="#535353" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_146_42"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.9999 12.4219) rotate(60.8025) scale(9.1286 14.4711)"
        >
          <stop stopColor="#6B6B6B" />
          <stop offset="1" />
        </radialGradient>
      </defs>
    </svg>
  ),
  IncreaseArrow: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <path
        d="M2.5 14.6667L7.5 9.66668L10.8333 13L17.5 6.33334M17.5 6.33334H11.6667M17.5 6.33334V12.1667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  DecreaseArrow: (props: IGeneralIcons): JSX.Element => (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <path
        d="M3.25 6.33398L8.25 11.334L11.5833 8.00065L18.25 14.6673M18.25 14.6673V8.83398M18.25 14.6673H12.4167"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  EnvelopeMail: (props?: IGeneralIcons): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      className={props?.className}
    >
      <g clipPath="url(#clip0_71_12167)">
        <path
          d="M68.9061 21.0887L38.2812 4.10267C36.28 2.99703 33.8511 2.99703 31.8499 4.10267L1.09375 21.0887C0.420956 21.4771 0.00464843 22.1931 0 22.97C0.059746 23.6875 0.468808 24.3296 1.09375 24.6871L31.7187 41.9355C33.7156 43.058 36.1532 43.058 38.1499 41.9355L68.9061 24.6871C69.5311 24.3296 69.9401 23.6875 69.9999 22.97C69.9952 22.1931 69.5789 21.477 68.9061 21.0887Z"
          fill="#B06328"
        />
        <path
          d="M63.2516 22.2594L63.9844 18.3656L60.1563 16.2656V27.3452L36.7501 37.517C35.6373 38.0009 34.3738 38.0009 33.261 37.517L0 23.0577C0.0866795 23.7432 0.492323 24.3473 1.09375 24.6873L31.7187 41.9358C33.7156 43.0582 36.1532 43.0582 38.1499 41.9358L60.156 29.5326L62.0482 28.4389L68.906 24.6873C69.5074 24.3475 69.913 23.7432 69.9997 23.0577L66.281 24.6655C65.1748 25.1514 63.8843 24.6485 63.3985 23.5423C63.2216 23.1393 63.1702 22.6921 63.2516 22.2594Z"
          fill="#A35425"
        />
        <path
          d="M69.9999 22.9689C69.9401 23.6864 69.5311 24.3286 68.9061 24.6861L38.2812 41.9345C36.2843 43.0569 33.8467 43.0569 31.8499 41.9345L1.09375 24.6859C0.468808 24.3284 0.059746 23.6862 0 22.9688V66.9046C0 68.614 1.38578 69.9999 3.09531 69.9999H66.9047C68.6141 69.9999 70 68.6141 70 66.9046L69.9999 22.9689Z"
          fill="#FFCB5B"
        />
        <path
          d="M69.9999 22.9689C69.9401 23.6864 69.5311 24.3286 68.9061 24.6861L38.2812 41.9345C36.2843 43.0569 33.8467 43.0569 31.8499 41.9345L1.09375 24.6859C0.934202 24.5961 0.787229 24.4856 0.656253 24.3578C0.582835 24.2648 0.516937 24.1661 0.459378 24.0625L0.350004 23.9203C0.274398 23.7921 0.212055 23.6566 0.164067 23.5156V23.45C0.0959807 23.3209 0.0411566 23.1853 4.34829e-06 23.0453V22.9688V25.1562C-0.00149955 25.912 0.387191 26.615 1.02813 27.0156L31.5218 46.0687L31.8718 46.2875C33.8246 47.4867 35.0103 49.6178 34.9999 51.9093V58.9859C34.9999 62.6525 32.0275 65.6249 28.3609 65.6249H9.84373C7.42737 65.6249 5.46874 67.5837 5.46874 69.9999H66.9046C68.614 69.9999 69.9999 68.6141 69.9999 66.9046V22.9689Z"
          fill="#FFBD3C"
        />
        <path
          d="M49.2187 0H13.125C11.3128 0 9.84375 1.46904 9.84375 3.28111V29.5967L31.7843 41.9451C33.7812 43.0676 36.2188 43.0676 38.2156 41.9451L60.1561 29.5967V10.9373L49.2187 0Z"
          fill="#E9E9E9"
        />
        <path
          d="M32.9875 40.4032L9.84375 28.4375V29.5969L31.7843 41.9453C33.7812 43.0677 36.2188 43.0677 38.2156 41.9453L60.1561 29.5969V28.4375L37.0124 40.4032C35.7504 41.057 34.2495 41.057 32.9875 40.4032Z"
          fill="#DBDAD9"
        />
        <path
          d="M27.3437 8.75H42.6562C43.2602 8.75 43.75 9.23973 43.75 9.84375C43.75 10.4478 43.2602 10.9375 42.6562 10.9375H27.3437C26.7397 10.9375 26.25 10.4478 26.25 9.84375C26.25 9.23973 26.7397 8.75 27.3437 8.75Z"
          fill="#595A66"
        />
        <path
          d="M19.6875 16.4062H35C35.604 16.4062 36.0937 16.896 36.0937 17.5C36.0937 18.104 35.604 18.5937 35 18.5937H19.6875C19.0835 18.5937 18.5938 18.104 18.5938 17.5C18.5938 16.8958 19.0835 16.4062 19.6875 16.4062Z"
          fill="#6F707E"
        />
        <path
          d="M19.6875 27.3438H42.6562C43.2602 27.3438 43.7499 27.8335 43.7499 28.4375C43.7499 29.0415 43.2602 29.5312 42.6562 29.5312H19.6875C19.0835 29.5312 18.5938 29.0415 18.5938 28.4375C18.5938 27.8335 19.0835 27.3438 19.6875 27.3438Z"
          fill="#6F707E"
        />
        <path
          d="M19.6875 21.875H29.5312C30.1353 21.875 30.625 22.3647 30.625 22.9687C30.625 23.5728 30.1353 24.0625 29.5312 24.0625H19.6875C19.0835 24.0625 18.5938 23.5728 18.5938 22.9687C18.5938 22.3647 19.0835 21.875 19.6875 21.875Z"
          fill="#6F707E"
        />
        <path
          d="M44.8437 21.875H52.5C53.104 21.875 53.5937 22.3647 53.5937 22.9687C53.5937 23.5728 53.104 24.0625 52.5 24.0625H44.8437C44.2397 24.0625 43.75 23.5728 43.75 22.9687C43.75 22.3647 44.2397 21.875 44.8437 21.875Z"
          fill="#6F707E"
        />
        <path
          d="M33.9062 21.875H40.4687C41.0728 21.875 41.5625 22.3647 41.5625 22.9687C41.5625 23.5728 41.0728 24.0625 40.4687 24.0625H33.9062C33.3022 24.0625 32.8125 23.5728 32.8125 22.9687C32.8125 22.3647 33.3021 21.875 33.9062 21.875Z"
          fill="#6F707E"
        />
        <path
          d="M47.0312 27.3438H52.5C53.104 27.3438 53.5937 27.8335 53.5937 28.4375C53.5937 29.0415 53.104 29.5312 52.5 29.5312H47.0312C46.4272 29.5312 45.9375 29.0415 45.9375 28.4375C45.9375 27.8335 46.4272 27.3438 47.0312 27.3438Z"
          fill="#6F707E"
        />
        <path
          d="M39.375 16.4062H52.5C53.104 16.4062 53.5937 16.896 53.5937 17.5C53.5937 18.104 53.104 18.5937 52.5 18.5937H39.375C38.771 18.5937 38.2812 18.104 38.2812 17.5C38.2812 16.8958 38.7708 16.4062 39.375 16.4062Z"
          fill="#6F707E"
        />
        <path
          d="M52.5 10.9375H60.1562L49.2188 0V7.65623C49.2188 9.46844 50.6878 10.9375 52.5 10.9375Z"
          fill="#CAD1D8"
        />
        <path
          d="M60.1562 10.9375H52.5L60.1562 18.5937V10.9375Z"
          fill="#DDDDDC"
        />
      </g>
      <defs>
        <clipPath id="clip0_71_12167">
          <rect width="70" height="70" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  Download: (props?: IGeneralIcons): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={cn(props?.className)}
    >
      <path
        d="M4 17.2949V19.2949C4 19.8254 4.21071 20.3341 4.58579 20.7091C4.96086 21.0842 5.46957 21.2949 6 21.2949H18C18.5304 21.2949 19.0391 21.0842 19.4142 20.7091C19.7893 20.3341 20 19.8254 20 19.2949V17.2949M7 11.2949L12 16.2949M12 16.2949L17 11.2949M12 16.2949V4.29492"
        stroke="#5A6A85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Eye: (props?: IGeneralIcons): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={cn(props?.className)}
    >
      <path
        d="M6.66667 8C6.66667 8.35362 6.80714 8.69276 7.05719 8.94281C7.30724 9.19286 7.64638 9.33333 8 9.33333C8.35362 9.33333 8.69276 9.19286 8.94281 8.94281C9.19286 8.69276 9.33333 8.35362 9.33333 8C9.33333 7.64638 9.19286 7.30724 8.94281 7.05719C8.69276 6.80714 8.35362 6.66667 8 6.66667C7.64638 6.66667 7.30724 6.80714 7.05719 7.05719C6.80714 7.30724 6.66667 7.64638 6.66667 8Z"
        stroke="#5A6A85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8C12.4 10.6667 10.4 12 8 12C5.6 12 3.6 10.6667 2 8C3.6 5.33333 5.6 4 8 4C10.4 4 12.4 5.33333 14 8Z"
        stroke="#5A6A85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Lock: (props?: IGeneralIcons): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      className={cn(props?.className)}
    >
      <path
        d="M5.3335 7.83333V5.16667C5.3335 4.45942 5.61445 3.78115 6.11454 3.28105C6.61464 2.78095 7.29292 2.5 8.00016 2.5C8.70741 2.5 9.38568 2.78095 9.88578 3.28105C10.3859 3.78115 10.6668 4.45942 10.6668 5.16667V7.83333M3.3335 9.16667C3.3335 8.81304 3.47397 8.47391 3.72402 8.22386C3.97407 7.97381 4.31321 7.83333 4.66683 7.83333H11.3335C11.6871 7.83333 12.0263 7.97381 12.2763 8.22386C12.5264 8.47391 12.6668 8.81304 12.6668 9.16667V13.1667C12.6668 13.5203 12.5264 13.8594 12.2763 14.1095C12.0263 14.3595 11.6871 14.5 11.3335 14.5H4.66683C4.31321 14.5 3.97407 14.3595 3.72402 14.1095C3.47397 13.8594 3.3335 13.5203 3.3335 13.1667V9.16667ZM7.3335 11.1667C7.3335 11.3435 7.40373 11.513 7.52876 11.6381C7.65378 11.7631 7.82335 11.8333 8.00016 11.8333C8.17697 11.8333 8.34654 11.7631 8.47157 11.6381C8.59659 11.513 8.66683 11.3435 8.66683 11.1667C8.66683 10.9899 8.59659 10.8203 8.47157 10.6953C8.34654 10.5702 8.17697 10.5 8.00016 10.5C7.82335 10.5 7.65378 10.5702 7.52876 10.6953C7.40373 10.8203 7.3335 10.9899 7.3335 11.1667Z"
        stroke="#5A6A85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  X: (props?: IGeneralIcons): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={props?.className}
    >
      <path d="M12 4L4 12L12 4Z" fill="#7C8FAC" />
      <path d="M4 4L12 12L4 4Z" fill="#7C8FAC" />
      <path
        d="M12 4L4 12M4 4L12 12"
        stroke="#7C8FAC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Plus: (props?: IGeneralIcons): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={props?.className}
    >
      <path
        d="M12 5.29492V19.2949M5 12.2949H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ArrowLeft: (props?: IGeneralIcons): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={cn(props?.className)}
    >
      <path
        d="M5 12.2949H19M5 12.2949L11 18.2949M5 12.2949L11 6.29492"
        stroke="#5A6A85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Ellipse: (props?: IGeneralIcons): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="none"
      className={cn(props?.className)}
    >
      <circle cx="2.5" cy="2.08984" r="2" fill="#D9D9D9" />
    </svg>
  ),
}
