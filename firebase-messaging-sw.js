importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB_WtsinTI3ORe4IeX7KR_hqEnLP-wGEys",
  authDomain: "my-reminders-56391.firebaseapp.com",
  projectId: "my-reminders-56391",
  storageBucket: "my-reminders-56391.firebasestorage.app",
  messagingSenderId: "532632048136",
  appId: "1:532632048136:web:bad41bc26d5901499077bd"
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage(function(payload) {
  console.log("Background message received:", payload);
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || "🌿 Reminder", {
    body: body || "You have a reminder!",
    icon: "/icon.png",
    badge: "/icon.png",
  });
});

// Show notification when app is in background
self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("/")
  );
});
