//   useEffect(() => {
//     if (!isLoading) {
//       if (role !== "admin") {
//         router.push("/");
//         toast.error("Unauthorized Access!", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     }
//   }, [role]);

export function validateImageFile(files) {
  // Check if file is an image
  const acceptedImageTypes = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/svg+xml",
  ];
  if (!acceptedImageTypes.includes(files[0]?.type)) {
    return {
      isValid: false,
      errorMessage: "Only PNG, JPEG, JPG, and SVG images are allowed",
    };
  }
  // Return validation success
  return {
    isValid: true,
    errorMessage: null,
  };
}
