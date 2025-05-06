// export const sessions = [
//     {
//       clientName: 'John Doe',
//       sessionStartTime: new Date(new Date().setHours(9, 0, 0)),
//       sessionEndTime: new Date(new Date().setHours(10, 0, 0)),
//       tag: 'New',
//       sessionType:'available'
//     },
//     {
//       clientName: 'Jane Smith',
//       sessionStartTime: new Date(new Date().setHours(11, 0, 0)),
//       sessionEndTime: new Date(new Date().setHours(12, 0, 0)),
//       tag: null,
//       sessionType:'faceToFace'
//     },
//     {
//       clientName: 'Samuel Lee',
//       sessionStartTime: new Date(new Date().setHours(13, 0, 0)),
//       sessionEndTime: new Date(new Date().setHours(14, 0, 0)),
//       tag: null,
//       sessionType:'online'
//     },
//     {
//       clientName: 'Emma Brown',
//       sessionStartTime: new Date(new Date().setHours(14, 0, 0)),
//       sessionEndTime: new Date(new Date().setHours(15, 0, 0)),
//       tag: null,
//     },
//     {
//       clientName: 'Oliver Davis',
//       sessionStartTime: new Date(new Date().setHours(16, 0, 0)),
//       sessionEndTime: new Date(new Date().setHours(17, 0, 0)),
//       tag: null,
//     },
//   ];

export const sessions = [
  {
    clientName: 'John Doe',
    sessionStartTime: new Date(new Date().setHours(9, 0, 0)),
    sessionEndTime: new Date(new Date().setHours(10, 0, 0)),
    tag: null,
    sessionType: 'available', // ✅ Added sessionType for color coding
  },
  {
    clientName: 'Jane Smith',
    sessionStartTime: new Date(new Date().setHours(11, 0, 0)),
    sessionEndTime: new Date(new Date().setHours(12, 0, 0)),
    tag: null,
    sessionType: 'faceToFace', // ✅ Red Bar
  },
  {
    clientName: 'Samuel Lee',
    sessionStartTime: new Date(new Date().setHours(13, 0, 0)),
    sessionEndTime: new Date(new Date().setHours(14, 0, 0)),
    tag: 'New',
    sessionType: 'online', // ✅ Blue Bar
  },
  {
    clientName: 'Emma Brown',
    sessionStartTime: new Date(new Date().setHours(14, 0, 0)),
    sessionEndTime: new Date(new Date().setHours(15, 0, 0)),
    tag: null,
    sessionType: 'available', // ✅ Green Bar
  },
  {
    clientName: 'Oliver Davis',
    sessionStartTime: new Date(new Date().setHours(16, 0, 0)),
    sessionEndTime: new Date(new Date().setHours(17, 0, 0)),
    tag: 'New',
    sessionType: 'faceToFace', // ✅ Red Bar
  },
];
