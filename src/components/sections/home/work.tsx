import { IconStarFilled } from '@tabler/icons-react';

export default function Work() {
  return (
    <>
      <section className="bg-black h-[130vh] text-white flex justify-around items-center p-20 w-full">
        <div className="w-[45%] pt-10">
          <button className="flex items-center border border-gray-600 pt-3 pb-3 pl-5 pr-5 rounded-full">
            <p className="bg-primarySecond w-[14px] h-[14px] rounded-full"></p>{' '}
            <p className="ml-3 text-gray-400">It feels real because it is.</p>
          </button>
          <h2 className="font-semibold text-[54.08px]">
            The closest thing to your star customer service agent
          </h2>
          <div className="flex items-center pt-7">
            <span>
              <IconStarFilled className="text-slate-300 w-1.8 h-1.8" />
            </span>
            <p className="pl-4">Human empathy in every interaction</p>{' '}
          </div>
          <div className="flex items-center pt-7">
            <span>
              <IconStarFilled className="text-slate-300 w-1.8 h-1.8" />
            </span>
            <p className="pl-4">Resolves issues instead of deflecting them</p>{' '}
          </div>
          <div className="flex items-center pt-7">
            <span>
              <IconStarFilled className="text-slate-300 w-1.8 h-1.8" />
            </span>
            <p className="pl-4">Effortless omnichannel management</p>{' '}
          </div>
          <div className="pt-12">
            <button className="border border-transparent pl-10 pr-10 pt-4 pb-4 rounded-full hover:rounded-br-none hover:duration-300 bg-primarySecond text-black">
              Book a demo
            </button>
          </div>
        </div>
        <div className="w-[55%]">
          <FloatingCircle />
        </div>
      </section>
    </>
  );
}


