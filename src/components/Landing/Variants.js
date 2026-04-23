// export const slideUp = {
//   initial: {
//     y: 120,
//     opacity: 0
//   },
//   enter: (i = 0) => ({
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: [0.33, 1, 0.68, 1],
//       delay: 0.2 + i * 0.15
//     }
//   })
// }




export const slideUp = {
	initial: {
		y: 80,
		opacity: 0
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: [0.33, 1, 0.68, 1]
		}
	}
};