import supabase from "../../supabase.js";

const fetchIP = async () => {
  const res = await fetch("/api/get-ip");
  console.log("RES", res);
  const data = await res.json();
  if (data.ip !== "::1") {
    return data.ip;
  } else {
    return "JACK";
  }
};

const insertInSupabase = async ({
  payload,
}: {
  payload: {
    email: string;
    fname: string;
    university: string;
    lname: string;
    year: string;
  };
}) => {
  const { data: waitlist, error: waitlistError } = await supabase
    .from("waiting_list")
    .select("email");

  const ip = await fetchIP();

  const waitlistVal = waitlist ?? [];

  if (waitlistVal.length > 0) {
    const filteredWaitlist = waitlistVal.filter(
      (email) => email.email === payload.email
    );
    if (filteredWaitlist.length > 0) {
      return { error: true, errorMessage: "User already present in database" };
    } else {
      await supabase
        .from("waiting_list")
        .insert([
          {
            email: payload.email,
            fname: payload.fname,
            university: payload.university,
            lname: payload.lname,
            year: payload.year,
            ip: ip,
          },
        ])
        .select("*");
      return { error: false };
    }
  } else {
    await supabase
      .from("waiting_list")
      .insert([
        {
          email: payload.email,
          fname: payload.fname,
          university: payload.university,
          lname: payload.lname,
          year: payload.year,
          ip: ip,
        },
      ])
      .select("*");
    return { error: false };
  }
};

const insertVisit = async (ip: string, page: string) => {
  await supabase.from("visits").insert([{ ip: ip, page: page }]);
};

export { insertInSupabase, insertVisit };
