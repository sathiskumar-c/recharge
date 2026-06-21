import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { accountStyles } from "./account.styles";
import { C } from "./index.styles";

export default function AccountScreen() {
  const router = useRouter();
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <SafeAreaView style={accountStyles.screen} edges={["top"]}>
      {/* ── Header ── */}
      <View style={accountStyles.header}>
        <View style={accountStyles.headerLeft}>
          <MaterialIcons name="bolt" size={24} color={C.primary} />
          <Text style={accountStyles.appLogo}>AutoCharge</Text>
        </View>
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoYrCIoQN_lPwhAsDs1JfW9lMxdL4rSREkdLMYoO85Ddin654--5MPxCfg38q16Lx5doYqxKz1pq2YE0Fl1218LUxyF1-M7s591DngRAgmlVmGVxiD0xSSKQcO4Mg-iCKFRMq0VA0MspA2tq6ORYxpbCxDV6f26gCbl6FduBMxXO53Lzk0X5g3c3jtgRUqJWjfoJ1HxV-jvANNkrKdWnY1gqCtHXt6XfsmgC30yt28u4dIzS4rHKi3zGP5E6F0diLrQGceu2FoGQM",
          }}
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
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQeGDJkR4AiaLgJuK8BkrL1-JImpJW_ESu_sVgppOjGtdIsZKElLtuhAnaPkqzFeRpCyTe1PJ4OK2qiLX6uv6sfBfX3sncp0Wd0UVbxX6OEbGBMNURAAJYASNL97tXjRtEYRJgZ5pGdM8UsDqm0-ld8CALVnRaZsuAHdr6C5xzHZkRVKKryptQ-23c0sWE9nDg-70IZB_Sr1CxQLLv6RfHMCX0pJWpq5SMp-zhFH_1C0fAfLCbEQi3T9zPC_KmheOnzgmMxbpStzc",
              }}
              style={accountStyles.profileAvatar}
            />
            <TouchableOpacity
              style={accountStyles.editButton}
              activeOpacity={0.8}
            >
              <MaterialIcons name="edit" size={18} color={C.background} />
            </TouchableOpacity>
          </View>
          <Text style={accountStyles.profileName}>Alex</Text>
          <Text style={accountStyles.profilePhone}>+1 (555) 012-3456</Text>
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
              <Text style={accountStyles.walletBalance}>142.50</Text>
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

        {/* ── Personal Information ── */}
        <View>
          <Text style={accountStyles.sectionTitle}>Personal Information</Text>
          <View style={accountStyles.menuCard}>
            <TouchableOpacity
              style={accountStyles.menuItem}
              onPress={() => router.push("/edit-name")}
              activeOpacity={0.7}
            >
              <View style={accountStyles.menuItemLeft}>
                <MaterialIcons name="person" size={20} color={C.outline} />
                <View style={accountStyles.menuItemContent}>
                  <Text style={accountStyles.menuItemTitle}>Full Name</Text>
                  <Text style={accountStyles.menuItemSubtitle}>
                    Alex Henderson
                  </Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color={C.outline} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[accountStyles.menuItem, accountStyles.menuItemLast]}
              onPress={() => router.push("/edit-email")}
              activeOpacity={0.7}
            >
              <View style={accountStyles.menuItemLeft}>
                <MaterialIcons name="mail" size={20} color={C.outline} />
                <View style={accountStyles.menuItemContent}>
                  <Text style={accountStyles.menuItemTitle}>Email Address</Text>
                  <Text style={accountStyles.menuItemSubtitle}>
                    alex.h@autocharge.pro
                  </Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color={C.outline} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Payment Methods ── */}
        <View>
          <Text style={accountStyles.sectionTitle}>Payment Methods</Text>
          <View style={accountStyles.menuCard}>
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
                  <Text style={accountStyles.menuItemTitle}>
                    Visa •••• 4242
                  </Text>
                  <Text style={accountStyles.menuItemSubtitle}>
                    Expires 09/26
                  </Text>
                </View>
              </View>
              <Text style={accountStyles.menuItemBadge}>Primary</Text>
            </View>
            <TouchableOpacity
              style={[accountStyles.addButton, accountStyles.menuItemLast]}
            >
              <MaterialIcons name="add" size={20} color={C.primary} />
              <Text style={accountStyles.addButtonText}>Add New Card</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Security ── */}
        <View>
          <Text style={accountStyles.sectionTitle}>Security</Text>
          <View style={accountStyles.menuCard}>
            <View style={accountStyles.menuItem}>
              <View style={accountStyles.menuItemLeft}>
                <MaterialIcons name="fingerprint" size={20} color={C.outline} />
                <Text style={accountStyles.menuItemTitle}>
                  Biometric Unlock
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setBiometricEnabled(!biometricEnabled)}
                style={[
                  accountStyles.toggleSwitch,
                  biometricEnabled
                    ? accountStyles.toggleSwitchOn
                    : accountStyles.toggleSwitchOff,
                ]}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    accountStyles.toggleThumb,
                    biometricEnabled
                      ? accountStyles.toggleThumbOn
                      : accountStyles.toggleThumbOff,
                  ]}
                />
              </TouchableOpacity>
            </View>
            <View style={[accountStyles.menuItem, accountStyles.menuItemLast]}>
              <View style={accountStyles.menuItemLeft}>
                <MaterialIcons name="vpn-key" size={20} color={C.outline} />
                <Text style={accountStyles.menuItemTitle}>
                  Change Security Pin
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color={C.outline} />
            </View>
          </View>
        </View>

        {/* ── App Settings ── */}
        <View>
          <Text style={accountStyles.sectionTitle}>App Settings</Text>
          <View style={accountStyles.menuCard}>
            <View style={accountStyles.menuItem}>
              <View style={accountStyles.menuItemLeft}>
                <MaterialIcons name="dark-mode" size={20} color={C.outline} />
                <Text style={accountStyles.menuItemTitle}>Dark Mode</Text>
              </View>
              <Text style={accountStyles.menuItemBadge}>Always On</Text>
            </View>
            <View style={[accountStyles.menuItem, accountStyles.menuItemLast]}>
              <View style={accountStyles.menuItemLeft}>
                <MaterialIcons
                  name="notifications"
                  size={20}
                  color={C.outline}
                />
                <Text style={accountStyles.menuItemTitle}>Notifications</Text>
              </View>
              <TouchableOpacity
                onPress={() => setNotificationsEnabled(!notificationsEnabled)}
                style={[
                  accountStyles.toggleSwitch,
                  notificationsEnabled
                    ? accountStyles.toggleSwitchOn
                    : accountStyles.toggleSwitchOff,
                ]}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    accountStyles.toggleThumb,
                    notificationsEnabled
                      ? accountStyles.toggleThumbOn
                      : accountStyles.toggleThumbOff,
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ── Support & Legal ── */}
        <View>
          <Text style={accountStyles.sectionTitle}>Support & Legal</Text>
          <View style={accountStyles.menuCard}>
            <View style={accountStyles.menuItem}>
              <View style={accountStyles.menuItemLeft}>
                <MaterialIcons name="help-center" size={20} color={C.outline} />
                <Text style={accountStyles.menuItemTitle}>Help Center</Text>
              </View>
              <MaterialIcons name="open-in-new" size={20} color={C.outline} />
            </View>
            <View style={[accountStyles.menuItem, accountStyles.menuItemLast]}>
              <View style={accountStyles.menuItemLeft}>
                <MaterialIcons name="description" size={20} color={C.outline} />
                <Text style={accountStyles.menuItemTitle}>
                  Terms of Service
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color={C.outline} />
            </View>
          </View>
        </View>

        {/* ── Logout ── */}
        <View style={accountStyles.logoutSection}>
          <TouchableOpacity
            style={accountStyles.logoutButton}
            activeOpacity={0.8}
          >
            <MaterialIcons name="logout" size={20} color={C.error} />
            <Text style={accountStyles.logoutText}>Logout from AutoCharge</Text>
          </TouchableOpacity>
          <Text style={accountStyles.versionText}>Version 4.2.0-pro</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
