"use server";

export async function submitContactForm(_prevState: unknown, formData: FormData) {
  const entityId = formData.get("entityId")?.toString().trim();
  const channel = formData.get("channel")?.toString().trim();
  const operation = formData.get("operation")?.toString().trim();
  const payload = formData.get("payload")?.toString().trim();

  if (!entityId || !channel || !operation || !payload) {
    return { status: "ERROR", message: "MISSING_REQUIRED_FIELDS" };
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Se as variáveis estiverem configuradas, envia para o Telegram
  if (botToken && chatId) {
    try {
      const text = `🚨 *NOVO DISPATCH // ZANVEXIS PORTFOLIO*\n\n` +
        `👤 *Entidade/Nome:* ${entityId}\n` +
        `📡 *Canal Retorno:* ${channel}\n` +
        `⚙️ *Área:* ${operation}\n\n` +
        `📝 *Payload:*\n${payload}`;

      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      if (!res.ok) {
        console.error("Telegram API Error:", await res.text());
        return { status: "ERROR", message: "TELEGRAM_GATEWAY_FAILURE" };
      }
    } catch (err) {
      console.error("Failed to relay contact message to Telegram:", err);
      return { status: "ERROR", message: "RELAY_NETWORK_ERROR" };
    }
  } else {
    // Log de fallback caso rode em dev sem as chaves no .env.local
    console.warn("TELEGRAM_BOT_TOKEN ou TELEGRAM_CHAT_ID não definidos. Simulação de sucesso em console:");
    console.log({ entityId, channel, operation, payload });
  }

  return { status: "SUCCESS", message: "DISPATCH_COMMITTED" };
}