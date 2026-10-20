// Bu dosya üretilir, elle değiştirme: pnpm api:generate

export interface paths {
    "/api/v1/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["HealthController_check"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_register"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/verify-email": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_verifyEmail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/verify-email/resend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_resend"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_refresh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_logout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/password/forgot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_forgot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/password/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_reset"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UsersController_me"];
        put?: never;
        post?: never;
        delete: operations["UsersController_remove"];
        options?: never;
        head?: never;
        patch: operations["UsersController_update"];
        trace?: never;
    };
    "/api/v1/me/phone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UsersController_phone"];
        put?: never;
        post?: never;
        delete: operations["UsersController_deletePhone"];
        options?: never;
        head?: never;
        patch: operations["UsersController_setPhone"];
        trace?: never;
    };
    "/api/v1/me/notification-prefs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UsersController_prefs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["UsersController_updatePrefs"];
        trace?: never;
    };
    "/api/v1/photos/upload-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PhotosController_uploadUrl"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AlertsController_list"];
        put?: never;
        post: operations["AlertsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/alerts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["AlertsController_remove"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/plates/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListingsController_search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/plates/check-duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ListingsController_checkDuplicate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/plates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ListingsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/plates/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListingsController_detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ListingsController_update"];
        trace?: never;
    };
    "/api/v1/plates/{id}/phone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListingsController_phone"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/plates/{id}/extend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ListingsController_extend"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/plates/{id}/close": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ListingsController_close"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/plates/{id}/handover": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ListingsController_handover"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/plates/{id}/handover-confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ListingsController_confirmHandover"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/listings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListingsController_mine"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ConversationsController_list"];
        put?: never;
        post: operations["ConversationsController_start"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/{id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ConversationsController_messages"];
        put?: never;
        post: operations["ConversationsController_send"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/{id}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ConversationsController_read"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/{id}/block": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ConversationsController_block"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ReportsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/mfa/setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AdminMfaController_setup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/mfa/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AdminMfaController_verify"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/listings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AdminController_listings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/listings/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AdminController_listing"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/listings/{id}/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AdminController_approve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/listings/{id}/reject": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AdminController_reject"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/listings/{id}/remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AdminController_remove"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/listings/{id}/exact-location": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AdminController_exactLocation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AdminController_reports"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/reports/{id}/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AdminController_resolve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/users/{id}/restrict": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AdminController_restrict"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/users/{id}/unrestrict": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AdminController_unrestrict"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/users/{id}/phone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AdminController_phone"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AdminController_metrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        RegisterDto: {
            /** Format: email */
            email: string;
            password: string;
            displayName: string;
            termsVersion: string;
        };
        RegisterResponse: {
            /** @enum {string} */
            status: "verification_sent";
        };
        TokenDto: {
            token: string;
        };
        LoginDto: {
            /** Format: email */
            email: string;
            password: string;
        };
        TokenResponse: {
            accessToken: string;
            refreshToken?: string;
        };
        RefreshDto: {
            refreshToken?: string;
        };
        ForgotPasswordDto: {
            /** Format: email */
            email: string;
        };
        ResetPasswordDto: {
            token: string;
            password: string;
        };
        Me: {
            id: string;
            email: string;
            emailVerified: boolean;
            displayName: string;
            /** @enum {string} */
            role: "user" | "admin";
            /** @enum {string} */
            status: "active" | "restricted" | "banned" | "deleted";
            phoneLast4: string | null;
            /** Format: date-time */
            createdAt: string;
        };
        UpdateMeDto: {
            displayName?: string;
        };
        DeletedAccount: {
            /** @enum {string} */
            status: "deleted";
        };
        PhoneLast4: {
            last4: string | null;
        };
        PhoneDto: {
            phone: string;
        };
        NotificationPrefs: {
            newMessage: boolean;
            expiry: boolean;
            plateAlert: boolean;
        };
        NotificationPrefsDto: {
            newMessage?: boolean;
            expiry?: boolean;
            plateAlert?: boolean;
        };
        UploadUrlDto: {
            /** @enum {string} */
            mime: "image/jpeg" | "image/png";
            bytes: number;
        };
        UploadUrl: {
            photoId: string;
            putUrl: string;
        };
        PlateAlert: {
            id: string;
            plate: string;
            /** Format: date-time */
            expiresAt: string;
            /** Format: date-time */
            createdAt: string;
        };
        CreateAlertDto: {
            plate: string;
        };
        PlateQuery: {
            normalized: string;
        };
        LatLng: {
            lat: number;
            lng: number;
        };
        ListingCard: {
            id: string;
            plateDisplay: string;
            /** @enum {string} */
            status: "active" | "pending" | "handed_over" | "closed" | "expired" | "removed";
            foundAt: string;
            city: string;
            district: string | null;
            thumbUrl: string | null;
            approxCenter: components["schemas"]["LatLng"];
            approxRadiusM: number;
        };
        SearchResult: {
            query: components["schemas"]["PlateQuery"];
            active: components["schemas"]["ListingCard"][];
            inactive: components["schemas"]["ListingCard"][];
        };
        LocationDto: {
            lat: number;
            lng: number;
            /** @enum {string} */
            source: "gps" | "map";
        };
        CheckDuplicateDto: {
            plate: string;
            location: components["schemas"]["LocationDto"];
        };
        DuplicateCheck: {
            duplicates: components["schemas"]["ListingCard"][];
        };
        CreateListingDto: {
            plate: string;
            photoIds: string[];
            location: components["schemas"]["LocationDto"];
            city: string;
            district?: string;
            foundAt: string;
            isOfficialPlate: boolean;
            showPhone: boolean;
        };
        ListingOwner: {
            displayName: string;
        };
        CreatedListing: {
            id: string;
            plateDisplay: string;
            /** @enum {string} */
            status: "active" | "pending" | "handed_over" | "closed" | "expired" | "removed";
            foundAt: string;
            city: string;
            district: string | null;
            thumbUrl: string | null;
            approxCenter: components["schemas"]["LatLng"];
            approxRadiusM: number;
            warnings: ("PLATE_FORMAT" | "DUPLICATE_NEARBY")[];
            duplicates: components["schemas"]["ListingCard"][];
            /** Format: date-time */
            expiresAt: string;
            /** Format: date-time */
            createdAt: string;
            isOfficialPlate: boolean;
            plateFormatOk: boolean;
            handoverConfirmed: boolean | null;
            extended: boolean;
            version: number;
            owner: components["schemas"]["ListingOwner"];
            hasPhone: boolean;
            photoUrls: string[];
        };
        ListingDetail: {
            id: string;
            plateDisplay: string;
            /** @enum {string} */
            status: "active" | "pending" | "handed_over" | "closed" | "expired" | "removed";
            foundAt: string;
            city: string;
            district: string | null;
            thumbUrl: string | null;
            approxCenter: components["schemas"]["LatLng"];
            approxRadiusM: number;
            /** Format: date-time */
            expiresAt: string;
            /** Format: date-time */
            createdAt: string;
            isOfficialPlate: boolean;
            plateFormatOk: boolean;
            handoverConfirmed: boolean | null;
            extended: boolean;
            version: number;
            owner: components["schemas"]["ListingOwner"];
            hasPhone: boolean;
            photoUrls: string[];
        };
        PhoneNumber: {
            phone: string;
        };
        UpdateListingDto: {
            showPhone?: boolean;
            foundAt?: string;
            district?: string;
        };
        ListingVersion: {
            id: string;
            version: number;
        };
        ExtendedListing: {
            id: string;
            /** @enum {string} */
            status: "active";
            /** Format: date-time */
            expiresAt: string;
            version: number;
        };
        CloseListingDto: {
            /** @enum {string} */
            reason: "handed_over_elsewhere" | "given_to_police" | "mistake" | "other";
        };
        ListingStatusChange: {
            id: string;
            /** @enum {string} */
            status: "active" | "pending" | "handed_over" | "closed" | "expired" | "removed";
            version: number;
        };
        HandoverDto: {
            /** Format: uuid */
            conversationId?: string;
        };
        HandoverConfirmDto: {
            confirmed: boolean;
        };
        HandoverConfirmation: {
            id: string;
            handoverConfirmed: boolean;
        };
        OwnListing: {
            id: string;
            plateDisplay: string;
            /** @enum {string} */
            status: "active" | "pending" | "handed_over" | "closed" | "expired" | "removed";
            foundAt: string;
            city: string;
            district: string | null;
            thumbUrl: string | null;
            approxCenter: components["schemas"]["LatLng"];
            approxRadiusM: number;
            /** Format: date-time */
            expiresAt: string;
            extended: boolean;
            version: number;
        };
        StartConversationDto: {
            /** Format: uuid */
            listingId: string;
            firstMessage: string;
            /** Format: uuid */
            clientId: string;
        };
        UserRef: {
            id: string;
            displayName: string;
        };
        LastMessage: {
            /** @enum {string} */
            kind: "location" | "text" | "system";
            body: string | null;
            senderId: string | null;
            createdAt: string;
        };
        ConversationSummary: {
            id: string;
            listingId: string;
            plateDisplay: string;
            /** @enum {string} */
            listingStatus: "active" | "pending" | "handed_over" | "closed" | "expired" | "removed";
            /** @enum {string} */
            role: "owner" | "seeker";
            otherUser: components["schemas"]["UserRef"];
            readOnly: boolean;
            /** Format: date-time */
            lastMessageAt: string | null;
            lastMessage: components["schemas"]["LastMessage"] | null;
            unread: number;
        };
        Message: {
            id: string;
            conversationId: string;
            senderId: string | null;
            /** @enum {string} */
            kind: "location" | "text" | "system";
            body: string | null;
            point: components["schemas"]["LatLng"] | null;
            clientId: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            readAt: string | null;
        };
        StartedConversation: {
            conversation: components["schemas"]["ConversationSummary"];
            message: components["schemas"]["Message"];
        };
        PointDto: {
            lat: number;
            lng: number;
        };
        SendMessageDto: {
            /** Format: uuid */
            clientId: string;
            /** @enum {string} */
            kind: "text" | "location";
            body?: string;
            point?: components["schemas"]["PointDto"];
        };
        ReadReceipt: {
            upToId: string | null;
        };
        CreateReportDto: {
            /** Format: uuid */
            listingId?: string;
            /** Format: uuid */
            userId?: string;
            /** Format: uuid */
            conversationId?: string;
            /** @enum {string} */
            reason: "fake" | "wrong_plate" | "inappropriate_photo" | "personal_data" | "harassment" | "spam" | "other";
            note?: string;
        };
        CreatedReport: {
            id: string;
            /** @enum {string} */
            status: "open";
            /** Format: date-time */
            createdAt: string;
        };
        MfaSetup: {
            secret: string;
            otpauthUrl: string;
            expiresInSec: number;
        };
        MfaCodeDto: {
            code: string;
        };
        AdminUserRef: {
            id: string;
            displayName: string;
            /** @enum {string} */
            status: "active" | "restricted" | "banned" | "deleted";
        };
        AdminListing: {
            id: string;
            plateDisplay: string;
            plateNormalized: string;
            /** @enum {string} */
            status: "active" | "pending" | "handed_over" | "closed" | "expired" | "removed";
            hiddenByReports: boolean;
            isOfficialPlate: boolean;
            plateFormatOk: boolean;
            city: string;
            district: string | null;
            foundAt: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            expiresAt: string;
            handoverConfirmed: boolean | null;
            openReports: number;
            approxCenter: components["schemas"]["LatLng"];
            owner: components["schemas"]["AdminUserRef"];
            thumbUrl: string | null;
        };
        AdminListingPage: {
            total: number;
            items: components["schemas"]["AdminListing"][];
        };
        AdminListingReport: {
            id: string;
            /** @enum {string} */
            reason: "other" | "fake" | "wrong_plate" | "inappropriate_photo" | "personal_data" | "harassment" | "spam";
            note: string | null;
            /** @enum {string} */
            status: "open" | "resolved_action" | "resolved_no_action";
            /** Format: date-time */
            createdAt: string;
            reporter: components["schemas"]["UserRef"];
        };
        AdminListingDetail: {
            id: string;
            plateDisplay: string;
            plateNormalized: string;
            /** @enum {string} */
            status: "active" | "pending" | "handed_over" | "closed" | "expired" | "removed";
            hiddenByReports: boolean;
            isOfficialPlate: boolean;
            plateFormatOk: boolean;
            city: string;
            district: string | null;
            foundAt: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            expiresAt: string;
            handoverConfirmed: boolean | null;
            openReports: number;
            approxCenter: components["schemas"]["LatLng"];
            owner: components["schemas"]["AdminUserRef"];
            thumbUrl: string | null;
            photoUrls: string[];
            reports: components["schemas"]["AdminListingReport"][];
        };
        AdminListingStatus: {
            id: string;
            /** @enum {string} */
            status: "active" | "pending" | "handed_over" | "closed" | "expired" | "removed";
        };
        ReasonDto: {
            reason: string;
        };
        AdminReportListing: {
            id: string;
            plateDisplay: string;
            /** @enum {string} */
            status: "active" | "pending" | "handed_over" | "closed" | "expired" | "removed";
            hiddenByReports: boolean;
            openReports: number;
        };
        AdminReportUser: {
            id: string;
            displayName: string;
            /** @enum {string} */
            status: "active" | "restricted" | "banned" | "deleted";
            restrictedUntil: string | null;
        };
        AdminReport: {
            id: string;
            /** @enum {string} */
            reason: "other" | "fake" | "wrong_plate" | "inappropriate_photo" | "personal_data" | "harassment" | "spam";
            note: string | null;
            /** @enum {string} */
            status: "open" | "resolved_action" | "resolved_no_action";
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            resolvedAt: string | null;
            reporter: components["schemas"]["UserRef"];
            listing: components["schemas"]["AdminReportListing"] | null;
            targetUser: components["schemas"]["AdminReportUser"] | null;
            conversationId: string | null;
        };
        AdminReportPage: {
            total: number;
            items: components["schemas"]["AdminReport"][];
        };
        ResolveReportDto: {
            /** @enum {string} */
            action: "none" | "remove_listing" | "restrict_user";
            /** @enum {number|null} */
            days?: 1 | 7 | 30 | null;
            note?: string;
        };
        ResolvedReport: {
            id: string;
            /** @enum {string} */
            status: "resolved_action" | "resolved_no_action";
        };
        RestrictDto: {
            /** @enum {number|null} */
            days: 1 | 7 | 30 | null;
            note?: string;
        };
        UserRestriction: {
            id: string;
            /** @enum {string} */
            status: "active" | "restricted";
            /** Format: date-time */
            restrictedUntil: string | null;
        };
        AdminPhone: {
            phone: string | null;
        };
        MetricTotals: {
            newListings: number;
            searches: number;
            searchesWithResult: number;
            matchRate: number | null;
            handovers: number;
        };
        MetricsDay: {
            day: string;
            newListings: number;
            searches: number;
            searchesWithResult: number;
            matchRate: number | null;
            handovers: number;
        };
        Metrics: {
            from: string | null;
            to: string | null;
            totals: components["schemas"]["MetricTotals"];
            days: components["schemas"]["MetricsDay"][];
        };
        ApiErrorBody: {
            code: string;
            message: string;
            details?: {
                [key: string]: unknown;
            };
        };
        ApiErrorResponse: {
            error: components["schemas"]["ApiErrorBody"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    HealthController_check: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The Health Check is successful */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example ok
                         * @enum {string}
                         */
                        status?: "ok" | "degraded";
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up",
                         *         "responseTime": 12
                         *       }
                         *     }
                         */
                        info?: {
                            [key: string]: {
                                /** @enum {string} */
                                status: "up" | "degraded" | "down";
                                /** @description Time the health indicator took to respond, in ms */
                                responseTime?: number;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /** @example {} */
                        error?: {
                            [key: string]: {
                                /** @enum {string} */
                                status: "up" | "degraded" | "down";
                                /** @description Time the health indicator took to respond, in ms */
                                responseTime?: number;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up",
                         *         "responseTime": 12
                         *       }
                         *     }
                         */
                        details?: {
                            [key: string]: {
                                /** @enum {string} */
                                status: "up" | "degraded" | "down";
                                /** @description Time the health indicator took to respond, in ms */
                                responseTime?: number;
                            } & {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description The Health Check is not successful */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example error
                         * @enum {string}
                         */
                        status?: "error" | "shutting_down";
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up",
                         *         "responseTime": 12
                         *       }
                         *     }
                         */
                        info?: {
                            [key: string]: {
                                /** @enum {string} */
                                status: "up" | "degraded" | "down";
                                /** @description Time the health indicator took to respond, in ms */
                                responseTime?: number;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "redis": {
                         *         "status": "down",
                         *         "message": "Could not connect",
                         *         "responseTime": 3005
                         *       }
                         *     }
                         */
                        error?: {
                            [key: string]: {
                                /** @enum {string} */
                                status: "up" | "degraded" | "down";
                                /** @description Time the health indicator took to respond, in ms */
                                responseTime?: number;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up",
                         *         "responseTime": 12
                         *       },
                         *       "redis": {
                         *         "status": "down",
                         *         "message": "Could not connect",
                         *         "responseTime": 3005
                         *       }
                         *     }
                         */
                        details?: {
                            [key: string]: {
                                /** @enum {string} */
                                status: "up" | "degraded" | "down";
                                /** @description Time the health indicator took to respond, in ms */
                                responseTime?: number;
                            } & {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AuthController_register: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RegisterDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RegisterResponse"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AuthController_verifyEmail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TokenDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AuthController_resend: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AuthController_login: {
        parameters: {
            query?: never;
            header?: {
                /** @description Tarayıcıda `cookie`: refresh token gövde yerine httpOnly cookie ile taşınır */
                "X-Token-Transport"?: "cookie";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoginDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenResponse"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AuthController_refresh: {
        parameters: {
            query?: never;
            header?: {
                /** @description Tarayıcıda `cookie`: refresh token gövde yerine httpOnly cookie ile taşınır */
                "X-Token-Transport"?: "cookie";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RefreshDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenResponse"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AuthController_logout: {
        parameters: {
            query?: never;
            header?: {
                /** @description Tarayıcıda `cookie`: refresh token gövde yerine httpOnly cookie ile taşınır */
                "X-Token-Transport"?: "cookie";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RefreshDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AuthController_forgot: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ForgotPasswordDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AuthController_reset: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResetPasswordDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    UsersController_me: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Me"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    UsersController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeletedAccount"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    UsersController_update: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateMeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Me"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    UsersController_phone: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PhoneLast4"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    UsersController_deletePhone: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    UsersController_setPhone: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PhoneDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PhoneLast4"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    UsersController_prefs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotificationPrefs"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    UsersController_updatePrefs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NotificationPrefsDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotificationPrefs"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    PhotosController_uploadUrl: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UploadUrlDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UploadUrl"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AlertsController_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlateAlert"][];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AlertsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAlertDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlateAlert"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AlertsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_search: {
        parameters: {
            query: {
                q: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchResult"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_checkDuplicate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CheckDuplicateDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DuplicateCheck"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateListingDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreatedListing"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_detail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListingDetail"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_update: {
        parameters: {
            query?: never;
            header: {
                /** @description İlanın `version` değeri */
                "If-Match": string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateListingDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListingVersion"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_phone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PhoneNumber"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_extend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExtendedListing"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_close: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CloseListingDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListingStatusChange"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_handover: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["HandoverDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListingStatusChange"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_confirmHandover: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["HandoverConfirmDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HandoverConfirmation"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ListingsController_mine: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OwnListing"][];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ConversationsController_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConversationSummary"][];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ConversationsController_start: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StartConversationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StartedConversation"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ConversationsController_messages: {
        parameters: {
            query?: {
                after?: number;
                before?: number;
                limit?: number;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"][];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ConversationsController_send: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SendMessageDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ConversationsController_read: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReadReceipt"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ConversationsController_block: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ReportsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateReportDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreatedReport"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminMfaController_setup: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MfaSetup"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminMfaController_verify: {
        parameters: {
            query?: never;
            header?: {
                /** @description Tarayıcıda `cookie`: refresh token gövde yerine httpOnly cookie ile taşınır */
                "X-Token-Transport"?: "cookie";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MfaCodeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenResponse"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_listings: {
        parameters: {
            query?: {
                plate?: string;
                status?: "pending" | "active" | "handed_over" | "closed" | "expired" | "removed" | "hidden";
                city?: string;
                from?: string;
                to?: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminListingPage"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_listing: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminListingDetail"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_approve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminListingStatus"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_reject: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReasonDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminListingStatus"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReasonDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminListingStatus"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_exactLocation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LatLng"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_reports: {
        parameters: {
            query?: {
                status?: "open" | "resolved_action" | "resolved_no_action";
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminReportPage"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_resolve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResolveReportDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResolvedReport"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_restrict: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RestrictDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserRestriction"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_unrestrict: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserRestriction"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_phone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminPhone"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    AdminController_metrics: {
        parameters: {
            query?: {
                from?: string;
                to?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Metrics"];
                };
            };
            /** @description Hata */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
}
