import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { C, S, scheduleStyles as styles } from "./schedule.styles";

interface RecentRecharge {
  id: string;
  name: string;
  carrier: string;
  type: string;
  color: string;
  initials: string;
}

interface Contact {
  id: string;
  name: string;
  phone: string;
  initials: string;
  color: string;
}

const RECENT_RECHARGES: RecentRecharge[] = [
  {
    id: "1",
    name: "Mom",
    carrier: "Jio",
    type: "Prepaid",
    color: C.primary,
    initials: "M",
  },
  {
    id: "2",
    name: "Alex",
    carrier: "Airtel",
    type: "Prepaid",
    color: C.secondary,
    initials: "A",
  },
  {
    id: "3",
    name: "Sarah Work",
    carrier: "Vi",
    type: "Postpaid",
    color: C.tertiary,
    initials: "S",
  },
];

const CONTACTS: Contact[] = [
  {
    id: "1",
    name: "David Chen",
    phone: "+1 555 123 4567",
    initials: "D",
    color: C.primary,
  },
  {
    id: "2",
    name: "Emily Roberts",
    phone: "+1 555 987 6543",
    initials: "E",
    color: C.secondary,
  },
  {
    id: "3",
    name: "Michael Chang",
    phone: "+1 555 456 7890",
    initials: "M",
    color: C.secondary,
  },
  {
    id: "4",
    name: "Sarah Johnson",
    phone: "+1 555 234 5678",
    initials: "S",
    color: C.tertiary,
  },
  {
    id: "5",
    name: "James Wilson",
    phone: "+1 555 345 6789",
    initials: "J",
    color: C.primary,
  },
  {
    id: "6",
    name: "Jessica Lee",
    phone: "+1 555 456 7890",
    initials: "J",
    color: C.secondary,
  },
  {
    id: "7",
    name: "Robert Brown",
    phone: "+1 555 567 8901",
    initials: "R",
    color: C.primary,
  },
  {
    id: "8",
    name: "Lisa Anderson",
    phone: "+1 555 678 9012",
    initials: "L",
    color: C.tertiary,
  },
  {
    id: "9",
    name: "William Martinez",
    phone: "+1 555 789 0123",
    initials: "W",
    color: C.secondary,
  },
  {
    id: "10",
    name: "Amanda White",
    phone: "+1 555 890 1234",
    initials: "A",
    color: C.primary,
  },
  {
    id: "11",
    name: "Christopher Garcia",
    phone: "+1 555 901 2345",
    initials: "C",
    color: C.secondary,
  },
  {
    id: "12",
    name: "Michelle Taylor",
    phone: "+1 555 012 3456",
    initials: "M",
    color: C.tertiary,
  },
  {
    id: "13",
    name: "Daniel Thomas",
    phone: "+1 555 123 4569",
    initials: "D",
    color: C.primary,
  },
  {
    id: "14",
    name: "Jennifer Davis",
    phone: "+1 555 234 5679",
    initials: "J",
    color: C.secondary,
  },
  {
    id: "15",
    name: "Matthew Miller",
    phone: "+1 555 345 6789",
    initials: "M",
    color: C.primary,
  },
  {
    id: "16",
    name: "Angela Wilson",
    phone: "+1 555 456 7891",
    initials: "A",
    color: C.tertiary,
  },
  {
    id: "17",
    name: "Mark Jackson",
    phone: "+1 555 567 8902",
    initials: "M",
    color: C.secondary,
  },
  {
    id: "18",
    name: "Susan Harris",
    phone: "+1 555 678 9013",
    initials: "S",
    color: C.primary,
  },
  {
    id: "19",
    name: "Steven Martin",
    phone: "+1 555 789 0124",
    initials: "S",
    color: C.secondary,
  },
  {
    id: "20",
    name: "Karen Thompson",
    phone: "+1 555 890 1235",
    initials: "K",
    color: C.tertiary,
  },
  {
    id: "21",
    name: "Paul Garcia",
    phone: "+1 555 901 2346",
    initials: "P",
    color: C.primary,
  },
  {
    id: "22",
    name: "Nancy Robinson",
    phone: "+1 555 012 3457",
    initials: "N",
    color: C.secondary,
  },
  {
    id: "23",
    name: "George Clark",
    phone: "+1 555 123 4570",
    initials: "G",
    color: C.primary,
  },
  {
    id: "24",
    name: "Sandra Rodriguez",
    phone: "+1 555 234 5680",
    initials: "S",
    color: C.tertiary,
  },
  {
    id: "25",
    name: "Edward Lewis",
    phone: "+1 555 345 6790",
    initials: "E",
    color: C.secondary,
  },
  {
    id: "26",
    name: "Dorothy Lee",
    phone: "+1 555 456 7892",
    initials: "D",
    color: C.primary,
  },
  {
    id: "27",
    name: "Thomas Walker",
    phone: "+1 555 567 8903",
    initials: "T",
    color: C.secondary,
  },
  {
    id: "28",
    name: "Patricia Hall",
    phone: "+1 555 678 9014",
    initials: "P",
    color: C.tertiary,
  },
  {
    id: "29",
    name: "Charles Allen",
    phone: "+1 555 789 0125",
    initials: "C",
    color: C.primary,
  },
  {
    id: "30",
    name: "Barbara Young",
    phone: "+1 555 890 1236",
    initials: "B",
    color: C.secondary,
  },
];

