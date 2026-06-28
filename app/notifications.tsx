import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import notificationsData from "../constants/notifications.json";
import { C } from "./(tabs)/index.styles";
import { styles } from "./notifications.styles";

type Notification = {
  id: string;
  title: string;
  time: string;
  description: string;
  status?: "new" | "processing" | "success" | "failed";
  unread?: boolean;
  icon?: string;
  iconColor?: string;
};

// load initial notification data from constants/notifications.json
const initialToday: Notification[] = notificationsData.today as Notification[];
const initialYesterday: Notification[] =
  notificationsData.yesterday as Notification[];
const initialLastWeek: Notification[] =
  notificationsData.lastWeek as Notification[];

export default function NotificationsScreen() {
  const router = useRouter();
  const [today, setToday] = useState(initialToday);
  const [allRead, setAllRead] = useState(false);
  const [yesterday] = useState(initialYesterday);
  const [lastWeek] = useState(initialLastWeek);

  function markAllRead() {
    setToday((prev) => prev.map((n) => ({ ...n, unread: false })));
    setAllRead(true);
  }

  function renderCard(n: Notification) {
    return (
      <View
        key={n.id}
        style={[styles.notificationCard, n.unread ? styles.unreadCard : null]}
      >
        {n.unread && <View style={styles.unreadBar} />}
        <View
          style={[
            styles.iconContainer,
            n.iconColor ? { color: n.iconColor } : null,
          ]}
        >
          <MaterialIcons
            name={n.icon || "notifications"}
            size={20}
            color={n.iconColor ? n.iconColor : C.onSurface}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{n.title}</Text>
            <Text style={styles.time}>{n.time}</Text>
          </View>
          <Text style={styles.description}>{n.description}</Text>
          {n.unread && n.status ? (
            <View style={styles.badgeRow}>
              <View style={styles.statusDot} />
              <Text
                style={[
                  styles.statusText,
                  n.status === "processing"
                    ? styles.statusPending
                    : n.status === "failed"
                      ? styles.statusFailed
                      : styles.statusSuccess,
                ]}
              >
                {n.status === "processing"
                  ? "Processing"
                  : n.status === "failed"
                    ? "Failed"
                    : "New"}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.btnBack}
          >
            <MaterialIcons name="arrow-back" size={20} color={C.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notifications</Text>
        </View>
        <TouchableOpacity
          onPress={markAllRead}
          style={[styles.btnTextAction, allRead ? { opacity: 0.5 } : null]}
        >
          <Text style={styles.btnTextActionText}>
            {allRead ? "All read" : "Mark all as read"}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today</Text>
          {today.map(renderCard)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Yesterday</Text>
          {yesterday.map(renderCard)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Last Week</Text>
          {lastWeek.map(renderCard)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
