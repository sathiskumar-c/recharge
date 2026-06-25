import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import plansData from "../constants/plans.json";
import PlanDetailsModal from "./components/PlanDetailsModal";
import { C, viewPlansStyles as styles } from "./view-plans.styles";

interface Plan {
  id: string;
  price: number;
  title: string;
  description?: string;
  validity: string;
  data: string;
  voice?: string;
  benefits?: string[];
  label?: string;
  labelColor?: string;
  dataHighlight?: boolean;
  recommended?: boolean;
  category?: string;
  tags?: string[];
  serviceIcons?: string[];
  serviceIconsMore?: number;
}

type PlansData = typeof plansData;
type TabKey = keyof PlansData;

const typedPlansData = plansData as PlansData;

export default function ViewPlansScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("popular");
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");

  const tabs: TabKey[] = [
    "popular",
    "true5g",
    "dataPacks",
    "annual",
    "roaming",
    "combos",
  ];
  const chips = [
    "5g",
    "unlimited",
    "ott",
    "lowcost",
    "entertainment",
    "premium",
    "budget",
    "data",
    "roaming",
  ];

  const chipLabels: Record<string, string> = {
    "5g": "5G Plans",
    unlimited: "Unlimited Calls",
    ott: "OTT/Entertainment",
    lowcost: "Low Cost",
    entertainment: "Entertainment",
    premium: "Premium",
    budget: "Budget",
    data: "Data Only",
    roaming: "Roaming",
  };

  const tabLabels: Record<TabKey, string> = {
    popular: "Popular Plans",
    true5g: "True 5G Unlimited",
    dataPacks: "Data Packs",
    annual: "Annual",
    roaming: "Roaming",
    combos: "Combos",
  };

  const getTabPlans = (): Plan[] => {
    const tabData = typedPlansData[activeTab];
    return Array.isArray(tabData) ? (tabData as Plan[]) : [];
  };

  const getFilteredPlans = (): Plan[] => {
    const tabPlans = getTabPlans();

    if (selectedChips.length === 0) {
      return tabPlans;
    }

    return tabPlans.filter((plan) => {
      if (!plan.tags) return false;
      return selectedChips.some((chip) => plan.tags!.includes(chip));
    });
  };

  const plans = getFilteredPlans().sort((a, b) => {
    const aRec = a.recommended ? 1 : 0;
    const bRec = b.recommended ? 1 : 0;
    return bRec - aRec;
  });

  const handleChipPress = (chip: string) => {
    if (selectedChips.includes(chip)) {
      setSelectedChips(selectedChips.filter((c) => c !== chip));
    } else {
      setSelectedChips([...selectedChips, chip]);
    }
  };

  const handleSelectPlan = (plan: Plan) => {
    router.push("/payment");
  };

  const [selectedPlan, setSelectedPlan] = React.useState<Plan | null>(null);

  const getIconColor = (icon: string): string => {
    const colorMap: Record<string, string> = {
      sports_esports: "#00b47d",
      movie: C.error,
      star: "#b3c5ff",
      play_arrow: C.error,
      shopping_cart: C.primary,
      tv: "#ffb95f",
      call: C.secondary,
      mail: "#ffb95f",
      public: "#00b47d",
      data_saver: C.tertiary,
      network_check: C.secondary,
      memory: C.primary,
      verified: "#b3c5ff",
    };
    return colorMap[icon] || C.primary;
  };

  const getFallbackIcons = (plan: Plan): string[] => {
    if (plan.serviceIcons && plan.serviceIcons.length > 0)
      return plan.serviceIcons;
    const icons: string[] = [];
    if (plan.tags) {
      if (plan.tags.includes("ott") || plan.tags.includes("entertainment")) {
        icons.push("play_arrow", "tv");
      }
      if (plan.tags.includes("5g")) {
        icons.push("network_check", "memory");
      }
    }
    if (plan.benefits && plan.benefits.length > 0) {
      icons.push("memory");
    }
    // default fallback
    if (icons.length === 0) {
      icons.push("memory", "network_check");
    }
    return icons.slice(0, 3);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Fixed Header */}
      <View style={styles.headerContainer}>
        {/* Top App Bar */}
        <View style={styles.topAppBar}>
          <TouchableOpacity style={styles.appBarLeft}>
            <MaterialIcons name="bolt" size={24} color={C.primary} />
          </TouchableOpacity>
          <Text style={styles.appBarTitle}>AutoCharge</Text>
          <TouchableOpacity style={styles.appBarRight}>
            <MaterialIcons name="person" size={16} color={C.onSurfaceVariant} />
          </TouchableOpacity>
        </View>

        {/* Context - Number Display */}
        <View style={styles.contextContainer}>
          <View style={styles.numberDisplay}>
            <View style={styles.numberDisplayLeft}>
              <MaterialIcons
                name="sim-card"
                size={16}
                color={C.onSurfaceVariant}
              />
              <Text style={styles.numberDisplayText}>+91 98765 43210</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.changeButton}>Change</Text>
            </TouchableOpacity>
          </View>

          {/* Search */}
          <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={18} color={C.outline} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search plans, OTTs, data..."
              placeholderTextColor={C.outline}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>

        {/* Tabs - Horizontally Scrollable */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={styles.tabsContainer}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.tabTextActive,
                  ]}
                >
                  {tabLabels[tab]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Filter Chips - Horizontally Scrollable */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={styles.chipsContainer}>
            {chips.map((chip) => (
              <TouchableOpacity
                key={chip}
                style={[
                  styles.chip,
                  selectedChips.includes(chip) && styles.chipActive,
                ]}
                onPress={() => handleChipPress(chip)}
              >
                <Text
                  style={[
                    styles.chipText,
                    selectedChips.includes(chip) && styles.chipTextActive,
                  ]}
                >
                  {chipLabels[chip]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          {/* Plans Header */}
          <View style={styles.plansHeader}>
            <Text style={styles.plansTitle}>
              {tabLabels[activeTab]} ({plans.length})
            </Text>
            <TouchableOpacity>
              <MaterialIcons name="remove" size={24} color={C.outline} />
            </TouchableOpacity>
          </View>

          {/* Plan Cards */}
          {plans.map((plan) => (
            <Pressable key={plan.id} onPress={() => setSelectedPlan(plan)}>
              <View style={styles.planCard}>
                {/* Glow Effect */}
                <View style={styles.planCardGlow} />

                {/* Card Header Row - Badge/Label and True 5G Tag */}
                <View style={styles.newCardHeaderRow}>
                  <View style={styles.newCardHeaderLeft}>
                    {plan.recommended ? (
                      <View style={styles.recommendedBadge}>
                        <View style={styles.recommendedDot} />
                        <Text style={styles.recommendedBadgeText}>
                          Recommended
                        </Text>
                      </View>
                    ) : plan.label ? (
                      <View
                        style={[
                          styles.labelBox,
                          {
                            borderColor: plan.labelColor || C.secondary,
                            backgroundColor: plan.labelColor
                              ? `${plan.labelColor}15`
                              : "rgba(78, 222, 163, 0.15)",
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.labelBoxText,
                            { color: plan.labelColor || C.secondary },
                          ]}
                        >
                          {plan.label}
                        </Text>
                      </View>
                    ) : null}
                  </View>

                  <View style={styles.newCardHeaderRight}>
                    {activeTab === "true5g" && !plan.recommended && (
                      <View style={styles.true5gTag}>
                        <Text style={styles.true5gTagText}>TRUE 5G</Text>
                      </View>
                    )}
                    <TouchableOpacity>
                      <MaterialIcons name="info" size={20} color={C.outline} />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Price Section */}
                <View style={styles.newPriceSection}>
                  <View>
                    <Text style={styles.newPrice}>₹{plan.price}</Text>
                  </View>
                  <View style={styles.newDetailsRight}>
                    <View>
                      <Text style={styles.newDetailLabel}>Validity</Text>
                      <Text style={styles.newDetailValue}>{plan.validity}</Text>
                    </View>
                    <View>
                      <Text style={styles.newDetailLabel}>Data</Text>
                      <Text style={styles.newDetailValue}>{plan.data}</Text>
                    </View>
                  </View>
                </View>

                {/* Benefits Section (Recommended Only) */}
                {/* For recommended cards show Included Benefits (use plan.benefits or fallback icons) */}
                {plan.recommended && (
                  <View style={styles.newBenefitsSection}>
                    <Text style={styles.newBenefitsLabel}>
                      Included Benefits
                    </Text>
                    <View style={styles.newBenefitsIcons}>
                      {(plan.benefits && plan.benefits.length > 0
                        ? plan.benefits
                        : getFallbackIcons(plan)
                      ).map((benefit: any, idx: number) => (
                        <View key={idx} style={styles.newBenefitIcon}>
                          <MaterialIcons
                            name={
                              typeof benefit === "string" &&
                              benefit.includes(" ")
                                ? (benefit as any)
                                : benefit === "data"
                                  ? "memory"
                                  : benefit === "network-check"
                                    ? "network-check"
                                    : (benefit as any)
                            }
                            size={16}
                            color={getIconColor(
                              typeof benefit === "string" &&
                                benefit.includes(" ")
                                ? (benefit as any)
                                : benefit === "data"
                                  ? "memory"
                                  : benefit === "network-check"
                                    ? "network_check"
                                    : (benefit as any),
                            )}
                          />
                        </View>
                      ))}
                      {/* show count if available */}
                      {plan.benefits && plan.benefits.length > 0 ? (
                        <Text style={styles.newBenefitsMore}>
                          {plan.benefits.length}+
                        </Text>
                      ) : plan.serviceIconsMore && plan.serviceIconsMore > 0 ? (
                        <Text style={styles.newBenefitsMore}>
                          +{plan.serviceIconsMore}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                )}

                {/* For non-recommended cards render service icons + inline recharge */}
                {!plan.recommended && (
                  <View style={styles.newServiceIconsRow}>
                    <View style={styles.newServiceIconsGroup}>
                      {(plan.serviceIcons && plan.serviceIcons.length > 0
                        ? plan.serviceIcons
                        : getFallbackIcons(plan)
                      ).map((icon, idx) => (
                        <View key={idx} style={styles.newServiceIcon}>
                          <MaterialIcons
                            name={icon as any}
                            size={14}
                            color={getIconColor(icon)}
                          />
                        </View>
                      ))}
                      {plan.serviceIconsMore && plan.serviceIconsMore > 0 && (
                        <Text style={styles.newServiceIconsMore}>
                          +{plan.serviceIconsMore}
                        </Text>
                      )}
                    </View>

                    <TouchableOpacity
                      style={styles.newRechargeButtonInline}
                      onPress={() => handleSelectPlan(plan)}
                    >
                      <Text style={styles.newRechargeButtonInlineText}>
                        Recharge
                      </Text>
                      <MaterialIcons
                        name="chevron-right"
                        size={18}
                        color={C.primary}
                      />
                    </TouchableOpacity>
                  </View>
                )}

                {/* Removed duplicate service-icons section — handled above for non-recommended cards */}

                {/* Full Width Recharge Button for Recommended Cards */}
                {plan.recommended && (
                  <TouchableOpacity
                    style={styles.newRechargeButtonFull}
                    onPress={() => handleSelectPlan(plan)}
                  >
                    <Text style={styles.newRechargeButtonFullText}>
                      Recharge Now
                    </Text>
                    <MaterialIcons
                      name="chevron-right"
                      size={18}
                      color="#1b2e5e"
                    />
                  </TouchableOpacity>
                )}
              </View>
            </Pressable>
          ))}

          <PlanDetailsModal
            visible={!!selectedPlan}
            plan={selectedPlan}
            onClose={() => setSelectedPlan(null)}
            onRecharge={(plan) => handleSelectPlan(plan)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