export default function RechargeScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSelectRecharge = (recharge: RecentRecharge) => {
    router.push("/view-plans");
  };

  const handleSelectContact = (contact: Contact) => {
    router.push("/view-plans");
  };

  const handleSelectMyNumber = () => {
    router.push("/view-plans");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color={C.onSurface} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mobile Recharge</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Section */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <MaterialIcons
              name="phone-iphone"
              size={20}
              color={C.outline}
              style={{ marginRight: S.sm }}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Enter mobile number"
              placeholderTextColor={C.outline}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <View style={styles.divider} />
            <TouchableOpacity>
              <MaterialIcons name="contacts" size={20} color={C.primary} />
            </TouchableOpacity>
          </View>
          <Text style={styles.searchHelper}>
            Search by number or select from contacts
          </Text>
        </View>

        {/* Recent Recharges */}
        <View>
          <View style={styles.sectionTitle}>
            <MaterialIcons name="history" size={14} color={C.outline} />
            <Text style={{ fontSize: 14, fontWeight: "500", color: C.outline }}>
              Recent Recharges
            </Text>
          </View>
          <FlatList
            data={RECENT_RECHARGES}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.recentItem}
                onPress={() => handleSelectRecharge(item)}
              >
                <View
                  style={[
                    styles.recentItemGlow,
                    { backgroundColor: item.color },
                  ]}
                />
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{item.initials}</Text>
                </View>
                <Text style={styles.recentName}>{item.name}</Text>
                <Text style={styles.recentSubtitle}>
                  {item.carrier} • {item.type}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recentScroll}
          />
        </View>

        {/* My Number */}
        <View>
          <View style={styles.sectionTitle}>
            <MaterialIcons name="person" size={14} color={C.outline} />
            <Text style={{ fontSize: 14, fontWeight: "500", color: C.outline }}>
              My Registered Number
            </Text>
          </View>
          <TouchableOpacity
            style={styles.myNumberContainer}
            onPress={handleSelectMyNumber}
          >
            <View style={styles.myNumberContent}>
              <View style={styles.myNumberAvatar}>
                <MaterialIcons name="person" size={20} color={C.primary} />
              </View>
              <View>
                <Text style={styles.myNumberText}>You</Text>
                <Text style={styles.myNumberPhone}>+1 987 654 3210</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: S.sm }}
            >
              <View style={styles.myNumberBadge}>
                <Text style={styles.myNumberBadgeText}>Active Plan</Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color={C.outline} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Contacts */}
        <View>
          <View style={styles.sectionTitle}>
            <MaterialIcons name="contacts" size={14} color={C.outline} />
            <Text style={{ fontSize: 14, fontWeight: "500", color: C.outline }}>
              My Contacts ({CONTACTS.length})
            </Text>
          </View>
          <View style={styles.contactsContainer}>
            {CONTACTS.map((contact, index) => (
              <TouchableOpacity
                key={contact.id}
                style={[
                  styles.contactItem,
                  index === CONTACTS.length - 1 && styles.contactItemLast,
                ]}
                onPress={() => handleSelectContact(contact)}
              >
                <View style={styles.contactLeft}>
                  <View style={styles.contactAvatar}>
                    <Text style={styles.contactAvatarText}>
                      {contact.initials}
                    </Text>
                  </View>
                  <View style={styles.contactInfo}>
                    <Text style={styles.contactName}>{contact.name}</Text>
                    <Text style={styles.contactPhone}>{contact.phone}</Text>
                  </View>
                </View>
                <MaterialIcons
                  name="arrow-forward"
                  size={20}
                  color={C.outline}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
