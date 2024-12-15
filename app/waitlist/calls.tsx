import supabase from "../../supabase.js";

const insertInSupabase = async ({
  payload,
}: {
  payload: { email: string; name: string; university: string };
}) => {
  const { data: waitlist, error: waitlistError } = await supabase
    .from("waiting_list")
    .select("email");

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
            name: payload.name,
            university: payload.university,
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
          name: payload.name,
          university: payload.university,
        },
      ])
      .select("*");
    return { error: false };
  }
};

export { insertInSupabase };