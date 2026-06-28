import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import accountConfig from "../../config/accountConfig";
import accountData from "../../constants/accountData.json";
import { accountStyles } from "./account.styles";
import { C } from "./index.styles";

export default function AccountScreen() {
  const router = useRouter();
  const [biometricEnabled, setBiometricEnabled] = useState(
    accountData.toggles.biometricEnabled,
  );
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    accountData.toggles.notificationsEnabled,
  );

  return (
    <SafeAreaView style={accountStyles.screen} edges={["top"]}>
      {/* ── Header ── */}
      <View style={accountStyles.header}>
        <View style={accountStyles.headerLeft}>
          <MaterialIcons name="bolt" size={24} color={C.primary} />
          <Text style={accountStyles.appLogo}>AutoCharge</Text>
        </View>
        <Image
          source={{ uri: accountData.profile.headerAvatar }}
          style={accountStyles.headerAvatar}
        />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={accountStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Profile Header ── */}
        <View style={accountStyles.profileSection}>
          <View style={accountStyles.profileAvatarWrap}>
            <View style={accountStyles.profileGlow} />
            <Image
              source={{ uri: accountData.profile.avatar }}
              style={accountStyles.profileAvatar}
            />
            <TouchableOpacity
              style={accountStyles.editButton}
              activeOpacity={0.8}
            >
              <MaterialIcons name="edit" size={18} color={C.background} />
            </TouchableOpacity>
          </View>
          <Text style={accountStyles.profileName}>
            {accountData.profile.name}
          </Text>
          <Text style={accountStyles.profilePhone}>
            {accountData.profile.phone}
          </Text>
        </View>

        {/* ── Wallet Card ── */}
        <View style={accountStyles.walletCard}>
          <View style={accountStyles.walletGlow} />
          <View style={accountStyles.walletLeft}>
            <Text style={accountStyles.walletLabel}>Wallet Balance</Text>
            <View
              style={{ flexDirection: "row", alignItems: "baseline", gap: 2 }}
            >
              <Text style={[accountStyles.walletBalance, { fontSize: 24 }]}>
                $
              </Text>
              <Text style={accountStyles.walletBalance}>
                {accountData.wallet.balance}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={accountStyles.topUpButton}
            activeOpacity={0.8}
          >
            <MaterialIcons name="add" size={20} color={C.background} />
            <Text style={accountStyles.topUpText}>Top Up</Text>
          </TouchableOpacity>
        </View>

        {/* Data-driven sections (keeps UI and behavior identical) */}
        {/**
         * We keep complex pieces (profile header, wallet, logout) as-is.
         * The following sections are rendered from `sections` to reduce repetition.
         */}
        {(() => {
          const sections = (accountConfig as { sections: any[] }).sections;

          function getValue(path: string | undefined, fallback?: any) {
            if (!path) return fallback;
            return (
              path
                .split(".")
                .reduce(
                  (obj: any, key: string) =>
                    obj && obj[key] !== undefined ? obj[key] : undefined,
                  accountData,
                ) ?? fallback
            );
          }

          function AccountItem({ item }) {
            const isLast = !!item.last;

            if (item.type === "visa") {
              const mask = getValue(item.valueKeys?.mask, item.title);
              const expiry = getValue(item.valueKeys?.expiry, item.subtitle);
              return (
                <View style={accountStyles.menuItem}>
                  <View style={accountStyles.menuItemLeft}>
                    <View
                      style={[
                        accountStyles.menuItemIcon,
                        {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          borderRadius: 4,
                        },
                      ]}
                    >
                      <MaterialIcons
                        name="credit-card"
                        size={18}
                        color={C.primary}
                      />
                    </View>
                    <View style={accountStyles.menuItemContent}>
                      <Text style={accountStyles.menuItemTitle}>{mask}</Text>
                      <Text style={accountStyles.menuItemSubtitle}>
                        {expiry}
                      </Text>
                    </View>
                  </View>
                  <Text style={accountStyles.menuItemBadge}>{item.badge}</Text>
                </View>
              );
            }

            if (item.type === "add-card") {
              return (
                <TouchableOpacity
                  style={[
                    accountStyles.addButton,
                    isLast && accountStyles.menuItemLast,
                  ]}
                >
                  <MaterialIcons name="add" size={20} color={C.primary} />
                  <Text style={accountStyles.addButtonText}>Add New Card</Text>
                </TouchableOpacity>
              );
            }

            if (item.type === "toggle") {
              const stateKey = item.stateKey;
              const value =
                stateKey === "biometricEnabled"
                  ? biometricEnabled
                  : notificationsEnabled;
              const toggle = () => {
                if (stateKey === "biometricEnabled")
                  setBiometricEnabled(!biometricEnabled);
                else setNotificationsEnabled(!notificationsEnabled);
              };

              return (
                <View
                  style={[
                    accountStyles.menuItem,
                    isLast && accountStyles.menuItemLast,
                  ]}
                >
                  <View style={accountStyles.menuItemLeft}>
                    <MaterialIcons
                      name={item.icon}
                      size={20}
                      color={C.outline}
                    />
                    <Text style={accountStyles.menuItemTitle}>
                      {item.label}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={toggle}
                    style={[
                      accountStyles.toggleSwitch,
                      value
                        ? accountStyles.toggleSwitchOn
                        : accountStyles.toggleSwitchOff,
                    ]}
                    activeOpacity={0.8}
                  >
                    <View
                      style={[
                        accountStyles.toggleThumb,
                        value
                          ? accountStyles.toggleThumbOn
                          : accountStyles.toggleThumbOff,
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              );
            }

            if (item.type === "badge") {
              return (
                <View
                  style={[
                    accountStyles.menuItem,
                    isLast && accountStyles.menuItemLast,
                  ]}
                >
                  <View style={accountStyles.menuItemLeft}>
                    <MaterialIcons
                      name={item.icon}
                      size={20}
                      color={C.outline}
                    />
                    <Text style={accountStyles.menuItemTitle}>
                      {item.label}
                    </Text>
                  </View>
                  <Text style={accountStyles.menuItemBadge}>{item.badge}</Text>
                </View>
              );
            }

            if (item.type === "static") {
              return (
                <View
                  style={[
                    accountStyles.menuItem,
                    isLast && accountStyles.menuItemLast,
                  ]}
                >
                  <View style={accountStyles.menuItemLeft}>
                    <MaterialIcons
                      name={item.icon}
                      size={20}
                      color={C.outline}
                    />
                    <Text style={accountStyles.menuItemTitle}>
                      {item.label}
                    </Text>
                  </View>
                  <MaterialIcons
                    name={
                      item.id === "help-center"
                        ? "open-in-new"
                        : "chevron-right"
                    }
                    size={20}
                    color={C.outline}
                  />
                </View>
              );
            }

            // default: link
            return (
              <TouchableOpacity
                style={[
                  accountStyles.menuItem,
                  isLast && accountStyles.menuItemLast,
                ]}
                onPress={() => item.route && router.push(item.route)}
                activeOpacity={0.7}
              >
                <View style={accountStyles.menuItemLeft}>
                  <MaterialIcons name={item.icon} size={20} color={C.outline} />
                  <View style={accountStyles.menuItemContent}>
                    <Text style={accountStyles.menuItemTitle}>
                      {item.label}
                    </Text>
                    {item.valueKey ? (
                      <Text style={accountStyles.menuItemSubtitle}>
                        {getValue(item.valueKey, item.subtitle)}
                      </Text>
                    ) : item.subtitle ? (
                      <Text style={accountStyles.menuItemSubtitle}>
                        {item.subtitle}
                      </Text>
                    ) : null}
                  </View>
                </View>
                <MaterialIcons
                  name="chevron-right"
                  size={20}
                  color={C.outline}
                />
              </TouchableOpacity>
            );
          }

          return sections.map((section) => (
            <View key={section.title}>
              <Text style={accountStyles.sectionTitle}>{section.title}</Text>
              <View style={accountStyles.menuCard}>
                {section.items.map((item) => (
                  <React.Fragment key={item.id}>
                    <AccountItem item={item} />
                    {/* For items that rendered their own menuCard (like visa), avoid double wrappers */}
                    {item.type === "visa" ? null : null}
                  </React.Fragment>
                ))}
              </View>
            </View>
          ));
        })()}

        {/* ── Logout ── */}
        <View style={accountStyles.logoutSection}>
          <TouchableOpacity
            style={accountStyles.logoutButton}
            activeOpacity={0.8}
          >
            <MaterialIcons name="logout" size={20} color={C.error} />
            <Text style={accountStyles.logoutText}>Logout from AutoCharge</Text>
          </TouchableOpacity>
          <Text style={accountStyles.versionText}>
            Version {accountData.version}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
