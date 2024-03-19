import { useEffect, useState } from "react";

const useFetchRandomUser = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const user = await res.json();
      setData(user);
      user.results.comment = [
        "“I like it because I like to travel far and still can connect with high speed.”.",
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
        "Lasles VPN is an exceptional provider. I've had a positive experience with their fast connection, unlimited bandwidt.",
      ];
    };
    fetchData();
  }, [url]);

  return data;
};
export default useFetchRandomUser;
