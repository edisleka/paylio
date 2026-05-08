import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";



import { COLORS } from "@/constants/theme";
import ThemedText from "./ThemedText";
import { NOTIFICATION_COLORS, NOTIFICATION_ICONS } from "@/constants/notificationConfig";
import { NOTIFICATIONS } from "@/services/dummyData";
import type { Notification } from "@/types/dummyData.types";


export function timeAgo(iso: string): string {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export function NotificationItem({
  item,
  onPress,
}: {
  item: Notification;
  onPress: () => void;
}) {
  const cfg = NOTIFICATION_ICONS[item.type];
  const col = NOTIFICATION_COLORS[item.type];

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      className="flex-row items-start gap-4 px-5 py-4"
      style={{ backgroundColor: "#ffffff", opacity: item.read ? 0.65 : 1 }}
    >
      <View
        className="w-11 h-11 rounded-full items-center justify-center shrink-0 mt-0.5"
        style={{ backgroundColor: col.bg }}
      >
        <MaterialIcons name={cfg.icon as any} size={20} color={col.text} />
      </View>
      <View className="flex-1 gap-0.5">
        <View className="flex-row items-center justify-between">
          <ThemedText
            variant="bodySmall"
            color="secondary"
            className="font-semibold text-[13.5px]"
            numberOfLines={1}
            style={{ flex: 1, marginRight: 8 }}
          >
            {item.title}
          </ThemedText>
          <ThemedText
            variant="caption"
            color="tertiary"
            className="text-[11px] shrink-0"
          >
            {timeAgo(item.timestamp)}
          </ThemedText>
        </View>
        <ThemedText
          variant="caption"
          color="tertiary"
          className="text-[12px] leading-[17px]"
          numberOfLines={2}
        >
          {item.body}
        </ThemedText>
        <View className="flex-row items-center gap-1.5 mt-1">
          <View
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: item.read ? "transparent" : col.text }}
          />
          <ThemedText
            variant="caption"
            className="text-[11px]"
            style={{ color: col.text }}
          >
            {cfg.label}
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function NotificationsModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const unreadCount = NOTIFICATIONS.filter((n) => !n.read).length;

  const handlePress = (item: Notification) => {
    onClose();
    setTimeout(
      () =>
        router.push({
          pathname: "/notification/[id]",
          params: { id: item.id },
        }),
      150,
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <Pressable
        className="flex-1"
        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        onPress={onClose}
      >
        <Pressable
          onPress={() => {}}
          className="absolute bottom-0 left-0 right-0 rounded-t-3xl"
          style={{
            maxHeight: "82%",
            paddingBottom: insets.bottom + 8,
            backgroundColor: "#ffffff",
          }}
        >
          <View className="items-center pt-3 pb-1">
            <View className="w-10 h-1 rounded-full bg-border" />
          </View>
          <View className="flex-row items-center justify-between px-5 py-4">
            <View className="flex-row items-center gap-2">
              <ThemedText variant="heading3" color="secondary">
                Notifications
              </ThemedText>
              {unreadCount > 0 && (
                <View className="px-2 py-0.5 rounded-full bg-primary">
                  <ThemedText
                    variant="caption"
                    className="text-white font-bold"
                  >
                    {unreadCount}
                  </ThemedText>
                </View>
              )}
            </View>
            <TouchableOpacity
              onPress={onClose}
              className="w-9 h-9 rounded-full bg-cardSecondary items-center justify-center"
            >
              <MaterialIcons
                name="close"
                size={20}
                color={COLORS.textSecondary}
              />
            </TouchableOpacity>
          </View>
          <View className="h-px bg-borderLight" />
          <FlatList
            data={NOTIFICATIONS.slice(0, 5)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <NotificationItem item={item} onPress={() => handlePress(item)} />
            )}
            ItemSeparatorComponent={() => (
              <View className="h-px bg-borderLight ml-20" />
            )}
            showsVerticalScrollIndicator={false}
          />
          <View className="px-5 pt-3">
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {
                onClose();
                setTimeout(() => router.push("/notifications"), 150);
              }}
              className="py-4 rounded-2xl items-center shadow-md bg-primary"
              style={{
                backgroundColor: COLORS.primary,
                shadowColor: COLORS.primary,
                shadowOpacity: 0.25,
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: 8,
              }}
            >
              <ThemedText
                variant="bodySmall"
                className="text-white font-bold text-[14px]"
              >
                View all notifications
              </ThemedText>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

export default function NotificationBell() {
  const [notifVisible, setNotifVisible] = useState(false);
  const unreadCount = NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setNotifVisible(true)}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        className="relative p-1.5"
      >
        <MaterialIcons
          name="notifications-none"
          size={26}
          color={unreadCount > 0 ? COLORS.primary : COLORS.textTertiary}
        />
        {unreadCount > 0 && (
          <View
            className="absolute top-1 right-1 w-4 h-4 rounded-full items-center justify-center"
            style={{ backgroundColor: "#EF4444" }}
          >
            <ThemedText
              variant="caption"
              className="text-white text-[9px] leading-none"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </ThemedText>
          </View>
        )}
      </TouchableOpacity>
      <NotificationsModal
        visible={notifVisible}
        onClose={() => setNotifVisible(false)}
      />
    </>
  );
}