function FloatingCircle() {
  return (
  <div className="relative top-0 left-0">
             <svg
            className="integration-svg relative top-0 left-0"
            fill="none"
            viewBox="0 0 624 624"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              opacity=".7"
              stroke-width="2.149"
              data-svg-origin="312 312"
              transform="matrix(1,0,0,1,0,0)"
            >
              <path
                d="m622 312c0 171.21-138.79 310-310 310s-310-138.79-310-310 138.79-310 310-310 310 138.79 310 310z"
                stroke="url(#b)"
              ></path>
              <path
                className="circle-big"
                d="m622 312c0 171.21-138.79 310-310 310s-310-138.79-310-310 138.79-310 310-310 310 138.79 310 310z"
                stroke="url(#a)"
              ></path>
            </g>
            <g
              opacity=".7"
              stroke-width="2.149"
              data-svg-origin="312.0049743652344 312.0050354003906"
              transform="matrix(1,0,0,1,0,0)"
            >
              <path
                className="circle-medium"
                d="m544.66 312c0 128.49-104.16 232.66-232.66 232.66s-232.65-104.16-232.65-232.66 104.16-232.65 232.65-232.65 232.66 104.16 232.66 232.65z"
                stroke="url(#b)"
              ></path>
              <path
                d="m544.66 312c0 128.49-104.16 232.66-232.66 232.66s-232.65-104.16-232.65-232.66 104.16-232.65 232.65-232.65 232.66 104.16 232.66 232.65z"
                stroke="url(#a)"
              ></path>
            </g>
            <g
              opacity=".7"
              stroke-width="2.149"
              data-svg-origin="312.00001525878906 312.00001525878906"
              transform="matrix(1,0,0,1,0,0)"
            >
              <path
                className="circle-small"
                d="m477.21 312c0 91.243-73.967 165.21-165.21 165.21s-165.21-73.967-165.21-165.21 73.967-165.21 165.21-165.21 165.21 73.966 165.21 165.21z"
                stroke="url(#b)"
              ></path>
              <path
                d="m477.21 312c0 91.243-73.967 165.21-165.21 165.21s-165.21-73.967-165.21-165.21 73.967-165.21 165.21-165.21 165.21 73.966 165.21 165.21z"
                stroke="url(#a)"
              ></path>
            </g>
            <g
              opacity=".7"
              stroke-width="2.149"
              data-svg-origin="312.00000762939453 312.00000762939453"
              transform="matrix(1,0,0,1,0,0)"
            >
              <path
                d="m415.33 312c0 57.07-46.264 103.33-103.33 103.33s-103.33-46.263-103.33-103.33c0-57.069 46.264-103.33 103.33-103.33s103.33 46.264 103.33 103.33z"
                stroke="url(#b)"
              ></path>
              <path
                d="m415.33 312c0 57.07-46.264 103.33-103.33 103.33s-103.33-46.263-103.33-103.33c0-57.069 46.264-103.33 103.33-103.33s103.33 46.264 103.33 103.33z"
                stroke="url(#a)"
              ></path>
            </g>
            <g
              opacity=".7"
              stroke-width="2.149"
              data-svg-origin="311.9965057373047 312.00050354003906"
              transform="matrix(1,0,0,1,0,0)"
            >
              <path
                d="m360.26 312c0 26.655-21.609 48.264-48.264 48.264s-48.263-21.609-48.263-48.264 21.608-48.263 48.263-48.263 48.264 21.608 48.264 48.263z"
                stroke="url(#b)"
              ></path>
              <path
                d="m360.26 312c0 26.655-21.609 48.264-48.264 48.264s-48.263-21.609-48.263-48.264 21.608-48.263 48.263-48.263 48.264 21.608 48.264 48.263z"
                stroke="url(#a)"
              ></path>
            </g>
            {/* <g className="integration-logo">
              <path
                d="m287.09 321.07c-1.148 0-2.259-0.156-3.334-0.467-1.068-0.311-2.037-0.766-2.909-1.365v-3.037c0.799 0.637 1.721 1.13 2.767 1.479 1.054 0.348 2.11 0.523 3.171 0.523 0.799 0 1.402-0.125 1.808-0.376 0.407-0.25 0.611-0.595 0.611-1.035 0-0.318-0.106-0.595-0.316-0.83-0.204-0.243-0.603-0.444-1.199-0.603l-2.844-0.705c-1.394-0.357-2.4-0.854-3.018-1.491-0.61-0.637-0.915-1.433-0.915-2.388 0-0.82 0.244-1.54 0.73-2.162 0.494-0.622 1.199-1.103 2.114-1.445 0.922-0.348 2.001-0.523 3.236-0.523 1.118 0 2.135 0.137 3.051 0.41 0.915 0.265 1.703 0.622 2.364 1.069v2.935c-0.668-0.478-1.435-0.857-2.299-1.138-0.864-0.288-1.783-0.432-2.757-0.432-0.864 0-1.51 0.114-1.939 0.341-0.429 0.22-0.643 0.531-0.643 0.933 0 0.334 0.145 0.599 0.436 0.796 0.298 0.198 0.788 0.376 1.471 0.535l2.549 0.58c1.279 0.273 2.248 0.725 2.909 1.354s0.992 1.513 0.992 2.651c0 0.872-0.24 1.641-0.719 2.309-0.472 0.66-1.162 1.172-2.07 1.536s-1.99 0.546-3.247 0.546z"
                fill="#fff"
              ></path>
              <path
                d="m296.35 306.62c-0.422 0-0.799-0.08-1.134-0.239-0.334-0.167-0.595-0.394-0.784-0.682-0.189-0.289-0.283-0.611-0.283-0.967 0-0.349 0.094-0.664 0.283-0.945 0.196-0.28 0.461-0.5 0.795-0.659 0.335-0.16 0.709-0.239 1.123-0.239 0.406 0 0.773 0.079 1.1 0.239 0.327 0.159 0.581 0.379 0.763 0.659 0.189 0.281 0.283 0.596 0.283 0.945 0 0.356-0.094 0.678-0.283 0.967-0.182 0.288-0.436 0.515-0.763 0.682-0.327 0.159-0.694 0.239-1.1 0.239zm-1.918 1.058h3.792v12.991h-3.792v-12.991z"
                fill="#fff"
              ></path>
              <path
                d="m313.63 314.56h-10.285c0.211 1.054 0.748 1.873 1.612 2.457 0.865 0.577 2.002 0.865 3.411 0.865 0.929 0 1.797-0.144 2.604-0.432 0.813-0.288 1.554-0.683 2.222-1.183v3.071c-0.69 0.531-1.54 0.956-2.549 1.274-1.003 0.311-2.048 0.467-3.138 0.467-1.591 0-2.985-0.308-4.184-0.922-1.198-0.614-2.124-1.475-2.778-2.582-0.647-1.107-0.97-2.378-0.97-3.811 0-1.335 0.294-2.541 0.883-3.617 0.595-1.077 1.449-1.927 2.56-2.549 1.119-0.629 2.43-0.944 3.933-0.944 1.431 0 2.644 0.262 3.639 0.785 1.003 0.516 1.758 1.259 2.267 2.23 0.515 0.963 0.773 2.116 0.773 3.458v1.433zm-6.592-4.834c-0.995 0-1.805 0.25-2.429 0.75-0.625 0.493-1.024 1.157-1.199 1.991h7.017c-0.08-0.88-0.414-1.555-1.002-2.025-0.582-0.478-1.377-0.716-2.387-0.716z"
                fill="#fff"
              ></path>
              <path
                d="m323.82 306.65c1.126 0 2.081 0.25 2.865 0.751 0.785 0.493 1.38 1.221 1.787 2.184 0.414 0.956 0.621 2.12 0.621 3.492v7.588h-3.791v-6.712c0-1.327-0.255-2.316-0.763-2.969-0.508-0.659-1.278-0.989-2.31-0.989-0.733 0-1.358 0.159-1.874 0.477-0.508 0.319-0.893 0.77-1.155 1.354-0.254 0.584-0.381 1.263-0.381 2.036v6.803h-3.781v-13.457h3.759v3.06c0.458-1.221 1.101-2.128 1.929-2.719 0.828-0.599 1.859-0.899 3.094-0.899z"
                fill="#fff"
              ></path>
              <path
                d="m336.31 306.65c1.43 0 2.658 0.258 3.682 0.774 1.024 0.515 1.805 1.274 2.343 2.275 0.544 1.001 0.817 2.218 0.817 3.651v7.315h-3.705v-1.82c-0.443 0.751-1.046 1.32-1.808 1.706-0.756 0.379-1.638 0.569-2.648 0.569-0.944 0-1.772-0.193-2.484-0.58s-1.264-0.914-1.656-1.581c-0.385-0.675-0.577-1.43-0.577-2.264 0-0.842 0.199-1.593 0.599-2.252 0.407-0.668 0.98-1.187 1.721-1.559 0.748-0.379 1.613-0.569 2.593-0.569 1.896 0 3.313 0.645 4.25 1.934v-0.546c-0.015-0.834-0.204-1.536-0.567-2.104-0.363-0.569-0.861-0.994-1.493-1.274-0.624-0.289-1.347-0.433-2.168-0.433-1.663 0-3.087 0.596-4.271 1.786v-3.276c1.525-1.168 3.316-1.752 5.372-1.752zm0.185 11.945c0.566 0 1.071-0.091 1.514-0.273 0.451-0.182 0.803-0.436 1.057-0.763 0.254-0.326 0.381-0.69 0.381-1.092 0-0.386-0.119-0.731-0.359-1.035-0.24-0.311-0.581-0.553-1.024-0.728-0.436-0.174-0.941-0.261-1.515-0.261-0.559 0-1.042 0.087-1.449 0.261-0.407 0.175-0.719 0.417-0.937 0.728-0.21 0.311-0.316 0.668-0.316 1.07 0 0.409 0.106 0.773 0.316 1.092 0.211 0.318 0.516 0.565 0.915 0.739 0.4 0.174 0.872 0.262 1.417 0.262z"
                fill="#fff"
              ></path>
            </g> */}
            <defs>
              <radialGradient
                id="b"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="translate(235.02 293.57) rotate(-21.898) scale(242.13 263.89)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DBFF1D" offset=".10938"></stop>
                <stop stop-color="#DBFF1D" offset=".32812"></stop>
                <stop stop-color="#DBFF1D" offset=".48438"></stop>
                <stop stop-color="#FE7DC2" offset=".82292"></stop>
              </radialGradient>
              <radialGradient
                id="a"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="translate(312.54 312) rotate(90) scale(310.54 393.11)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0" offset="0"></stop>
                <stop stop-opacity=".62" offset=".52083"></stop>
                <stop stop-opacity=".87" offset="1"></stop>
              </radialGradient>
            </defs>
      </svg>
      {/* <FloatingEmoji left={50} top={30} /> */}
    </div>
  ) 
}

function FloatingEmoji({ emoji = 'OO', top=50, left=30 }) {
  return (
    <span className={`absolute top-[${top}%] left-[${left}%] -transform-x-1/2 -transform-y-1/2`} >{emoji}</span>
  )
}