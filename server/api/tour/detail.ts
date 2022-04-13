export default () => ({
  tourURI: "komodo-island-2-day-tour",
  tourName: "Komodo Islands: Private 2-Day Tour with Phinisi Boat Stay",
  tourImage: [
    "https://cdn.getyourguide.com/img/tour/5a438bd7837b4.jpeg/98.jpg",
    "https://cdn.getyourguide.com/img/tour/5cbec1398147a.jpeg/145.jpg",
    "https://cdn.getyourguide.com/img/tour/5cbec3d9404be.jpeg/145.jpg",
    "https://cdn.getyourguide.com/img/tour/5a438b9d3ac88.jpeg/145.jpg"
  ],
  tourPrice: 6867000,
  tourRating: 4.4,
  tourReviewNumber: 43,
  bookingDetail: {
    bookingPax: {
      adult: 3,
      children: 1
    },
    tourDate: '2022-04-04'
  },
  tourLeader: {
    name: 'Jackson Suhendar',
    role: 'Tour Leader',
    title: 'Kupang, NTT',
    phone: '628111111111',
    email: 'js.blabla@mail.com',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  tourDetail: {
    tourHighlight: "Look for Komodo Dragons and other wildlife on a private 2-day tour of the Komodo islands. Go for a jungle trek in the habitat of the giant lizards, discover a beach of amazing pink sand and spend the night on a boat.",
    tourTNC: [],
    tourPlaces: ['Labuan Bajo',
      'Pulau Kelor',
      'Pulau Manjarite',
      'Pulau Kalong',
      'Pulau Padar',
      'Pink Beach',
      'Pulau Komodo',
      "Taka Makassar",
      "Manta Point",
      "Pulau Kanawa",
    ],
    tourFacility: [
      "Pick Up & Drop off Labuan Bajo",
      "Living on board 3D2N / Staying on board",
      "Comfort Cabin with AC",
      "Chef & Boat Crew",
      "Bean bags & sun decks",
      "speed boat",
      "Meals during trip",
      "Snorkeling set",
      "Mineral water free flow",
      "Local guide & Tour leader",
      "Snack , Coffea & Tea during trip",
      "Life jacket",
      "Documentation set (gopro, mirrorless /dslr, drone)",
    ],
  },
  tourShortDesc: "Look for Komodo Dragons and other wildlife on a private 2-day tour of the Komodo islands. Go for a jungle trek in the habitat of the giant lizards, discover a beach of amazing pink sand and spend the night on a boat.",
  tourItinerary: [
    {
      title: "Day 1",
      subTitle: "Kelor Island - Menjerite - Rinca - Kalong Kinca",
      itinerary: [
        {
          timeStart: "08:00",
          timeEnd: "10:00",
          description: "Pick up from Hotel or Airport",
          detail: {
            title: 'Pick up Information',
            content: `
                <h4>Vehicle</h4>
                <p>Type: <strong>Toyota Alphard Black</strong><br />License Plate: <strong>EB 4729 DH</strong></p>
                <h4>Contact person</h4>
                <p><strong>Peter Parker</strong><br />Driver</p>
                <p>08111111111</p>
                <p><a class="btn bg-base-100 border text-base-content m-2" href="#">WA</a> <a class="btn bg-base-100 border text-base-content m-2" href="#">CALL</a></p>
`
          }
        },
        {
          timeStart: "10:00",
          timeEnd: "10:30",
          description: "Sailing to Kelor Island",
          detail: {
            title: 'Sailing Trivia',
            content: `
                <p>It's will be great if you wear sunglasses and a hat.</p>
                `
          }
        },
        {
          timeStart: "10:30",
          timeEnd: "12:00",
          description: "Arriving at Kelor Island",
          detail: {
            title: 'Great place to do',
            content: `
                <ul>
                <li>Trekking to Kelor Island Hill</li>
                <li>Snorkeling</li>
                <li>Beach volleyball</li>
                <li>Bring back your rubbish and leftover.</li>
</ul>
                `
          }
        },
        {
          timeStart: "12:00",
          timeEnd: "13:00",
          description: "Lunch while sailing to Menjerite"
        }
      ]
    },
    {
      title: "Day 2",
      subTitle: "Padar Island - Pink Beach - Manta Point - Taka Makassar - Sebayur Island",
      itinerary: [
        {
          timeStart: "05:00",
          timeEnd: "06:00",
          description: "Preparing for Sunrise Trekking in Padar Island"
        },
        {
          timeStart: "06:00",
          timeEnd: "08:00",
          description: "Activity in Padar Island"
        },
        {
          timeStart: "08:00",
          timeEnd: "09:00",
          description: "Breakfast"
        },
        {
          timeStart: "09:00",
          timeEnd: "11:00",
          description: "Sailing to Pink Beach"
        }
      ]
    }
  ]
})