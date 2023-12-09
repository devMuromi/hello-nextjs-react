import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  function addMeetipHandler(meetupData) {
    const URL = "";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetipHandler} />
    </section>
  );
}

export default NewMeetupsPage;
