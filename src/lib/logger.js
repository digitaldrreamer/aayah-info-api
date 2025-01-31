const logger = {
    debug: (message, data) => console.log(`🔍 DEBUG: ${message}`, data || ""),
    info: (message, data) => console.log(`ℹ️ INFO: ${message}`, data || ""),
    error: (message, data) => console.log(`❌ ERROR: ${message}`, data || ""),
    success: (message, data) => console.log(`✅ SUCCESS: ${message}`, data || ""),
    warn: (message, data) => console.log(`⚠️ WARN: ${message}`, data || ""),
    start: (message, data) => console.log(`🚀 START: ${message}`, data || ""),
    end: (message, data) => console.log(`🏁 END: ${message}`, data || ""),
    raw: (label, data) => {
        console.log("=====================================");
        console.log(`${label}:`);
        console.log(JSON.stringify(data, null, 2));
        console.log("=====================================");
    },
    separator: () => console.log("====================================="),
};

export default logger;