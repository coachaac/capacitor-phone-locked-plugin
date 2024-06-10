// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorPhoneLocked",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorPhoneLocked",
            targets: ["CapacitorPhoneLockedPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorPhoneLockedPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorPhoneLockedPlugin"),
        .testTarget(
            name: "CapacitorPhoneLockedPluginTests",
            dependencies: ["CapacitorPhoneLockedPlugin"],
            path: "ios/Tests/CapacitorPhoneLockedPluginTests")
    ]
)
