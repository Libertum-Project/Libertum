export const fetchEnvironmentVariables = async () => {
  try {
    const response = await fetch(
      "/api/smartcontract?function=getEnvironmentVariables",
      {
        method: "GET",
        cache: "no-store",
      },
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
