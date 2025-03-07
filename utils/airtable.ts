import Airtable from "airtable";

// Example URL: https://airtable.com/app9FKZ1Mu9gM63Qw/tbltfgIYuDxBTacqU/
const AIRTABLE_BASE_ID = "appGpnLmhyc1qr0dg";
const AIRTABLE_TABLE_ID = "tblphw88FRDobZ06b";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(AIRTABLE_BASE_ID);

type Attendee = {
  Name: string;
  "Calculated Type": "friend" | "supporter" | "legend";
  Created: string;
};

type AttendeesList = {
  friend: string[];
  supporter: string[];
  legend: string[];
};

export async function getAttendees(): Promise<AttendeesList> {
  const records = await base(AIRTABLE_TABLE_ID)
    .select({
      fields: ["Name", "Calculated Type", "Created"],
      sort: [{ field: "Created", direction: "asc" }],
    })
    // .select({
    //   fields: ["Name", "Calculated Type", "Created"],
    // })
    .all();

  const attendeesList: AttendeesList = {
    friend: [],
    supporter: [],
    legend: ["pico", "ada"],
  };

  records.forEach((record) => {
    const name = record.get("Name") as string;
    const type = record.get("Calculated Type") as Attendee["Calculated Type"];

    switch (type) {
      case "friend":
        attendeesList.friend.push(name);
        break;
      case "supporter":
        attendeesList.supporter.push(name);
        break;
      case "legend":
        // Ignore duplicates, since we're hardcoding 
        if (!attendeesList.legend.includes(name)) {
          attendeesList.legend.push(name);
        }
        break;
    }
  });

  return attendeesList;
}
