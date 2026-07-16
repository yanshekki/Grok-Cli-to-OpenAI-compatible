const oa="gog_admin_lang",gt={en:{brand:"Grok Gateway",brandSub:"Admin Panel",loginTitle:"Admin",loginLabel:"API Key",loginOtpLabel:"One-time login code",loginBtn:"Sign in",loginCmdHint:"Get a key in terminal:",loginOtpHint:"Generate a code in terminal (required every login):",loginOtpExpiry:"Code expires in 5 minutes and can be used only once.",loginOtpFail:"Invalid or expired code",loginLostKey:"Lost old key? Create a new admin key (plaintext is not stored).",loginCopy:"Copy",loginCopied:"Copied",needKey:"Enter API key",needOtp:"Enter the one-time code from the terminal",logout:"Log out",shell:{menu:"Open menu",closeMenu:"Close menu"},nav:{dashboard:"Dashboard",chat:"Chat",chats:"Chat logs",keys:"API Keys",documents:"Documents",media:"Media",audit:"Audit Logs",settings:"Safety",apiFeatures:"API features",usage:"Usage & Limits",ddos:"DDoS Center",queue:"Queue",pm2:"PM2",system:"System"},queue:{title:"Chat queue",subtitle:"Every conversation is enqueued, leased, and consumed with fair concurrency. Pause, drain, or requeue from here.",paused:"Paused",running:"Consuming",drain:"Drain mode",mode:"Mode",modeOff:"Disabled",depth:"Depth",queued:"Queued",leased:"Leased",activeJobs:"Running",dead:"Dead letter",oldest:"Oldest wait",concurrency:"Per-key / global",worker:"In-process workers",workerInstance:"Worker instance",workerInstanceHint:"This process’s consumer ID (lease owner). Changes on restart.",kpiActiveSub:"{n} active in this process",consumer:"Consumer",admission:"Admission",accepting:"Accepting jobs",pause:"Pause",resume:"Resume",drainBtn:"Drain",undrain:"Stop drain",savePolicy:"Save policy",refresh:"Refresh",jobs:"Jobs",jobsMeta:"{n} matching",cancel:"Cancel",requeue:"Requeue",purgeDead:"Purge finished (24h+)",purgeConfirm:"Delete succeeded / failed / cancelled / dead jobs finished more than 24 hours ago?",cancelConfirm:"Cancel this job? If it is running, cancellation is cooperative.",empty:"No jobs match this filter",enabled:"Queue enabled",masterOn:"Queue on",masterOff:"Queue off",masterHint:"Master switch for the durable chat queue. Applies immediately.",disabledBanner:"Queue is disabled — new chat requests bypass the queue and run immediately (subject to concurrency limits).",globalConcurrency:"Global concurrency",perKeyConcurrency:"Per-key concurrency",maxDepth:"Max queue depth",maxDepthKey:"Max per key",fairness:"Fairness",fifo:"Global FIFO",wrr:"Weighted round-robin",playgroundPriority:"Playground priority (lower first)",defaultPriority:"Default priority",leaseMs:"Lease (ms)",maxWaitMs:"Max wait (ms)",filterTitle:"Filter jobs",filterHint:"Narrow by status, then apply. Auto-refresh every few seconds.",filterStatus:"Status",allStatuses:"All statuses",filterDead:"Dead letter (DLQ)",filterQueued:"Queued",filterRunning:"Running / leased",filterFailed:"Failed",filterSucceeded:"Succeeded",filterCancelled:"Cancelled",errorCol:"Error",priorityBtn:"Priority",priorityPh:"Priority (0–1000, lower first)",dlqTitle:"Dead letter queue",dlqHint:"Jobs that exhausted retries — requeue or purge when ready.",viewDlq:"View DLQ",statusPanel:"Runtime status",policyTitle:"Queue policy",policyHint:"Pick a scheme or fine-tune values. Save to apply. Editing pauses auto-refresh.",presetTitle:"Policy schemes",presetHint:"One-click presets. Active = matches form · Saved = currently stored.",presetRelaxed:"Relaxed",presetBalanced:"Balanced",presetStrict:"Strict",presetCustom:"Custom",presetRelaxedHint:"Higher concurrency and deeper queues — better for multi-key playgrounds and burst traffic.",presetBalancedHint:"Default production balance: fair round-robin, moderate depth, one job per key.",presetStrictHint:"Tight limits + global FIFO — protects the host when traffic is untrusted or resource is scarce.",presetCustomHint:"Values do not match a built-in scheme. Adjust fields or pick a scheme above.",presetActiveLabel:"Active: {name}",presetFormLabel:"Draft: {name}",presetTagActive:"Active",presetTagDraft:"Draft",presetTagSaved:"Saved",hintGlobalConc:"Max jobs running at once across all keys",hintPerKeyConc:"Max concurrent jobs for a single API key",hintMaxDepth:"Reject new jobs when total queue is full",hintMaxDepthKey:"Reject when this key has too many waiting/running jobs",hintFairness:"WRR shares capacity across keys; FIFO is global order by priority/time",hintLease:"How long a worker holds a job before reclaim",hintMaxWait:"Client wait timeout while queued",colJob:"Job / request",colSource:"Source",colStatus:"Status",colModel:"Model",colPri:"Pri",colKey:"API key",colTry:"Try",colTime:"Queued",stQueued:"queued",stLeased:"leased",stRunning:"running",stSucceeded:"succeeded",stFailed:"failed",stDead:"dead",stCancelled:"cancelled",srcV1:"API",srcPlayground:"Playground",kpiDepthSub:"{q} queued · {l} leased",kpiQueuedSub:"Waiting for a worker",kpiDeadSub:"Exhausted attempts",kpiOldestSub:"Head of queue wait",wait:"Wait",started:"Started",cancelReq:"Cancel requested"},chat:{title:"Chat",new:"New chat",send:"Send",stop:"Stop",stopped:"stopped",placeholder:"Message… (Enter to send, Shift+Enter newline)",keyMode:"API key",keySelect:"API key",useSessionKey:"Signed-in admin key",useCustomKey:"Custom key",customKey:"Key",includeReasoning:"Show reasoning",reasoning:"Thinking",needKey:"Enter or select an API key",attach:"Upload",attachLibrary:"From library",attachHint:"Drop files anywhere on this page, upload, or pick from library",dropTitle:"Drop files to attach",dropHint:"Release to upload — same formats as the attach button",formatsLabel:"Formats",formatsHint:"txt, md, csv, json, xml, html, pdf, images (png/jpg/webp/gif), code (js/ts/py/go/rs/java/c/cpp/css/yml/sql/sh…)",formatsReject:"Unsupported type: {name}. Allowed: {formats}",libraryTitle:"Previously uploaded files",librarySubtitle:"Select files owned by the current API key (same formats as upload).",librarySearch:"Search by name…",libraryEmpty:"No matching files for this key",libraryAdd:"Add selected",librarySelected:"{n} selected",libraryAlready:"Already attached",libraryLoadFail:"Could not load documents",uploading:"Uploading…",uploadFail:"Upload failed",uploadProgress:"Uploading {name}",uploadProgressMulti:"Uploading {name} ({i}/{n})",emptyTitle:"Start a conversation",emptyHint:"Send a message or attach files. Open a previous chat from the history panel to continue.",needContent:"Type a message or attach at least one file",tooManyFiles:"Too many files (max 10 per message)",fileOnlyPrompt:"Please review the attached files.",removeFile:"Remove",docs:"Attachments",you:"You",assistant:"Assistant",streaming:"Streaming…",emptyReply:"(empty reply)",systemPrompt:"System prompt",systemPlaceholder:"Optional system instructions for the model…",systemHint:"Sent as a system message on every turn. Not shown in the chat bubbles.",history:"History",historyEmpty:"No saved conversations yet",historySearch:"Search topics…",historyOpen:"Show history",historyClose:"Close history",rename:"Rename",renamePh:"Conversation topic",untitled:"Untitled chat",deleteConversation:"Delete",deleteConfirm:"Delete this conversation? This cannot be undone.",saveFail:"Could not save conversation",loadFail:"Could not load conversation",historyPrev:"Previous",historyNext:"Next",historyPage:"Page {n} / {total}",msgs:"{n} messages",compress:"Summarize for context",compressConfirm:"Generate a conversation summary for later turns? Your full chat history stays on screen. Only the model context is shortened. This uses one model call.",compressing:"Summarizing…",compressNeedMore:"Need at least 3 messages (or 2 long ones) to summarize. Continue chatting, then try again.",compressFail:"Could not create summary",compressNeedSummary:"Create a summary first (Summarize for context).",compressedBadge:"Summary",compressOk:"Summary ready — full history kept. Context mode set to summary.",compressBusy:"Wait for the current reply to finish",compressResultTitle:"Conversation summary",compressView:"View summary",summaryMeta:"Created: {when} · Based on {n} messages",ctxPolicyTitle:"Model context",ctxRemark:"Full messages stay visible. This only controls what is sent to the model next.",ctxMode:"Context",ctxModeFull:"Full history",ctxModeSummary:"Summary + recent",ctxModeRecent:"Recent only",ctxModeFullLabel:"Sending full history to the model",ctxModeSummaryLabel:"Sending summary + last {n} messages",ctxModeRecentLabel:"Sending last {n} messages only",ctxRecentN:"Recent N",ctxLongHint:"Long thread detected — consider Summary or Recent to reduce tokens and lag.",loadOlder:"Load {n} earlier messages",showMore:"Show more",showLess:"Show less",copy:"Copy",copied:"Copied",copyFail:"Copy failed"},status:{success:"success",error:"error",timeout:"timeout",pending:"pending",active:"active",finished:"finished",online:"online",stopped:"stopped"},dash:{title:"Dashboard",subtitle:"Gateway overview — traffic, queue, safety, OTP sessions, and protection at a glance.",last24:"Requests (24h)",totalChat:"Total chats",success:"Success",errors:"Errors / timeout",docs:"Documents",keys:"Active keys",concurrent:"Grok concurrency",recent:"Recent API chats",empty:"No data yet",emptyModels:"No model traffic in the last 24h",updated:"Updated",refresh:"Refresh",viewAll:"View all",openDdos:"DDoS center",openSettings:"Safety",openQueue:"Open queue",kpi24h:"Requests (24h)",kpi24hSub:"{ok} ok · {err} errors",kpiSuccessRate:"Success rate (24h)",kpiSuccessRateSub:"All-time {all}%",kpiErrors:"Errors (24h)",kpiErrorsSub:"All-time {all}",kpiKeys:"API keys",kpiKeysSub:"Active / total",kpiDocs:"Documents",kpiMedia:"Media assets",kpiMediaSub:"{n} in 24h",kpiDocsSub:"Stored files",kpiConv:"Playground threads",kpiConvSub:"{n} updated in 24h",kpiSessions:"OTP sessions",kpiSessionsSub:"Active admin logins",kpiConcurrent:"Grok concurrency",kpiConcurrentSub:"Active / max slots",kpiQueue:"Chat queue",kpiQueueSub:"Depth · running / max · dead",kpiQueueSubLive:"{run}/{max} run · {dead} dead{wait}",kpiQueuePaused:"Paused",kpiQueueDrain:"Drain",kpiQueueOff:"Disabled",kpiSafe:"Global safe",kpiSafeOn:"On",kpiSafeOff:"Off",kpiSafeSub:"{tools} · turns {turns} · {model}",kpiSafeSubEmpty:"Settings unavailable",queuePanel:"Chat queue",queueState:"State",queueLive:"Live",qQueued:"Queued",qRunning:"Running",qDead:"Dead",qSucceeded:"Succeeded",qWorker:"Worker",qWorkerActive:"active slots",qOldest:"oldest wait",qUnavailable:"Queue stats unavailable",safety:"Safety settings",globalSafe:"Global safe mode",safeTools:"Tools",safeTurns:"Max turns",safeTimeout:"Timeout",defaultModel:"Default model",safetyHint:"Affects safe-mode keys and forced-safe traffic. Playground OTP sessions use agent mode unless global safe is on.",protection:"Protection",autoBan:"Auto-ban",on:"On",off:"Off",ruleAuth:"Auth",ruleRate:"429",ruleConn:"Conn",ruleVelocity:"Velocity",bans:"Blacklist",blocked:"Blocked hits",rateHits:"Rate-limit hits",liveConn:"Live connections",proxy:"Proxy IP",hops:"hops",limits:"Key/IP limits",models24h:"Models (24h)",runtime:"Runtime",port:"Listen port",defaultPort:"default",env:"Environment",authMode:"Admin auth",authOtp:"OTP session",encryption:"Encryption",ready:"Ready",notReady:"Not ready"},chats:{title:"Chat history",total:"Total",decrypt:"Full in/out is decrypted on open",search:"Search",searchPh:"Request ID, key name, model…",filterTitle:"Search & filters",filterHint:"Narrow results, then open a row for full detail (incl. system prompt)",status:"Status",allStatus:"All statuses",model:"Model",allModels:"All models",apiKey:"API key",allKeys:"All keys",from:"From",to:"To",mode:"Mode",allModes:"All modes",hasDocs:"Has attachments",filter:"Apply filters",reset:"Reset",request:"Request",prompt:"Prompt",response:"Response",time:"Time",attachments:"Attachments",page:"Page",prev:"Previous",next:"Next",perPage:"Per page",detail:"Chat detail",noAttach:"No attachments",openFile:"Open / preview",close:"Close",copyPrompt:"Copy prompt",copyContent:"Copy content",copySystem:"Copy system prompt",copyRawPrompt:"Copy raw prompt",duration:"Duration",stream:"Stream",reasoning:"Reasoning / thought",content:"Content (output)",raw:"Raw stored response",rawPrompt:"Raw stored prompt",userPrompt:"User / conversation prompt",systemPrompt:"System prompt",systemHint:"Extracted from the stored prompt (system role messages).",noSystem:"No system prompt in this request.",hasSystem:"Has system",none:"(none)",file:"file",img:"img",previewFailed:"Preview failed"},keys:{title:"API Keys",new:"New key",searchPh:"Name or key prefix…",name:"Name",role:"Role",mode:"Mode",rate:"Rate / min",status:"Status",created:"Created",edit:"Edit",revoke:"Revoke",confirmRevoke:"Revoke this key?",empty:"No keys",usage24:"24h use",maxTurns:"Max turns",timeoutMs:"Timeout (ms)",ipWhitelist:"IP whitelist",ipWhitelistHint:"One IP or CIDR per line. Empty = allow all IPs.",ipWhitelistCol:"IP allow",ipAll:"All IPs",keyOnce:"Store this key securely — shown once:",roleClient:"client",roleAdmin:"admin",roleClientBadge:"client",roleAdminBadge:"admin",modeSafe:"safe (external)",modeAgent:"agent (full tools)",modeSafeBadge:"safe",modeAgentBadge:"agent",ipCount:"{n} IPs",ipPlaceholder:`127.0.0.1
203.0.113.0/24`},docs:{title:"Documents",total:"Total",file:"File",mime:"MIME",size:"Size",time:"Time",storage:"Storage",storageDb:"Database (encrypted)",storageFs:"Filesystem (encrypted)",storageHint:"Small files are stored encrypted in the database. Files larger than {dbMax} are stored as encrypted blobs under STORAGE_DIR ({dir}). Max upload size: {upMax}. Content is AES-encrypted; soft-delete also removes filesystem blobs.",download:"Download",downloadFail:"Download failed",binaryPreview:"This is a binary file (e.g. PDF). Preview is not available — please use Download.",delete:"Delete",confirmDel:"Delete this document?",detail:"Document detail",preview:"Preview",copy:"Copy content",empty:"No documents",searchPh:"File name or MIME…",page:"Page",prev:"Previous",next:"Next"},audit:{title:"Audit logs",searchPh:"Action, resource, IP, key…",time:"Time",action:"Action",resource:"Resource",key:"Key",meta:"Meta",empty:"No logs",id:"ID",actions:{chat_create:"Chat create",document_upload:"Document upload",document_delete:"Document delete",document_list:"Document list",document_read:"Document read",document_download:"Document download",api_key_create:"API key create",api_key_update:"API key update",api_key_delete:"API key revoke",api_key_list:"API key list",settings_update:"Settings update",chat_admin_view:"Chat admin view",system_update:"System update",system_update_check:"Update check",ip_ban:"IP ban",ip_unban:"IP unban",ddos_policy_update:"DDoS policy update",pm2_start:"PM2 start",pm2_stop:"PM2 stop",pm2_restart:"PM2 restart",pm2_reload:"PM2 reload",pm2_config:"PM2 config",pm2_switch:"PM2 switch runner",playground_chat:"Playground chat",playground_upload:"Playground upload"},resources:{document:"Document",chat:"Chat",api_key:"API key",settings:"Settings",system:"System",pm2:"PM2",playground:"Playground",ip:"IP"},metaStorage:"Storage",metaAsKey:"As key id",metaAsKeyName:"As key name"},settings:{title:"Safety settings",hint:"Global safe mode forces a sandbox, disables always-approve, and restricts tools — even if a key is set to agent. Turn it on for production APIs; turn it off for local Admin playground that needs web/tools.",globalSafe:"Global safe mode (all keys)",globalSafeHint:"On = every key runs as safe (sandbox + tool limits). Off = each key’s safe/agent mode applies.",masterOn:"Safe mode on",masterOff:"Safe mode off",disabledBanner:"Global safe mode is off — each API key’s own safe/agent setting applies (agent keys have full tools).",tools:"Safe tools mode",toolsHint:"none = block shell/web/write (best for public APIs). readonly = allow read/grep/list only (code review).",toolsNone:"none (block dangerous tools)",toolsReadonly:"readonly (read-only tools)",maxTurns:"Safe max turns",maxTurnsHint:"Per request tool/model steps in safe mode. Pure chat 3–6 · daily API 8–12 · multi-step safe 15–25 · long tasks 30–40. Too low → “max turns reached / exit code 1”.",timeout:"Safe timeout (ms)",timeoutHint:"Safe-mode request deadline. Quick Q&A 60s · normal 120s · long tool runs 300–600s (300000–600000 ms).",defaultModel:"Default model",defaultModelHint:"Used when the client omits model. Pick a model from your local Grok CLI.",modelSource:"From Grok CLI install",refreshModels:"Refresh models",panel:"Admin Panel",save:"Save settings",saved:"Settings saved",guideTitle:"Recommended setups by use case",guideIntro:"Click “Apply” to confirm and save that setup immediately. Values are starting points — you can still fine-tune fields and Save again. Matching saved form values shows “Applied”.",guideApply:"Apply",guideActive:"Applied",guideApplyConfirm:"Apply “{name}” and save these Safety settings now? Current values will be replaced.",guideApplied:"Preset applied and saved",chipGlobalOn:"Global safe: On",chipGlobalOff:"Global safe: Off",scLocalTitle:"Local Admin playground",scLocalDesc:"Your own machine: price checks, web, free-form chat. Prefer full capability.",scLocalDetail:"Global safe OFF · tools n/a · turns — · timeout — · use agent keys. Safe fields only matter if you re-enable global safe (then turns 12–20, timeout 120–300s).",scProdTitle:"Public / product API",scProdDesc:"OpenAI-compatible endpoint for apps or customers. Least privilege.",scProdDetail:"Global safe ON · tools none · turns 8–12 · timeout 60–120s · fixed default model.",scCodeTitle:"Coding agent (trusted)",scCodeDesc:"Edit files, run commands on a trusted host. Not for the public internet.",scCodeDetail:"Global safe OFF · dedicated agent keys · safe turns/timeout unused for agent · set limits on the key or via .env.",scReadTitle:"Read-only analysis",scReadDesc:"Explain code / search repo without writes or web.",scReadDetail:"Global safe ON · tools readonly · turns 8–15 · timeout 120–180s.",scChatTitle:"Plain Q&A chat",scChatDesc:"Text answers only; tools not needed.",scChatDetail:"Global safe ON · tools none · turns 3–6 · timeout 60s.",scLongTitle:"Long multi-step tasks (still safe)",scLongDesc:"Many tool steps under safe mode; reduce “max turns” failures.",scLongDetail:"Global safe ON · tools none or readonly · turns 20–40 · timeout 300–600s. Still no web if tools=none.",dangerTitle:"Danger zone",disablePanel:"Disable Admin Panel",disablePanelConfirm:"Disable Admin Panel now? You will be signed out. Re-enable only via CLI: gctoac admin on",disablePanelDone:"Admin Panel disabled. Re-enable with: gctoac admin on",panelOffHint:"The panel can only be turned off here. To turn it back on, run gctoac admin on on the server.",panelStatus:"Status",panelOn:"On",panelOff:"Off"},apiFeatures:{title:"API features",intro:"Control which API protocols, media REST surfaces, and Grok CLI capabilities are enabled. Protocol/capability off → usually 403; media APIs off → 501. Changes apply within ~2s (no restart). CLI: gctoac api features",groupProtocols:"Protocol surfaces",groupMedia:"Media APIs (OpenAI-compatible)",groupCaps:"Grok CLI capabilities",groupEmu:"Emulation & safety",presetOpen:"Preset: Open",presetLocked:"Preset: Locked",presetDev:"Preset: Dev",presetConfirm:"Apply feature preset “{name}”? This overwrites all API feature flags.",flag:{openaiChat:"OpenAI Chat Completions",openaiResponses:"OpenAI Responses",anthropicMessages:"Anthropic Messages",imagesApi:"Images API",filesOpenAiAlias:"Files API alias",videoApi:"Videos API (async jobs)",audioApi:"Audio API (speech / STT)",tools:"Tools / function calling",structuredOutput:"Structured output (--json-schema)",vision:"Vision / image parts (--prompt-json)",reasoningEffort:"Reasoning effort",webSearch:"Web search tools",subagents:"Subagents",planMode:"Plan mode",memory:"Cross-session memory",sessionResume:"Session resume / continue",bestOfN:"best-of-n",checkLoop:"Self-check loop",systemOverride:"System prompt override",rules:"Extra rules",permissionMode:"Permission mode",sandbox:"Sandbox profile",usageEstimate:"Estimate token usage",assistantsEmulation:"Assistants-lite (local)",strictSampling:"Strict sampling (reject temperature…)",forceDisableToolsInSafe:"Force tool limits in safe mode"},hint:{openaiChat:"POST /v1/chat/completions",openaiResponses:"POST /v1/responses",anthropicMessages:"POST /v1/messages",imagesApi:"POST /v1/images/generations + /edits (agent key)",filesOpenAiAlias:"POST/GET /v1/files → documents + media store",videoApi:"POST /v1/videos + poll GET /v1/videos/:id",audioApi:"POST /v1/audio/speech + /transcriptions (needs provider)",tools:"Maps tools → Grok --tools + system tool list",structuredOutput:"response_format / json_schema",vision:"image_url content parts",reasoningEffort:"--reasoning-effort",webSearch:"When off: --disable-web-search",subagents:"--no-subagents when off",planMode:"--no-plan when off",memory:"--experimental-memory",sessionResume:"--resume / --continue",bestOfN:"--best-of-n (headless)",checkLoop:"--check",systemOverride:"--system-prompt-override",rules:"--rules",permissionMode:"--permission-mode",sandbox:"--sandbox",usageEstimate:"Fill usage with char/4 estimates",assistantsEmulation:"Local /v1/assistants + /v1/threads",strictSampling:"400 if temperature/top_p/stop sent",forceDisableToolsInSafe:"Keep safe-mode tool policy"}},media:{title:"Media library",intro:"Generated images / video jobs from /v1/images and /v1/videos. Image generation needs agent keys + imagesApi. Toggle flags under API features.",assets:"Assets",jobs:"Video jobs",empty:"No media assets yet",jobsEmpty:"No video jobs yet",kind:"Kind",bytes:"Bytes",provider:"Provider",providerPh:"Provider name…",prompt:"Prompt",created:"Created",status:"Status",preview:"Preview",download:"Download",delete:"Delete",deleteConfirm:"Soft-delete this media asset?",allKinds:"All kinds",searchPh:"Prompt, filename, MIME, provider, id…",from:"From",to:"To"},usage:{title:"Usage & anti-abuse",window:"Window",requests:"Requests",success:"Success",errors:"Errors",errorRate:"Error rate",byModel:"By model",byKey:"Per API key",rateLimit:"Limit / min",util:"Est. utilization",limits:"Gateway limits",global:"Global max / window",ipMax:"Unauth IP max",burst:"Chat burst (10s)",block:"Auth fail block threshold",concurrent:"Grok max concurrent",refresh:"Refresh"},ddos:{title:"DDoS control center",live:"Live connections",recent:"Recent requests",blacklist:"IP blacklist",stats:"Abuse stats",refresh:"Refresh",pause:"Pause auto-refresh",resume:"Resume auto-refresh",ban:"Ban IP",unban:"Unban",banConfirm:"Ban this IP?",banWhitelistWarn:"This IP is on the auto-ban whitelist. Ban anyway?",unbanConfirm:"Remove this IP from blacklist?",ip:"IP",method:"Method",path:"Path",key:"API key",duration:"Duration",state:"State",ua:"User-Agent",reason:"Reason",source:"Source",expires:"Expires",permanent:"Permanent",addBan:"Add ban",ttl:"TTL",ttlPerm:"Permanent",ttl1h:"1 hour",ttl24h:"24 hours",ttl7d:"7 days",activeConn:"Active",rateHits:"Rate-limit hits",blockedHits:"Blocked hits",autoBans:"Auto bans",topIps:"Top IPs (recent)",emptyLive:"No active connections",emptyBan:"Blacklist is empty",emptyEvents:"No auto-ban events yet",reasonPh:"Optional reason",banReasonDefault:"manual from admin",ipPlaceholder:"1.2.3.4",policyTitle:"Protection policy",policyHint:"All thresholds are live — no restart. Env values are only the initial defaults.",autoOn:"Auto-judgment ON",autoOff:"Auto-judgment OFF",autoBanMaster:"Enable automatic IP bans",autoBanMasterHint:"When off, rate limits still apply but IPs are never auto-banned.",masterOn:"Auto-ban on",masterOff:"Auto-ban off",disabledBanner:"Automatic IP bans are off — rate limits still apply, but IPs will not be auto-blacklisted.",presetTitle:"Policy profile",presetHint:"Pick a profile or edit fields — custom is detected automatically.",presetRelaxed:"Relaxed",presetBalanced:"Balanced",presetStrict:"Strict",presetCustom:"Custom",presetActiveLabel:"Active: {name}",presetFormLabel:"Form: {name} (unsaved)",presetTagActive:"Active",presetTagDraft:"Draft",presetTagSaved:"Saved",presetActiveHint:"Current profile: {name}. Click Save if you changed other fields.",presetCustomHint:"Values do not match Relaxed / Balanced / Strict — treated as Custom.",presetUnsavedHint:"Form shows {form}; server still has {saved}. Click Save policy to apply.",savePolicy:"Save policy",resetPolicy:"Reset to env defaults",policySaved:"Protection policy saved. Rate limiters reloaded.",policyReset:"Policy reset to environment defaults.",confirmReset:"Reset all DDoS policy fields to .env defaults?",sectionProxy:"Reverse proxy / CDN",proxyHint:"When traffic passes through nginx or Cloudflare, enable trust hops so bans, rate limits, and audit logs use the real client IP — not the proxy IP.",proxyTrustHops:"Trusted proxy hops",proxyTrustHopsHint:"0 = direct only (ignore headers). 1 = nginx or Cloudflare→app. 2 = Cloudflare→nginx→app.",proxyIpSource:"Client IP source",proxyIpSourceHint:"auto tries CF-Connecting-IP, then X-Real-IP, then X-Forwarded-For. Use “socket” only for direct connections.",proxySrcAuto:"Auto (recommended)",proxySrcCf:"Cloudflare (CF-Connecting-IP)",proxySrcNginx:"nginx (X-Real-IP)",proxySrcXff:"X-Forwarded-For only",proxySrcSocket:"TCP socket only (no proxy)",trustedProxies:"Trusted proxy IPs / CIDRs",trustedProxiesHint:"Only these peers may set CF-Connecting-IP / X-Real-IP / XFF. Default 127.0.0.1 — add your nginx/LB host if remote. Direct clients cannot spoof headers.",sectionLimits:"Rate limits",sectionAuth:"Failed authentication",sectionRate:"Rate-limit abuse (429)",sectionConn:"Connection flood",sectionVelocity:"Request velocity",sectionEscalate:"Repeat offender escalation",sectionWhitelist:"Auto-ban whitelist",whitelistHint:"One IP or CIDR per line. These IPs are never auto-banned.",rateWindow:"Window (sec)",rateMaxKey:"Max / key",rateMaxIp:"Max / IP (no key)",burstWindow:"Burst window (sec)",burstMax:"Burst max",enableRule:"Enabled",threshold:"Threshold",windowSec:"Window (sec)",banMin:"Ban duration (min)",escalateAfter:"Escalate after N auto-bans",escalateMin:"Escalated ban (min)",maxConcurrent:"Max concurrent / IP",velocityMax:"Max requests",eventsTitle:"Recent auto-ban events",eventTime:"When",eventSource:"Rule",eventDuration:"Ban for",sources:{manual:"Manual","auto-auth":"Auto · auth","auto-rate":"Auto · 429","auto-conn":"Auto · concurrent","auto-velocity":"Auto · velocity","auto-escalate":"Auto · escalated"}},pm2:{title:"PM2 control",status:"Process status",start:"Start with PM2",stop:"Stop PM2",restart:"Restart",reload:"Reload",logs:"Logs",logsHint:"Error log first",clearLogs:"Clear logs",confirmClearLogs:"Clear PM2 and gctoac log files? This cannot be undone (files are truncated).",logsCleared:"Cleared {n} log file(s).",logsAutoTrim:"Auto-trim over {maxMb} MB → keep last ~{keepKb} KB (on each log read).",refresh:"Refresh",confirmStop:"Stop the PM2 process?",confirmRestart:"Restart under PM2? Port will be handed over cleanly.",unavailable:"PM2 not available",disabled:"PM2 admin is disabled",app:"App name",pid:"PID",uptime:"Uptime",memory:"Memory",cpu:"CPU",restarts:"Restarts",portBusy:"Port in use",port:"Port",portTitle:"Listen port",portHint:"HTTP port for the gateway Admin UI and API. Changing the port updates .env and restarts the runner so the new port takes effect.",fieldPort:"Port",portDefaultNote:"Default is 3847. Valid range: 1–65535.",savePort:"Save port & restart",useDefaultPort:"Use default (3847)",portInvalid:"Enter a valid port number (1–65535).",confirmPortChange:"Change listen port to {port} and restart the gateway? You will need to open Admin on the new port (e.g. http://localhost:{port}/admin).",portChangedMsg:"Port updated: {from} → {to}.",portSavedNeedRestart:"Port {port} saved to .env. Restart the gateway for it to take effect.",portAfterRestart:"After restart, open Admin at http://localhost:{port}/admin",hint:"Choose how the gateway runs: detached gctoac process or PM2. You can switch anytime from this page or CLI (gctoac start / gctoac start --pm2).",switchTitle:"Runner",switchHint:"Only one process should bind the port. Switching stops the other runner, then starts the selected one.",currentRunner:"Current runner",runnerPm2:"PM2",runnerGctoac:"gctoac (detached)",runnerNone:"Not running",runnerUnknown:"Unknown / mixed",switchToPm2:"Switch to PM2",switchToGctoac:"Switch to gctoac",confirmSwitchPm2:"Switch to PM2? Gateway restarts under PM2 in a few seconds.",confirmSwitchGctoac:"Switch to gctoac? Gateway restarts as a detached process in a few seconds.",switchScheduled:"Switch scheduled. Refresh Admin in ~10 seconds.",gctoacPid:"gctoac PID",configTitle:"PM2 config",configHint:"Saved to pm2.runtime.json and applied via ecosystem.config.cjs. Save & apply restarts PM2 if it is the active runner.",saveConfig:"Save & apply",saveOnly:"Save only",resetConfig:"Reset defaults",confirmReset:"Reset PM2 config to defaults?",configSaved:"Config saved",fieldName:"App name",fieldScript:"Script",fieldCwd:"Working directory (cwd)",fieldInstances:"Instances",fieldExecMode:"Exec mode",fieldAutorestart:"Autorestart",fieldWatch:"Watch",fieldMaxMem:"Max memory restart",fieldMaxRestarts:"Max restarts",fieldMinUptime:"Min uptime",fieldRestartDelay:"Restart delay (ms)",fieldBackoff:"Exp backoff restart delay (ms)",fieldMergeLogs:"Merge logs",fieldTime:"Log timestamps",fieldErrorFile:"Error log file",fieldOutFile:"Out log file",fieldEnvExtra:"Extra env (KEY=value per line)",fieldPreferred:"Preferred runner",empty:"App not in pm2 list",modeFork:"fork",modeCluster:"cluster",phCwd:"(package root)",phInstances:"1 or max",phEnv:"NODE_ENV=production",statusOnline:"online",statusErrored:"errored",statusStopped:"stopped",msgOk:"OK",msgDisabled:"PM2 admin is disabled (PM2_ADMIN_ENABLED=false).",msgBinaryMissing:"pm2 not found on PATH. Install: npm install -g pm2",msgNotInList:'App "{app}" is not in the PM2 list — use Start with PM2 or Switch to PM2.',msgPortGctoac:"Port {port} is held by gctoac (pid {pid}). Use “Switch to PM2” to hand over.",msgPortBusy:"Port {port} is in use (pid {pids}).",msgErrored:"PM2 process errored — check logs / config, then Restart or fix port conflicts.",msgBothRunners:"Both runners detected; gctoac pid {pid} also holds resources. Prefer one via Switch.",msgError:"PM2 error: {error}",msgSwitchPm2:"Switching to PM2… server restarts under PM2 in a few seconds. Refresh Admin after ~10s.",msgSwitchGctoac:"Switching to gctoac… server restarts as a detached process in a few seconds. Refresh Admin after ~10s."},system:{title:"System",checkUpdate:"Check for updates",oneClick:"Update package & restart",selfUpdate:"Package version",selfHint:"Compares this install with npm / GitHub releases. “Update package” pulls the install channel (npm or git) and restarts the gateway.",current:"This install",npm:"npm latest",github:"GitHub latest",install:"Install channel",confirmUpdate:"Update the package and restart the gateway? API will be briefly unavailable.",scheduled:"Update scheduled. Refresh this page in ~30s.",database:"Database",grokCli:"Grok CLI",concurrency:"Concurrency",runtime:"Runtime health",software:"Required software",softwareHint:"Checks whether tools the gateway needs are installed, and which versions are present.",softName:"Software",softLevel:"Need",softInstalled:"Installed",softVersion:"Version",softStatus:"Status",softDetail:"Note",levelRequired:"Required",levelRecommended:"Recommended",levelOptional:"Optional",levelBundled:"Bundled",softOk:"OK",softMissing:"Missing",softWarn:"Warning",envTitle:"Environment",up:"Up",down:"Down",yes:"Yes",no:"No",badgeUpdate:"Update available",badgeOk:"Up to date",badgeAhead:"Newer than npm",badgeUnknown:"Unknown",statusHintUpdate:"A newer published version is available. Use “Update package & restart”.",statusHintOk:"This install matches the latest known release.",statusHintAhead:"Local version is newer than npm (typical for git / dev). “Update package” still pulls latest git commits if on the git channel.",statusHintUnknown:"Could not reach npm/GitHub to compare versions.",checkResult:"Version check",channelGit:"git (dev tree)",channelNpmGlobal:"npm global",channelNpmLocal:"npm local",channelUnknown:"unknown",encryption:"Encryption",ready:"Ready",notReady:"Not ready",allRequiredOk:"All required software present",requiredMissing:"Some required software is missing"},common:{empty:"No data",active:"active",revoked:"revoked",save:"Save",cancel:"Close",loading:"Loading…",powered:"Powered by",actions:"Actions",yes:"Yes",no:"No",ok:"OK",confirm:"Confirm",notice:"Notice",confirmTitle:"Please confirm",dangerTitle:"Confirm action",apply:"Apply",reset:"Reset",search:"Search",prev:"Previous",next:"Next",perPage:"Per page",pagerTotal:"Total {n}",pagerPage:"Page {n} / {total}",filterTitle:"Search & filters",filterHint:"Narrow results, then apply",all:"All",requestFailed:"Request failed",featureOff:"Off",ms:"{n} ms",perMin:"{n}/min",minutes:"{n} min",mb:"{n} MB",percent:"{n}%",ipLabel:"IP",uaLabel:"UA",httpStatus:"HTTP"}},"zh-Hant":{brand:"Grok Gateway",brandSub:"管理面板",loginTitle:"管理員登入",loginLabel:"API 金鑰",loginOtpLabel:"一次性登入碼",loginBtn:"登入",loginCmdHint:"終端機取得 key：",loginOtpHint:"每次登入請在終端機產生新碼：",loginOtpExpiry:"登入碼 5 分鐘內有效，且只能使用一次。",loginOtpFail:"登入碼無效或已過期",loginLostKey:"舊 key 無法找回（只存 hash），請建立新的 admin key。",loginCopy:"複製",loginCopied:"已複製",needKey:"請輸入 API 金鑰",needOtp:"請輸入終端機產生的一次性登入碼",logout:"登出",shell:{menu:"開啟選單",closeMenu:"關閉選單"},nav:{dashboard:"儀表板",chat:"對話",chats:"對話記錄",keys:"API 金鑰",documents:"文件",media:"媒體庫",audit:"稽核日誌",settings:"安全設定",apiFeatures:"API 能力",usage:"用量與防護",ddos:"DDoS 中心",queue:"佇列",pm2:"PM2",system:"系統狀態"},queue:{title:"對話佇列",subtitle:"每個對話先入隊、租約認領再消費；可在此暫停、排空、調整公平策略或重新入隊。",paused:"已暫停",running:"消費中",drain:"排空模式",mode:"模式",modeOff:"已停用",depth:"佇列深度",queued:"排隊中",leased:"已認領",activeJobs:"執行中",dead:"死信",oldest:"最長等待",concurrency:"每 Key / 全域",worker:"進程內 worker",workerInstance:"Worker 實例",workerInstanceHint:"本進程消費者 ID（租約持有者）。重啟後會變更。",kpiActiveSub:"本進程進行中 {n} 個",consumer:"消費者",admission:"接單",accepting:"接受新單",pause:"暫停消費",resume:"恢復消費",drainBtn:"排空",undrain:"停止排空",savePolicy:"儲存政策",refresh:"重新整理",jobs:"工作列表",jobsMeta:"共 {n} 筆",cancel:"取消",requeue:"重新入隊",purgeDead:"清理已完成（24h+）",purgeConfirm:"刪除已完成超過 24 小時的成功／失敗／取消／死信工作？",cancelConfirm:"取消此工作？若正在執行，取消為協作式（cooperative）。",empty:"沒有符合篩選的工作",enabled:"啟用佇列",masterOn:"佇列已開",masterOff:"佇列已關",masterHint:"對話佇列總開關，即時生效。",disabledBanner:"佇列已關閉 — 新對話會跳過排隊、即時執行（仍受併發上限約束）。",globalConcurrency:"全域併發",perKeyConcurrency:"每 Key 併發",maxDepth:"全域佇列上限",maxDepthKey:"每 Key 上限",fairness:"公平策略",fifo:"全域 FIFO",wrr:"加權輪詢",playgroundPriority:"Playground 優先級（越小越先）",defaultPriority:"預設優先級",leaseMs:"租約（ms）",maxWaitMs:"最長等待（ms）",filterTitle:"篩選工作",filterHint:"依狀態篩選後套用。頁面會每隔數秒自動重新整理。",filterStatus:"狀態",allStatuses:"全部狀態",filterDead:"死信（DLQ）",filterQueued:"排隊中",filterRunning:"執行中 / 已認領",filterFailed:"失敗",filterSucceeded:"成功",filterCancelled:"已取消",errorCol:"錯誤",priorityBtn:"優先級",priorityPh:"優先級（0–1000，越小越先）",dlqTitle:"死信佇列",dlqHint:"已用盡重試次數 — 可重新入隊或清理。",viewDlq:"查看死信",statusPanel:"運行狀態",policyTitle:"佇列政策",policyHint:"可先選方案再微調數值；儲存後生效。編輯時會暫停自動重新整理。",presetTitle:"政策方案",presetHint:"一鍵套用。Active＝表單目前值 · Saved＝已儲存。",presetRelaxed:"寬鬆",presetBalanced:"均衡",presetStrict:"嚴格",presetCustom:"自訂",presetRelaxedHint:"較高併發、較深佇列 — 適合多 key／Playground 與突發流量。",presetBalancedHint:"預設生產平衡：公平輪詢、中等深度、每 key 同時只跑 1 個。",presetStrictHint:"較低上限 + 全域 FIFO — 流量不可信或主機資源緊張時使用。",presetCustomHint:"數值唔對應內建方案。可繼續微調，或上方選一個方案。",presetActiveLabel:"目前：{name}",presetFormLabel:"草稿：{name}",presetTagActive:"目前",presetTagDraft:"草稿",presetTagSaved:"已套用",hintGlobalConc:"全域同時執行的工作上限",hintPerKeyConc:"單一 API key 同時執行上限",hintMaxDepth:"佇列總深度滿時拒收新單",hintMaxDepthKey:"該 key 排隊／執行過多時拒收",hintFairness:"WRR 按 key 輪流；FIFO 按全域優先級與時間",hintLease:"Worker 持有工作多久未完成會被回收",hintMaxWait:"客戶端排隊最長等待時間",colJob:"工作 / 請求",colSource:"來源",colStatus:"狀態",colModel:"模型",colPri:"優先",colKey:"API 金鑰",colTry:"嘗試",colTime:"入隊時間",stQueued:"排隊",stLeased:"已認領",stRunning:"執行中",stSucceeded:"成功",stFailed:"失敗",stDead:"死信",stCancelled:"已取消",srcV1:"API",srcPlayground:"Playground",kpiDepthSub:"{q} 排隊 · {l} 認領",kpiQueuedSub:"等待 worker",kpiDeadSub:"重試已盡",kpiOldestSub:"隊頭等待時間",wait:"等待",started:"開始",cancelReq:"已請求取消"},chat:{title:"對話",new:"新對話",send:"傳送",stop:"停止",stopped:"已停止",placeholder:"輸入訊息…（Enter 傳送，Shift+Enter 換行）",keyMode:"API 金鑰",keySelect:"API 金鑰",useSessionKey:"目前登入的 admin 金鑰",useCustomKey:"自訂金鑰",customKey:"金鑰",includeReasoning:"顯示思考",reasoning:"思考過程",needKey:"請輸入或選擇 API 金鑰",attach:"上傳",attachLibrary:"從已上傳選擇",attachHint:"可喺本頁任意位置拖放檔案、上傳，或從已上傳庫挑選",dropTitle:"放開以附加檔案",dropHint:"放開即上傳 — 格式與「上傳」按鈕相同",formatsLabel:"格式",formatsHint:"txt、md、csv、json、xml、html、pdf、圖片（png/jpg/webp/gif）、程式碼（js/ts/py/go/rs/java/c/cpp/css/yml/sql/sh…）",formatsReject:"不支援的格式：{name}。允許：{formats}",libraryTitle:"已上傳的檔案",librarySubtitle:"選擇目前 API 金鑰名下的檔案（格式與上傳相同）。",librarySearch:"依檔名搜尋…",libraryEmpty:"此金鑰沒有符合的檔案",libraryAdd:"加入所選",librarySelected:"已選 {n} 個",libraryAlready:"已附加",libraryLoadFail:"無法載入檔案列表",uploading:"上傳中…",uploadFail:"上傳失敗",uploadProgress:"正在上傳 {name}",uploadProgressMulti:"正在上傳 {name}（{i}/{n}）",emptyTitle:"開始對話",emptyHint:"輸入訊息或附加檔案。可從右側歷史開啟舊對話繼續。",needContent:"請輸入訊息或至少附加一個檔案",tooManyFiles:"檔案太多（每則訊息最多 10 個）",fileOnlyPrompt:"請查看附加的檔案。",removeFile:"移除",docs:"附件",you:"你",assistant:"助理",streaming:"串流中…",emptyReply:"（無回覆內容）",systemPrompt:"系統提示",systemPlaceholder:"可選：模型系統指示（system 訊息）…",systemHint:"每次傳送會以 system 角色附帶，不會顯示於對話氣泡。",history:"歷史對話",historyEmpty:"尚未有已儲存的對話",historySearch:"搜尋主題…",historyOpen:"顯示歷史",historyClose:"關閉歷史",rename:"重新命名",renamePh:"對話主題",untitled:"未命名對話",deleteConversation:"刪除",deleteConfirm:"確定刪除此對話？此操作無法還原。",saveFail:"無法儲存對話",loadFail:"無法載入對話",historyPrev:"上一頁",historyNext:"下一頁",historyPage:"第 {n} / {total} 頁",msgs:"{n} 則訊息",compress:"產生語境摘要",compressConfirm:"為之後回合產生對話摘要以節省 token？畫面上的完整對話記錄不會被刪除或改寫，只影響傳送給模型的內容。此操作會呼叫模型一次。",compressing:"正在產生摘要…",compressNeedMore:"至少需要 3 則訊息（或 2 則較長內容）才可產生摘要。請先繼續對話再試。",compressFail:"無法產生摘要",compressNeedSummary:"請先按「產生語境摘要」建立摘要。",compressedBadge:"摘要",compressOk:"摘要已就緒（完整記錄仍保留）。已切換為「摘要 + 最近訊息」模式。",compressBusy:"請等待目前回覆完成",compressResultTitle:"對話摘要",compressView:"查看摘要",summaryMeta:"產生時間：{when} · 依據 {n} 則訊息",ctxPolicyTitle:"模型上下文",ctxRemark:"完整訊息仍顯示於對話區。此設定只控制下一次傳送給模型的內容。",ctxMode:"上下文",ctxModeFull:"完整記錄",ctxModeSummary:"摘要 + 最近",ctxModeRecent:"僅最近",ctxModeFullLabel:"目前送出完整對話記錄",ctxModeSummaryLabel:"目前送出摘要 + 最近 {n} 則",ctxModeRecentLabel:"目前只送出最近 {n} 則",ctxRecentN:"最近則數",ctxLongHint:"對話較長 — 建議改用「摘要 + 最近」或「僅最近」，以減少 token 並避免介面卡頓。",loadOlder:"載入較早的 {n} 則訊息",showMore:"顯示更多",showLess:"收合",copy:"複製",copied:"已複製",copyFail:"複製失敗"},status:{success:"成功",error:"錯誤",timeout:"逾時",pending:"處理中",active:"進行中",finished:"已完成",online:"運行中",stopped:"已停止"},dash:{title:"儀表板",subtitle:"Gateway 總覽 — 流量、佇列、安全設定、OTP 工作階段與防護狀態。",last24:"最近 24h 請求",totalChat:"總對話",success:"成功",errors:"錯誤/逾時",docs:"文件",keys:"活躍金鑰",concurrent:"Grok 併發",recent:"最近 API 請求",empty:"暫無資料",emptyModels:"最近 24h 尚無模型用量",updated:"更新於",refresh:"重新整理",viewAll:"查看全部",openDdos:"DDoS 中心",openSettings:"安全設定",openQueue:"開啟佇列",kpi24h:"請求（24h）",kpi24hSub:"{ok} 成功 · {err} 錯誤",kpiSuccessRate:"成功率（24h）",kpiSuccessRateSub:"全部時間 {all}%",kpiErrors:"錯誤（24h）",kpiErrorsSub:"全部時間 {all}",kpiKeys:"API 金鑰",kpiKeysSub:"活躍 / 總數",kpiDocs:"文件",kpiMedia:"媒體資產",kpiMediaSub:"24 小時 {n} 個",kpiDocsSub:"已儲存檔案",kpiConv:"Playground 對話",kpiConvSub:"24h 內更新 {n} 則",kpiSessions:"OTP 工作階段",kpiSessionsSub:"目前有效的管理員登入",kpiConcurrent:"Grok 併發",kpiConcurrentSub:"進行中 / 上限",kpiQueue:"對話佇列",kpiQueueSub:"深度 · 執行 / 上限 · 死信",kpiQueueSubLive:"{run}/{max} 執行 · {dead} 死信{wait}",kpiQueuePaused:"已暫停",kpiQueueDrain:"排空",kpiQueueOff:"已停用",kpiSafe:"全域安全",kpiSafeOn:"開",kpiSafeOff:"關",kpiSafeSub:"{tools} · turns {turns} · {model}",kpiSafeSubEmpty:"無法讀取設定",queuePanel:"對話佇列",queueState:"狀態",queueLive:"運作中",qQueued:"排隊中",qRunning:"執行中",qDead:"死信",qSucceeded:"已成功",qWorker:"Worker",qWorkerActive:"活躍槽",qOldest:"最舊等待",qUnavailable:"無法取得佇列統計",safety:"安全設定",globalSafe:"全域安全模式",safeTools:"工具",safeTurns:"最大 turns",safeTimeout:"逾時",defaultModel:"預設模型",safetyHint:"影響 safe 模式金鑰與強制 safe 的流量。Playground OTP 預設 agent；開啟全域安全後會套用 safe 限制。",protection:"防護狀態",autoBan:"自動封鎖",on:"開",off:"關",ruleAuth:"認證",ruleRate:"429",ruleConn:"並發",ruleVelocity:"速率",bans:"黑名單",blocked:"已攔截",rateHits:"限流次數",liveConn:"即時連線",proxy:"代理 IP",hops:"層數",limits:"金鑰/IP 上限",models24h:"模型用量（24h）",runtime:"運行環境",port:"監聽連接埠",defaultPort:"預設",env:"環境",authMode:"管理登入",authOtp:"OTP 工作階段",encryption:"加密",ready:"就緒",notReady:"未就緒"},chats:{title:"對話記錄",total:"共",decrypt:"開啟後可解密完整輸入／輸出",search:"搜尋",searchPh:"請求 ID、金鑰名稱、模型…",filterTitle:"搜尋與篩選",filterHint:"設定條件後套用；點選列項可查看完整詳情（包括 system prompt）",status:"狀態",allStatus:"全部狀態",model:"模型",allModels:"全部模型",apiKey:"API 金鑰",allKeys:"全部金鑰",from:"由",to:"至",mode:"模式",allModes:"全部模式",hasDocs:"有附件",filter:"套用篩選",reset:"重設",request:"請求",prompt:"提示",response:"回覆",time:"時間",attachments:"附件",page:"頁",prev:"上一頁",next:"下一頁",perPage:"每頁",detail:"對話詳情",noAttach:"無附件",openFile:"開啟 / 預覽",close:"關閉",copyPrompt:"複製提示",copyContent:"複製內容",copySystem:"複製 system prompt",copyRawPrompt:"複製原始 prompt",duration:"耗時",stream:"串流",reasoning:"思考過程",content:"輸出內容",raw:"原始儲存回覆",rawPrompt:"原始儲存 prompt",userPrompt:"用戶／對話 prompt",systemPrompt:"System prompt",systemHint:"從已儲存 prompt 中抽出 system 角色內容。",noSystem:"此請求沒有 system prompt。",hasSystem:"有 system",none:"（無）",file:"檔案",img:"圖片",previewFailed:"預覽失敗"},keys:{title:"API 金鑰",new:"新增金鑰",searchPh:"名稱或 key 前綴…",name:"名稱",role:"角色",mode:"模式",rate:"速率 / 分",status:"狀態",created:"建立",edit:"編輯",revoke:"撤銷",confirmRevoke:"確定撤銷此金鑰？",empty:"暫無",usage24:"24h 用量",maxTurns:"最大 turns",timeoutMs:"逾時 (ms)",ipWhitelist:"IP 白名單",ipWhitelistHint:"每行一個 IP 或 CIDR。留空 = 不限制 IP。",ipWhitelistCol:"IP 允許",ipAll:"全部 IP",keyOnce:"請妥善保存（明文只顯示一次）：",roleClient:"用戶 (client)",roleAdmin:"管理員 (admin)",roleClientBadge:"用戶",roleAdminBadge:"管理員",modeSafe:"safe（對外）",modeAgent:"agent（全能力）",modeSafeBadge:"安全",modeAgentBadge:"代理",ipCount:"{n} 個 IP",ipPlaceholder:`127.0.0.1
203.0.113.0/24`},docs:{title:"文件",total:"共",file:"檔名",mime:"類型",size:"大小",time:"時間",storage:"儲存位置",storageDb:"資料庫（加密）",storageFs:"檔案系統（加密）",storageHint:"較小的檔案以加密形式存於資料庫；超過 {dbMax} 的檔案會加密後存放於伺服器 STORAGE_DIR（{dir}）。單檔上限 {upMax}。內容經 AES 加密；刪除時亦會移除檔案系統上的密文。",download:"下載",downloadFail:"下載失敗",binaryPreview:"此為二進位檔（例如 PDF），無法在此預覽，請使用「下載」。",delete:"刪除",confirmDel:"確定刪除此文件？",detail:"文件詳情",preview:"預覽",copy:"複製內容",empty:"暫無",searchPh:"檔名或 MIME…",page:"頁",prev:"上一頁",next:"下一頁"},audit:{title:"稽核日誌",searchPh:"動作、資源、IP、金鑰…",time:"時間",action:"動作",resource:"資源",key:"金鑰",meta:"詳情",empty:"暫無日誌",id:"識別碼",actions:{chat_create:"建立對話",document_upload:"上傳文件",document_delete:"刪除文件",document_list:"列出文件",document_read:"讀取文件",document_download:"下載文件",api_key_create:"建立金鑰",api_key_update:"更新金鑰",api_key_delete:"撤銷金鑰",api_key_list:"列出金鑰",settings_update:"更新設定",chat_admin_view:"管理員查看對話",system_update:"系統更新",system_update_check:"檢查更新",ip_ban:"封鎖 IP",ip_unban:"解除 IP 封鎖",ddos_policy_update:"DDoS 策略更新",pm2_start:"PM2 啟動",pm2_stop:"PM2 停止",pm2_restart:"PM2 重啟",pm2_reload:"PM2 重載",pm2_config:"PM2 設定",pm2_switch:"PM2 切換 runner",playground_chat:"對話試玩",playground_upload:"試玩上傳"},resources:{document:"文件",chat:"對話",api_key:"API 金鑰",settings:"設定",system:"系統",pm2:"PM2",playground:"試玩",ip:"IP"},metaStorage:"儲存方式",metaAsKey:"代行金鑰 ID",metaAsKeyName:"代行金鑰名稱"},settings:{title:"安全設定",hint:"開啟「全域安全模式」後，系統會強制使用沙盒工作目錄、停用 always-approve，並限制可用工具；即使金鑰設為 agent，亦會降級為 safe。對外／生產環境建議開啟；本機管理面板若需上網或使用工具，建議關閉。",globalSafe:"全域安全模式（強制套用至所有金鑰）",globalSafeHint:"開啟：所有金鑰一律以 safe 模式執行（沙盒並限制工具）。關閉：按各金鑰本身的 safe／agent 設定執行。",masterOn:"安全模式：開",masterOff:"安全模式：關",disabledBanner:"全域安全模式已關 — 各 API 金鑰按自身 safe／agent 設定（agent 金鑰有完整工具）。",tools:"安全工具模式",toolsHint:"none：禁止 shell、上網及寫入檔案等危險工具，適合對外 API。readonly：僅允許讀取檔案、搜尋及列出目錄，適合程式碼審閱。",toolsNone:"none（禁止危險工具）",toolsReadonly:"readonly（只讀工具）",maxTurns:"安全模式最大 turns",maxTurnsHint:"safe 模式下，每次請求可用的模型／工具步數。純文字問答建議 3–6；日常 API 建議 8–12；多步驟建議 15–25；長任務建議 30–40。數值過低較易出現 max turns 或 Grok CLI exit code 1。",timeout:"安全逾時（毫秒）",timeoutHint:"safe 模式的請求時限。快速問答約 60,000（60 秒）；一般用途約 120,000；長時間工具操作約 300,000–600,000（5–10 分鐘）。",defaultModel:"預設模型",defaultModelHint:"客戶端未指定 model 時使用。請選擇本機 Grok CLI 已安裝的型號。",modelSource:"來源：本機 Grok CLI",refreshModels:"重新整理模型",panel:"管理面板",save:"儲存設定",saved:"設定已儲存",guideTitle:"按應用情況的建議設定",guideIntro:"按「套用」會先確認，確認後立即儲存該建議設定。數值僅供起點，之後仍可微調欄位再按「儲存設定」。當表單與已儲存的建議一致時，卡片會顯示「已應用」。",guideApply:"套用",guideActive:"已應用",guideApplyConfirm:"套用「{name}」並立即儲存安全設定？將覆寫目前數值。",guideApplied:"已套用並儲存",chipGlobalOn:"全域安全：開",chipGlobalOff:"全域安全：關",scLocalTitle:"本機管理面板試用",scLocalDesc:"在本機使用：查詢資料、上網、一般問答，需要較完整能力。",scLocalDetail:"建議關閉全域安全，並使用 agent 金鑰。工具欄位在關閉全域安全時不影響 agent。若其後重新開啟全域安全，可將 turns 設為 12–20、逾時 120–300 秒。",scProdTitle:"對外／產品 API",scProdDesc:"供應用程式或客戶呼叫的 OpenAI 相容端點，應採最小權限。",scProdDetail:"建議開啟全域安全、工具 none、turns 8–12、逾時 60–120 秒，並固定預設模型。",scCodeTitle:"程式代理（可信環境）",scCodeDesc:"修改檔案、執行指令；僅限可信主機，不應暴露於互聯網。",scCodeDetail:"建議關閉全域安全，並使用專用 agent 金鑰。safe 的 turns／逾時對 agent 不生效；限額可在金鑰或 .env 設定。",scReadTitle:"只讀分析",scReadDesc:"解釋程式碼、搜尋程式庫；不寫入檔案、不上網。",scReadDetail:"建議開啟全域安全、工具 readonly、turns 8–15、逾時 120–180 秒。",scChatTitle:"純文字問答",scChatDesc:"只回覆文字，不需要工具。",scChatDetail:"建議開啟全域安全、工具 none、turns 3–6、逾時 60 秒。",scLongTitle:"長任務多步驟（維持 safe）",scLongDesc:"需要較多工具步驟，並減少 max turns 失敗。",scLongDetail:"建議開啟全域安全；工具 none 或 readonly；turns 20–40；逾時 300–600 秒。工具為 none 時仍無法上網。",dangerTitle:"危險操作",disablePanel:"關閉管理面板",disablePanelConfirm:"確定關閉管理面板？你將被登出。之後只能在伺服器以 CLI 重開：gctoac admin on",disablePanelDone:"管理面板已關閉。重開指令：gctoac admin on",panelOffHint:"此處只可關閉管理面板。如需重新開啟，請在伺服器執行 gctoac admin on。",panelStatus:"狀態",panelOn:"開啟",panelOff:"關閉"},apiFeatures:{title:"API 能力",intro:"控制協議、媒體 REST 同 Grok CLI 能力。協議/能力關 → 多數 403；媒體 API 關 → 501。約 2 秒生效。CLI：gctoac api features",groupProtocols:"協議表面",groupMedia:"媒體 API（OpenAI 兼容）",groupCaps:"Grok CLI 能力",groupEmu:"模擬與安全",presetOpen:"預設：開放",presetLocked:"預設：鎖定",presetDev:"預設：開發",presetConfirm:"套用能力預設「{name}」？會覆寫全部 API 開關。",flag:{openaiChat:"OpenAI Chat Completions",openaiResponses:"OpenAI Responses",anthropicMessages:"Anthropic Messages",imagesApi:"Images API",filesOpenAiAlias:"Files API 別名",videoApi:"Videos API（異步 job）",audioApi:"Audio API（語音 / STT）",tools:"Tools / function calling",structuredOutput:"結構化輸出 (--json-schema)",vision:"視覺 / 圖片 (--prompt-json)",reasoningEffort:"推理力度",webSearch:"網絡搜尋工具",subagents:"子代理",planMode:"Plan 模式",memory:"跨 session 記憶",sessionResume:"恢復 session",bestOfN:"best-of-n",checkLoop:"自我檢查迴圈",systemOverride:"System prompt 覆寫",rules:"額外 rules",permissionMode:"權限模式",sandbox:"Sandbox profile",usageEstimate:"估算 token usage",assistantsEmulation:"Assistants-lite（本機）",strictSampling:"嚴格採樣（拒絕 temperature…）",forceDisableToolsInSafe:"Safe 模式強制工具限制"},hint:{openaiChat:"POST /v1/chat/completions",openaiResponses:"POST /v1/responses",anthropicMessages:"POST /v1/messages",imagesApi:"POST /v1/images/generations + /edits（要 agent key）",filesOpenAiAlias:"POST/GET /v1/files → documents + media",videoApi:"POST /v1/videos + poll GET /v1/videos/:id",audioApi:"POST /v1/audio/speech + /transcriptions（要 provider）",tools:"映射 tools → Grok --tools",structuredOutput:"response_format / json_schema",vision:"image_url content parts",reasoningEffort:"--reasoning-effort",webSearch:"關閉時加 --disable-web-search",subagents:"關閉時 --no-subagents",planMode:"關閉時 --no-plan",memory:"--experimental-memory",sessionResume:"--resume / --continue",bestOfN:"--best-of-n",checkLoop:"--check",systemOverride:"--system-prompt-override",rules:"--rules",permissionMode:"--permission-mode",sandbox:"--sandbox",usageEstimate:"usage 用字元/4 估算",assistantsEmulation:"本機 /v1/assistants + /v1/threads",strictSampling:"帶 temperature 等則 400",forceDisableToolsInSafe:"維持 safe 工具政策"}},media:{title:"媒體庫",intro:"由 /v1/images、/v1/videos 產出嘅檔案。生圖要 agent key + imagesApi。開關喺「API 能力」。",assets:"資產",jobs:"影片 jobs",empty:"暫時未有媒體資產",jobsEmpty:"暫時未有影片 job",kind:"類型",bytes:"大小",provider:"Provider",providerPh:"Provider 名稱…",prompt:"Prompt",created:"建立時間",status:"狀態",preview:"預覽",download:"下載",delete:"刪除",deleteConfirm:"軟刪除此媒體資產？",allKinds:"全部類型",searchPh:"Prompt、檔名、MIME、Provider、ID…",from:"由",to:"至"},usage:{title:"用量與防濫用",window:"統計區間",requests:"請求數",success:"成功",errors:"錯誤",errorRate:"錯誤率",byModel:"按模型",byKey:"按 API 金鑰",rateLimit:"上限 / 分",util:"估計使用率",limits:"Gateway 限流設定",global:"全域上限 / 視窗",ipMax:"未認證 IP 上限",burst:"對話短窗 burst（10s）",block:"認證失敗封鎖門檻",concurrent:"Grok 最大併發",refresh:"重新整理"},ddos:{title:"DDoS 控制中心",live:"即時連線",recent:"最近請求",blacklist:"IP 黑名單",stats:"濫用統計",refresh:"重新整理",pause:"暫停自動刷新",resume:"恢復自動刷新",ban:"封鎖 IP",unban:"解除封鎖",banConfirm:"確定封鎖此 IP？",banWhitelistWarn:"此 IP 在自動封鎖白名單內。仍要手動封鎖？",unbanConfirm:"確定從黑名單移除此 IP？",ip:"IP",method:"方法",path:"路徑",key:"API 金鑰",duration:"耗時",state:"狀態",ua:"瀏覽器識別 (UA)",reason:"原因",source:"來源",expires:"到期",permanent:"永久",addBan:"新增封鎖",ttl:"有效期",ttlPerm:"永久",ttl1h:"1 小時",ttl24h:"24 小時",ttl7d:"7 日",activeConn:"進行中",rateHits:"限流次數",blockedHits:"已封鎖攔截",autoBans:"自動封鎖",topIps:"熱門 IP（最近）",emptyLive:"目前無進行中連線",emptyBan:"黑名單為空",emptyEvents:"尚無自動封鎖事件",reasonPh:"可選原因",banReasonDefault:"管理員手動封鎖",ipPlaceholder:"1.2.3.4",policyTitle:"防護策略",policyHint:"所有門檻即時生效，無需重啟。環境變數僅作為初始預設值。",autoOn:"自動判斷：開",autoOff:"自動判斷：關",autoBanMaster:"啟用自動封鎖 IP",autoBanMasterHint:"關閉後仍會限流，但不會自動加入黑名單。",masterOn:"自動封鎖：開",masterOff:"自動封鎖：關",disabledBanner:"自動封鎖已關閉 — 仍會限流，但 IP 不會被自動加入黑名單。",presetTitle:"防護方案",presetHint:"點選預設方案，或自行改數值；系統會自動判斷是否為自訂。",presetRelaxed:"寬鬆",presetBalanced:"均衡",presetStrict:"嚴格",presetCustom:"自訂",presetActiveLabel:"目前：{name}",presetFormLabel:"表單：{name}（未儲存）",presetTagActive:"使用中",presetTagDraft:"草稿",presetTagSaved:"已儲存",presetActiveHint:"目前方案：{name}。若改動其他欄位請按「儲存策略」。",presetCustomHint:"目前數值唔屬於寬鬆／均衡／嚴格，已判定為「自訂」。",presetUnsavedHint:"表單顯示「{form}」，伺服器仍為「{saved}」。請按「儲存策略」先套用。",savePolicy:"儲存策略",resetPolicy:"重設為環境預設",policySaved:"防護策略已儲存，限流器已重新載入。",policyReset:"已重設為環境變數預設值。",confirmReset:"確定將所有 DDoS 策略欄位重設為 .env 預設？",sectionProxy:"反向代理 / CDN",proxyHint:"流量經 nginx 或 Cloudflare 時，請設定信任層數，令封鎖、限流、稽核日誌使用真實用戶 IP，而唔係代理伺服器 IP。",proxyTrustHops:"信任代理層數",proxyTrustHopsHint:"0 = 直連（忽略 header）。1 = nginx 或 Cloudflare→應用。2 = Cloudflare→nginx→應用。",proxyIpSource:"客戶端 IP 來源",proxyIpSourceHint:"auto 會依序嘗試 CF-Connecting-IP、X-Real-IP、X-Forwarded-For。僅直連時先選「socket」。",proxySrcAuto:"自動（建議）",proxySrcCf:"Cloudflare（CF-Connecting-IP）",proxySrcNginx:"nginx（X-Real-IP）",proxySrcXff:"僅 X-Forwarded-For",proxySrcSocket:"僅 TCP socket（無代理）",trustedProxies:"可信代理 IP / CIDR",trustedProxiesHint:"只有呢啲 peer 先可以設定 CF-Connecting-IP / X-Real-IP / XFF。預設 127.0.0.1（本機 nginx）。遠端代理請加其 IP。直連客戶無法偽造 header。",sectionLimits:"限流",sectionAuth:"失敗認證",sectionRate:"限流濫用（429）",sectionConn:"連線洪水",sectionVelocity:"請求速率",sectionEscalate:"累犯升級",sectionWhitelist:"自動封鎖白名單",whitelistHint:"每行一個 IP 或 CIDR。白名單 IP 永不被自動封鎖。",rateWindow:"視窗（秒）",rateMaxKey:"金鑰上限",rateMaxIp:"未認證 IP 上限",burstWindow:"Burst 視窗（秒）",burstMax:"Burst 上限",enableRule:"啟用",threshold:"門檻",windowSec:"視窗（秒）",banMin:"封鎖時長（分）",escalateAfter:"累計自動封鎖 N 次後升級",escalateMin:"升級後封鎖（分）",maxConcurrent:"每 IP 最大並發",velocityMax:"最大請求數",eventsTitle:"最近自動封鎖事件",eventTime:"時間",eventSource:"規則",eventDuration:"封鎖時長",sources:{manual:"手動","auto-auth":"自動 · 認證","auto-rate":"自動 · 429","auto-conn":"自動 · 並發","auto-velocity":"自動 · 速率","auto-escalate":"自動 · 升級"}},pm2:{title:"PM2 控制",status:"進程狀態",start:"用 PM2 啟動",stop:"停止 PM2",restart:"重啟",reload:"重載",logs:"日誌",logsHint:"優先顯示錯誤日誌",clearLogs:"清除日誌",confirmClearLogs:"確定清除 PM2 與 gctoac 日誌檔？此操作無法復原（檔案會被清空）。",logsCleared:"已清除 {n} 個日誌檔。",logsAutoTrim:"超過 {maxMb} MB 會自動裁剪，只保留最後約 {keepKb} KB（每次讀取日誌時檢查）。",refresh:"重新整理",confirmStop:"確定停止 PM2 進程？",confirmRestart:"確定以 PM2 重啟？會妥善移交 port。",unavailable:"PM2 不可用",disabled:"已停用 PM2 管理",app:"應用名稱",pid:"進程 ID",uptime:"運行時間",memory:"記憶體",cpu:"CPU",restarts:"重啟次數",portBusy:"連接埠佔用中",port:"連接埠",portTitle:"監聽連接埠",portHint:"Gateway Admin 與 API 的 HTTP 連接埠。更改後會寫入 .env 並重啟進程，新連接埠才會生效。",fieldPort:"連接埠",portDefaultNote:"預設為 3847。有效範圍：1–65535。",savePort:"儲存連接埠並重啟",useDefaultPort:"使用預設（3847）",portInvalid:"請輸入有效連接埠（1–65535）。",confirmPortChange:"將監聽連接埠改為 {port} 並重啟 Gateway？之後請用新連接埠開啟 Admin（例如 http://localhost:{port}/admin）。",portChangedMsg:"連接埠已更新：{from} → {to}。",portSavedNeedRestart:"連接埠 {port} 已寫入 .env。請重啟後才會生效。",portAfterRestart:"重啟後請開啟 http://localhost:{port}/admin",hint:"可選擇用 gctoac 獨立進程或 PM2 運行 gateway。隨時可在本頁或 CLI 切換（gctoac start / gctoac start --pm2）。",switchTitle:"運行方式",switchHint:"同一時間只有一個進程應綁定連接埠。切換會先停另一邊，再啟動所選方式。",currentRunner:"目前 runner",runnerPm2:"PM2",runnerGctoac:"gctoac（獨立進程）",runnerNone:"未運行",runnerUnknown:"未知／混合",switchToPm2:"切換到 PM2",switchToGctoac:"切換到 gctoac",confirmSwitchPm2:"確定切換到 PM2？gateway 會在數秒內以 PM2 重啟。",confirmSwitchGctoac:"確定切換到 gctoac？gateway 會在數秒內以獨立進程重啟。",switchScheduled:"已排程切換，請約 10 秒後重新整理管理面板。",gctoacPid:"gctoac 進程 ID",configTitle:"PM2 設定",configHint:"儲存至 pm2.runtime.json，經 ecosystem.config.cjs 套用。若目前用 PM2 運行，「儲存並套用」會重啟 PM2。",saveConfig:"儲存並套用",saveOnly:"只儲存",resetConfig:"還原預設",confirmReset:"確定將 PM2 設定還原為預設？",configSaved:"設定已儲存",fieldName:"應用名稱",fieldScript:"啟動腳本",fieldCwd:"工作目錄 (cwd)",fieldInstances:"實例數",fieldExecMode:"執行模式",fieldAutorestart:"自動重啟",fieldWatch:"檔案監視 (Watch)",fieldMaxMem:"記憶體上限重啟",fieldMaxRestarts:"最大重啟次數",fieldMinUptime:"最短運行時間",fieldRestartDelay:"重啟延遲 (ms)",fieldBackoff:"指數退避延遲 (ms)",fieldMergeLogs:"合併日誌",fieldTime:"日誌時間戳",fieldErrorFile:"錯誤日誌檔",fieldOutFile:"輸出日誌檔",fieldEnvExtra:"額外環境變數（每行 KEY=value）",fieldPreferred:"偏好 runner",empty:"pm2 列表中找不到此應用",modeFork:"fork",modeCluster:"cluster",phCwd:"（套件根目錄）",phInstances:"1 或 max",phEnv:"NODE_ENV=production",statusOnline:"運行中",statusErrored:"錯誤",statusStopped:"已停止",msgOk:"正常",msgDisabled:"PM2 管理已停用（PM2_ADMIN_ENABLED=false）。",msgBinaryMissing:"找不到 pm2，請執行：npm install -g pm2",msgNotInList:"應用「{app}」不在 PM2 列表中 — 請用「用 PM2 啟動」或「切換到 PM2」。",msgPortGctoac:"連接埠 {port} 正由 gctoac 佔用（pid {pid}）。請按「切換到 PM2」移交。",msgPortBusy:"連接埠 {port} 被佔用（pid {pids}）。",msgErrored:"PM2 進程出錯 — 請查日誌／設定，然後重啟或處理連接埠衝突。",msgBothRunners:"偵測到兩個 runner；gctoac pid {pid} 仍佔用資源。請用「切換」只保留一個。",msgError:"PM2 錯誤：{error}",msgSwitchPm2:"正在切換到 PM2… 數秒內會以 PM2 重啟。請約 10 秒後重新整理 Admin。",msgSwitchGctoac:"正在切換到 gctoac… 數秒內會以獨立進程重啟。請約 10 秒後重新整理 Admin。"},system:{title:"系統狀態",checkUpdate:"檢查更新",oneClick:"更新套件並重啟",selfUpdate:"套件版本",selfHint:"對比本機安裝與 npm／GitHub 發佈版。「更新套件」會按安裝渠道（npm 或 git）拉取並重啟 gateway。",current:"本機版本",npm:"npm 最新版",github:"GitHub 最新版",install:"安裝渠道",confirmUpdate:"確定更新套件並重啟 gateway？期間 API 會短暫中斷。",scheduled:"已排程更新，請約 30 秒後重新整理頁面。",database:"資料庫",grokCli:"Grok CLI",concurrency:"併發",runtime:"運行狀態",software:"系統軟件",softwareHint:"檢查 gateway 所需軟件是否已安裝，以及目前版本。",softName:"軟件",softLevel:"需求",softInstalled:"已安裝",softVersion:"版本",softStatus:"狀態",softDetail:"說明",levelRequired:"必須",levelRecommended:"建議",levelOptional:"可選",levelBundled:"內建",softOk:"正常",softMissing:"未安裝",softWarn:"注意",envTitle:"環境變數",up:"正常",down:"異常",yes:"是",no:"否",badgeUpdate:"有新版本",badgeOk:"已是最新",badgeAhead:"新於 npm",badgeUnknown:"無法比較",statusHintUpdate:"發佈庫有較新版本，可按「更新套件並重啟」。",statusHintOk:"本機版本與目前已知最新發佈版一致。",statusHintAhead:"本機版本比 npm 新（常見於 git／開發版）。若是 git 安裝，「更新套件」仍可拉取最新 commits。",statusHintUnknown:"無法連上 npm／GitHub，未能比較版本。",checkResult:"版本檢查結果",channelGit:"git（開發目錄）",channelNpmGlobal:"npm 全域",channelNpmLocal:"npm 本地",channelUnknown:"未知",encryption:"加密",ready:"就緒",notReady:"未就緒",allRequiredOk:"必須軟件齊全",requiredMissing:"有必須軟件缺失"},common:{empty:"暫無資料",active:"啟用",revoked:"已撤銷",save:"儲存",cancel:"關閉",loading:"載入中…",powered:"技術支援",actions:"操作",yes:"是",no:"否",ok:"確定",confirm:"確定",notice:"提示",confirmTitle:"請確認",dangerTitle:"確認操作",apply:"套用",reset:"重設",search:"搜尋",prev:"上一頁",next:"下一頁",perPage:"每頁",pagerTotal:"共 {n} 筆",pagerPage:"第 {n} / {total} 頁",filterTitle:"搜尋與篩選",filterHint:"設定條件後按「套用」",featureOff:"已關閉",all:"全部",requestFailed:"請求失敗",ms:"{n} 毫秒",perMin:"{n}/分",minutes:"{n} 分鐘",mb:"{n} MB",percent:"{n}%",ipLabel:"IP",uaLabel:"UA",httpStatus:"HTTP"}}};function Fa(){const a=localStorage.getItem(oa);return a==="en"||a==="zh-Hant"?a:(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh-Hant":"en"}let He=Fa();function We(){return He}function ia(a){a!=="en"&&a!=="zh-Hant"||(He=a,localStorage.setItem(oa,a))}function e(a){const s=a.split(".");let n=gt[He]||gt.en;for(const o of s)if(n&&typeof n=="object"&&o in n)n=n[o];else{n=gt.en;for(const i of s)if(n&&typeof n=="object"&&i in n)n=n[i];else return a;break}return typeof n=="string"?n:a}function P(a,s={}){let n=e(a);for(const[o,i]of Object.entries(s))n=n.replaceAll(`{${o}}`,String(i));return n}function wt(){return`
  <div class="lang-switch" role="group" aria-label="${He==="zh-Hant"?"語言":"Language"}">
    <button type="button" data-lang="en" class="${He==="en"?"is-active":""}">EN</button>
    <button type="button" data-lang="zh-Hant" class="${He==="zh-Hant"?"is-active":""}">中文</button>
  </div>`}const la=new Set([".txt",".md",".markdown",".csv",".json",".xml",".html",".htm",".js",".ts",".tsx",".jsx",".py",".java",".go",".rs",".c",".cpp",".h",".hpp",".css",".yml",".yaml",".toml",".ini",".env",".sh",".sql",".log",".pdf",".png",".jpg",".jpeg",".webp",".gif"]),Na=[...la].join(","),Ct="/admin/api",ot="gog_admin_session";let we=null,Se=!1;const u={key:sessionStorage.getItem(ot)||"",page:"dashboard",me:null,error:"",modal:null,chatFilter:{q:"",status:"",model:"",apiKeyId:"",from:"",to:"",policyMode:"",hasDocuments:"",limit:50,offset:0},docFilter:{q:"",apiKeyId:"",storageType:"",from:"",to:"",limit:20,offset:0},keyFilter:{q:"",role:"",mode:"",isActive:"",limit:20,offset:0},auditFilter:{q:"",action:"",apiKeyId:"",from:"",to:"",limit:50,offset:0},usageFilter:{tab:"model",modelQ:"",keyQ:"",keyActive:"",modelPage:0,keyPage:0,pageSize:10},ddosFilter:{liveQ:"",banQ:"",banSource:"",livePage:0,banPage:0,pageSize:15},mediaFilter:{q:"",kind:"",provider:"",from:"",to:"",limit:20,offset:0},models:[],keys:[]},_a={login:"login",dashboard:"dashboard",chat:"chat",chats:"chats",keys:"keys",documents:"documents",media:"media",audit:"audit",settings:"settings","api-features":"apiFeatures",apifeatures:"apiFeatures",usage:"usage",ddos:"ddos",queue:"queue",pm2:"pm2",system:"system"};function Ka(a){return a==="apiFeatures"?"api-features":a||"dashboard"}function Bt(a){const s=String(a||"").replace(/^#\/?/,"").split("?")[0].split("/")[0].toLowerCase();return s&&_a[s]||null}function At(a){const s=`#/${Ka(a)}`;location.hash!==s&&history.pushState(null,"",s)}function Ua(){const a=Bt(location.hash);return a||(u.key?"dashboard":"login")}async function $(a,s={}){const n={...s.body?{"Content-Type":"application/json"}:{},...u.key?{Authorization:`Bearer ${u.key}`}:{},...s.headers||{}},o=await fetch(`${Ct}${a}`,{...s,headers:n}),i=await o.text();let r=null;try{r=i?JSON.parse(i):null}catch{r={error:{message:i}}}if(!o.ok){const l=r?.error?.message||o.statusText||e("common.requestFailed");throw(o.status===401||o.status===403)&&u.page!=="login"&&Lt(!1),new Error(l)}return r}function Lt(a=!0){const s=u.key;a&&s&&String(s).startsWith("gog_sess_")&&fetch("/admin/api/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${s}`}}).catch(()=>{}),a&&sessionStorage.removeItem(ot),u.key="",u.me=null,u.page="login",At("login"),yt()}function Ht(a){Ot(a,{writeHash:!0})}function Ot(a,s={}){const n=a||"dashboard";u.page=n,u.modal=null,u.error="",n==="chats"&&(u.chatFilter.offset=0),n==="documents"&&(u.docFilter.offset=0),n==="keys"&&(u.keyFilter.offset=0),n==="audit"&&(u.auditFilter.offset=0),n==="media"&&(u.mediaFilter.offset=0),n!=="ddos"&&we&&(clearInterval(we),we=null),n!=="chat"&&document.body.classList.remove("chat-history-open"),s.writeHash!==!1&&At(n),yt()}function t(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}let ie=null,it=null;function Pe(a){const s=it;it=null,ie&&(ie.remove(),ie=null),document.body.classList.remove("ui-dialog-open"),document.removeEventListener("keydown",Dt,!0),s&&s(a)}function Dt(a){if(ie&&a.key==="Escape"){a.preventDefault(),a.stopPropagation();const s=ie.dataset.cancelable!=="0";Pe(s?ie.dataset.prompt==="1"?null:!1:!0)}}function ra(a){ie&&Pe(!1);const s=a.variant||(a.showCancel===!1?"info":"confirm"),n=a.showCancel!==!1,o=!!a.input,i=a.title||e(s==="danger"?"common.dangerTitle":n?"common.confirmTitle":"common.notice"),r=a.confirmText||e(n?"common.confirm":"common.ok"),l=a.cancelText||e("common.cancel"),c=s==="danger"?"!":s==="info"&&!n?"i":"?",m=document.createElement("div");m.className="ui-dialog-back",m.id="ui-dialog-back",m.dataset.cancelable=n||o?"1":"0",m.dataset.prompt=o?"1":"0",m.setAttribute("role","presentation"),m.innerHTML=`
    <div class="ui-dialog ui-dialog--${t(s)}" role="alertdialog" aria-modal="true" aria-labelledby="ui-dialog-title" aria-describedby="ui-dialog-msg">
      <div class="ui-dialog-h">
        <div class="ui-dialog-icon" aria-hidden="true">${c}</div>
        <h3 class="ui-dialog-title" id="ui-dialog-title">${t(i)}</h3>
      </div>
      <div class="ui-dialog-body" id="ui-dialog-msg">${t(a.message||"")}</div>
      ${o?`<div class="ui-dialog-input-wrap">
              <input type="text" class="ui-dialog-input" id="ui-dialog-input" value="${t(a.defaultValue||"")}" placeholder="${t(a.placeholder||"")}" maxlength="${a.maxLength||500}" autocomplete="off" />
            </div>`:""}
      <div class="ui-dialog-actions">
        ${n||o?`<button type="button" class="btn secondary sm" id="ui-dialog-cancel">${t(l)}</button>`:""}
        <button type="button" class="btn ${s==="danger"?"danger":""} sm" id="ui-dialog-ok">${t(r)}</button>
      </div>
    </div>`,document.body.appendChild(m),document.body.classList.add("ui-dialog-open"),ie=m,document.addEventListener("keydown",Dt,!0);const p=m.querySelector("#ui-dialog-ok"),d=m.querySelector("#ui-dialog-cancel"),y=m.querySelector("#ui-dialog-input"),f=h=>{if(o){if(!h){Pe(null);return}const v=y instanceof HTMLInputElement?y.value:"";Pe(v);return}Pe(!!h)};return p?.addEventListener("click",h=>{h.preventDefault(),f(!0)}),d?.addEventListener("click",h=>{h.preventDefault(),f(!1)}),m.addEventListener("click",h=>{h.target===m&&(n||o)&&f(!1)}),y instanceof HTMLInputElement&&y.addEventListener("keydown",h=>{h.key==="Enter"&&(h.preventDefault(),f(!0))}),requestAnimationFrame(()=>{y instanceof HTMLInputElement?(y.focus(),y.select()):p?.focus()}),new Promise(h=>{it=h})}async function Y(a){const s=typeof a=="string"?{message:a,showCancel:!1,variant:"info"}:{title:a.title,message:a.message,showCancel:!1,variant:a.variant||"info",confirmText:a.confirmText||e("common.ok")};await ra(s)}async function F(a){const s=typeof a=="string"?{message:a,showCancel:!0,variant:"confirm"}:{title:a.title,message:a.message,showCancel:!0,variant:a.variant||"confirm",confirmText:a.confirmText,cancelText:a.cancelText};return!!await ra(s)}function Wa(){const a=typeof window<"u"?window.marked:null;if(!a||a.__gogConfigured)return a;try{typeof a.setOptions=="function"?a.setOptions({gfm:!0,breaks:!0}):a.marked&&typeof a.marked.setOptions=="function"&&a.marked.setOptions({gfm:!0,breaks:!0})}catch{}return a.__gogConfigured=!0,a}function da(a){if(!a)return"";const s=Wa(),n=typeof window<"u"?window.DOMPurify||window.dompurify:null;if(!s)return t(a);let o="";try{if(typeof s.parse=="function")o=s.parse(a,{gfm:!0,breaks:!0});else if(typeof s=="function")o=s(a,{gfm:!0,breaks:!0});else if(s.marked&&typeof s.marked.parse=="function")o=s.marked.parse(a,{gfm:!0,breaks:!0});else return t(a)}catch{return t(a)}if(typeof o!="string"&&(o=String(o??"")),n&&typeof n.sanitize=="function"){o=n.sanitize(o,{USE_PROFILES:{html:!0},ADD_ATTR:["target","rel"]});try{o=o.replace(/<a\s+([^>]*href=)/gi,'<a target="_blank" rel="noopener noreferrer" $1')}catch{}return o}return t(a)}async function Rt(a){const s=String(a??"");if(!s)return!1;try{if(navigator.clipboard&&window.isSecureContext!==!1)return await navigator.clipboard.writeText(s),!0}catch{}try{const n=document.createElement("textarea");n.value=s,n.setAttribute("readonly",""),n.style.position="fixed",n.style.left="-9999px",document.body.appendChild(n),n.select();const o=document.execCommand("copy");return document.body.removeChild(n),o}catch{return!1}}function _(a){if(!a)return"-";try{return new Date(a).toLocaleString(We()==="zh-Hant"?"zh-HK":"en-US")}catch{return a}}function ye(a){return a==null?"—":a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:P("common.mb",{n:(a/1024/1024).toFixed(1)})}function lt(a){return a==null||a===""?"—":P("common.ms",{n:a})}function ca(a){return a==null||a===""?"—":P("common.perMin",{n:a})}function L(a){u.error=a;const s=document.querySelector("#flash-error");s&&(s.hidden=!a,s.textContent=a)}function Ft(a){const s=a==="success"?"success":a==="error"||a==="timeout"?"error":"pending",n=a==="success"?e("status.success"):a==="error"?e("status.error"):a==="timeout"?e("status.timeout"):a==="pending"?e("status.pending"):a||"-";return`<span class="badge ${s}">${t(n)}</span>`}function Qa(a){const n={queued:{cls:"pending",label:e("queue.stQueued")},leased:{cls:"info",label:e("queue.stLeased")},running:{cls:"success",label:e("queue.stRunning")},succeeded:{cls:"success",label:e("queue.stSucceeded")},failed:{cls:"error",label:e("queue.stFailed")},dead:{cls:"error",label:e("queue.stDead")},cancelled:{cls:"muted",label:e("queue.stCancelled")}}[a]||{cls:"pending",label:a||"—"};return`<span class="badge ${n.cls}">${t(n.label)}</span>`}function ja(a){const s=a==="playground"?e("queue.srcPlayground"):a==="v1"?e("queue.srcV1"):a||"—";return`<span class="badge muted">${t(s)}</span>`}function pt(a){const s=a==="agent"?"agent":a==="safe"?"safe":a||"safe",n=s==="agent"?e("keys.modeAgentBadge"):s==="safe"?e("keys.modeSafeBadge"):s;return`<span class="badge ${s==="agent"?"agent":"safe"}">${t(n)}</span>`}function Ga(a){const s=String(a||"").toLowerCase(),n=s==="admin"?e("keys.roleAdminBadge"):s==="client"||s==="user"?e("keys.roleClientBadge"):a||"-";return t(n)}function je(a){return String(a||"").toLowerCase().startsWith("image/")}function ua(){return`
  <footer class="site-footer">
    <a class="powered-by" href="https://ysk.hk/" target="_blank" rel="noopener noreferrer">
      <img src="/admin/assets/logo.svg" alt="" width="22" height="22" />
      <span>${t(e("common.powered"))} <strong>YSK Limited</strong></span>
    </a>
  </footer>`}function za(){return{dashboard:e("nav.dashboard"),chat:e("nav.chat"),chats:e("nav.chats"),keys:e("nav.keys"),documents:e("nav.documents"),audit:e("nav.audit"),settings:e("nav.settings"),apiFeatures:e("nav.apiFeatures"),media:e("nav.media"),usage:e("nav.usage"),ddos:e("nav.ddos"),queue:e("nav.queue"),pm2:e("nav.pm2"),system:e("nav.system")}[u.page]||e("brand")}function Xe(){document.body.classList.remove("nav-open")}function Ja(){document.body.classList.add("nav-open")}function z(a){return`
  <div class="app-shell">
    <header class="mobile-bar">
      <button type="button" class="icon-btn" id="nav-open" aria-label="${t(e("shell.menu"))}">☰</button>
      <div class="mobile-title">${t(za())}</div>
      ${wt()}
      <button type="button" class="btn ghost sm" id="btn-logout-mobile">${t(e("logout"))}</button>
    </header>
    <div class="layout">
      <button type="button" class="sidebar-backdrop" id="nav-backdrop" aria-label="${t(e("shell.closeMenu"))}"></button>
      <aside class="sidebar" id="sidebar">
        <div class="brand">
          <img class="brand-logo" src="/admin/assets/logo.svg" alt="YSK" width="40" height="40" />
          <div class="brand-text">
            <strong>${t(e("brand"))}</strong>
            <small>${t(e("brandSub"))}</small>
          </div>
        </div>
        ${wt()}
        ${V("dashboard",e("nav.dashboard"))}
        ${V("chat",e("nav.chat"))}
        ${V("chats",e("nav.chats"))}
        ${V("keys",e("nav.keys"))}
        ${V("documents",e("nav.documents"))}
        ${V("media",e("nav.media"))}
        ${V("audit",e("nav.audit"))}
        ${V("settings",e("nav.settings"))}
        ${V("apiFeatures",e("nav.apiFeatures"))}
        ${V("usage",e("nav.usage"))}
        ${V("ddos",e("nav.ddos"))}
        ${V("queue",e("nav.queue"))}
        ${V("pm2",e("nav.pm2"))}
        ${V("system",e("nav.system"))}
        <div class="sidebar-foot">
          <button class="btn secondary sm logout-btn" id="btn-logout">${t(e("logout"))}</button>
        </div>
      </aside>
      <main class="main">
        <div id="flash-error" class="error-box" ${u.error?"":"hidden"}>${t(u.error)}</div>
        ${a}
      </main>
    </div>
    ${ua()}
  </div>
  ${u.modal||""}
  `}function V(a,s){return`<button type="button" class="nav-btn ${u.page===a?"active":""}" data-nav="${a}">${t(s)}</button>`}function J(){Xe(),document.querySelectorAll("[data-nav]").forEach(s=>{s.onclick=()=>{Xe(),Ht(s.dataset.nav)}});const a=()=>Lt(!0);document.getElementById("btn-logout")?.addEventListener("click",a),document.getElementById("btn-logout-mobile")?.addEventListener("click",a),document.getElementById("nav-open")?.addEventListener("click",Ja),document.getElementById("nav-backdrop")?.addEventListener("click",Xe),document.addEventListener("keydown",s=>{s.key==="Escape"&&Xe()},{once:!0}),document.querySelectorAll("[data-lang]").forEach(s=>{s.onclick=()=>{ia(s.dataset.lang),yt().catch(g)}})}function g(a){console.error(a),L(a.message||String(a))}async function ma(){if(!u.key)return!1;const a=await $("/me");return u.me=a.data,!0}async function rt(a=!1){try{const s=await $(`/models${a?"?refresh=1":""}`);return u.models=s.data?.models||[],s.data}catch{return u.models=[],{models:[],source:"fallback",defaultModel:""}}}async function ht(){try{const a=await $("/keys?all=1");u.keys=a.data||[]}catch{u.keys=[]}}function pa(a){const s=(Array.isArray(a)?a:[a]).filter(Boolean);return s.length?`<div class="page-meta" role="status">${s.map(o=>`<span>${typeof o=="string"?t(o):o}</span>`).join('<span class="page-meta-sep" aria-hidden="true">·</span>')}</div>`:""}function be({title:a,hint:s,meta:n,searchHtml:o,gridHtml:i}){return`
    <div class="panel data-filter-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(a)}</strong>
          ${s?`<span class="muted">${t(s)}</span>`:""}
        </div>
        ${n?`<span class="panel-h-meta muted">${typeof n=="string"?t(n):n}</span>`:""}
      </div>
      <div class="data-filter">
        ${o||""}
        ${i?`<div class="data-filter-grid">${i}</div>`:""}
        <div class="data-filter-actions">
          <button type="button" class="btn secondary sm" data-filter-reset>${t(e("common.reset"))}</button>
          <button type="button" class="btn sm" data-filter-apply>${t(e("common.apply"))}</button>
        </div>
      </div>
    </div>`}function se({headHtml:a,bodyHtml:s,colSpan:n,emptyText:o,pagerHtml:i}){const r=s||`<tr class="empty-row"><td colspan="${n||6}">
      <div class="data-empty">
        <div class="data-empty-icon">∅</div>
        <strong>${t(o||e("common.empty"))}</strong>
      </div>
    </td></tr>`;return`
    <div class="panel data-table-panel">
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr>${a}</tr></thead>
          <tbody>${r}</tbody>
        </table>
      </div>
      ${i||""}
    </div>`}function le({total:a,limit:s,offset:n,idPrefix:o}){const i=Math.max(1,Math.ceil((a||0)/s)||1),r=Math.floor(n/s)+1,l=n>0,c=n+s<a;return`
    <div class="data-pager" id="${o}-pager">
      <div class="data-pager-meta">
        <span>${t(P("common.pagerTotal",{n:a||0}))}</span>
        <span>${t(P("common.pagerPage",{n:r,total:i}))}</span>
        <label class="muted">${t(e("common.perPage"))}
          <select id="${o}-limit">
            ${[10,20,50,100].map(m=>`<option value="${m}" ${s===m?"selected":""}>${m}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="data-pager-actions">
        <button type="button" class="btn secondary sm" id="${o}-prev" ${l?"":"disabled"}>${t(e("common.prev"))}</button>
        <button type="button" class="btn secondary sm" id="${o}-next" ${c?"":"disabled"}>${t(e("common.next"))}</button>
      </div>
    </div>`}function De(a,s,n){document.getElementById(`${a}-prev`)?.addEventListener("click",()=>{s.offset=Math.max(0,s.offset-s.limit),n()}),document.getElementById(`${a}-next`)?.addEventListener("click",()=>{s.offset=s.offset+s.limit,n()}),document.getElementById(`${a}-limit`)?.addEventListener("change",o=>{s.limit=Number(o.target.value)||20,s.offset=0,n()})}function de(){document.getElementById("modal-back")?.remove(),u.modal=null}function ft({title:a,subtitle:s,bodyHtml:n,footerHtml:o,size:i="md"}){de();const r=`
    <div class="modal-back" id="modal-back">
      <div class="modal modal--${t(i)}" role="dialog" aria-modal="true">
        <div class="modal-h">
          <div class="modal-title-block">
            <strong>${t(a||"")}</strong>
            ${s?`<div class="muted">${s}</div>`:""}
          </div>
          <button type="button" class="modal-x" id="modal-close" aria-label="${t(e("common.cancel"))}">×</button>
        </div>
        <div class="modal-b">${n||""}</div>
        ${o?`<div class="modal-f">${o}</div>`:""}
      </div>
    </div>`;document.getElementById("app").insertAdjacentHTML("beforeend",r);const l=()=>de();document.getElementById("modal-close").onclick=l,document.getElementById("modal-back").onclick=m=>{m.target.id==="modal-back"&&l()};const c=m=>{m.key==="Escape"&&(l(),document.removeEventListener("keydown",c))};document.addEventListener("keydown",c)}async function ha(){const a="gctoac admin otp";document.getElementById("app").innerHTML=`
    <div class="login-wrap">
      <div class="login-stage">
        <div class="login-card">
          <div class="login-brand">
            <img src="/admin/assets/logo.svg" alt="YSK" width="48" height="48" />
            <h1 class="brand-title">${t(e("loginTitle"))}</h1>
          </div>
          ${wt()}
          <div id="flash-error" class="error-box" ${u.error?"":"hidden"}>${t(u.error)}</div>
          <label for="login-key">${t(e("loginOtpLabel"))}</label>
          <input id="login-key" type="text" inputmode="text" autocomplete="one-time-code" placeholder="ABCD-EFGH" autofocus spellcheck="false" />
          <button class="btn" id="btn-login">${t(e("loginBtn"))}</button>
        </div>
        <p class="login-cmd-hint">${t(e("loginOtpHint"))}</p>
        <div class="login-cmd">
          <code id="login-cmd-text">${t(a)}</code>
          <button type="button" class="btn-copy" id="btn-copy-cmd">${t(e("loginCopy"))}</button>
        </div>
        <p class="login-cmd-hint">${t(e("loginOtpExpiry"))}</p>
      </div>
      ${ua()}
    </div>
  `,document.querySelectorAll("[data-lang]").forEach(s=>{s.onclick=()=>{ia(s.dataset.lang),ha().catch(g)}}),document.getElementById("btn-copy-cmd").onclick=async()=>{try{await navigator.clipboard.writeText(a);const s=document.getElementById("btn-copy-cmd");s.textContent=e("loginCopied"),setTimeout(()=>{s.textContent=e("loginCopy")},1500)}catch{}},document.getElementById("btn-login").onclick=async()=>{const s=document.getElementById("login-key").value.trim();if(!s)return L(e("needOtp"));try{const n=await fetch("/admin/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:s})}),o=await n.json().catch(()=>({}));if(!n.ok)throw new Error(o?.error?.message||o?.message||e("loginOtpFail"));const i=o?.data?.token;if(!i)throw new Error(e("loginOtpFail"));u.key=i,sessionStorage.setItem(ot,i),await ma(),u.error="",Ht("dashboard")}catch(n){u.key="",sessionStorage.removeItem(ot),L(n.message||e("loginOtpFail"))}},document.getElementById("login-key").onkeydown=s=>{s.key==="Enter"&&document.getElementById("btn-login").click()}}function K({label:a,value:s,sub:n,tone:o,href:i,valueId:r,subId:l}){const c=o?` dash-kpi--${o}`:"",m=r?` id="${t(r)}"`:"",p=l?` id="${t(l)}"`:"",d=`
    <div class="label">${t(a)}</div>
    <div class="value"${m}>${s}</div>
    ${n!=null&&n!==""?`<div class="dash-kpi-sub muted"${p}>${n}</div>`:""}`;return i?`<button type="button" class="card dash-kpi${c}" data-nav="${t(i)}">${d}</button>`:`<div class="card dash-kpi${c}">${d}</div>`}function ge(a,s,n){return a?`<span class="badge success">${t(s)}</span>`:`<span class="badge warn">${t(n)}</span>`}function Nt({id:a,on:s,onLabel:n,offLabel:o,title:i}){return`<button type="button"
    class="master-toggle ${s?"is-on":"is-off"}"
    id="${t(a)}"
    aria-pressed="${s?"true":"false"}"
    title="${t(i||"")}">
    <span class="master-toggle-track" aria-hidden="true"><span class="master-toggle-knob"></span></span>
    <span class="master-toggle-label">${t(s?n:o)}</span>
  </button>`}function Ee(a){const s=document.getElementById(a);return s?s.classList.contains("is-on"):!1}function Ie(a,s,n,o){const i=document.getElementById(a);if(!i)return;i.classList.toggle("is-on",!!s),i.classList.toggle("is-off",!s),i.setAttribute("aria-pressed",s?"true":"false");const r=i.querySelector(".master-toggle-label");r&&n!=null&&o!=null&&(r.textContent=s?n:o)}function qe(a,s){const n=document.getElementById(a);n&&(n.hidden=!s)}function Te(a,s){const n=document.getElementById(a);n&&n.classList.toggle("is-feature-off",!!s)}function Va(a){return{auto:e("ddos.proxySrcAuto"),cloudflare:e("ddos.proxySrcCf"),nginx:e("ddos.proxySrcNginx"),"x-forwarded-for":e("ddos.proxySrcXff"),socket:e("ddos.proxySrcSocket")}[a]||a||"—"}async function St(){const s=(await $("/stats")).data||{},n=s.totals||{},o=s.protection||{},i=s.runtime||{},r=s.concurrency||{},l=s.queue||null,c=s.safety||null,m=s.models24h||[],p=n.successRate24h??0,d=n.successRate??0,y=s.generatedAt?_(s.generatedAt):"—";let f="—",h=e("dash.kpiQueueSub"),v="";if(l){l.enabled?l.paused?(f=e("dash.kpiQueuePaused"),v="warn"):l.drainMode?(f=e("dash.kpiQueueDrain"),v="warn"):f=`${l.depth??0}`:(f=e("dash.kpiQueueOff"),v="warn");const S=l.oldestQueuedAgeMs>0?` · wait ${Math.round(l.oldestQueuedAgeMs/1e3)}s`:"";h=P("dash.kpiQueueSubLive",{run:l.running??0,max:l.globalConcurrency??"—",dead:l.dead??0,wait:S}),((l.dead||0)>0||(l.depth||0)>20)&&(v=v||"warn")}const b=!!c?.globalSafeMode,x=c?e(b?"dash.kpiSafeOn":"dash.kpiSafeOff"):"—",H=c?P("dash.kpiSafeSub",{tools:c.safeToolsMode||"—",turns:c.safeMaxTurns??"—",model:c.defaultModel||"—"}):e("dash.kpiSafeSubEmpty"),T=(s.recentChats||[]).map(S=>`
    <tr>
      <td><button class="linkish cell-primary" data-chat="${S.id}">${t(S.requestId)}</button>
        <div class="cell-sub">${t(S.apiKey?.name||"")}</div></td>
      <td>${t(S.model)}</td>
      <td>${Ft(S.status)}</td>
      <td>${pt(S.policyMode||"-")}</td>
      <td>${lt(S.durationMs)}</td>
      <td>${_(S.createdAt)}</td>
    </tr>`).join(""),R=se({headHtml:`
      <th>${t(e("chats.request"))}</th>
      <th>${t(e("chats.model"))}</th>
      <th>${t(e("chats.status"))}</th>
      <th>${t(e("chats.mode"))}</th>
      <th>${t(e("chats.duration"))}</th>
      <th>${t(e("chats.time"))}</th>`,bodyHtml:T,colSpan:6,emptyText:e("dash.empty")}),E=Math.max(1,...m.map(S=>S.requests||0)),C=m.length?m.map(S=>{const I=Math.round((S.requests||0)/E*100);return`
          <div class="dash-bar-row">
            <div class="dash-bar-label" title="${t(S.model)}">${t(S.model)}</div>
            <div class="dash-bar-track"><span style="width:${I}%"></span></div>
            <div class="dash-bar-n">${S.requests}</div>
          </div>`}).join(""):`<div class="data-empty" style="padding:20px"><strong>${t(e("dash.emptyModels"))}</strong></div>`,D=(S,I)=>`<span class="dash-rule-chip ${S?"is-on":"is-off"}">${t(I)}</span>`,k=l?`
      <div class="dash-stat-grid">
        <div><div class="label">${t(e("dash.qQueued"))}</div><div class="value value-sm">${l.queued??0}</div></div>
        <div><div class="label">${t(e("dash.qRunning"))}</div><div class="value value-sm">${l.running??0}<span class="dash-kpi-den">/${l.globalConcurrency??"—"}</span></div></div>
        <div><div class="label">${t(e("dash.qDead"))}</div><div class="value value-sm">${l.dead??0}</div></div>
        <div><div class="label">${t(e("dash.qSucceeded"))}</div><div class="value value-sm">${l.succeeded??0}</div></div>
      </div>
      <div class="dash-prot-meta muted">
        ${t(e("dash.qWorker"))}: ${t(l.workerId||"—")}
        · ${t(e("dash.qWorkerActive"))}: ${l.workerActive??0}
        ${l.oldestQueuedAgeMs>0?` · ${t(e("dash.qOldest"))}: ${Math.round(l.oldestQueuedAgeMs/1e3)}s`:""}
      </div>`:`<div class="data-empty" style="padding:12px 0"><strong>${t(e("dash.qUnavailable"))}</strong></div>`;document.getElementById("app").innerHTML=z(`
    <div class="dash-hero">
      <div class="dash-hero-text">
        <h2>${t(e("dash.title"))}</h2>
        <p class="muted">${t(e("dash.subtitle"))}</p>
      </div>
      <div class="dash-hero-meta">
        <span class="muted">${t(e("dash.updated"))}: ${t(y)}</span>
        <button type="button" class="btn secondary sm" id="dash-refresh">${t(e("dash.refresh"))}</button>
      </div>
    </div>

    <div class="dash-kpi-grid">
      ${K({label:e("dash.kpi24h"),value:n.chats24h??0,sub:P("dash.kpi24hSub",{ok:n.success24h??0,err:n.error24h??0}),tone:"primary",href:"chats"})}
      ${K({label:e("dash.kpiSuccessRate"),value:`${p}%`,sub:P("dash.kpiSuccessRateSub",{all:d}),tone:p>=90?"ok":p>=70?"warn":"danger",href:"usage"})}
      ${K({label:e("dash.kpiErrors"),value:n.error24h??0,sub:P("dash.kpiErrorsSub",{all:n.errors??0}),tone:(n.error24h||0)>0?"warn":"ok",href:"chats"})}
      ${K({label:e("dash.kpiQueue"),value:f,sub:h,tone:v,href:"queue"})}
      ${K({label:e("dash.kpiSafe"),value:x,sub:H,tone:c?b?"ok":"warn":"",href:"settings"})}
      ${K({label:e("dash.kpiKeys"),value:`${n.activeKeys??0}<span class="dash-kpi-den">/${n.totalKeys??0}</span>`,sub:e("dash.kpiKeysSub"),href:"keys"})}
      ${K({label:e("dash.kpiDocs"),value:n.documents??0,sub:e("dash.kpiDocsSub"),href:"documents"})}
      ${K({label:e("dash.kpiMedia")||"Media",value:n.mediaAssets??0,sub:P("dash.kpiMediaSub",{n:n.mediaAssets24h??0}),href:"media"})}
      ${K({label:e("dash.kpiConv"),value:n.conversations??0,sub:P("dash.kpiConvSub",{n:n.conversations24h??0}),href:"chat"})}
      ${K({label:e("dash.kpiSessions"),value:n.adminSessions??i.adminSessions??0,sub:e("dash.kpiSessionsSub")})}
      ${K({label:e("dash.kpiConcurrent"),value:`${r.active??0}<span class="dash-kpi-den">/${r.max??0}</span>`,sub:e("dash.kpiConcurrentSub"),tone:(r.active||0)>=(r.max||1)?"warn":""})}
    </div>

    <div class="dash-layout">
      <div class="dash-main">
        <div class="panel dash-panel">
          <div class="panel-h">
            <strong>${t(e("dash.recent"))}</strong>
            <button type="button" class="btn secondary sm" data-nav="chats">${t(e("dash.viewAll"))}</button>
          </div>
          ${R.replace("data-table-panel","data-table-panel dash-embed-table")}
        </div>

        <div class="panel dash-panel">
          <div class="panel-h">
            <strong>${t(e("dash.queuePanel"))}</strong>
            <button type="button" class="btn secondary sm" data-nav="queue">${t(e("dash.openQueue"))}</button>
          </div>
          <div class="panel-pad dash-prot">
            <div class="dash-prot-row">
              <span>${t(e("dash.queueState"))}</span>
              ${l?l.enabled?l.paused?`<span class="badge warn">${t(e("dash.kpiQueuePaused"))}</span>`:l.drainMode?`<span class="badge warn">${t(e("dash.kpiQueueDrain"))}</span>`:`<span class="badge success">${t(e("dash.queueLive"))}</span>`:`<span class="badge warn">${t(e("dash.kpiQueueOff"))}</span>`:`<span class="badge warn">${t(e("dash.kpiQueueOff"))}</span>`}
            </div>
            ${k}
          </div>
        </div>
      </div>

      <aside class="dash-side">
        <div class="panel dash-panel">
          <div class="panel-h">
            <strong>${t(e("dash.safety"))}</strong>
            <button type="button" class="btn secondary sm" data-nav="settings">${t(e("dash.openSettings"))}</button>
          </div>
          <div class="panel-pad dash-prot">
            <div class="dash-prot-row">
              <span>${t(e("dash.globalSafe"))}</span>
              ${ge(b,e("dash.on"),e("dash.off"))}
            </div>
            <div class="dash-stat-grid">
              <div><div class="label">${t(e("dash.safeTools"))}</div><div class="value value-sm">${t(c?.safeToolsMode||"—")}</div></div>
              <div><div class="label">${t(e("dash.safeTurns"))}</div><div class="value value-sm">${c?.safeMaxTurns??"—"}</div></div>
              <div><div class="label">${t(e("dash.safeTimeout"))}</div><div class="value value-sm">${c?.safeTimeoutMs!=null?Math.round(c.safeTimeoutMs/1e3)+"s":"—"}</div></div>
              <div><div class="label">${t(e("dash.defaultModel"))}</div><div class="value value-sm" style="font-size:0.95rem!important">${t(c?.defaultModel||"—")}</div></div>
            </div>
            <div class="dash-prot-meta muted">${t(e("dash.safetyHint"))}</div>
          </div>
        </div>

        <div class="panel dash-panel">
          <div class="panel-h">
            <strong>${t(e("dash.protection"))}</strong>
            <button type="button" class="btn secondary sm" data-nav="ddos">${t(e("dash.openDdos"))}</button>
          </div>
          <div class="panel-pad dash-prot">
            <div class="dash-prot-row">
              <span>${t(e("dash.autoBan"))}</span>
              ${ge(!!o.autoBanEnabled,e("dash.on"),e("dash.off"))}
            </div>
            <div class="dash-rule-row">
              ${D(o.autoAuthEnabled,e("dash.ruleAuth"))}
              ${D(o.autoRateEnabled,e("dash.ruleRate"))}
              ${D(o.autoConnEnabled,e("dash.ruleConn"))}
              ${D(o.autoVelocityEnabled,e("dash.ruleVelocity"))}
            </div>
            <div class="dash-stat-grid">
              <div><div class="label">${t(e("dash.bans"))}</div><div class="value value-sm">${o.bans??0}</div></div>
              <div><div class="label">${t(e("dash.blocked"))}</div><div class="value value-sm">${o.blockedHits??0}</div></div>
              <div><div class="label">${t(e("dash.rateHits"))}</div><div class="value value-sm">${o.rateLimitedHits??0}</div></div>
              <div><div class="label">${t(e("dash.liveConn"))}</div><div class="value value-sm">${o.activeConnections??0}</div></div>
            </div>
            <div class="dash-prot-meta muted">
              ${t(e("dash.proxy"))}: ${t(Va(o.proxyIpSource))}
              · ${t(e("dash.hops"))}: ${o.proxyTrustHops??0}
              · ${t(e("dash.limits"))}: ${o.rateLimitMax??"—"}/${o.rateLimitIpMax??"—"}
            </div>
          </div>
        </div>

        <div class="panel dash-panel">
          <div class="panel-h"><strong>${t(e("dash.models24h"))}</strong></div>
          <div class="panel-pad">${C}</div>
        </div>

        <div class="panel dash-panel">
          <div class="panel-h"><strong>${t(e("dash.runtime"))}</strong></div>
          <div class="panel-pad dash-runtime">
            <div class="dash-prot-row">
              <span>${t(e("dash.port"))}</span>
              <strong>${i.port??"—"}<span class="muted" style="font-weight:500"> (${t(e("dash.defaultPort"))} ${i.defaultPort??3847})</span></strong>
            </div>
            <div class="dash-prot-row">
              <span>${t(e("dash.env"))}</span>
              <strong>${t(i.env||"—")}</strong>
            </div>
            <div class="dash-prot-row">
              <span>${t(e("dash.authMode"))}</span>
              <strong>${t(e("dash.authOtp"))}</strong>
            </div>
            <div class="dash-prot-row">
              <span>${t(e("dash.encryption"))}</span>
              ${ge(!!i.encryptionReady,e("dash.ready"),e("dash.notReady"))}
            </div>
            <div class="dash-quick">
              <button type="button" class="btn secondary sm" data-nav="chat">${t(e("nav.chat"))}</button>
              <button type="button" class="btn secondary sm" data-nav="queue">${t(e("dash.openQueue"))}</button>
              <button type="button" class="btn secondary sm" data-nav="settings">${t(e("nav.settings"))}</button>
              <button type="button" class="btn secondary sm" data-nav="usage">${t(e("nav.usage"))}</button>
              <button type="button" class="btn secondary sm" data-nav="pm2">${t(e("nav.pm2"))}</button>
              <button type="button" class="btn secondary sm" data-nav="system">${t(e("nav.system"))}</button>
              <button type="button" class="btn secondary sm" data-nav="audit">${t(e("nav.audit"))}</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  `),J(),document.getElementById("dash-refresh")?.addEventListener("click",()=>St().catch(g)),document.querySelectorAll("[data-nav]").forEach(S=>{S.onclick=()=>{const I=S.dataset.nav;I&&Ht(I)}}),document.querySelectorAll("[data-chat]").forEach(S=>{S.onclick=()=>ya(S.dataset.chat)})}function Xa(a){return a?.length?a.map(s=>`<span class="chip ${je(s.mimeType)?"img":""}" title="${t(s.mimeType)}">${t(s.originalName||e("chats.file"))}</span>`).join(" "):'<span class="muted">—</span>'}function fa(a){const s=String(a||"");if(!s.trim())return{system:"",body:"",hasRoles:!1};if(!/^(system|user|assistant|tool): /m.test(s))return{system:"",body:s,hasRoles:!1};const n=/(^|\n)(system|user|assistant|tool): /g,o=[];let i;for(;(i=n.exec(s))!==null;)o.push({role:i[2],contentStart:i.index+i[0].length,index:i.index});if(!o.length)return{system:"",body:s,hasRoles:!1};const r=o.map((m,p)=>{const d=p+1<o.length?o[p+1].index:s.length;return{role:m.role,content:s.slice(m.contentStart,d)}}),l=r.filter(m=>m.role==="system").map(m=>m.content),c=r.filter(m=>m.role!=="system").map(m=>`${m.role}: ${m.content}`);return{system:l.join(`

`).trim(),body:c.length?c.join(`
`):s,hasRoles:!0,blocks:r}}async function tt(){await Promise.all([rt(),ht()]);const a=u.chatFilter,s=new URLSearchParams;if(s.set("limit",String(a.limit)),s.set("offset",String(a.offset)),a.status&&s.set("status",a.status),a.model&&s.set("model",a.model),a.apiKeyId&&s.set("apiKeyId",a.apiKeyId),a.q&&s.set("q",a.q),a.from&&s.set("from",new Date(a.from).toISOString()),a.to){const d=new Date(a.to);d.setHours(23,59,59,999),s.set("to",d.toISOString())}a.policyMode&&s.set("policyMode",a.policyMode),a.hasDocuments!==""&&s.set("hasDocuments",a.hasDocuments);const n=await $(`/chats?${s}`),o=n.total||0,i=[`<option value="">${t(e("chats.allModels"))}</option>`,...u.models.map(d=>`<option value="${t(d)}" ${a.model===d?"selected":""}>${t(d)}</option>`)].join(""),r=[`<option value="">${t(e("chats.allKeys"))}</option>`,...u.keys.map(d=>`<option value="${d.id}" ${a.apiKeyId===d.id?"selected":""}>${t(d.name)} (${t(d.keyPrefix)})</option>`)].join(""),l=(n.items||[]).map(d=>{const y=fa(d.promptPreview||""),f=!!y.system,h=f?y.body.slice(0,160):d.promptPreview||"";return`
    <tr>
      <td><button class="linkish cell-primary" data-chat="${d.id}">${t(d.requestId)}</button></td>
      <td><div class="cell-primary">${t(d.apiKey?.name||"")}</div><div class="cell-sub">${t(d.apiKey?.keyPrefix||"")}</div></td>
      <td>${t(d.model)}</td>
      <td>${Ft(d.status)} ${pt(d.policyMode||"-")}</td>
      <td>${Xa(d.documents)} ${d.documentCount?`<span class="muted">×${d.documentCount}</span>`:""}</td>
      <td class="chats-preview-cell">
        ${f?`<span class="chip sys-chip" title="${t(y.system.slice(0,400))}">${t(e("chats.hasSystem"))}</span>`:""}
        <div class="muted preview-text">${t(h)}</div>
      </td>
      <td class="chats-preview-cell"><div class="muted preview-text">${t(d.contentPreview)}</div></td>
      <td>${_(d.createdAt)}</td>
    </tr>`}).join(""),c=be({title:e("chats.filterTitle")||e("common.filterTitle"),hint:e("chats.filterHint")||e("common.filterHint"),meta:P("common.pagerTotal",{n:o}),searchHtml:`
      <div class="data-filter-search">
        <label for="f-q">${t(e("chats.search"))}</label>
        <input type="search" id="f-q" value="${t(a.q)}" placeholder="${t(e("chats.searchPh"))}" />
      </div>`,gridHtml:`
      <label>${t(e("chats.status"))}
        <select id="f-status">
          <option value="">${t(e("chats.allStatus"))}</option>
          ${["success","error","timeout","pending"].map(d=>`<option value="${d}" ${a.status===d?"selected":""}>${t(e(`status.${d}`))}</option>`).join("")}
        </select>
      </label>
      <label>${t(e("chats.model"))}
        <select id="f-model">${i}</select>
      </label>
      <label>${t(e("chats.apiKey"))}
        <select id="f-key">${r}</select>
      </label>
      <label>${t(e("chats.mode"))}
        <select id="f-mode">
          <option value="">${t(e("chats.allModes"))}</option>
          <option value="safe" ${a.policyMode==="safe"?"selected":""}>${t(e("keys.modeSafeBadge"))}</option>
          <option value="agent" ${a.policyMode==="agent"?"selected":""}>${t(e("keys.modeAgentBadge"))}</option>
        </select>
      </label>
      <label>${t(e("chats.from"))}
        <input type="date" id="f-from" value="${t(a.from)}" />
      </label>
      <label>${t(e("chats.to"))}
        <input type="date" id="f-to" value="${t(a.to)}" />
      </label>
      <label class="data-filter-check">
        <input type="checkbox" id="f-docs" ${a.hasDocuments==="true"?"checked":""} />
        <span>${t(e("chats.hasDocs"))}</span>
      </label>`}),m=se({headHtml:`
      <th>${t(e("chats.request"))}</th>
      <th>${t(e("chats.apiKey"))}</th>
      <th>${t(e("chats.model"))}</th>
      <th>${t(e("chats.status"))}</th>
      <th>${t(e("chats.attachments"))}</th>
      <th>${t(e("chats.prompt"))}</th>
      <th>${t(e("chats.response"))}</th>
      <th>${t(e("chats.time"))}</th>`,bodyHtml:l,colSpan:8,emptyText:e("common.empty"),pagerHtml:le({total:o,limit:a.limit,offset:a.offset,idPrefix:"chats"})});document.getElementById("app").innerHTML=z(`
    <div class="topbar">
      <h2>${t(e("chats.title"))}</h2>
    </div>
    ${pa([e("chats.decrypt")])}
    ${c}
    ${m}
  `),J(),De("chats",u.chatFilter,()=>tt().catch(g));const p=()=>{u.chatFilter.q=document.getElementById("f-q").value.trim(),u.chatFilter.status=document.getElementById("f-status").value,u.chatFilter.model=document.getElementById("f-model").value,u.chatFilter.apiKeyId=document.getElementById("f-key").value,u.chatFilter.policyMode=document.getElementById("f-mode").value,u.chatFilter.from=document.getElementById("f-from").value,u.chatFilter.to=document.getElementById("f-to").value,u.chatFilter.hasDocuments=document.getElementById("f-docs").checked?"true":"",u.chatFilter.offset=0,tt().catch(g)};document.querySelector("[data-filter-apply]").onclick=p,document.getElementById("f-q").onkeydown=d=>{d.key==="Enter"&&p()},document.querySelector("[data-filter-reset]").onclick=()=>{u.chatFilter={q:"",status:"",model:"",apiKeyId:"",from:"",to:"",policyMode:"",hasDocuments:"",limit:50,offset:0},tt().catch(g)},document.querySelectorAll("[data-chat]").forEach(d=>{d.onclick=()=>ya(d.dataset.chat)})}async function ya(a){const{data:s}=await $(`/chats/${a}`),n=s.response||{},o=s.documents||[];let i=`<p class="muted">${t(e("chats.noAttach"))}</p>`;if(o.length){const m=[];for(const p of o){let d="";if(je(p.mimeType))try{const y=await $(`/documents/${p.id}`),f=await ba(y.data||{id:p.id,isImage:!0,mimeType:p.mimeType});f?.src&&(d=`<img class="preview" src="${f.src}" alt="${t(p.originalName)}" />`)}catch{d=`<span class="muted">${t(e("chats.previewFailed"))}</span>`}m.push(`
        <div class="attach-item">
          <div style="flex:1;min-width:0">
            <strong>${t(p.originalName)}</strong>
            <div class="muted">${t(p.mimeType)} · ${ye(p.sizeBytes)}</div>
            ${d}
          </div>
          <button class="btn secondary sm" data-open-doc="${p.id}">${t(e("chats.openFile"))}</button>
        </div>`)}i=`<div class="attach-list">${m.join("")}</div>`}const r=fa(s.prompt||""),l=r.system?`<div class="block block-system">
        <div class="block-head">
          <h4>${t(e("chats.systemPrompt"))}</h4>
          <button class="btn secondary sm" data-copy="system">${t(e("chats.copySystem"))}</button>
        </div>
        <p class="hint">${t(e("chats.systemHint"))}</p>
        <div class="pre pre-system">${t(r.system)}</div>
      </div>`:`<div class="block block-system muted-block">
        <h4>${t(e("chats.systemPrompt"))}</h4>
        <p class="muted">${t(e("chats.noSystem"))}</p>
      </div>`,c=`
    <div class="grid modal-meta-grid">
      <div class="card"><div class="label">${t(e("chats.model"))}</div><div class="value value-sm">${t(s.model)}</div></div>
      <div class="card"><div class="label">${t(e("chats.duration"))}</div><div class="value value-sm">${lt(s.durationMs)}</div></div>
      <div class="card"><div class="label">${t(e("chats.apiKey"))}</div><div class="value value-sm">${t(s.apiKey?.name||"")}</div></div>
      <div class="card"><div class="label">${t(e("chats.stream"))}</div><div class="value value-sm">${s.stream?e("common.yes"):e("common.no")}</div></div>
    </div>
    ${s.errorMessage?`<div class="error-box">${t(s.errorMessage)}</div>`:""}
    ${l}
    <div class="block">
      <h4>${t(e("chats.attachments"))}</h4>
      ${i}
    </div>
    <div class="block">
      <div class="block-head">
        <h4>${t(e("chats.userPrompt"))}</h4>
        <button class="btn secondary sm" data-copy="prompt">${t(e("chats.copyPrompt"))}</button>
      </div>
      <div class="pre">${t(r.body||s.prompt||e("chats.none"))}</div>
    </div>
    <div class="block">
      <h4>${t(e("chats.reasoning"))}</h4>
      <div class="pre">${t(n.reasoning_content||e("chats.none"))}</div>
    </div>
    <div class="block">
      <div class="block-head">
        <h4>${t(e("chats.content"))}</h4>
        <button class="btn secondary sm" data-copy="content">${t(e("chats.copyContent"))}</button>
      </div>
      <div class="pre">${t(n.content||e("chats.none"))}</div>
    </div>
    <div class="block">
      <div class="block-head">
        <h4>${t(e("chats.rawPrompt"))}</h4>
        <button class="btn secondary sm" data-copy="raw-prompt">${t(e("chats.copyRawPrompt"))}</button>
      </div>
      <div class="pre">${t(s.prompt||e("chats.none"))}</div>
    </div>
    <div class="block">
      <h4>${t(e("chats.raw"))}</h4>
      <div class="pre">${t(n.raw||"")}</div>
    </div>
    <div class="modal-meta-foot muted">${t(e("common.ipLabel"))}: ${t(s.ip||"—")} · ${t(e("common.uaLabel"))}: ${t(s.userAgent||"—")} · ${_(s.createdAt)}</div>`;ft({title:e("chats.detail"),subtitle:`${t(s.requestId)} · ${Ft(s.status)} ${pt(s.policyMode||"-")}`,bodyHtml:c,size:"xl",footerHtml:`<button type="button" class="btn secondary sm" id="modal-ok">${t(e("chats.close"))}</button>`}),document.getElementById("modal-ok")?.addEventListener("click",()=>de()),document.querySelector('[data-copy="system"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(r.system||"")}),document.querySelector('[data-copy="prompt"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(r.body||s.prompt||"")}),document.querySelector('[data-copy="raw-prompt"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(s.prompt||"")}),document.querySelector('[data-copy="content"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(n.content||"")}),document.querySelectorAll("[data-open-doc]").forEach(m=>{m.onclick=()=>$a(m.dataset.openDoc)})}async function xe(){const a=u.keyFilter;let s={};try{const p=await $("/usage");for(const d of p.data?.perKey||[])s[d.apiKeyId]=d}catch{}const n=new URLSearchParams;n.set("limit",String(a.limit)),n.set("offset",String(a.offset)),a.q&&n.set("q",a.q),a.role&&n.set("role",a.role),a.mode&&n.set("mode",a.mode),a.isActive!==""&&n.set("isActive",a.isActive);const o=await $(`/keys?${n}`),i=o.data||[],r=o.total??i.length,l=i.map(p=>{const d=s[p.id],y=d?.requests??"—",f=d?Math.round((d.utilization||0)*100):0,h=p.ipWhitelist||[],v=h.length?P("keys.ipCount",{n:h.length}):e("keys.ipAll");return`
    <tr>
      <td><div class="cell-primary">${t(p.name)}</div><div class="cell-sub">${t(p.keyPrefix)}…</div></td>
      <td>${Ga(p.role)}</td>
      <td>${pt(p.mode)}</td>
      <td>${ca(p.rateLimit)}</td>
      <td title="${t(h.join(", "))}">${t(v)}</td>
      <td>
        <div>${y} <span class="muted">(${t(e("keys.usage24"))})</span></div>
        <div class="usage-bar ${f>80?"warn":""}"><span style="width:${f}%"></span></div>
      </td>
      <td>${p.isActive?`<span class="badge success">${t(e("common.active"))}</span>`:`<span class="badge error">${t(e("common.revoked"))}</span>`}</td>
      <td>${_(p.createdAt)}</td>
      <td><div class="row-actions">
        <button class="btn secondary sm" data-edit="${p.id}">${t(e("keys.edit"))}</button>
        ${p.isActive?`<button class="btn danger sm" data-revoke="${p.id}">${t(e("keys.revoke"))}</button>`:""}
      </div></td>
    </tr>`}).join(""),c=be({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:P("common.pagerTotal",{n:r}),searchHtml:`
      <div class="data-filter-search">
        <label for="kf-q">${t(e("common.search"))}</label>
        <input type="search" id="kf-q" value="${t(a.q)}" placeholder="${t(e("keys.searchPh"))}" />
      </div>`,gridHtml:`
      <label>${t(e("keys.role"))}
        <select id="kf-role">
          <option value="">${t(e("common.all"))}</option>
          <option value="client" ${a.role==="client"?"selected":""}>${t(e("keys.roleClient"))}</option>
          <option value="admin" ${a.role==="admin"?"selected":""}>${t(e("keys.roleAdmin"))}</option>
        </select>
      </label>
      <label>${t(e("keys.mode"))}
        <select id="kf-mode">
          <option value="">${t(e("common.all"))}</option>
          <option value="safe" ${a.mode==="safe"?"selected":""}>${t(e("keys.modeSafeBadge"))}</option>
          <option value="agent" ${a.mode==="agent"?"selected":""}>${t(e("keys.modeAgentBadge"))}</option>
        </select>
      </label>
      <label>${t(e("keys.status"))}
        <select id="kf-active">
          <option value="">${t(e("common.all"))}</option>
          <option value="true" ${a.isActive==="true"?"selected":""}>${t(e("common.active"))}</option>
          <option value="false" ${a.isActive==="false"?"selected":""}>${t(e("common.revoked"))}</option>
        </select>
      </label>`}),m=se({headHtml:`
      <th>${t(e("keys.name"))}</th><th>${t(e("keys.role"))}</th>
      <th>${t(e("keys.mode"))}</th><th>${t(e("keys.rate"))}</th>
      <th>${t(e("keys.ipWhitelistCol"))}</th>
      <th>${t(e("keys.usage24"))}</th><th>${t(e("keys.status"))}</th>
      <th>${t(e("keys.created"))}</th><th>${t(e("common.actions"))}</th>`,bodyHtml:l,colSpan:9,emptyText:e("keys.empty"),pagerHtml:le({total:r,limit:a.limit,offset:a.offset,idPrefix:"keys"})});document.getElementById("app").innerHTML=z(`
    <div class="topbar">
      <h2>${t(e("keys.title"))}</h2>
      <div class="toolbar">
        <button class="btn" id="btn-new-key">${t(e("keys.new"))}</button>
      </div>
    </div>
    ${c}
    ${m}
  `),J(),De("keys",u.keyFilter,()=>xe().catch(g)),document.querySelector("[data-filter-apply]").onclick=()=>{u.keyFilter.q=document.getElementById("kf-q").value.trim(),u.keyFilter.role=document.getElementById("kf-role").value,u.keyFilter.mode=document.getElementById("kf-mode").value,u.keyFilter.isActive=document.getElementById("kf-active").value,u.keyFilter.offset=0,xe().catch(g)},document.querySelector("[data-filter-reset]").onclick=()=>{u.keyFilter={q:"",role:"",mode:"",isActive:"",limit:20,offset:0},xe().catch(g)},document.getElementById("btn-new-key").onclick=()=>jt(),document.querySelectorAll("[data-edit]").forEach(p=>{const d=i.find(y=>y.id===p.dataset.edit);p.onclick=()=>jt(d)}),document.querySelectorAll("[data-revoke]").forEach(p=>{p.onclick=async()=>{await F({message:e("keys.confirmRevoke"),variant:"danger",confirmText:e("keys.revoke")})&&(await $(`/keys/${p.dataset.revoke}`,{method:"DELETE"}),xe().catch(g))}})}function jt(a){const s=!!a,n=(a?.ipWhitelist||[]).join(`
`);ft({title:e(s?"keys.edit":"keys.new"),subtitle:s?`${t(a?.name||"")} · ${t(a?.keyPrefix||"")}…`:"",size:"md",bodyHtml:`
      <div class="form-grid">
        <label class="full">${t(e("keys.name"))}<input id="k-name" value="${t(a?.name||"")}" /></label>
        <label>${t(e("keys.role"))}
          <select id="k-role">
            <option value="client">${t(e("keys.roleClient"))}</option>
            <option value="admin">${t(e("keys.roleAdmin"))}</option>
          </select>
        </label>
        <label>${t(e("keys.mode"))}
          <select id="k-mode">
            <option value="safe">${t(e("keys.modeSafe"))}</option>
            <option value="agent">${t(e("keys.modeAgent"))}</option>
          </select>
        </label>
        <label>${t(e("keys.rate"))}<input id="k-rate" type="number" value="${a?.rateLimit??60}" /></label>
        <label>${t(e("keys.maxTurns"))}<input id="k-turns" type="number" value="${a?.maxTurns??""}" /></label>
        <label>${t(e("keys.timeoutMs"))}<input id="k-timeout" type="number" value="${a?.timeoutMs??""}" /></label>
        <label class="full">${t(e("keys.ipWhitelist"))}
          <textarea id="k-ip" rows="4" placeholder="${t(e("keys.ipPlaceholder"))}">${t(n)}</textarea>
          <span class="field-hint">${t(e("keys.ipWhitelistHint"))}</span>
        </label>
        ${s?`<label class="full">${t(e("keys.status"))}
          <select id="k-active"><option value="true">${t(e("common.active"))}</option><option value="false">${t(e("common.revoked"))}</option></select>
        </label>`:""}
      </div>
      <pre id="k-created" class="pre key-once-box" hidden></pre>`,footerHtml:`
      <button type="button" class="btn secondary sm" id="k-cancel">${t(e("common.cancel"))}</button>
      <button type="button" class="btn sm" id="k-save">${t(e("common.save"))}</button>`}),document.getElementById("k-role").value=a?.role||"client",document.getElementById("k-mode").value=a?.mode||"safe",s&&(document.getElementById("k-active").value=String(a.isActive)),document.getElementById("k-cancel").onclick=()=>de(),document.getElementById("k-save").onclick=async()=>{const o=document.getElementById("k-ip").value.split(/[\n,]+/).map(r=>r.trim()).filter(Boolean),i={name:document.getElementById("k-name").value.trim(),role:document.getElementById("k-role").value,mode:document.getElementById("k-mode").value,rateLimit:Number(document.getElementById("k-rate").value||60),maxTurns:document.getElementById("k-turns").value?Number(document.getElementById("k-turns").value):null,timeoutMs:document.getElementById("k-timeout").value?Number(document.getElementById("k-timeout").value):null,ipWhitelist:o};try{if(s)i.isActive=document.getElementById("k-active").value==="true",await $(`/keys/${a.id}`,{method:"PATCH",body:JSON.stringify(i)}),de(),xe().catch(g);else{const r=await $("/keys",{method:"POST",body:JSON.stringify(i)}),l=document.getElementById("k-created");l&&(l.hidden=!1,l.textContent=`${e("keys.keyOnce")}
${r.data?.key||JSON.stringify(r.data)}`);const c=document.getElementById("k-save");c&&(c.textContent=e("chats.close"),c.onclick=()=>{de(),xe().catch(g)})}}catch(r){g(r)}}}function ga(a){return e(a==="filesystem"?"docs.storageFs":"docs.storageDb")}async function va(a,s){try{const n=await fetch(`${Ct}/documents/${a}/download`,{headers:u.key?{Authorization:`Bearer ${u.key}`}:{}});if(!n.ok){const l=await n.text();let c=l;try{c=JSON.parse(l).error?.message||l}catch{}throw new Error(c||e("docs.downloadFail"))}const o=await n.blob(),i=URL.createObjectURL(o),r=document.createElement("a");r.href=i,r.download=s||"download",document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}catch(n){L(n.message||e("docs.downloadFail"))}}async function _e(){await ht();const a=u.docFilter,s=new URLSearchParams({limit:String(a.limit),offset:String(a.offset)});if(a.q&&s.set("q",a.q),a.apiKeyId&&s.set("apiKeyId",a.apiKeyId),a.storageType&&s.set("storageType",a.storageType),a.from&&s.set("from",new Date(a.from).toISOString()),a.to){const d=new Date(a.to);d.setHours(23,59,59,999),s.set("to",d.toISOString())}const n=await $(`/documents?${s}`),o=n.total??0,i=n.meta||{},r=P("docs.storageHint",{dir:i.storageDir||"—",dbMax:ye(i.documentDbMaxBytes),upMax:ye(i.uploadMaxBytes)}),l=[`<option value="">${t(e("common.all"))}</option>`,...u.keys.map(d=>`<option value="${d.id}" ${a.apiKeyId===d.id?"selected":""}>${t(d.name)}</option>`)].join(""),c=(n.data||[]).map(d=>`
    <tr>
      <td><button class="linkish cell-primary" data-doc="${d.id}">${t(d.originalName)}</button>
        ${je(d.mimeType)?`<span class="chip img">${t(e("chats.img"))}</span>`:""}</td>
      <td>${t(d.apiKey?.name||"")}</td>
      <td>${t(d.mimeType)}</td>
      <td>${ye(d.sizeBytes)}</td>
      <td>
        <span title="${t(d.storagePath||"")}">${t(ga(d.storageType))}</span>
        ${d.storagePath?`<div class="cell-sub">${t(d.storagePath)}</div>`:""}
      </td>
      <td>${_(d.createdAt)}</td>
      <td><div class="row-actions">
        <button class="btn secondary sm" data-dl="${d.id}" data-name="${t(d.originalName)}">${t(e("docs.download"))}</button>
        <button class="btn danger sm" data-del="${d.id}">${t(e("docs.delete"))}</button>
      </div></td>
    </tr>`).join(""),m=be({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:P("common.pagerTotal",{n:o}),searchHtml:`
      <div class="data-filter-search">
        <label for="df-q">${t(e("common.search"))}</label>
        <input type="search" id="df-q" value="${t(a.q)}" placeholder="${t(e("docs.searchPh"))}" />
      </div>`,gridHtml:`
      <label>${t(e("chats.apiKey"))}
        <select id="df-key">${l}</select>
      </label>
      <label>${t(e("docs.storage"))}
        <select id="df-storage">
          <option value="">${t(e("common.all"))}</option>
          <option value="db" ${a.storageType==="db"?"selected":""}>${t(e("docs.storageDb"))}</option>
          <option value="filesystem" ${a.storageType==="filesystem"?"selected":""}>${t(e("docs.storageFs"))}</option>
        </select>
      </label>
      <label>${t(e("chats.from"))}<input type="date" id="df-from" value="${t(a.from)}" /></label>
      <label>${t(e("chats.to"))}<input type="date" id="df-to" value="${t(a.to)}" /></label>`}),p=se({headHtml:`
      <th>${t(e("docs.file"))}</th>
      <th>${t(e("chats.apiKey"))}</th>
      <th>${t(e("docs.mime"))}</th>
      <th>${t(e("docs.size"))}</th>
      <th>${t(e("docs.storage"))}</th>
      <th>${t(e("docs.time"))}</th>
      <th>${t(e("common.actions"))}</th>`,bodyHtml:c,colSpan:7,emptyText:e("docs.empty"),pagerHtml:le({total:o,limit:a.limit,offset:a.offset,idPrefix:"docs"})});document.getElementById("app").innerHTML=z(`
    <div class="topbar">
      <h2>${t(e("docs.title"))}</h2>
    </div>
    <p class="page-hint">${t(r)}</p>
    ${m}
    ${p}
  `),J(),De("docs",u.docFilter,()=>_e().catch(g)),document.querySelector("[data-filter-apply]").onclick=()=>{u.docFilter.q=document.getElementById("df-q").value.trim(),u.docFilter.apiKeyId=document.getElementById("df-key").value,u.docFilter.storageType=document.getElementById("df-storage").value,u.docFilter.from=document.getElementById("df-from").value,u.docFilter.to=document.getElementById("df-to").value,u.docFilter.offset=0,_e().catch(g)},document.querySelector("[data-filter-reset]").onclick=()=>{u.docFilter={q:"",apiKeyId:"",storageType:"",from:"",to:"",limit:20,offset:0},_e().catch(g)},document.querySelectorAll("[data-doc]").forEach(d=>{d.onclick=()=>$a(d.dataset.doc)}),document.querySelectorAll("[data-dl]").forEach(d=>{d.onclick=()=>va(d.getAttribute("data-dl"),d.getAttribute("data-name")||"file")}),document.querySelectorAll("[data-del]").forEach(d=>{d.onclick=async()=>{await F({message:e("docs.confirmDel"),variant:"danger",confirmText:e("docs.delete")})&&(await $(`/documents/${d.dataset.del}`,{method:"DELETE"}),_e().catch(g))}})}async function Ya(a){const s=await fetch(`${Ct}/documents/${a}/download`,{headers:u.key?{Authorization:`Bearer ${u.key}`}:{}});if(!s.ok){const o=await s.text();let i=o;try{i=JSON.parse(o)?.error?.message||o}catch{}throw new Error(i||e("docs.downloadFail"))}const n=await s.blob();return URL.createObjectURL(n)}async function ba(a){if(a?.imageDataUrl)return{src:a.imageDataUrl,revoke:null};if(a?.isImage||je(a?.mimeType)){const s=await Ya(a.id);return{src:s,revoke:s}}return null}async function $a(a){const{data:s}=await $(`/documents/${a}`);let n,o=null;try{const l=await ba(s);l?(o=l.revoke,n=`<img class="preview doc-preview-img" src="${l.src}" alt="${t(s.originalName||"")}" />`):s.isBinary||s.content==null?n=`<div class="data-empty"><div class="data-empty-icon">⧉</div><strong>${t(e("docs.binaryPreview"))}</strong></div>`:n=`<div class="pre" id="doc-content">${t(s.content||e("chats.none"))}</div>`}catch{n=`<div class="data-empty"><div class="data-empty-icon">⧉</div><strong>${t(e("chats.previewFailed")||e("docs.binaryPreview"))}</strong></div>`}const i=`${ga(s.storageType)}${s.storagePath?` · ${s.storagePath}`:""}`;ft({title:e("docs.detail"),subtitle:`${t(s.originalName)} · ${t(s.mimeType)} · ${ye(s.sizeBytes)}<br/><span class="muted">${t(e("docs.storage"))}: ${t(i)}</span>`,size:"lg",bodyHtml:`
      <div class="block">
        <h4>${t(e("docs.preview"))}</h4>
        ${n}
      </div>`,footerHtml:`
      ${!s.imageDataUrl&&!(s.isImage||je(s.mimeType))&&s.content&&!s.isBinary?`<button type="button" class="btn secondary sm" id="doc-copy">${t(e("docs.copy"))}</button>`:""}
      <button type="button" class="btn sm" id="doc-download">${t(e("docs.download"))}</button>
      <button type="button" class="btn secondary sm" id="doc-close">${t(e("chats.close"))}</button>`});const r=()=>{if(o)try{URL.revokeObjectURL(o)}catch{}de()};document.getElementById("doc-close")?.addEventListener("click",r),document.getElementById("doc-download").onclick=()=>va(s.id,s.originalName),document.getElementById("doc-copy")?.addEventListener("click",async()=>{if(await Rt(s.content||"")){const c=document.getElementById("doc-copy");c&&(c.textContent=e("chat.copied"))}})}function Gt(a){if(!a)return"-";const s=`audit.actions.${String(a).replace(/\./g,"_")}`,n=e(s);return n===s?a:n}function Za(a){if(!a)return"";const s=`audit.resources.${String(a).replace(/\./g,"_")}`,n=e(s);return n===s?a:n}function es(a){if(!a)return"";try{const s=typeof a=="string"?JSON.parse(a):a;return!s||typeof s!="object"?String(a):Object.entries(s).map(([n,o])=>{const i={originalName:e("docs.file"),mimeType:e("docs.mime"),sizeBytes:e("docs.size"),storageType:e("audit.metaStorage"),asKeyId:e("audit.metaAsKey"),asKeyName:e("audit.metaAsKeyName"),model:e("chats.model"),stream:e("chats.stream")}[n]||n,r=typeof o=="object"?JSON.stringify(o):String(o??"");return`${i}: ${r}`}).join(" · ")}catch{return String(a)}}async function at(){await ht();const a=u.auditFilter,s=new URLSearchParams;if(s.set("limit",String(a.limit)),s.set("offset",String(a.offset)),a.q&&s.set("q",a.q),a.action&&s.set("action",a.action),a.apiKeyId&&s.set("apiKeyId",a.apiKeyId),a.from&&s.set("from",new Date(a.from).toISOString()),a.to){const d=new Date(a.to);d.setHours(23,59,59,999),s.set("to",d.toISOString())}const n=await $(`/audit-logs?${s}`),o=n.total??0,i=["","chat.create","document.upload","document.delete","document.download","api_key.create","api_key.update","api_key.delete","settings.update","playground.chat","ip.ban","ip.unban","ddos.policy_update","pm2.switch","system.update"],r=[`<option value="">${t(e("common.all"))}</option>`,...u.keys.map(d=>`<option value="${d.id}" ${a.apiKeyId===d.id?"selected":""}>${t(d.name)}</option>`)].join(""),l=i.map(d=>d?`<option value="${t(d)}" ${a.action===d?"selected":""}>${t(Gt(d))}</option>`:`<option value="">${t(e("common.all"))}</option>`).join(""),c=(n.data||[]).map(d=>`
    <tr>
      <td>${_(d.createdAt)}</td>
      <td title="${t(d.action||"")}"><span class="cell-primary">${t(Gt(d.action))}</span></td>
      <td>
        <div>${t(Za(d.resource))}</div>
        ${d.resourceId?`<div class="cell-sub audit-id" title="${t(d.resourceId)}">${t(d.resourceId)}</div>`:""}
      </td>
      <td>${t(d.apiKey?.name||"-")}</td>
      <td class="muted audit-meta">${t(es(d.metaJson))}</td>
    </tr>`).join(""),m=be({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:P("common.pagerTotal",{n:o}),searchHtml:`
      <div class="data-filter-search">
        <label for="af-q">${t(e("common.search"))}</label>
        <input type="search" id="af-q" value="${t(a.q)}" placeholder="${t(e("audit.searchPh"))}" />
      </div>`,gridHtml:`
      <label>${t(e("audit.action"))}
        <select id="af-action">${l}</select>
      </label>
      <label>${t(e("audit.key"))}
        <select id="af-key">${r}</select>
      </label>
      <label>${t(e("chats.from"))}<input type="date" id="af-from" value="${t(a.from)}" /></label>
      <label>${t(e("chats.to"))}<input type="date" id="af-to" value="${t(a.to)}" /></label>`}),p=se({headHtml:`
      <th>${t(e("audit.time"))}</th>
      <th>${t(e("audit.action"))}</th>
      <th>${t(e("audit.resource"))}</th>
      <th>${t(e("audit.key"))}</th>
      <th>${t(e("audit.meta"))}</th>`,bodyHtml:c,colSpan:5,emptyText:e("audit.empty"),pagerHtml:le({total:o,limit:a.limit,offset:a.offset,idPrefix:"audit"})});document.getElementById("app").innerHTML=z(`
    <div class="topbar">
      <h2>${t(e("audit.title"))}</h2>
    </div>
    ${m}
    ${p}
  `),J(),De("audit",u.auditFilter,()=>at().catch(g)),document.querySelector("[data-filter-apply]").onclick=()=>{u.auditFilter.q=document.getElementById("af-q").value.trim(),u.auditFilter.action=document.getElementById("af-action").value,u.auditFilter.apiKeyId=document.getElementById("af-key").value,u.auditFilter.from=document.getElementById("af-from").value,u.auditFilter.to=document.getElementById("af-to").value,u.auditFilter.offset=0,at().catch(g)},document.querySelector("[data-filter-reset]").onclick=()=>{u.auditFilter={q:"",action:"",apiKeyId:"",from:"",to:"",limit:50,offset:0},at().catch(g)}}function Pt(){return[{id:"local",titleKey:"settings.scLocalTitle",descKey:"settings.scLocalDesc",detailKey:"settings.scLocalDetail",values:{globalSafeMode:!1,safeToolsMode:"none",safeMaxTurns:16,safeTimeoutMs:18e4}},{id:"prod",titleKey:"settings.scProdTitle",descKey:"settings.scProdDesc",detailKey:"settings.scProdDetail",values:{globalSafeMode:!0,safeToolsMode:"none",safeMaxTurns:10,safeTimeoutMs:12e4}},{id:"code",titleKey:"settings.scCodeTitle",descKey:"settings.scCodeDesc",detailKey:"settings.scCodeDetail",values:{globalSafeMode:!1,safeToolsMode:"none",safeMaxTurns:20,safeTimeoutMs:3e5}},{id:"read",titleKey:"settings.scReadTitle",descKey:"settings.scReadDesc",detailKey:"settings.scReadDetail",values:{globalSafeMode:!0,safeToolsMode:"readonly",safeMaxTurns:12,safeTimeoutMs:15e4}},{id:"chat",titleKey:"settings.scChatTitle",descKey:"settings.scChatDesc",detailKey:"settings.scChatDetail",values:{globalSafeMode:!0,safeToolsMode:"none",safeMaxTurns:5,safeTimeoutMs:6e4}},{id:"long",titleKey:"settings.scLongTitle",descKey:"settings.scLongDesc",detailKey:"settings.scLongDetail",values:{globalSafeMode:!0,safeToolsMode:"none",safeMaxTurns:40,safeTimeoutMs:6e5}}]}function ts(){return{globalSafeMode:document.getElementById("s-master-global")?Ee("s-master-global"):!1,safeToolsMode:document.getElementById("s-tools")?.value||"none",safeMaxTurns:Number(document.getElementById("s-turns")?.value),safeTimeoutMs:Number(document.getElementById("s-timeout")?.value)}}function as(a){const s=ts();return!Number.isFinite(s.safeMaxTurns)||!Number.isFinite(s.safeTimeoutMs)?!1:s.globalSafeMode===!!a.globalSafeMode&&s.safeToolsMode===a.safeToolsMode&&s.safeMaxTurns===Number(a.safeMaxTurns)&&s.safeTimeoutMs===Number(a.safeTimeoutMs)}function Le(){for(const a of Pt()){const s=document.querySelector(`[data-preset="${a.id}"]`),n=document.querySelector(`[data-apply-preset="${a.id}"]`);if(!s||!n)continue;const o=as(a.values);s.classList.toggle("is-applied",o),n.textContent=e(o?"settings.guideActive":"settings.guideApply"),n.disabled=o,n.classList.toggle("is-applied",o),n.setAttribute("aria-pressed",o?"true":"false")}}function ss(a){const s=document.getElementById("s-tools"),n=document.getElementById("s-turns"),o=document.getElementById("s-timeout"),i=!!a.globalSafeMode;Ie("s-master-global",i,e("settings.masterOn"),e("settings.masterOff")),Te("settings-root",!i),qe("settings-disabled-banner",!i),s&&a.safeToolsMode&&(s.value=a.safeToolsMode),n&&a.safeMaxTurns!=null&&(n.value=String(a.safeMaxTurns)),o&&a.safeTimeoutMs!=null&&(o.value=String(a.safeTimeoutMs)),Le()}async function ns(a){if(a?.values&&await F({title:e(a.titleKey),message:P("settings.guideApplyConfirm",{name:e(a.titleKey)}),variant:"confirm",confirmText:e("settings.guideApply")})){ss(a.values);try{await $("/settings",{method:"PUT",body:JSON.stringify({globalSafeMode:!!a.values.globalSafeMode,safeToolsMode:a.values.safeToolsMode,safeMaxTurns:Number(a.values.safeMaxTurns),safeTimeoutMs:Number(a.values.safeTimeoutMs),defaultModel:document.getElementById("s-model")?.value?.trim()||""})}),Le();const s=document.querySelector("#flash-error");s&&(s.hidden=!1,s.classList.add("flash-ok"),s.textContent=e("settings.guideApplied"),setTimeout(()=>{s.textContent===e("settings.guideApplied")&&(s.hidden=!0,s.classList.remove("flash-ok"),s.textContent="")},2500))}catch(s){g(s)}}}async function ka(){const[{data:a},s]=await Promise.all([$("/settings"),rt()]),n=(s.models||u.models||[]).map(l=>`<option value="${t(l)}" ${a.defaultModel===l?"selected":""}>${t(l)}</option>`).join(""),o=Pt().map(l=>`
      <article class="settings-guide-card" data-preset="${t(l.id)}">
        <div class="settings-guide-card-h">
          <strong>${t(e(l.titleKey))}</strong>
          <button type="button" class="btn secondary sm" data-apply-preset="${t(l.id)}">${t(e("settings.guideApply"))}</button>
        </div>
        <p class="settings-guide-desc">${t(e(l.descKey))}</p>
        <p class="settings-guide-detail muted">${t(e(l.detailKey))}</p>
        <div class="settings-guide-chips">
          <span class="chip">${t(l.values.globalSafeMode?e("settings.chipGlobalOn"):e("settings.chipGlobalOff"))}</span>
          <span class="chip">${t(l.values.safeToolsMode)}</span>
          <span class="chip">turns ${l.values.safeMaxTurns}</span>
          <span class="chip">${Math.round(l.values.safeTimeoutMs/1e3)}s</span>
        </div>
      </article>`).join(""),i=!!a.globalSafeMode;document.getElementById("app").innerHTML=z(`
    <div id="settings-root" class="${i?"":"is-feature-off"}">
    <div class="topbar">
      <h2>${t(e("settings.title"))}</h2>
      <div class="toolbar">
        ${Nt({id:"s-master-global",on:i,onLabel:e("settings.masterOn"),offLabel:e("settings.masterOff"),title:e("settings.globalSafeHint")})}
        <button class="btn secondary sm" id="btn-refresh-models">${t(e("settings.refreshModels"))}</button>
      </div>
    </div>
    <div class="feature-off-banner" id="settings-disabled-banner" ${i?"hidden":""} role="status">
      <strong>${t(e("common.featureOff"))}</strong>
      <span>${t(e("settings.disabledBanner"))}</span>
    </div>
    <div class="panel">
      <div class="modal-b">
        <p class="page-hint">${t(e("settings.hint"))}</p>
        <p class="field-hint">${t(e("settings.globalSafeHint"))}</p>
        <div class="form-grid settings-safe-fields">
          <label>${t(e("settings.tools"))}
            <select id="s-tools">
              <option value="none">${t(e("settings.toolsNone"))}</option>
              <option value="readonly">${t(e("settings.toolsReadonly"))}</option>
            </select>
            <span class="hint">${t(e("settings.toolsHint"))}</span>
          </label>
          <label>${t(e("settings.maxTurns"))}
            <input id="s-turns" type="number" min="1" max="50" value="${a.safeMaxTurns}" />
            <span class="hint">${t(e("settings.maxTurnsHint"))}</span>
          </label>
          <label>${t(e("settings.timeout"))}
            <input id="s-timeout" type="number" min="1000" step="1000" value="${a.safeTimeoutMs}" />
            <span class="hint">${t(e("settings.timeoutHint"))}</span>
          </label>
          <label class="full">${t(e("settings.defaultModel"))}
            <select id="s-model">${n||`<option value="${t(a.defaultModel)}">${t(a.defaultModel)}</option>`}</select>
            <span class="hint">${t(e("settings.defaultModelHint"))} · ${t(e("settings.modelSource"))}${s.source?` · ${t(s.source)}`:""}</span>
          </label>
        </div>
        <div class="toolbar settings-save-bar">
          <button class="btn" id="s-save">${t(e("settings.save"))}</button>
        </div>
      </div>
    </div>
    <div class="panel settings-guide">
      <div class="panel-h">
        <strong>${t(e("settings.guideTitle"))}</strong>
      </div>
      <div class="modal-b">
        <p class="page-hint">${t(e("settings.guideIntro"))}</p>
        <div class="settings-guide-grid">${o}</div>
      </div>
    </div>
    <div class="danger-zone">
      <h3>${t(e("settings.dangerTitle"))}</h3>
      <p>${t(e("settings.panelOffHint"))}</p>
      <p class="muted">${t(e("settings.panelStatus"))}: <strong>${a.adminPanelEnabled?e("settings.panelOn"):e("settings.panelOff")}</strong></p>
      <button class="btn danger sm" id="s-disable-panel" ${a.adminPanelEnabled?"":"disabled"}>${t(e("settings.disablePanel"))}</button>
    </div>
    </div>
  `),J(),document.getElementById("s-tools").value=a.safeToolsMode||"none";const r=()=>Le();["s-tools","s-turns","s-timeout"].forEach(l=>{const c=document.getElementById(l);c&&(c.addEventListener("change",r),c.addEventListener("input",r))}),Le(),document.getElementById("s-master-global")?.addEventListener("click",async()=>{const l=!Ee("s-master-global");Ie("s-master-global",l,e("settings.masterOn"),e("settings.masterOff")),Te("settings-root",!l),qe("settings-disabled-banner",!l),Le();try{await $("/settings",{method:"PUT",body:JSON.stringify({globalSafeMode:l,safeToolsMode:document.getElementById("s-tools").value,safeMaxTurns:Number(document.getElementById("s-turns").value),safeTimeoutMs:Number(document.getElementById("s-timeout").value),defaultModel:document.getElementById("s-model").value.trim()})})}catch(c){Ie("s-master-global",!l,e("settings.masterOn"),e("settings.masterOff")),Te("settings-root",l),qe("settings-disabled-banner",l),g(c)}}),document.getElementById("btn-refresh-models").onclick=async()=>{await rt(!0),ka().catch(g)},document.getElementById("s-save").onclick=async()=>{try{await $("/settings",{method:"PUT",body:JSON.stringify({globalSafeMode:Ee("s-master-global"),safeToolsMode:document.getElementById("s-tools").value,safeMaxTurns:Number(document.getElementById("s-turns").value),safeTimeoutMs:Number(document.getElementById("s-timeout").value),defaultModel:document.getElementById("s-model").value.trim()})}),Le();const l=document.querySelector("#flash-error");l&&(l.hidden=!1,l.classList.add("flash-ok"),l.textContent=e("settings.saved"),setTimeout(()=>{l.hidden=!0,l.classList.remove("flash-ok"),l.textContent=""},2e3))}catch(l){g(l)}},document.querySelectorAll("[data-apply-preset]").forEach(l=>{l.addEventListener("click",async()=>{if(l.disabled)return;const c=l.getAttribute("data-apply-preset"),m=Pt().find(p=>p.id===c);m&&await ns(m)})}),document.getElementById("s-disable-panel").onclick=async()=>{if(await F({message:e("settings.disablePanelConfirm"),variant:"danger",confirmText:e("settings.disablePanel")}))try{await $("/settings",{method:"PUT",body:JSON.stringify({adminPanelEnabled:!1})}),await Y({message:e("settings.disablePanelDone"),title:e("common.notice")}),Lt(!1)}catch(l){g(l)}}}async function st(){const s=(await $("/api-features")).data||{},n=[{title:e("apiFeatures.groupProtocols"),keys:["openaiChat","openaiResponses","anthropicMessages"]},{title:e("apiFeatures.groupMedia"),keys:["imagesApi","filesOpenAiAlias","videoApi","audioApi"]},{title:e("apiFeatures.groupCaps"),keys:["tools","structuredOutput","vision","reasoningEffort","webSearch","subagents","planMode","memory","sessionResume","bestOfN","checkLoop","systemOverride","rules","permissionMode","sandbox"]},{title:e("apiFeatures.groupEmu"),keys:["usageEstimate","assistantsEmulation","strictSampling","forceDisableToolsInSafe"]}],o=l=>e(`apiFeatures.flag.${l}`)||l,i=l=>e(`apiFeatures.hint.${l}`)||"",r=n.map(l=>{const c=l.keys.map(m=>{const p=!!s[m];return`
          <div class="dash-prot-row api-feat-row" data-feat="${t(m)}">
            <div>
              <strong>${t(o(m))}</strong>
              <div class="muted" style="font-size:0.78rem;font-weight:500">${t(i(m))}</div>
            </div>
            <button type="button" class="master-toggle ${p?"is-on":"is-off"}" data-feat-toggle="${t(m)}" aria-pressed="${p?"true":"false"}">
              <span class="master-toggle-track" aria-hidden="true"><span class="master-toggle-knob"></span></span>
              <span class="master-toggle-label">${t(e(p?"dash.on":"dash.off"))}</span>
            </button>
          </div>`}).join("");return`
        <div class="panel dash-panel">
          <div class="panel-h"><strong>${t(l.title)}</strong></div>
          <div class="panel-pad">${c}</div>
        </div>`}).join("");document.getElementById("app").innerHTML=z(`
    <div class="topbar">
      <h2>${t(e("apiFeatures.title"))}</h2>
      <div class="toolbar">
        <button type="button" class="btn secondary sm" data-feat-preset="open">${t(e("apiFeatures.presetOpen"))}</button>
        <button type="button" class="btn secondary sm" data-feat-preset="locked">${t(e("apiFeatures.presetLocked"))}</button>
        <button type="button" class="btn secondary sm" data-feat-preset="dev">${t(e("apiFeatures.presetDev"))}</button>
        <button type="button" class="btn secondary sm" id="feat-refresh">${t(e("dash.refresh"))}</button>
      </div>
    </div>
    <p class="page-hint">${t(e("apiFeatures.intro"))}</p>
    <div class="dash-layout" style="grid-template-columns:1fr">
      <div class="dash-main">${r}</div>
    </div>
  `),J(),document.getElementById("feat-refresh")?.addEventListener("click",()=>st().catch(g)),document.querySelectorAll("[data-feat-toggle]").forEach(l=>{l.addEventListener("click",async()=>{const c=l.getAttribute("data-feat-toggle");if(!c)return;const m=!l.classList.contains("is-on");try{await $("/api-features",{method:"PUT",body:JSON.stringify({[c]:m})}),await st()}catch(p){g(p)}})}),document.querySelectorAll("[data-feat-preset]").forEach(l=>{l.addEventListener("click",async()=>{const c=l.getAttribute("data-feat-preset");if(await F({message:P("apiFeatures.presetConfirm",{name:c}),confirmText:e("common.confirm")}))try{await $("/api-features/preset",{method:"POST",body:JSON.stringify({name:c})}),await st()}catch(m){g(m)}})})}async function Ae(){u.mediaFilter||(u.mediaFilter={q:"",kind:"",provider:"",from:"",to:"",limit:20,offset:0});const a=u.mediaFilter,s=new URLSearchParams({limit:String(a.limit),offset:String(a.offset)});if(a.q&&s.set("q",a.q),a.kind&&s.set("kind",a.kind),a.provider&&s.set("provider",a.provider),a.from&&s.set("from",new Date(a.from).toISOString()),a.to){const h=new Date(a.to);h.setHours(23,59,59,999),s.set("to",h.toISOString())}const[n,o]=await Promise.all([$(`/media/assets?${s}`),$("/media/jobs?limit=30").catch(()=>({data:[],total:0}))]),i=n.data||[],r=n.total??i.length,l=o.data||[],c=i.map(h=>{const b=String(h.mime||"").startsWith("image/")?`<button type="button" class="btn ghost sm" data-media-preview="${t(h.id)}">${t(e("media.preview"))}</button>`:"";return`
    <tr>
      <td>
        <div class="cell-primary mono" title="${t(h.id)}">${t(String(h.id).slice(0,8))}…</div>
        <div class="cell-sub">${t(h.filename||h.source||"—")}</div>
      </td>
      <td>${t(h.kind||"—")}</td>
      <td class="muted">${t(h.mime||"—")}</td>
      <td>${ye(h.bytes)}</td>
      <td>${t(h.provider||"—")}</td>
      <td class="muted" title="${t(h.prompt||"")}">${t((h.prompt||"—").slice(0,48))}</td>
      <td>${_(h.created_at)}</td>
      <td><div class="row-actions">
        ${b}
        <button type="button" class="btn ghost sm" data-media-dl="${t(h.id)}">${t(e("media.download"))}</button>
        <button type="button" class="btn danger sm" data-media-del="${t(h.id)}">${t(e("media.delete"))}</button>
      </div></td>
    </tr>`}).join(""),m=be({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:P("common.pagerTotal",{n:r}),searchHtml:`
      <div class="data-filter-search">
        <label for="mf-q">${t(e("common.search"))}</label>
        <input type="search" id="mf-q" value="${t(a.q)}" placeholder="${t(e("media.searchPh"))}" />
      </div>`,gridHtml:`
      <label>${t(e("media.kind"))}
        <select id="mf-kind">
          <option value="">${t(e("media.allKinds"))}</option>
          <option value="image" ${a.kind==="image"?"selected":""}>image</option>
          <option value="video" ${a.kind==="video"?"selected":""}>video</option>
          <option value="audio" ${a.kind==="audio"?"selected":""}>audio</option>
        </select>
      </label>
      <label>${t(e("media.provider"))}
        <input type="text" id="mf-provider" value="${t(a.provider)}" placeholder="${t(e("media.providerPh"))}" />
      </label>
      <label>${t(e("media.from")||e("chats.from")||"From")}
        <input type="date" id="mf-from" value="${t(a.from)}" />
      </label>
      <label>${t(e("media.to")||e("chats.to")||"To")}
        <input type="date" id="mf-to" value="${t(a.to)}" />
      </label>`}),p=se({headHtml:`
      <th>ID</th>
      <th>${t(e("media.kind"))}</th>
      <th>MIME</th>
      <th>${t(e("media.bytes"))}</th>
      <th>${t(e("media.provider"))}</th>
      <th>${t(e("media.prompt"))}</th>
      <th>${t(e("media.created"))}</th>
      <th>${t(e("common.actions"))}</th>`,bodyHtml:c,colSpan:8,emptyText:e("media.empty"),pagerHtml:le({total:r,limit:a.limit,offset:a.offset,idPrefix:"media"})}),d=l.length?l.map(h=>`
    <tr>
      <td class="mono">${t(String(h.id).slice(0,8))}…</td>
      <td>${t(h.status||"")}</td>
      <td class="muted" title="${t(h.prompt||"")}">${t((h.prompt||"—").slice(0,48))}</td>
      <td class="mono">${t(h.result_asset_id?String(h.result_asset_id).slice(0,8)+"…":"—")}</td>
      <td>${_(h.created_at)}</td>
    </tr>`).join(""):"",y=se({headHtml:`
      <th>ID</th>
      <th>${t(e("media.status"))}</th>
      <th>${t(e("media.prompt"))}</th>
      <th>Asset</th>
      <th>${t(e("media.created"))}</th>`,bodyHtml:d,colSpan:5,emptyText:e("media.jobsEmpty")});document.getElementById("app").innerHTML=z(`
    <div class="topbar">
      <h2>${t(e("media.title"))}</h2>
      <div class="toolbar">
        <button type="button" class="btn secondary sm" id="media-refresh">${t(e("dash.refresh"))}</button>
      </div>
    </div>
    ${pa([e("media.intro"),P("common.pagerTotal",{n:r})])}
    ${m}
    <div class="panel-h" style="margin:0.5rem 0 0"><strong>${t(e("media.assets"))}</strong></div>
    ${p}
    <div class="panel-h" style="margin:1.25rem 0 0"><strong>${t(e("media.jobs"))}</strong></div>
    ${y}
    <div id="media-preview-box" class="panel" style="margin-top:1rem;display:none">
      <div class="panel-h"><strong>${t(e("media.preview"))}</strong></div>
      <div class="panel-pad" id="media-preview-pad"></div>
    </div>
  `),J(),De("media",u.mediaFilter,()=>Ae().catch(g)),document.getElementById("media-refresh")?.addEventListener("click",()=>Ae().catch(g)),document.querySelector("[data-filter-apply]")?.addEventListener("click",()=>{u.mediaFilter.q=document.getElementById("mf-q")?.value.trim()||"",u.mediaFilter.kind=document.getElementById("mf-kind")?.value||"",u.mediaFilter.provider=document.getElementById("mf-provider")?.value.trim()||"",u.mediaFilter.from=document.getElementById("mf-from")?.value||"",u.mediaFilter.to=document.getElementById("mf-to")?.value||"",u.mediaFilter.offset=0,Ae().catch(g)}),document.querySelector("[data-filter-reset]")?.addEventListener("click",()=>{u.mediaFilter={q:"",kind:"",provider:"",from:"",to:"",limit:20,offset:0},Ae().catch(g)});async function f(h){const v=await fetch(`/admin/api/media/assets/${h}/download`,{headers:{Authorization:`Bearer ${u.key}`}});if(!v.ok)throw new Error(await v.text());return v.blob()}document.querySelectorAll("[data-media-preview]").forEach(h=>{h.addEventListener("click",async()=>{try{const v=h.getAttribute("data-media-preview"),b=await f(v),x=URL.createObjectURL(b),H=document.getElementById("media-preview-box"),T=document.getElementById("media-preview-pad");H&&T&&(H.style.display="",T.innerHTML=`<img src="${x}" alt="preview" style="max-width:100%;max-height:420px;border-radius:8px" />`)}catch(v){g(v)}})}),document.querySelectorAll("[data-media-dl]").forEach(h=>{h.addEventListener("click",async()=>{try{const v=h.getAttribute("data-media-dl"),b=await f(v),x=document.createElement("a");x.href=URL.createObjectURL(b),x.download=`media-${v.slice(0,8)}`,x.click()}catch(v){g(v)}})}),document.querySelectorAll("[data-media-del]").forEach(h=>{h.addEventListener("click",async()=>{const v=h.getAttribute("data-media-del");if(await F({message:e("media.deleteConfirm"),variant:"danger",confirmText:e("media.delete")}))try{await $(`/media/assets/${v}`,{method:"DELETE"}),await Ae()}catch(b){g(b)}})})}async function X(){const{data:a}=await $("/usage"),s=a.totals||{},n=a.limits||{},o=u.usageFilter,i=o.pageSize||10;let r=a.byModel||[];if(o.modelQ.trim()){const E=o.modelQ.trim().toLowerCase();r=r.filter(C=>String(C.model||"").toLowerCase().includes(E))}const l=r.length,m=r.slice(o.modelPage*i,o.modelPage*i+i).map(E=>`<tr><td class="cell-primary">${t(E.model)}</td><td>${E.requests}</td></tr>`).join("");let p=a.perKey||[];if(o.keyQ.trim()){const E=o.keyQ.trim().toLowerCase();p=p.filter(C=>String(C.name||"").toLowerCase().includes(E)||String(C.keyPrefix||"").toLowerCase().includes(E))}o.keyActive==="true"&&(p=p.filter(E=>E.isActive)),o.keyActive==="false"&&(p=p.filter(E=>!E.isActive));const d=p.length,f=p.slice(o.keyPage*i,o.keyPage*i+i).map(E=>{const C=Math.round((E.utilization||0)*100);return`<tr>
        <td><div class="cell-primary">${t(E.name)}</div><div class="cell-sub">${t(E.keyPrefix)}</div></td>
        <td>${E.requests}</td>
        <td>${ca(E.rateLimit)}</td>
        <td>
          <div>${P("common.percent",{n:C})}</div>
          <div class="usage-bar ${C>80?"warn":""}"><span style="width:${C}%"></span></div>
        </td>
        <td>${E.isActive?`<span class="badge success">${t(e("common.active"))}</span>`:`<span class="badge error">${t(e("common.revoked"))}</span>`}</td>
      </tr>`}).join(""),h=le({total:l,limit:i,offset:o.modelPage*i,idPrefix:"umodel"}),v=le({total:d,limit:i,offset:o.keyPage*i,idPrefix:"ukey"}),b=o.tab==="key"?"key":"model",x=be({title:e("usage.byModel"),hint:e("common.filterHint"),searchHtml:`<div class="data-filter-search"><label>${t(e("common.search"))}<input type="search" id="uf-model" value="${t(o.modelQ)}" placeholder="${t(e("chats.model"))}" /></label></div>`,gridHtml:""}),H=se({headHtml:`<th>${t(e("chats.model"))}</th><th>${t(e("usage.requests"))}</th>`,bodyHtml:m,colSpan:2,emptyText:e("common.empty"),pagerHtml:h}),T=be({title:e("usage.byKey"),hint:e("common.filterHint"),searchHtml:`<div class="data-filter-search"><label>${t(e("common.search"))}<input type="search" id="uf-key" value="${t(o.keyQ)}" placeholder="${t(e("keys.name"))}" /></label></div>`,gridHtml:`<label>${t(e("keys.status"))}
      <select id="uf-active">
        <option value="">${t(e("common.all"))}</option>
        <option value="true" ${o.keyActive==="true"?"selected":""}>${t(e("common.active"))}</option>
        <option value="false" ${o.keyActive==="false"?"selected":""}>${t(e("common.revoked"))}</option>
      </select>
    </label>`}),R=se({headHtml:`
      <th>${t(e("keys.name"))}</th>
      <th>${t(e("usage.requests"))}</th>
      <th>${t(e("usage.rateLimit"))}</th>
      <th>${t(e("usage.util"))}</th>
      <th>${t(e("keys.status"))}</th>`,bodyHtml:f,colSpan:5,emptyText:e("common.empty"),pagerHtml:v});document.getElementById("app").innerHTML=z(`
    <div class="topbar">
      <h2>${t(e("usage.title"))}</h2>
      <button class="btn secondary sm" id="btn-usage-refresh">${t(e("usage.refresh"))}</button>
    </div>
    <p class="page-hint">${t(e("usage.window"))}: ${_(a.from)} → ${_(a.to)} (${P("common.minutes",{n:a.windowMinutes})})</p>
    <div class="grid">
      <div class="card"><div class="label">${t(e("usage.requests"))}</div><div class="value">${s.requests??0}</div></div>
      <div class="card"><div class="label">${t(e("usage.success"))}</div><div class="value">${s.success??0}</div></div>
      <div class="card"><div class="label">${t(e("usage.errors"))}</div><div class="value">${s.errors??0}</div></div>
      <div class="card"><div class="label">${t(e("usage.errorRate"))}</div><div class="value">${Math.round((s.errorRate||0)*100)}%</div></div>
    </div>
    <div class="panel data-table-panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${t(e("usage.limits"))}</strong></div>
      <div class="panel-pad">
        <div class="grid">
          <div class="card"><div class="label">${t(e("usage.global"))}</div><div class="value value-sm">${n.globalMax} / ${n.globalWindowMs}ms</div></div>
          <div class="card"><div class="label">${t(e("usage.ipMax"))}</div><div class="value value-sm">${n.ipMax}</div></div>
          <div class="card"><div class="label">${t(e("usage.burst"))}</div><div class="value value-sm">${n.chatBurstMax}</div></div>
          <div class="card"><div class="label">${t(e("usage.block"))}</div><div class="value value-sm">${n.blockFailedAuthThreshold}</div></div>
          <div class="card"><div class="label">${t(e("usage.concurrent"))}</div><div class="value value-sm">${n.grokMaxConcurrent}</div></div>
        </div>
      </div>
    </div>

    <div class="usage-tabs-panel panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("usage.title"))}">
        <button type="button" role="tab" class="seg-tab ${b==="model"?"is-active":""}" data-usage-tab="model" aria-selected="${b==="model"}">
          ${t(e("usage.byModel"))}
          <span class="seg-tab-count">${l}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${b==="key"?"is-active":""}" data-usage-tab="key" aria-selected="${b==="key"}">
          ${t(e("usage.byKey"))}
          <span class="seg-tab-count">${d}</span>
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane" id="usage-tab-model" ${b==="model"?"":"hidden"}>
          ${x}
          ${H}
        </div>
        <div class="usage-tab-pane" id="usage-tab-key" ${b==="key"?"":"hidden"}>
          ${T}
          ${R}
        </div>
      </div>
    </div>
  `),J(),document.getElementById("btn-usage-refresh").onclick=()=>X().catch(g),document.querySelectorAll("[data-usage-tab]").forEach(E=>{E.onclick=()=>{const C=E.dataset.usageTab==="key"?"key":"model";u.usageFilter.tab!==C&&(u.usageFilter.tab=C,X().catch(g))}}),document.getElementById("umodel-prev")?.addEventListener("click",()=>{u.usageFilter.modelPage=Math.max(0,o.modelPage-1),X().catch(g)}),document.getElementById("umodel-next")?.addEventListener("click",()=>{(o.modelPage+1)*i<l&&(u.usageFilter.modelPage+=1,X().catch(g))}),document.getElementById("umodel-limit")?.addEventListener("change",E=>{u.usageFilter.pageSize=Number(E.target.value)||10,u.usageFilter.modelPage=0,X().catch(g)}),document.getElementById("ukey-prev")?.addEventListener("click",()=>{u.usageFilter.keyPage=Math.max(0,o.keyPage-1),X().catch(g)}),document.getElementById("ukey-next")?.addEventListener("click",()=>{(o.keyPage+1)*i<d&&(u.usageFilter.keyPage+=1,X().catch(g))}),document.getElementById("ukey-limit")?.addEventListener("change",E=>{u.usageFilter.pageSize=Number(E.target.value)||10,u.usageFilter.keyPage=0,X().catch(g)}),document.querySelectorAll("#usage-tab-model [data-filter-apply]").forEach(E=>{E.onclick=()=>{u.usageFilter.modelQ=document.getElementById("uf-model")?.value?.trim()||"",u.usageFilter.modelPage=0,X().catch(g)}}),document.querySelectorAll("#usage-tab-model [data-filter-reset]").forEach(E=>{E.onclick=()=>{u.usageFilter.modelQ="",u.usageFilter.modelPage=0,X().catch(g)}}),document.querySelectorAll("#usage-tab-key [data-filter-apply]").forEach(E=>{E.onclick=()=>{u.usageFilter.keyQ=document.getElementById("uf-key")?.value?.trim()||"",u.usageFilter.keyActive=document.getElementById("uf-active")?.value||"",u.usageFilter.keyPage=0,X().catch(g)}}),document.querySelectorAll("#usage-tab-key [data-filter-reset]").forEach(E=>{E.onclick=()=>{u.usageFilter.keyQ="",u.usageFilter.keyActive="",u.usageFilter.keyPage=0,X().catch(g)}})}function zt(a){const s=a.versionStatus||(a.updateAvailable?"update_available":a.latest?"up_to_date":"unknown");return s==="update_available"?{badge:`<span class="badge warn" title="${t(e("system.statusHintUpdate"))}">${t(e("system.badgeUpdate"))}</span>`,hint:e("system.statusHintUpdate")}:s==="ahead"?{badge:`<span class="badge pending" title="${t(e("system.statusHintAhead"))}">${t(e("system.badgeAhead"))}</span>`,hint:e("system.statusHintAhead")}:s==="up_to_date"?{badge:`<span class="badge success" title="${t(e("system.statusHintOk"))}">${t(e("system.badgeOk"))}</span>`,hint:e("system.statusHintOk")}:{badge:`<span class="badge pending" title="${t(e("system.statusHintUnknown"))}">${t(e("system.badgeUnknown"))}</span>`,hint:e("system.statusHintUnknown")}}function os(a){return e(a==="git"?"system.channelGit":a==="npm-global"?"system.channelNpmGlobal":a==="npm-local"?"system.channelNpmLocal":"system.channelUnknown")}function is(a){return a==="required"?e("system.levelRequired"):a==="recommended"?e("system.levelRecommended"):a==="optional"?e("system.levelOptional"):a==="bundled"?e("system.levelBundled"):a||"—"}function ls(a){return a.installed?a.ok?`<span class="badge success">${t(e("system.softOk"))}</span>`:`<span class="badge warn">${t(e("system.softWarn"))}</span>`:a.level==="required"||a.level==="bundled"?`<span class="badge error">${t(e("system.softMissing"))}</span>`:`<span class="badge pending">${t(e("system.softMissing"))}</span>`}function Jt(a){return a==="up"?`<span class="badge success">${t(e("system.up"))}</span>`:`<span class="badge error">${t(e("system.down"))}</span>`}async function wa(){const{data:a}=await $("/system"),s=a.version||{},n=zt(s),o=a.software||{checks:[],allRequiredOk:!0},r=(o.checks||[]).map(y=>`
      <tr>
        <td><div class="cell-primary">${t(y.name||y.id)}</div>${y.requiredVersion?`<div class="cell-sub">${t(y.requiredVersion)}</div>`:""}</td>
        <td>${t(is(y.level))}</td>
        <td>${t(y.installed?e("system.yes"):e("system.no"))}${y.path?`<div class="cell-sub soft-path">${t(y.path)}</div>`:""}</td>
        <td><code class="cell-code">${t(y.version||"—")}</code></td>
        <td>${ls(y)}</td>
        <td class="muted">${t(y.detail||"")}</td>
      </tr>`).join(""),l=o.allRequiredOk?`<span class="badge success">${t(e("system.allRequiredOk"))}</span>`:`<span class="badge error">${t(e("system.requiredMissing"))}</span>`,c=a.encryption&&a.encryption.ready,m=os(s.channel),p=s.installSource?`${m} · ${s.installSource}`:m,d=se({headHtml:`
      <th>${t(e("system.softName"))}</th>
      <th>${t(e("system.softLevel"))}</th>
      <th>${t(e("system.softInstalled"))}</th>
      <th>${t(e("system.softVersion"))}</th>
      <th>${t(e("system.softStatus"))}</th>
      <th>${t(e("system.softDetail"))}</th>`,bodyHtml:r,colSpan:6,emptyText:e("common.empty")});document.getElementById("app").innerHTML=z(`
    <div class="topbar">
      <h2>${t(e("system.title"))}</h2>
      <div class="toolbar">
        <button class="btn secondary sm" id="btn-check-update" title="${t(e("system.selfHint"))}">${t(e("system.checkUpdate"))}</button>
        <button class="btn sm" id="btn-one-click-update" title="${t(e("system.confirmUpdate"))}">${t(e("system.oneClick"))}</button>
      </div>
    </div>
    <p class="page-hint">${t(e("system.selfHint"))}</p>

    <div class="panel data-table-panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${t(e("system.runtime"))}</strong></div>
      <div class="panel-pad">
        <div class="grid">
          <div class="card"><div class="label">${t(e("system.database"))}</div><div class="value value-sm">${Jt(a.database)}</div></div>
          <div class="card"><div class="label">${t(e("system.grokCli"))}</div><div class="value value-sm">${Jt(a.grokCli)}</div></div>
          <div class="card"><div class="label">${t(e("system.concurrency"))}</div><div class="value value-sm">${a.concurrency.active}/${a.concurrency.max}</div></div>
          <div class="card"><div class="label">${t(e("system.encryption"))}</div><div class="value value-sm">${c?`<span class="badge success">${t(e("system.ready"))}</span>`:`<span class="badge error">${t(e("system.notReady"))}</span>`}</div></div>
        </div>
      </div>
    </div>

    <div class="panel-section-head">
      <div>
        <strong>${t(e("system.software"))}</strong>
        <span class="muted">${t(e("system.softwareHint"))}</span>
      </div>
      ${l}
    </div>
    ${d}

    <div class="panel data-table-panel" style="margin-bottom:14px">
      <div class="panel-h">
        <strong>${t(e("system.selfUpdate"))}</strong>
        ${n.badge}
      </div>
      <div class="panel-pad">
        <p class="muted" style="margin:0 0 12px">${t(n.hint)}</p>
        <div class="grid">
          <div class="card"><div class="label">${t(e("system.current"))}</div><div class="value value-sm">${t(s.current||"-")} ${n.badge}</div></div>
          <div class="card"><div class="label">${t(e("system.npm"))}</div><div class="value value-sm">${t(s.latestNpm||"n/a")}</div></div>
          <div class="card"><div class="label">${t(e("system.github"))}</div><div class="value value-sm">${t(s.latestGithub||"n/a")}</div></div>
          <div class="card"><div class="label">${t(e("system.install"))}</div><div class="value value-sm">${t(p)}</div></div>
        </div>
        <pre id="update-log" class="pre" style="display:none;margin-top:12px"></pre>
      </div>
    </div>

    <div class="panel data-table-panel">
      <div class="panel-h"><strong>${t(e("system.envTitle"))}</strong></div>
      <div class="panel-pad"><pre class="pre">${t(JSON.stringify({env:a.env,version:s},null,2))}</pre></div>
    </div>
  `),J(),document.getElementById("btn-check-update").onclick=async()=>{try{const f=(await $("/system/update-check")).data||{},h=zt(f);await Y({title:e("system.checkResult"),message:`${e("system.current")}: ${f.current||"?"}
${e("system.npm")}: ${f.latestNpm||"n/a"}
${e("system.github")}: ${f.latestGithub||"n/a"}
${h.hint}`}),wa().catch(g)}catch(y){g(y)}},document.getElementById("btn-one-click-update").onclick=async()=>{if(!await F({message:e("system.confirmUpdate"),variant:"danger",confirmText:e("system.oneClick")}))return;const y=document.getElementById("update-log");try{const f=document.getElementById("btn-one-click-update");f&&(f.disabled=!0);const h=await $("/system/update",{method:"POST",body:JSON.stringify({restart:!0})});y&&(y.style.display="block",y.textContent=h.data&&(h.data.message||JSON.stringify(h.data,null,2))||e("system.scheduled")),await Y(h.data&&h.data.message||e("system.scheduled"))}catch(f){g(f)}}}function xt(a){if(!a)return"—";const s=`ddos.sources.${a}`,n=e(s);return n===s?a:n}function oe(a){return Math.max(1,Math.round(Number(a||0)/1e3))}function ae(a){return Math.max(1,Math.round(Number(a||0)/6e4))}function Fe(a){return Math.max(1e3,Math.round(Number(a||0)*1e3))}function Ne(a){return Math.max(1e3,Math.round(Number(a||0)*6e4))}function O(a,s){const n=Number(document.getElementById(a)?.value);return Number.isFinite(n)?n:s}function Be(a){return document.getElementById(a)?.checked===!0}function Mt(){const a=(document.getElementById("dp-whitelist")?.value||"").split(/[\n,]+/).map(o=>o.trim()).filter(Boolean),s=(document.getElementById("dp-trustedProxies")?.value||"").split(/[\n,]+/).map(o=>o.trim()).filter(Boolean);return{autoBanEnabled:document.getElementById("ddos-master-autoban")?Ee("ddos-master-autoban"):Be("dp-autoBanEnabled")||document.getElementById("dp-autoBanEnabled")?.value==="1",rateLimitWindowMs:Fe(O("dp-rateWindowSec",60)),rateLimitMax:Math.floor(O("dp-rateMaxKey",120)),rateLimitIpMax:Math.floor(O("dp-rateMaxIp",60)),chatBurstWindowMs:Fe(O("dp-burstWindowSec",10)),chatBurstMax:Math.floor(O("dp-burstMax",20)),autoAuthEnabled:Be("dp-autoAuthEnabled"),failedAuthThreshold:Math.floor(O("dp-authThreshold",20)),failedAuthWindowMs:Fe(O("dp-authWindowSec",300)),authBanDurationMs:Ne(O("dp-authBanMin",10)),autoRateEnabled:Be("dp-autoRateEnabled"),rateHitThreshold:Math.floor(O("dp-rateHitThreshold",30)),rateHitWindowMs:Fe(O("dp-rateHitWindowSec",60)),rateBanDurationMs:Ne(O("dp-rateBanMin",15)),autoConnEnabled:Be("dp-autoConnEnabled"),maxConcurrentPerIp:Math.floor(O("dp-maxConcurrent",20)),connBanDurationMs:Ne(O("dp-connBanMin",10)),autoVelocityEnabled:Be("dp-autoVelocityEnabled"),velocityMaxRequests:Math.floor(O("dp-velocityMax",200)),velocityWindowMs:Fe(O("dp-velocityWindowSec",60)),velocityBanDurationMs:Ne(O("dp-velocityBanMin",10)),escalateEnabled:Be("dp-escalateEnabled"),escalateAfterBans:Math.floor(O("dp-escalateAfter",3)),escalateDurationMs:Ne(O("dp-escalateMin",1440)),whitelist:a,proxyTrustHops:Math.max(0,Math.min(10,Math.floor(O("dp-proxyTrustHops",1)))),proxyIpSource:document.getElementById("dp-proxyIpSource")?.value||"auto",trustedProxies:s.length?s:["127.0.0.1","::1"]}}const rs=["autoBanEnabled","rateLimitWindowMs","rateLimitMax","rateLimitIpMax","chatBurstWindowMs","chatBurstMax","autoAuthEnabled","failedAuthThreshold","failedAuthWindowMs","authBanDurationMs","autoRateEnabled","rateHitThreshold","rateHitWindowMs","rateBanDurationMs","autoConnEnabled","maxConcurrentPerIp","connBanDurationMs","autoVelocityEnabled","velocityMaxRequests","velocityWindowMs","velocityBanDurationMs","escalateEnabled","escalateAfterBans","escalateDurationMs"];function Vt(a){if(!a)return{};const s={};for(const n of rs){const o=a[n];typeof o=="boolean"?s[n]=o:typeof o=="number"&&Number.isFinite(o)?s[n]=Math.round(o):o==null?s[n]=null:s[n]=o}return s}function Sa(a,s){return JSON.stringify(Vt(a))===JSON.stringify(Vt(s))}function Et(a){const s=u._ddosPresetsCache;if(!s||!a)return"custom";for(const n of["relaxed","balanced","strict"])if(s[n]&&Sa(a,s[n]))return n;return"custom"}function nt(a){return e(a==="relaxed"?"ddos.presetRelaxed":a==="balanced"?"ddos.presetBalanced":a==="strict"?"ddos.presetStrict":"ddos.presetCustom")}function Pa(a,{unsaved:s=!1}={}){const n=nt(a),o=a==="relaxed"?"relaxed":a==="balanced"?"balanced":a==="strict"?"strict":"custom",i=s?P("ddos.presetFormLabel",{name:n}):P("ddos.presetActiveLabel",{name:n});return`<span class="ddos-preset-badge is-${o}" id="ddos-preset-badge" title="${t(i)}">${t(i)}</span>`}function ue(){if(!document.getElementById("ddos-policy-panel"))return;let a;try{a=Mt()}catch{return}const s=Et(a),n=Et(u._ddosPolicyCache||a),o=!Sa(a,u._ddosPolicyCache||a);document.querySelectorAll("[data-ddos-preset]").forEach(c=>{const m=c.dataset.ddosPreset,p=m===s,d=m===n;c.classList.toggle("is-active",p),c.classList.toggle("is-saved",d&&!p),c.setAttribute("aria-pressed",p?"true":"false");const y=e(m==="relaxed"?"ddos.presetRelaxed":m==="balanced"?"ddos.presetBalanced":"ddos.presetStrict");p&&d?c.innerHTML=`${t(y)} <span class="preset-tag">${t(e("ddos.presetTagActive"))}</span>`:p&&o?c.innerHTML=`${t(y)} <span class="preset-tag preset-tag--draft">${t(e("ddos.presetTagDraft"))}</span>`:d?c.innerHTML=`${t(y)} <span class="preset-tag preset-tag--saved">${t(e("ddos.presetTagSaved"))}</span>`:c.textContent=y});const i=document.getElementById("ddos-preset-badge");if(i){const c=Pa(s,{unsaved:o&&s!==n});i.outerHTML=c}const r=document.getElementById("ddos-preset-custom");r&&(r.classList.toggle("is-active",s==="custom"),r.setAttribute("aria-pressed",s==="custom"?"true":"false"));const l=document.getElementById("ddos-preset-hint");l&&(o&&s!==n?(l.textContent=P("ddos.presetUnsavedHint",{form:nt(s),saved:nt(n)}),l.hidden=!1):s==="custom"?(l.textContent=e("ddos.presetCustomHint"),l.hidden=!1):(l.textContent=P("ddos.presetActiveHint",{name:nt(s)}),l.hidden=!1))}function vt(a){if(!a||!document.getElementById("dp-autoBanEnabled"))return;const s=(o,i)=>{const r=document.getElementById(o);r&&(r.type==="checkbox"?r.checked=!!i:r.value=i)},n=document.getElementById("dp-autoBanEnabled");n&&(n.type==="checkbox"?n.checked=!!a.autoBanEnabled:n.value=a.autoBanEnabled?"1":"0"),Ie("ddos-master-autoban",!!a.autoBanEnabled,e("ddos.masterOn"),e("ddos.masterOff")),Te("ddos-root",!a.autoBanEnabled),qe("ddos-disabled-banner",!a.autoBanEnabled),s("dp-rateWindowSec",oe(a.rateLimitWindowMs)),s("dp-rateMaxKey",a.rateLimitMax),s("dp-rateMaxIp",a.rateLimitIpMax),s("dp-burstWindowSec",oe(a.chatBurstWindowMs)),s("dp-burstMax",a.chatBurstMax),s("dp-autoAuthEnabled",a.autoAuthEnabled),s("dp-authThreshold",a.failedAuthThreshold),s("dp-authWindowSec",oe(a.failedAuthWindowMs)),s("dp-authBanMin",ae(a.authBanDurationMs)),s("dp-autoRateEnabled",a.autoRateEnabled),s("dp-rateHitThreshold",a.rateHitThreshold),s("dp-rateHitWindowSec",oe(a.rateHitWindowMs)),s("dp-rateBanMin",ae(a.rateBanDurationMs)),s("dp-autoConnEnabled",a.autoConnEnabled),s("dp-maxConcurrent",a.maxConcurrentPerIp),s("dp-connBanMin",ae(a.connBanDurationMs)),s("dp-autoVelocityEnabled",a.autoVelocityEnabled),s("dp-velocityMax",a.velocityMaxRequests),s("dp-velocityWindowSec",oe(a.velocityWindowMs)),s("dp-velocityBanMin",ae(a.velocityBanDurationMs)),s("dp-escalateEnabled",a.escalateEnabled),s("dp-escalateAfter",a.escalateAfterBans),s("dp-escalateMin",ae(a.escalateDurationMs)),s("dp-whitelist",(a.whitelist||[]).join(`
`)),s("dp-proxyTrustHops",a.proxyTrustHops??1),s("dp-proxyIpSource",a.proxyIpSource||"auto"),s("dp-trustedProxies",(a.trustedProxies&&a.trustedProxies.length?a.trustedProxies:["127.0.0.1","::1"]).join(`
`)),_t(a.autoBanEnabled),ue()}function _t(a){const s=document.getElementById("ddos-auto-badge");s&&(s.className=`badge ${a?"success":"pending"}`,s.textContent=e(a?"ddos.autoOn":"ddos.autoOff"))}function ds(a){const s=(r,l)=>`<label class="data-filter-check policy-enable"><input type="checkbox" id="${r}" ${l?"checked":""} /> <span>${t(e("ddos.enableRule"))}</span></label>`,n=(r,l,c,m="1")=>`<label>${t(r)}<input type="number" id="${l}" value="${t(String(c))}" min="1" step="${m}" /></label>`,o=Et(a),i=Pa(o);return`
    <div class="panel data-table-panel ddos-policy-panel" id="ddos-policy-panel">
      <div class="panel-h">
        <div>
          <strong>${t(e("ddos.policyTitle"))}</strong>
          <span class="muted">${t(e("ddos.policyHint"))}</span>
        </div>
        <div class="ddos-header-badges">
          ${i}
          <span class="badge ${a.autoBanEnabled?"success":"pending"}" id="ddos-auto-badge">${t(a.autoBanEnabled?e("ddos.autoOn"):e("ddos.autoOff"))}</span>
        </div>
      </div>
      <div class="panel-pad">
        <div class="ddos-preset-block">
          <div class="ddos-preset-block-h">
            <strong>${t(e("ddos.presetTitle"))}</strong>
            <span class="muted">${t(e("ddos.presetHint"))}</span>
          </div>
          <div class="ddos-presets" role="group" aria-label="${t(e("ddos.presetTitle"))}">
            <button type="button" class="ddos-preset-btn" data-ddos-preset="relaxed" aria-pressed="false">${t(e("ddos.presetRelaxed"))}</button>
            <button type="button" class="ddos-preset-btn" data-ddos-preset="balanced" aria-pressed="false">${t(e("ddos.presetBalanced"))}</button>
            <button type="button" class="ddos-preset-btn" data-ddos-preset="strict" aria-pressed="false">${t(e("ddos.presetStrict"))}</button>
            <button type="button" class="ddos-preset-btn ddos-preset-btn--custom" id="ddos-preset-custom" disabled aria-pressed="false">${t(e("ddos.presetCustom"))}</button>
          </div>
          <p class="ddos-preset-hint" id="ddos-preset-hint"></p>
        </div>
        <p class="muted policy-master-hint">${t(e("ddos.autoBanMasterHint"))}</p>
        <input type="hidden" id="dp-autoBanEnabled" value="${a.autoBanEnabled?"1":"0"}" />

        <div class="policy-section">
          <h4>${t(e("ddos.sectionProxy"))}</h4>
          <p class="muted" style="margin:0 0 10px">${t(e("ddos.proxyHint"))}</p>
          <div class="form-grid">
            <label>${t(e("ddos.proxyTrustHops"))}
              <input type="number" id="dp-proxyTrustHops" value="${t(String(a.proxyTrustHops??1))}" min="0" max="10" step="1" />
              <span class="field-hint">${t(e("ddos.proxyTrustHopsHint"))}</span>
            </label>
            <label>${t(e("ddos.proxyIpSource"))}
              <select id="dp-proxyIpSource">
                <option value="auto" ${(a.proxyIpSource||"auto")==="auto"?"selected":""}>${t(e("ddos.proxySrcAuto"))}</option>
                <option value="cloudflare" ${a.proxyIpSource==="cloudflare"?"selected":""}>${t(e("ddos.proxySrcCf"))}</option>
                <option value="nginx" ${a.proxyIpSource==="nginx"?"selected":""}>${t(e("ddos.proxySrcNginx"))}</option>
                <option value="x-forwarded-for" ${a.proxyIpSource==="x-forwarded-for"?"selected":""}>${t(e("ddos.proxySrcXff"))}</option>
                <option value="socket" ${a.proxyIpSource==="socket"?"selected":""}>${t(e("ddos.proxySrcSocket"))}</option>
              </select>
              <span class="field-hint">${t(e("ddos.proxyIpSourceHint"))}</span>
            </label>
            <label class="full">${t(e("ddos.trustedProxies"))}
              <textarea id="dp-trustedProxies" rows="3" class="policy-whitelist">${t((a.trustedProxies&&a.trustedProxies.length?a.trustedProxies:["127.0.0.1","::1"]).join(`
`))}</textarea>
              <span class="field-hint">${t(e("ddos.trustedProxiesHint"))}</span>
            </label>
          </div>
        </div>

        <div class="policy-section">
          <h4>${t(e("ddos.sectionLimits"))}</h4>
          <div class="form-grid">
            ${n(e("ddos.rateWindow"),"dp-rateWindowSec",oe(a.rateLimitWindowMs))}
            ${n(e("ddos.rateMaxKey"),"dp-rateMaxKey",a.rateLimitMax)}
            ${n(e("ddos.rateMaxIp"),"dp-rateMaxIp",a.rateLimitIpMax)}
            ${n(e("ddos.burstWindow"),"dp-burstWindowSec",oe(a.chatBurstWindowMs))}
            ${n(e("ddos.burstMax"),"dp-burstMax",a.chatBurstMax)}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionAuth"))}</h4>${s("dp-autoAuthEnabled",a.autoAuthEnabled)}</div>
          <div class="form-grid">
            ${n(e("ddos.threshold"),"dp-authThreshold",a.failedAuthThreshold)}
            ${n(e("ddos.windowSec"),"dp-authWindowSec",oe(a.failedAuthWindowMs))}
            ${n(e("ddos.banMin"),"dp-authBanMin",ae(a.authBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionRate"))}</h4>${s("dp-autoRateEnabled",a.autoRateEnabled)}</div>
          <div class="form-grid">
            ${n(e("ddos.threshold"),"dp-rateHitThreshold",a.rateHitThreshold)}
            ${n(e("ddos.windowSec"),"dp-rateHitWindowSec",oe(a.rateHitWindowMs))}
            ${n(e("ddos.banMin"),"dp-rateBanMin",ae(a.rateBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionConn"))}</h4>${s("dp-autoConnEnabled",a.autoConnEnabled)}</div>
          <div class="form-grid">
            ${n(e("ddos.maxConcurrent"),"dp-maxConcurrent",a.maxConcurrentPerIp)}
            ${n(e("ddos.banMin"),"dp-connBanMin",ae(a.connBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionVelocity"))}</h4>${s("dp-autoVelocityEnabled",a.autoVelocityEnabled)}</div>
          <div class="form-grid">
            ${n(e("ddos.velocityMax"),"dp-velocityMax",a.velocityMaxRequests)}
            ${n(e("ddos.windowSec"),"dp-velocityWindowSec",oe(a.velocityWindowMs))}
            ${n(e("ddos.banMin"),"dp-velocityBanMin",ae(a.velocityBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionEscalate"))}</h4>${s("dp-escalateEnabled",a.escalateEnabled)}</div>
          <div class="form-grid">
            ${n(e("ddos.escalateAfter"),"dp-escalateAfter",a.escalateAfterBans)}
            ${n(e("ddos.escalateMin"),"dp-escalateMin",ae(a.escalateDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <h4>${t(e("ddos.sectionWhitelist"))}</h4>
          <p class="muted" style="margin:0 0 8px">${t(e("ddos.whitelistHint"))}</p>
          <textarea id="dp-whitelist" rows="4" class="policy-whitelist">${t((a.whitelist||[]).join(`
`))}</textarea>
        </div>

        <div class="ddos-policy-actions">
          <button type="button" class="btn secondary sm" id="dp-reset">${t(e("ddos.resetPolicy"))}</button>
          <button type="button" class="btn sm" id="dp-save">${t(e("ddos.savePolicy"))}</button>
        </div>
      </div>
    </div>`}function cs(a){return a?.length?a.map(s=>`
    <tr>
      <td>${_(s.at)}</td>
      <td class="cell-primary">${t(s.ip)}</td>
      <td><span class="badge ${s.escalated?"warn":"pending"}">${t(xt(s.source))}</span></td>
      <td class="muted" style="max-width:280px;word-break:break-word">${t(s.reason||"")}</td>
      <td>${t(ae(s.durationMs))} min</td>
    </tr>`).join(""):`<tr class="empty-row"><td colspan="5"><div class="data-empty"><strong>${t(e("ddos.emptyEvents"))}</strong></div></td></tr>`}async function G(a={}){const s=!!a.soft&&document.getElementById("ddos-root"),n=document.querySelector(".main"),o=n?n.scrollTop:0;we&&(clearInterval(we),we=null);const i=[$("/ddos/connections"),$("/ddos/blacklist"),$("/ddos/stats"),$("/ddos/events")];s||i.push($("/ddos/policy"));const r=await Promise.all(i),[l,c,m,p]=r,d=s?null:r[4],y=u.ddosFilter,f=y.pageSize||15;let h=l.data?.active||[],v=l.data?.recent||[],b=c.data||[];const x=m.data||{},H=p.data||[],T=d?.data||u._ddosPolicyCache||null,R=d?.presets||u._ddosPresetsCache||null;T&&(u._ddosPolicyCache=T),R&&(u._ddosPresetsCache=R);const E=(u._ddosPolicyCache?.whitelist||[]).map(String);if(y.liveQ.trim()){const q=y.liveQ.trim().toLowerCase(),te=ne=>[ne.ip,ne.path,ne.method,ne.apiKeyName,ne.apiKeyPrefix].filter(Boolean).some(Ve=>String(Ve).toLowerCase().includes(q));h=h.filter(te),v=v.filter(te)}if(y.banQ.trim()){const q=y.banQ.trim().toLowerCase();b=b.filter(te=>String(te.ip||"").toLowerCase().includes(q)||String(te.reason||"").toLowerCase().includes(q))}y.banSource&&(b=b.filter(q=>q.source===y.banSource));const C=h.slice(y.livePage*f,y.livePage*f+f),D=b.slice(y.banPage*f,y.banPage*f+f),k=C.map(q=>`
    <tr>
      <td class="cell-primary">${t(q.ip)}</td>
      <td>${t(q.method)}</td>
      <td class="muted" style="max-width:220px;word-break:break-all">${t(q.path)}</td>
      <td>${t(q.apiKeyName||q.apiKeyPrefix||"—")}</td>
      <td><span class="badge pending">${t(e("status.active"))}</span></td>
      <td>${lt(Date.now()-q.startedAt)}</td>
      <td><div class="row-actions"><button class="btn danger sm" data-ban="${t(q.ip)}">${t(e("ddos.ban"))}</button></div></td>
    </tr>`).join(""),S=v.slice(0,40).map(q=>`
    <tr>
      <td class="cell-primary">${t(q.ip)}</td>
      <td>${t(q.method)} ${t(q.path)}</td>
      <td>${q.statusCode??"—"}</td>
      <td>${lt(q.durationMs)}</td>
      <td><div class="row-actions"><button class="btn danger sm" data-ban="${t(q.ip)}">${t(e("ddos.ban"))}</button></div></td>
    </tr>`).join(""),I=D.map(q=>`
    <tr>
      <td class="cell-primary">${t(q.ip)}</td>
      <td>${t(q.reason||"—")}</td>
      <td><span class="badge pending">${t(xt(q.source))}</span></td>
      <td>${q.expiresAt?_(q.expiresAt):t(e("ddos.permanent"))}</td>
      <td><div class="row-actions"><button class="btn secondary sm" data-unban="${t(q.ip)}">${t(e("ddos.unban"))}</button></div></td>
    </tr>`).join(""),W=(x.topIps||[]).map(q=>`<tr><td class="cell-primary">${t(q.ip)}</td><td>${q.requests}</td>
      <td><div class="row-actions"><button class="btn danger sm" data-ban="${t(q.ip)}">${t(e("ddos.ban"))}</button></div></td></tr>`).join(""),B=cs(H),ee=`<tr class="empty-row"><td colspan="7"><div class="data-empty"><strong>${t(e("ddos.emptyLive"))}</strong></div></td></tr>`,Re=`<tr class="empty-row"><td colspan="5"><div class="data-empty"><strong>${t(e("common.empty"))}</strong></div></td></tr>`,Je=`<tr class="empty-row"><td colspan="5"><div class="data-empty"><strong>${t(e("ddos.emptyBan"))}</strong></div></td></tr>`,Qt=`<tr class="empty-row"><td colspan="3"><div class="data-empty"><strong>${t(e("common.empty"))}</strong></div></td></tr>`,Ra=["","manual","auto-auth","auto-rate","auto-conn","auto-velocity","auto-escalate"].map(q=>q?`<option value="${q}" ${y.banSource===q?"selected":""}>${t(xt(q))}</option>`:`<option value="">${t(e("common.all"))}</option>`).join("");if(s){const q=(te,ne)=>{const Ve=document.getElementById(te);Ve&&(Ve.innerHTML=ne)};q("ddos-stat-active",String(x.activeConnections??h.length)),q("ddos-stat-rate",String(x.rateLimitedHits??0)),q("ddos-stat-blocked",String(x.blockedHits??0)),q("ddos-stat-ban",String(b.length)),q("ddos-stat-auto",String(x.autoBanTotal??0)),q("ddos-live-body",k||ee),q("ddos-recent-body",S||Re),q("ddos-ban-body",I||Je),q("ddos-top-body",W||Qt),q("ddos-events-body",B),x.policySummary&&_t(!!x.policySummary.autoBanEnabled),Xt(),n&&(n.scrollTop=o)}else{const q=T||{autoBanEnabled:!0,rateLimitWindowMs:6e4,rateLimitMax:120,rateLimitIpMax:60,chatBurstWindowMs:1e4,chatBurstMax:20,autoAuthEnabled:!0,failedAuthThreshold:20,failedAuthWindowMs:3e5,authBanDurationMs:6e5,autoRateEnabled:!0,rateHitThreshold:30,rateHitWindowMs:6e4,rateBanDurationMs:9e5,autoConnEnabled:!0,maxConcurrentPerIp:20,connBanDurationMs:6e5,autoVelocityEnabled:!0,velocityMaxRequests:200,velocityWindowMs:6e4,velocityBanDurationMs:6e5,escalateEnabled:!0,escalateAfterBans:3,escalateDurationMs:864e5,whitelist:["127.0.0.1","::1"],proxyTrustHops:1,proxyIpSource:"auto",trustedProxies:["127.0.0.1","::1"]},te=!!q.autoBanEnabled;document.getElementById("app").innerHTML=z(`
    <div id="ddos-root" class="${te?"":"is-feature-off"}">
    <div class="topbar">
      <h2>${t(e("ddos.title"))}</h2>
      <div class="toolbar">
        ${Nt({id:"ddos-master-autoban",on:te,onLabel:e("ddos.masterOn"),offLabel:e("ddos.masterOff"),title:e("ddos.autoBanMasterHint")})}
        <button class="btn secondary sm" id="ddos-refresh">${t(e("ddos.refresh"))}</button>
        <button class="btn secondary sm" id="ddos-pause">${t(e(Se?"ddos.resume":"ddos.pause"))}</button>
      </div>
    </div>
    <div class="feature-off-banner" id="ddos-disabled-banner" ${te?"hidden":""} role="status">
      <strong>${t(e("common.featureOff"))}</strong>
      <span>${t(e("ddos.disabledBanner"))}</span>
    </div>
    <div class="grid">
      <div class="card"><div class="label">${t(e("ddos.activeConn"))}</div><div class="value" id="ddos-stat-active">${x.activeConnections??h.length}</div></div>
      <div class="card"><div class="label">${t(e("ddos.rateHits"))}</div><div class="value" id="ddos-stat-rate">${x.rateLimitedHits??0}</div></div>
      <div class="card"><div class="label">${t(e("ddos.blockedHits"))}</div><div class="value" id="ddos-stat-blocked">${x.blockedHits??0}</div></div>
      <div class="card"><div class="label">${t(e("ddos.blacklist"))}</div><div class="value" id="ddos-stat-ban">${b.length}</div></div>
      <div class="card"><div class="label">${t(e("ddos.autoBans"))}</div><div class="value" id="ddos-stat-auto">${x.autoBanTotal??0}</div></div>
    </div>

    ${ds(q)}

    <div class="panel data-table-panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${t(e("ddos.eventsTitle"))}</strong>
        <span class="muted">${t(P("common.pagerTotal",{n:H.length}))}</span>
      </div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>${t(e("ddos.eventTime"))}</th>
          <th>${t(e("ddos.ip"))}</th>
          <th>${t(e("ddos.eventSource"))}</th>
          <th>${t(e("ddos.reason"))}</th>
          <th>${t(e("ddos.eventDuration"))}</th>
        </tr></thead>
        <tbody id="ddos-events-body">${B}</tbody>
      </table>
      </div>
    </div>

    <div class="panel data-filter-panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${t(e("common.filterTitle"))}</strong></div>
      <div class="data-filter">
        <div class="data-filter-grid">
          <label>${t(e("ddos.live"))} / ${t(e("ddos.recent"))}
            <input type="search" id="ddos-live-q" value="${t(y.liveQ)}" placeholder="IP / path / key" />
          </label>
          <label>${t(e("ddos.blacklist"))}
            <input type="search" id="ddos-ban-q" value="${t(y.banQ)}" placeholder="IP / reason" />
          </label>
          <label>${t(e("ddos.source"))}
            <select id="ddos-ban-source">${Ra}</select>
          </label>
        </div>
        <div class="data-filter-actions">
          <button type="button" class="btn secondary sm" id="ddos-filter-reset">${t(e("common.reset"))}</button>
          <button type="button" class="btn sm" id="ddos-filter-apply">${t(e("common.apply"))}</button>
        </div>
      </div>
    </div>
    <div class="panel data-table-panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${t(e("ddos.live"))}</strong>
        <span class="muted">${t(P("common.pagerTotal",{n:h.length}))}</span>
      </div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>${t(e("ddos.ip"))}</th><th>${t(e("ddos.method"))}</th>
          <th>${t(e("ddos.path"))}</th><th>${t(e("ddos.key"))}</th>
          <th>${t(e("ddos.state"))}</th><th>${t(e("ddos.duration"))}</th>
          <th>${t(e("common.actions"))}</th>
        </tr></thead>
        <tbody id="ddos-live-body">${k||ee}</tbody>
      </table>
      </div>
      ${le({total:h.length,limit:f,offset:y.livePage*f,idPrefix:"ddoslive"})}
    </div>
    <div class="panel data-table-panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${t(e("ddos.recent"))}</strong></div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>${t(e("ddos.ip"))}</th><th>${t(e("ddos.path"))}</th>
          <th>${t(e("common.httpStatus"))}</th><th>${t(e("ddos.duration"))}</th><th>${t(e("common.actions"))}</th>
        </tr></thead>
        <tbody id="ddos-recent-body">${S||Re}</tbody>
      </table>
      </div>
    </div>
    <div class="panel data-table-panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${t(e("ddos.blacklist"))}</strong>
        <span class="muted">${t(P("common.pagerTotal",{n:b.length}))}</span>
      </div>
      <div class="filter-bar">
        <label>${t(e("ddos.ip"))}<input id="ban-ip" placeholder="${t(e("ddos.ipPlaceholder"))}" /></label>
        <label>${t(e("ddos.reason"))}<input id="ban-reason" placeholder="${t(e("ddos.reasonPh"))}" class="wide" /></label>
        <label>${t(e("ddos.ttl"))}
          <select id="ban-ttl">
            <option value="">${t(e("ddos.ttlPerm"))}</option>
            <option value="3600">${t(e("ddos.ttl1h"))}</option>
            <option value="86400">${t(e("ddos.ttl24h"))}</option>
            <option value="604800">${t(e("ddos.ttl7d"))}</option>
          </select>
        </label>
        <button class="btn sm" id="ban-add">${t(e("ddos.addBan"))}</button>
      </div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>${t(e("ddos.ip"))}</th><th>${t(e("ddos.reason"))}</th>
          <th>${t(e("ddos.source"))}</th><th>${t(e("ddos.expires"))}</th><th>${t(e("common.actions"))}</th>
        </tr></thead>
        <tbody id="ddos-ban-body">${I||Je}</tbody>
      </table>
      </div>
      ${le({total:b.length,limit:f,offset:y.banPage*f,idPrefix:"ddosban"})}
    </div>
    <div class="panel data-table-panel">
      <div class="panel-h"><strong>${t(e("ddos.topIps"))}</strong></div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr><th>${t(e("ddos.ip"))}</th><th>${t(e("usage.requests"))}</th><th>${t(e("common.actions"))}</th></tr></thead>
        <tbody id="ddos-top-body">${W||Qt}</tbody>
      </table>
      </div>
    </div>
    </div>
  `),J(),Xt(!0,E),document.getElementById("ddos-filter-apply")?.addEventListener("click",()=>{u.ddosFilter.liveQ=document.getElementById("ddos-live-q")?.value?.trim()||"",u.ddosFilter.banQ=document.getElementById("ddos-ban-q")?.value?.trim()||"",u.ddosFilter.banSource=document.getElementById("ddos-ban-source")?.value||"",u.ddosFilter.livePage=0,u.ddosFilter.banPage=0,G().catch(g)}),document.getElementById("ddos-filter-reset")?.addEventListener("click",()=>{u.ddosFilter={liveQ:"",banQ:"",banSource:"",livePage:0,banPage:0,pageSize:15},G().catch(g)}),document.getElementById("ddoslive-prev")?.addEventListener("click",()=>{u.ddosFilter.livePage=Math.max(0,y.livePage-1),G().catch(g)}),document.getElementById("ddoslive-next")?.addEventListener("click",()=>{(y.livePage+1)*f<h.length&&(u.ddosFilter.livePage+=1,G().catch(g))}),document.getElementById("ddosban-prev")?.addEventListener("click",()=>{u.ddosFilter.banPage=Math.max(0,y.banPage-1),G().catch(g)}),document.getElementById("ddosban-next")?.addEventListener("click",()=>{(y.banPage+1)*f<b.length&&(u.ddosFilter.banPage+=1,G().catch(g))});const ne=document.querySelector(".main");ne&&(ne.onscroll=()=>{u._ddosScrollPauseUntil=Date.now()+4e3})}!Se&&u.page==="ddos"&&(we=setInterval(()=>{u.page!=="ddos"||Se||u._ddosScrollPauseUntil&&Date.now()<u._ddosScrollPauseUntil||G({soft:!0}).catch(()=>{})},2e3))}function Xt(a=!1,s=[]){const n=s.length?s:u._ddosPolicyCache?.whitelist||[],o=async i=>{if(!i)return;const r=n.some(l=>String(l)===i||String(l).startsWith(i));await F({message:e(r?"ddos.banWhitelistWarn":"ddos.banConfirm"),variant:"danger",confirmText:e("ddos.ban")})&&(await $("/ddos/blacklist",{method:"POST",body:JSON.stringify({ip:i,reason:e("ddos.banReasonDefault"),ttlSeconds:null})}),G({soft:!0}).catch(g))};if(document.querySelectorAll("[data-ban]").forEach(i=>{i.onclick=()=>o(i.dataset.ban)}),document.querySelectorAll("[data-unban]").forEach(i=>{i.onclick=async()=>{await F({message:e("ddos.unbanConfirm"),variant:"danger",confirmText:e("ddos.unban")})&&(await $(`/ddos/blacklist/${encodeURIComponent(i.dataset.unban)}`,{method:"DELETE"}),G({soft:!0}).catch(g))}}),a){document.getElementById("ban-add").onclick=async()=>{const r=document.getElementById("ban-ip").value.trim();if(!r||n.some(m=>String(m)===r)&&!await F({message:e("ddos.banWhitelistWarn"),variant:"danger",confirmText:e("ddos.ban")}))return;const c=document.getElementById("ban-ttl").value;await $("/ddos/blacklist",{method:"POST",body:JSON.stringify({ip:r,reason:document.getElementById("ban-reason").value.trim()||void 0,ttlSeconds:c?Number(c):null})}),G({soft:!0}).catch(g)},document.getElementById("ddos-refresh").onclick=()=>G({soft:!1}).catch(g),document.getElementById("ddos-pause").onclick=()=>{Se=!Se;const r=document.getElementById("ddos-pause");r&&(r.textContent=e(Se?"ddos.resume":"ddos.pause")),Se||G({soft:!0}).catch(g)},document.getElementById("ddos-master-autoban")?.addEventListener("click",async()=>{const r=!Ee("ddos-master-autoban");Ie("ddos-master-autoban",r,e("ddos.masterOn"),e("ddos.masterOff"));const l=document.getElementById("dp-autoBanEnabled");l&&(l.type==="checkbox"?l.checked=r:l.value=r?"1":"0"),_t(r),Te("ddos-root",!r),qe("ddos-disabled-banner",!r),ue();try{const c=Mt(),m=await $("/ddos/policy",{method:"PUT",body:JSON.stringify(c)});u._ddosPolicyCache=m.data,ue()}catch(c){Ie("ddos-master-autoban",!r,e("ddos.masterOn"),e("ddos.masterOff")),Te("ddos-root",r),qe("ddos-disabled-banner",r),g(c)}});const i=document.getElementById("ddos-policy-panel");i?.addEventListener("input",()=>ue()),i?.addEventListener("change",()=>ue()),document.querySelectorAll("[data-ddos-preset]").forEach(r=>{r.onclick=()=>{const l=r.dataset.ddosPreset;if(l==="custom")return;const c=u._ddosPresetsCache?.[l];c&&vt(c)}}),ue(),document.getElementById("dp-save")?.addEventListener("click",async()=>{try{const r=Mt(),l=await $("/ddos/policy",{method:"PUT",body:JSON.stringify(r)});u._ddosPolicyCache=l.data,vt(l.data),ue(),await Y({title:e("ddos.policyTitle"),message:e("ddos.policySaved")}),G({soft:!0}).catch(g)}catch(r){g(r)}}),document.getElementById("dp-reset")?.addEventListener("click",async()=>{if(await F({message:e("ddos.confirmReset"),variant:"danger",confirmText:e("ddos.resetPolicy")}))try{const r=await $("/ddos/policy/reset",{method:"POST"});u._ddosPolicyCache=r.data,vt(r.data),ue(),await Y({title:e("ddos.policyTitle"),message:e("ddos.policyReset")}),G({soft:!0}).catch(g)}catch(r){g(r)}})}}function Ye(a){return e(a==="pm2"?"pm2.runnerPm2":a==="gctoac"?"pm2.runnerGctoac":a==="none"?"pm2.runnerNone":"pm2.runnerUnknown")}function Yt(a){if(!a)return"";const s=a.messageKey;if(s&&typeof s=="string"){if(s==="pm2.msgOk")return"";const o=a.messageParams||{},i=P(s,o);if(i&&i!==s)return i}const n=a.message||"";return!n||n==="ok"?"":n}function Zt(a){return a==="pm2"?`<span class="badge success">${t(Ye(a))}</span>`:a==="gctoac"?`<span class="badge agent">${t(Ye(a))}</span>`:a==="none"?`<span class="badge pending">${t(Ye(a))}</span>`:`<span class="badge warn">${t(Ye(a))}</span>`}function us(a){return!a||typeof a!="object"?"":Object.entries(a).map(([s,n])=>`${s}=${n}`).join(`
`)}function ms(a){const s={};for(const n of(a||"").split(`
`)){const o=n.trim();if(!o||o.startsWith("#"))continue;const i=o.indexOf("=");i<=0||(s[o.slice(0,i).trim()]=o.slice(i+1).trim())}return s}function ps(){const a=r=>document.getElementById(r)?.checked===!0,s=r=>document.getElementById(r)?.value??"";let n=s("pm2-cfg-instances").trim();if(n!=="max"){const r=Number(n);n=Number.isFinite(r)&&r>=1?r:1}const o=s("pm2-cfg-port").trim(),i=Number(o);return{port:Number.isFinite(i)&&i>=1&&i<=65535?i:void 0,name:s("pm2-cfg-name").trim()||"grok-openai-gateway",script:s("pm2-cfg-script").trim()||"dist/server.js",cwd:s("pm2-cfg-cwd").trim()||void 0,instances:n,exec_mode:s("pm2-cfg-exec")==="cluster"?"cluster":"fork",autorestart:a("pm2-cfg-autorestart"),watch:a("pm2-cfg-watch"),max_memory_restart:s("pm2-cfg-maxmem").trim()||"512M",max_restarts:Number(s("pm2-cfg-maxrestarts"))||10,min_uptime:s("pm2-cfg-minuptime").trim()||"5s",restart_delay:Number(s("pm2-cfg-restartdelay"))||2e3,exp_backoff_restart_delay:Number(s("pm2-cfg-backoff"))||1e3,merge_logs:a("pm2-cfg-mergelogs"),time:a("pm2-cfg-time"),error_file:s("pm2-cfg-errfile").trim()||"logs/pm2-error.log",out_file:s("pm2-cfg-outfile").trim()||"logs/pm2-out.log",env_extra:ms(s("pm2-cfg-envextra")),preferred_runner:s("pm2-cfg-preferred")==="pm2"?"pm2":"gctoac"}}async function me(){const s=(await $("/pm2/status")).data||{},n=s.app,o=s.config||{},i=s.portHolders||{},r=i.pids&&i.pids.length>0||!1,l=Yt(s);let c="",m=null;try{const k=await $("/pm2/logs?lines=80");c=(k.data?.stdout||"")+(k.data?.stderr?`
`+k.data.stderr:""),m=k.data||null}catch(k){c=k.message||""}s.lastError&&(c=`===== last errors =====
${s.lastError}

${c}`);const p=m?.files||[],d=p.length?p.filter(k=>k.exists).map(k=>`${k.label}: ${k.size<1024?k.size+" B":Math.round(k.size/1024)+" KB"}`).join(" · "):"",y=m?.maxBytes?Math.round(m.maxBytes/(1024*1024)):5,f=m?.keepBytes?Math.round(m.keepBytes/1024):512,h=n?.status||"—",v=h==="online"?e("pm2.statusOnline"):h==="errored"?e("pm2.statusErrored"):h==="stopped"?e("pm2.statusStopped"):h,b=h==="online"?`<span class="badge success">${t(v)}</span>`:h==="errored"?`<span class="badge error">${t(v)}</span>`:t(v),x=s.available,H=s.available&&n,T=s.runner||"unknown",R=l&&h!=="errored"&&s.available!==!1&&s.messageKey!=="pm2.msgErrored",E=us(o.env_extra);document.getElementById("app").innerHTML=z(`
    <div class="topbar">
      <h2>${t(e("pm2.title"))}</h2>
      <div class="toolbar">
        <button class="btn secondary sm" id="pm2-refresh">${t(e("pm2.refresh"))}</button>
        <button class="btn sm" id="pm2-start" ${x?"":"disabled"}>${t(e("pm2.start"))}</button>
        <button class="btn secondary sm" id="pm2-stop" ${H?"":"disabled"}>${t(e("pm2.stop"))}</button>
        <button class="btn sm" id="pm2-restart" ${x?"":"disabled"}>${t(e("pm2.restart"))}</button>
        <button class="btn secondary sm" id="pm2-reload" ${!H||n?.status!=="online"?"disabled":""}>${t(e("pm2.reload"))}</button>
      </div>
    </div>
    <p class="muted">${t(e("pm2.hint"))}</p>
    ${l?`<div class="error-box${R?" warn-box":""}">${t(l)}</div>`:s.available?"":`<div class="error-box">${t(e("pm2.unavailable"))}</div>`}

    <div class="panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${t(e("pm2.switchTitle"))}</strong>${Zt(T)}</div>
      <div class="modal-b">
        <p class="muted">${t(e("pm2.switchHint"))}</p>
        <div class="grid">
          <div class="card"><div class="label">${t(e("pm2.currentRunner"))}</div><div class="value" style="font-size:1rem">${Zt(T)}</div></div>
          <div class="card"><div class="label">${t(e("pm2.gctoacPid"))}</div><div class="value" style="font-size:1rem">${s.gctoac?.running&&s.gctoac?.pid?s.gctoac.pid:"—"}</div></div>
          <div class="card"><div class="label">${t(e("pm2.port"))}</div><div class="value" style="font-size:1rem">${s.port??"—"}</div></div>
          <div class="card"><div class="label">${t(e("pm2.portBusy"))}</div><div class="value" style="font-size:1rem">${e(r?"common.yes":"common.no")}</div></div>
        </div>
        <div class="toolbar" style="margin-top:12px">
          <button class="btn sm" id="pm2-switch-pm2" ${x?"":"disabled"}>${t(e("pm2.switchToPm2"))}</button>
          <button class="btn secondary sm" id="pm2-switch-gctoac">${t(e("pm2.switchToGctoac"))}</button>
        </div>
      </div>
    </div>

    <div class="panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${t(e("pm2.portTitle"))}</strong></div>
      <div class="panel-pad">
        <p class="muted" style="margin:0 0 12px">${t(e("pm2.portHint"))}</p>
        <div class="form-grid">
          <label class="full">${t(e("pm2.fieldPort"))}
            <input type="number" id="pm2-cfg-port" min="1" max="65535" step="1" value="${t(String(s.port??3847))}" placeholder="3847" />
            <span class="field-hint">${t(e("pm2.portDefaultNote"))}</span>
          </label>
        </div>
        <div class="toolbar" style="margin-top:12px">
          <button type="button" class="btn sm" id="pm2-port-save">${t(e("pm2.savePort"))}</button>
          <button type="button" class="btn secondary sm" id="pm2-port-default">${t(e("pm2.useDefaultPort"))}</button>
        </div>
      </div>
    </div>

    <div class="grid" style="margin-bottom:14px">
      <div class="card"><div class="label">${t(e("pm2.app"))}</div><div class="value" style="font-size:1rem">${t(s.appName||o.name||"grok-openai-gateway")}</div></div>
      <div class="card"><div class="label">${t(e("pm2.status"))}</div><div class="value" style="font-size:1rem">${b}</div></div>
      <div class="card"><div class="label">${t(e("pm2.pid"))}</div><div class="value" style="font-size:1rem">${n?.pid&&n.pid!==0?n.pid:"—"}</div></div>
      <div class="card"><div class="label">${t(e("pm2.restarts"))}</div><div class="value" style="font-size:1rem">${n?.restarts??"—"}</div></div>
      <div class="card"><div class="label">${t(e("pm2.cpu"))}</div><div class="value" style="font-size:1rem">${n?.cpu!=null?n.cpu+"%":"—"}</div></div>
      <div class="card"><div class="label">${t(e("pm2.memory"))}</div><div class="value" style="font-size:1rem">${n?.memory!=null?P("common.mb",{n:Math.round(n.memory/1024/1024)}):"—"}</div></div>
    </div>

    <div class="panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${t(e("pm2.configTitle"))}</strong></div>
      <div class="modal-b">
        <p class="muted">${t(e("pm2.configHint"))}</p>
        <div class="form-grid pm2-config-form">
          <label>${t(e("pm2.fieldName"))}<input id="pm2-cfg-name" value="${t(o.name||"")}" /></label>
          <label>${t(e("pm2.fieldScript"))}<input id="pm2-cfg-script" value="${t(o.script||"dist/server.js")}" /></label>
          <label>${t(e("pm2.fieldCwd"))}<input id="pm2-cfg-cwd" value="${t(o.cwd||"")}" placeholder="${t(e("pm2.phCwd"))}" /></label>
          <label>${t(e("pm2.fieldInstances"))}<input id="pm2-cfg-instances" value="${t(String(o.instances??1))}" placeholder="${t(e("pm2.phInstances"))}" /></label>
          <label>${t(e("pm2.fieldExecMode"))}
            <select id="pm2-cfg-exec">
              <option value="fork" ${o.exec_mode!=="cluster"?"selected":""}>${t(e("pm2.modeFork"))}</option>
              <option value="cluster" ${o.exec_mode==="cluster"?"selected":""}>${t(e("pm2.modeCluster"))}</option>
            </select>
          </label>
          <label>${t(e("pm2.fieldMaxMem"))}<input id="pm2-cfg-maxmem" value="${t(o.max_memory_restart||"512M")}" /></label>
          <label>${t(e("pm2.fieldMaxRestarts"))}<input id="pm2-cfg-maxrestarts" type="number" value="${t(String(o.max_restarts??10))}" /></label>
          <label>${t(e("pm2.fieldMinUptime"))}<input id="pm2-cfg-minuptime" value="${t(String(o.min_uptime??"5s"))}" /></label>
          <label>${t(e("pm2.fieldRestartDelay"))}<input id="pm2-cfg-restartdelay" type="number" value="${t(String(o.restart_delay??2e3))}" /></label>
          <label>${t(e("pm2.fieldBackoff"))}<input id="pm2-cfg-backoff" type="number" value="${t(String(o.exp_backoff_restart_delay??1e3))}" /></label>
          <label>${t(e("pm2.fieldErrorFile"))}<input id="pm2-cfg-errfile" value="${t(o.error_file||"logs/pm2-error.log")}" /></label>
          <label>${t(e("pm2.fieldOutFile"))}<input id="pm2-cfg-outfile" value="${t(o.out_file||"logs/pm2-out.log")}" /></label>
          <label>${t(e("pm2.fieldPreferred"))}
            <select id="pm2-cfg-preferred">
              <option value="gctoac" ${o.preferred_runner!=="pm2"?"selected":""}>gctoac</option>
              <option value="pm2" ${o.preferred_runner==="pm2"?"selected":""}>pm2</option>
            </select>
          </label>
          <label class="check"><input type="checkbox" id="pm2-cfg-autorestart" ${o.autorestart!==!1?"checked":""}/> ${t(e("pm2.fieldAutorestart"))}</label>
          <label class="check"><input type="checkbox" id="pm2-cfg-watch" ${o.watch?"checked":""}/> ${t(e("pm2.fieldWatch"))}</label>
          <label class="check"><input type="checkbox" id="pm2-cfg-mergelogs" ${o.merge_logs!==!1?"checked":""}/> ${t(e("pm2.fieldMergeLogs"))}</label>
          <label class="check"><input type="checkbox" id="pm2-cfg-time" ${o.time!==!1?"checked":""}/> ${t(e("pm2.fieldTime"))}</label>
          <label class="full">${t(e("pm2.fieldEnvExtra"))}<textarea id="pm2-cfg-envextra" rows="4" placeholder="${t(e("pm2.phEnv"))}">${t(E)}</textarea></label>
        </div>
        <div class="toolbar" style="margin-top:12px">
          <button class="btn sm" id="pm2-cfg-save">${t(e("pm2.saveConfig"))}</button>
          <button class="btn secondary sm" id="pm2-cfg-save-only">${t(e("pm2.saveOnly"))}</button>
          <button class="btn secondary sm" id="pm2-cfg-reset">${t(e("pm2.resetConfig"))}</button>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-h">
        <div>
          <strong>${t(e("pm2.logs"))}</strong>
          <span class="muted">${t(e("pm2.logsHint"))}</span>
        </div>
        <div class="toolbar">
          <button type="button" class="btn secondary sm" id="pm2-logs-refresh">${t(e("pm2.refresh"))}</button>
          <button type="button" class="btn danger sm" id="pm2-logs-clear">${t(e("pm2.clearLogs"))}</button>
        </div>
      </div>
      <div class="modal-b">
        <p class="muted" style="margin:0 0 8px;font-size:0.82rem">
          ${t(P("pm2.logsAutoTrim",{maxMb:y,keepKb:f}))}
          ${d?` · ${t(d)}`:""}
        </p>
        <pre class="pre pre-logs" id="pm2-logs-pre">${t(c||e("common.empty"))}</pre>
      </div>
    </div>
  `),J(),document.getElementById("pm2-logs-refresh")?.addEventListener("click",()=>me().catch(g)),document.getElementById("pm2-logs-clear")?.addEventListener("click",async()=>{if(await F({message:e("pm2.confirmClearLogs"),variant:"danger",confirmText:e("pm2.clearLogs")}))try{const S=(await $("/pm2/logs/clear",{method:"POST",body:JSON.stringify({which:"all"})})).data?.cleared?.length||0;await Y({message:P("pm2.logsCleared",{n:S})}),me().catch(g)}catch(k){g(k)}});const C=async k=>{if(await F({message:e(k==="pm2"?"pm2.confirmSwitchPm2":"pm2.confirmSwitchGctoac"),variant:"confirm",confirmText:e(k==="pm2"?"pm2.switchToPm2":"pm2.switchToGctoac")}))try{const I=await $("/pm2/switch",{method:"POST",body:JSON.stringify({mode:k})});await Y(Yt(I.data)||I.data&&I.data.message||e("pm2.switchScheduled"))}catch(I){g(I)}};document.getElementById("pm2-refresh").onclick=()=>me().catch(g),document.getElementById("pm2-switch-pm2").onclick=()=>C("pm2"),document.getElementById("pm2-switch-gctoac").onclick=()=>C("gctoac"),document.getElementById("pm2-start").onclick=()=>C("pm2"),document.getElementById("pm2-stop").onclick=async()=>{if(await F({message:e("pm2.confirmStop"),variant:"danger",confirmText:e("pm2.stop")}))try{await $("/pm2/stop",{method:"POST",body:"{}"}),me().catch(g)}catch(k){g(k)}},document.getElementById("pm2-restart").onclick=async()=>{if(await F({message:e("pm2.confirmRestart"),variant:"confirm",confirmText:e("pm2.restart")}))try{await C("pm2")}catch(k){g(k)}},document.getElementById("pm2-reload").onclick=async()=>{try{await $("/pm2/reload",{method:"POST",body:"{}"}),me().catch(g)}catch(k){g(k)}};const D=async k=>{try{const S={...ps(),restart:k};if(S.port==null){await Y({message:e("pm2.portInvalid")});return}const I=await $("/pm2/config",{method:"PUT",body:JSON.stringify(S)});if(I.data?.scheduled){const W=I.data.portChange?`
${P("pm2.portChangedMsg",{from:I.data.portChange.previous,to:I.data.portChange.port})}`:"";await Y((I.data.scheduled.message||e("pm2.switchScheduled"))+W)}else await Y(I.data?.portChange?P("pm2.portSavedNeedRestart",{port:I.data.port}):e("pm2.configSaved")),me().catch(g)}catch(S){g(S)}};document.getElementById("pm2-cfg-save").onclick=()=>D(!0),document.getElementById("pm2-cfg-save-only").onclick=()=>D(!1),document.getElementById("pm2-port-default")?.addEventListener("click",()=>{const k=document.getElementById("pm2-cfg-port");k&&(k.value="3847")}),document.getElementById("pm2-port-save")?.addEventListener("click",async()=>{const k=Number(document.getElementById("pm2-cfg-port")?.value);if(!Number.isFinite(k)||k<1||k>65535){await Y({message:e("pm2.portInvalid")});return}if(await F({message:P("pm2.confirmPortChange",{port:k}),variant:"confirm",confirmText:e("pm2.savePort")}))try{const S=await $("/pm2/config",{method:"PUT",body:JSON.stringify({port:k,restart:!0})}),I=S.data?.scheduled?.message||(S.data?.portChange?P("pm2.portChangedMsg",{from:S.data.portChange.previous,to:S.data.portChange.port}):e("pm2.configSaved"));await Y(I+`
`+P("pm2.portAfterRestart",{port:k}))}catch(S){g(S)}}),document.getElementById("pm2-cfg-reset").onclick=async()=>{if(await F({message:e("pm2.confirmReset"),variant:"danger",confirmText:e("pm2.resetConfig")}))try{await $("/pm2/config/reset",{method:"POST",body:"{}"}),me().catch(g)}catch(k){g(k)}}}let N=[],Z=null,U=[],Ke=!1,he=0;const pe=new Map,A={keyId:"",model:"",reasoning:!0,systemPrompt:"",systemOpen:!1},M={mode:"full",recentN:6,summary:"",summaryAt:null,summarySourceCount:0},hs=3,xa=40,fs=20,ys=2200,w={conversationId:null,historyPage:0,historyLimit:20,historyQ:"",historyTotal:0,historyItems:[],historyLoading:!1,historyOpenMobile:!1,saving:!1,saveQueued:!1,renamingId:null};let bt=null;const dt=10,Kt=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function gs(a){const s=String(a||"").split(/[/\\]/).pop()||"",n=s.lastIndexOf(".");return n<0?"":s.slice(n).toLowerCase()}function ct(a){return la.has(gs(a))}function ut(){return e("chat.formatsHint")}function Ma(){M.mode="full",M.recentN=6,M.summary="",M.summaryAt=null,M.summarySourceCount=0,he=0,pe.clear()}function vs(a){const s=(a?.title||"").trim();if(s)return s;const n=(a?.preview||"").trim();return n||e("chat.untitled")}function bs(){return N.filter(a=>!a.streaming).map(a=>{const s={role:a.role,content:a.content||""};return a.reasoning&&(s.reasoning=a.reasoning),a.docs&&a.docs.length&&(s.docs=a.docs),a.error&&(s.error=!0),s})}function $s(){return{contextMode:M.mode,contextRecentN:M.recentN,summaryText:M.summary||"",summaryAt:M.summaryAt,summarySourceCount:M.summarySourceCount||0}}function ks(a){a&&(M.mode=a.contextMode==="summary"||a.contextMode==="recent"?a.contextMode:"full",M.recentN=Math.min(40,Math.max(2,Number(a.contextRecentN)||6)),M.summary=(a.summaryText||"").trim(),M.summaryAt=a.summaryAt||null,M.summarySourceCount=Number(a.summarySourceCount)||0,M.mode==="summary"&&!M.summary&&(M.mode="full"))}function Ea(a){return a.reduce((s,n)=>s+(n.content||"").length+(n.reasoning||"").length,0)}function Ia(){const a=N.filter(s=>!s.streaming);return a.length<2?!1:a.length>=hs?!0:Ea(a)>=800}function ws(){const a=(A.systemPrompt||"").trim(),s=N.filter(l=>!l.streaming),n=Math.min(40,Math.max(2,Number(M.recentN)||6));let o=s.map(l=>({role:l.role,content:l.content||""})),i=a;if(M.mode==="summary"&&M.summary){const l=(We()==="zh-Hant"?`【先前對話摘要 — 僅供延續語境，完整記錄仍在用戶介面】
`:`[Prior conversation summary — full history remains in the UI]
`)+M.summary;i=i?`${i}

${l}`:l;const c=s.slice(M.summarySourceCount||0);o=(c.length?c:s.slice(-n)).slice(-n).map(p=>({role:p.role,content:p.content||""}))}else M.mode==="recent"&&(o=s.slice(-n).map(l=>({role:l.role,content:l.content||""})));const r=o.map(l=>({role:l.role,content:l.content}));return i&&r.unshift({role:"system",content:i}),r}function Ss(){return M.mode==="summary"&&M.summary?P("chat.ctxModeSummaryLabel",{n:M.recentN}):M.mode==="recent"?P("chat.ctxModeRecentLabel",{n:M.recentN}):e("chat.ctxModeFullLabel")}function Oe(){const a=document.getElementById("chat-compress");if(!a)return;const s=N.some(i=>i.streaming),n=!!Z||Ke||s,o=Ia();a.disabled=n||!o,a.textContent=e(Ke?"chat.compressing":"chat.compress"),a.title=e(o?"chat.compress":"chat.compressNeedMore"),ve(),Ce()}function Ce(){const a=document.getElementById("chat-ctx-mode"),s=document.getElementById("chat-ctx-n");if(a){const n=M.mode==="summary"&&!M.summary?"full":M.mode;a.value=n;const o=a.querySelector('option[value="summary"]');o&&(o.disabled=!M.summary)}s&&(s.value=String(M.recentN),s.disabled=M.mode==="full")}function ve(){const a=document.getElementById("chat-compress-banner");if(!a)return;const s=!!M.summary,n=N.filter(r=>!r.streaming).length>40||Ea(N)>6e4;if(!s&&M.mode==="full"&&!n){a.hidden=!0,a.innerHTML="";return}a.hidden=!1;const o=s?M.summary.length>160?`${M.summary.slice(0,159)}…`:M.summary:"",i=n?`<p class="chat-compress-warn">${t(e("chat.ctxLongHint"))}</p>`:"";a.innerHTML=`
    <div class="chat-compress-banner-inner">
      <div class="chat-compress-banner-text">
        <strong>${t(e("chat.ctxPolicyTitle"))}</strong>
        <span class="muted">${t(Ss())}</span>
        <p class="chat-compress-remark">${t(e("chat.ctxRemark"))}</p>
        ${o?`<p class="chat-compress-preview">${t(o)}</p>`:""}
        ${i}
      </div>
      <div class="chat-compress-banner-actions">
        ${s?`<button type="button" class="btn secondary sm" id="chat-summary-view">${t(e("chat.compressView"))}</button>`:""}
      </div>
    </div>`,document.getElementById("chat-summary-view")?.addEventListener("click",()=>{qa()})}async function qa(){if(!M.summary){L(e("chat.compressNeedSummary"));return}const a=M.summaryAt?_(M.summaryAt):"—",s=da(M.summary);ie&&Pe(!1);const n=document.createElement("div");return n.className="ui-dialog-back",n.id="ui-dialog-back",n.dataset.cancelable="1",n.innerHTML=`
    <div class="ui-dialog ui-dialog--info ui-dialog--large" role="dialog" aria-modal="true">
      <div class="ui-dialog-h">
        <div class="ui-dialog-icon" aria-hidden="true">Σ</div>
        <h3 class="ui-dialog-title">${t(e("chat.compressResultTitle"))}</h3>
      </div>
      <div class="ui-dialog-body ui-dialog-body--md">
        <p class="muted" style="margin:0 0 10px">${t(P("chat.summaryMeta",{when:a,n:M.summarySourceCount}))}</p>
        <div class="chat-content md">${s}</div>
      </div>
      <div class="ui-dialog-actions">
        <button type="button" class="btn secondary sm" id="ui-dialog-copy">${t(e("chat.copy"))}</button>
        <button type="button" class="btn sm" id="ui-dialog-ok">${t(e("common.ok"))}</button>
      </div>
    </div>`,document.body.appendChild(n),document.body.classList.add("ui-dialog-open"),ie=n,document.addEventListener("keydown",Dt,!0),new Promise(o=>{it=o;const i=()=>Pe(!0);n.querySelector("#ui-dialog-ok")?.addEventListener("click",i),n.addEventListener("click",r=>{r.target===n&&i()}),n.querySelector("#ui-dialog-copy")?.addEventListener("click",async()=>{const r=await Rt(M.summary),l=n.querySelector("#ui-dialog-copy");r&&l&&(l.textContent=e("chat.copied"),setTimeout(()=>{l.isConnected&&(l.textContent=e("chat.copy"))},1500))})})}function Ps(a){return a.map(s=>{const n=s.role||"user";let o=(s.content||"").trim();if(s.docs&&s.docs.length){const i=s.docs.map(r=>r.name).join(", ");o=o?`${o}
[attachments: ${i}]`:`[attachments: ${i}]`}return o.length>5e3&&(o=`${o.slice(0,4999)}…`),`${n}: ${o}`}).join(`

`)}function xs(){return We()==="zh-Hant"?["你是對話摘要助手。只輸出精簡摘要，不要使用任何工具、不要上網、不要反問。","若已有舊摘要，請合併更新為一份。","請用繁體中文（或對齊原對話語言）條列：","1) 主題與目標 2) 已確定事實／決定 3) 未完成事項 4) 用戶偏好或約束","控制在約 600–1000 字。不要大段複製原文。只輸出摘要正文。"].join(`
`):["You are a conversation summary assistant. Output only a concise summary.","Merge any prior summary into one updated summary. No tools, no browsing, no questions.","Cover: (1) topics/goals (2) facts/decisions (3) open items (4) preferences.","Keep under ~600–1000 words. Summary body only."].join(`
`)}async function Ms(){if(Ke||Z||N.some(i=>i.streaming)){L(e("chat.compressBusy"));return}const a=N.filter(i=>!i.streaming);if(!Ia()){L(e("chat.compressNeedMore"));return}if(!await F({title:e("chat.compress"),message:e("chat.compressConfirm"),variant:"confirm",confirmText:e("chat.compress")}))return;const s=ze();if(!s){L(e("chat.needKey"));return}fe(),Ke=!0,Oe();const n=document.getElementById("chat-send");n&&(n.disabled=!0);const o=document.getElementById("chat-stream-status");o&&(o.hidden=!1,o.textContent=e("chat.compressing"));try{let i=Ps(a);M.summary&&(i=(We()==="zh-Hant"?`先前摘要：
${M.summary}

完整對話：
`:`Prior summary:
${M.summary}

Full conversation:
`)+i);const r=document.getElementById("chat-model")?.value||A.model||"grok-4.5",l=Ut(),c={model:r,stream:!1,include_reasoning:!1,messages:[{role:"system",content:xs()},{role:"user",content:(We()==="zh-Hant"?`請為以下對話產生摘要（僅供之後回合作為語境，不會刪除用戶介面中的記錄）：

`:`Summarize the following conversation (for later context only; UI history is kept):

`)+i}]},m=Ge();m&&(c.apiKeyId=m);const p=await fetch("/admin/api/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify(c)});if(!p.ok){const f=await p.text();let h=f;try{h=JSON.parse(f).error?.message||f}catch{}throw new Error(h||e("chat.compressFail"))}const d=await p.json();let y=d?.choices?.[0]?.message?.content||d?.choices?.[0]?.delta?.content||"";if(typeof y!="string"&&(y=String(y||"")),y=y.trim().replace(/^【對話摘要】\s*/u,"").replace(/^\[Conversation summary\]\s*/i,""),!y)throw new Error(e("chat.compressFail"));M.summary=y,M.summaryAt=new Date().toISOString(),M.summarySourceCount=a.length,M.mode="summary",ve(),Ce(),L(""),o&&(o.hidden=!1,o.textContent=e("chat.compressOk"),setTimeout(()=>{const f=document.getElementById("chat-stream-status");f&&f.textContent===e("chat.compressOk")&&(f.hidden=!0,f.textContent="")},2800)),await Qe().catch(()=>{}),await qa()}catch(i){L(i.message||e("chat.compressFail"))}finally{Ke=!1,Oe(),n&&(n.disabled=!1),o&&o.textContent===e("chat.compressing")&&(o.hidden=!0,o.textContent="")}}function It(a){w.historyOpenMobile=!!a,document.body.classList.toggle("chat-history-open",w.historyOpenMobile)}function qt(){It(!1)}async function $e(){if(u.key){w.historyLoading=!0,ce();try{const a=w.historyPage*w.historyLimit,s=new URLSearchParams({limit:String(w.historyLimit),offset:String(a)});w.historyQ.trim()&&s.set("q",w.historyQ.trim());const n=await $(`/conversations?${s}`);w.historyItems=n.data||[],w.historyTotal=n.total??0}catch(a){w.historyItems=[],w.historyTotal=0,console.warn(a)}finally{w.historyLoading=!1,ce()}}}function ce(){const a=document.getElementById("chat-history-list"),s=document.getElementById("chat-history-pager");if(a){if(w.historyLoading&&!w.historyItems.length?a.innerHTML=`<li class="chat-history-empty">${t(e("common.loading"))}</li>`:w.historyItems.length?a.innerHTML=w.historyItems.map(n=>{const o=w.conversationId===n.id?" is-active":"",i=vs(n),r=n.title&&n.preview&&n.preview!==n.title?n.preview:n.model||P("chat.msgs",{n:n.messageCount||0}),l=w.renamingId===n.id,c=i,m=l?`<input type="text" class="chat-history-title-input" data-title-input="${t(n.id)}" value="${t(c)}" maxlength="120" placeholder="${t(e("chat.renamePh"))}" aria-label="${t(e("chat.renamePh"))}" />
            <span class="preview">${t(r||"—")}</span>
            <span class="meta"><span>${t(_(n.updatedAt))}</span></span>`:`<span class="title" data-title-label="${t(n.id)}" title="${t(e("chat.rename"))}">${t(i)}</span>
            <span class="preview">${t(r||"—")}</span>
            <span class="meta"><span>${t(_(n.updatedAt))}</span></span>`,p=l?`<div class="chat-history-item${o} is-editing" data-conv-body="${t(n.id)}">${m}</div>`:`<div class="chat-history-item${o}" data-open-conv="${t(n.id)}" role="button" tabindex="0" title="${t(i)}">${m}</div>`;return`
        <li class="chat-history-row${o}${l?" is-renaming":""}" data-conv-row="${t(n.id)}">
          ${p}
          <div class="chat-history-item-actions">
            <button type="button" class="icon-action" data-rename-conv="${t(n.id)}" title="${t(e("chat.rename"))}" aria-label="${t(e("chat.rename"))}">✎</button>
            <button type="button" class="icon-action danger" data-del-conv="${t(n.id)}" title="${t(e("chat.deleteConversation"))}" aria-label="${t(e("chat.deleteConversation"))}">×</button>
          </div>
        </li>`}).join(""):a.innerHTML=`<li class="chat-history-empty">${t(e("chat.historyEmpty"))}</li>`,s){const n=w.historyLimit,o=Math.max(1,Math.ceil(w.historyTotal/n)||1),i=Math.min(w.historyPage+1,o),r=P("chat.historyPage",{n:i,total:o}),l=w.historyPage>0,c=(w.historyPage+1)*n<w.historyTotal;s.innerHTML=`
      <button type="button" class="btn secondary sm" id="chat-hist-prev" ${l?"":"disabled"}>${t(e("chat.historyPrev"))}</button>
      <span>${t(r)}</span>
      <button type="button" class="btn secondary sm" id="chat-hist-next" ${c?"":"disabled"}>${t(e("chat.historyNext"))}</button>
    `;const m=document.getElementById("chat-hist-prev"),p=document.getElementById("chat-hist-next");m&&(m.onclick=()=>{w.historyPage>0&&(w.historyPage-=1,$e())}),p&&(p.onclick=()=>{(w.historyPage+1)*n<w.historyTotal&&(w.historyPage+=1,$e())})}if(a.querySelectorAll("[data-open-conv]").forEach(n=>{const o=n.getAttribute("data-open-conv");if(!o)return;let i=null;const r=()=>{i&&(clearTimeout(i),i=null)};n.addEventListener("click",l=>{w.renamingId||l.target instanceof Element&&l.target.closest(".chat-history-item-actions")||(r(),i=setTimeout(()=>{i=null,!w.renamingId&&ea(o)},280))}),n.addEventListener("dblclick",l=>{l.preventDefault(),l.stopPropagation(),r(),$t(o)}),n.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),w.renamingId||ea(o))})}),a.querySelectorAll("[data-title-label]").forEach(n=>{n.addEventListener("dblclick",o=>{o.preventDefault(),o.stopPropagation();const i=n.getAttribute("data-title-label");i&&$t(i)})}),a.querySelectorAll("[data-rename-conv]").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation();const i=n.getAttribute("data-rename-conv");i&&$t(i)})}),a.querySelectorAll("[data-del-conv]").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation();const i=n.getAttribute("data-del-conv");i&&Is(i)})}),w.renamingId){const n=String(w.renamingId).replace(/\\/g,"\\\\").replace(/"/g,'\\"'),o=a.querySelector(`[data-title-input="${n}"]`);o instanceof HTMLInputElement&&(Es(o,w.renamingId),requestAnimationFrame(()=>{o.isConnected&&(o.focus(),o.select())}))}}}function $t(a){a&&(w.renamingId&&w.renamingId!==a&&(w.renamingId=null),w.renamingId=a,ce())}function Es(a,s){let n=!1;const o=async i=>{if(n)return;n=!0;const r=a.value;if(w.renamingId=null,!i){ce();return}const l=String(r??"").trim().slice(0,120),c=w.historyItems.find(p=>p.id===s),m=c?(c.title||"").trim():"";if(l===m){ce();return}c&&(c.title=l),ce();try{await $(`/conversations/${s}`,{method:"PATCH",body:JSON.stringify({title:l})}),await $e()}catch(p){L(p.message||e("chat.saveFail")),await $e()}};a.addEventListener("keydown",i=>{i.stopPropagation(),i.key==="Enter"?(i.preventDefault(),o(!0)):i.key==="Escape"&&(i.preventDefault(),o(!1))}),a.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation()}),a.addEventListener("mousedown",i=>i.stopPropagation()),a.addEventListener("dblclick",i=>{i.preventDefault(),i.stopPropagation()}),a.addEventListener("blur",()=>{setTimeout(()=>o(!0),0)})}async function ea(a){(!a||Z)&&Z&&Z.abort();try{L("");const s=await $(`/conversations/${a}`),n=s.data||s;w.conversationId=n.id,he=0,pe.clear(),N=(n.messages||[]).filter(c=>!c.compressed).map(c=>({role:c.role,content:c.content||"",reasoning:c.reasoning||void 0,docs:c.docs,error:c.error})),U=[],A.systemPrompt=n.systemPrompt||"",ks(n),n.model&&(A.model=n.model),n.apiKeyId&&(A.keyId=n.apiKeyId);const o=document.getElementById("chat-system");o&&(o.value=A.systemPrompt);const i=document.getElementById("chat-system-wrap");i&&(i.hidden=!A.systemPrompt.trim()&&!A.systemOpen);const r=document.getElementById("chat-model");r&&n.model&&(r.value=n.model);const l=document.getElementById("chat-key-select");l&&n.apiKeyId&&[...l.options].some(m=>m.value===n.apiKeyId)&&(l.value=n.apiKeyId,A.keyId=n.apiKeyId),re(),ke(),ce(),ve(),Ce(),qt()}catch(s){L(s.message||e("chat.loadFail"))}}function Ge(){const a=Ut();return!a||String(a).startsWith("admin-session:")||!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(a)?null:a}async function Qe(){const a=bs();if(!a.length&&!M.summary)return;if(w.saving){w.saveQueued=!0;return}w.saving=!0,w.saveQueued=!1,fe();const s={messages:a,model:A.model||null,systemPrompt:A.systemPrompt||"",apiKeyId:Ge(),...$s()};try{if(w.conversationId)await $(`/conversations/${w.conversationId}`,{method:"PATCH",body:JSON.stringify(s)});else{if(!a.length)return;const n=await $("/conversations",{method:"POST",body:JSON.stringify({...s,title:""})}),o=n.data||n;w.conversationId=o.id}await $e()}catch(n){console.warn(n)}finally{w.saving=!1,w.saveQueued&&(w.saveQueued=!1,Qe().catch(()=>{}))}}async function Is(a){if(await F({title:e("chat.deleteConversation"),message:e("chat.deleteConfirm"),variant:"danger",confirmText:e("chat.deleteConversation")}))try{await $(`/conversations/${a}`,{method:"DELETE"}),w.conversationId===a&&(w.conversationId=null,N=[],U=[],Ma(),re(),ke(),ve(),Ce()),w.historyItems.length<=1&&w.historyPage>0&&(w.historyPage-=1),await $e()}catch(s){L(s.message||e("common.requestFailed"))}}function qs(a=!0){Z&&Z.abort(),N=[],U=[],w.conversationId=null,Ma(),a||(A.systemPrompt="",A.systemOpen=!1),re(),ke(),ce(),ve(),Ce()}function ze(){return u.key}function Ut(){const s=document.getElementById("chat-key-select")?.value||A.keyId||"";return s&&s!=="session"?s:u.me?.id||""}function fe(){const a=document.getElementById("chat-key-select"),s=document.getElementById("chat-model"),n=document.getElementById("chat-reasoning"),o=document.getElementById("chat-system");a&&(A.keyId=a.value==="session"?"":a.value),s&&(A.model=s.value),n&&(A.reasoning=n.checked),o&&(A.systemPrompt=o.value)}function ke(){const a=document.getElementById("chat-pending");if(a){if(!U.length){a.innerHTML="",a.hidden=!0;return}a.hidden=!1,a.innerHTML=U.map((s,n)=>`
      <div class="chat-pending-item" title="${t(s.name)}">
        <span class="name">${t(s.name)}</span>
        <span class="muted">${ye(s.size)}</span>
        <button type="button" class="rm" data-rm-doc="${n}" aria-label="${t(e("chat.removeFile"))}">×</button>
      </div>`).join(""),a.querySelectorAll("[data-rm-doc]").forEach(s=>{s.onclick=()=>{const n=Number(s.getAttribute("data-rm-doc"));U.splice(n,1),ke()}})}}function Ts(a,s){return`${a}:${(s||"").length}:${(s||"").slice(0,40)}`}function re(){const a=document.getElementById("chat-messages");if(!a)return;const s=a.scrollHeight-a.scrollTop-a.clientHeight<120,n=N.some(d=>d.streaming),o=document.getElementById("chat-stream-status");if(o&&(o.hidden=!n,o.textContent=n?e("chat.streaming"):""),!N.length){a.innerHTML=`
      <div class="chat-empty">
        <strong>${t(e("chat.emptyTitle"))}</strong>
        <p>${t(e("chat.emptyHint"))}</p>
      </div>`,Oe();return}const i=N.length,r=Math.max(0,i-xa);he>r&&(he=r);const l=he,c=N.slice(l),m=l,p=m>0?`<div class="chat-load-older">
          <button type="button" class="btn secondary sm" id="chat-load-older">${t(P("chat.loadOlder",{n:m}))}</button>
        </div>`:"";a.innerHTML=p+c.map((d,y)=>{const f=l+y,h=d.role==="user"?"user":"assistant",v=d.role==="user"?e("chat.you"):e("chat.assistant"),b=d.docs&&d.docs.length?`<div class="chat-attach-list">${d.docs.map(B=>`<span class="chat-attach-chip" title="${t(B.name)}"><span>📎 ${t(B.name)}</span></span>`).join("")}</div>`:"",H=!!d.reasoning?`<details class="chat-reasoning" ${d.streaming||!d.content?"open":""}>
            <summary>${t(e("chat.reasoning"))}${d.streaming&&!d.content?` · ${t(e("chat.streaming"))}`:""}</summary>
            <pre>${t(d.reasoning)}</pre>
          </details>`:"";let T=d.content||"";!T&&d.streaming&&(T=d.reasoning?"":"…");const R=d.error?" error":"",E=d.streaming?" is-streaming":"",C=h==="assistant"&&!d.streaming&&!!T;let D;if(C){const B=Ts(f,T);if(pe.has(B))D=pe.get(B);else if(D=da(T),pe.set(B,D),pe.size>200){const ee=pe.keys().next().value;pe.delete(ee)}}else D=t(T);const k=!d.streaming&&T.length>ys,S=`${C?"chat-content md":"chat-content"}${k?" is-collapsible":""}`,I=k?`<button type="button" class="btn ghost sm chat-expand-btn" data-expand="${f}">${t(e("chat.showMore"))}</button>`:"",W=T?`<button type="button" class="chat-copy-btn" data-copy-msg="${f}" title="${t(e("chat.copy"))}">${t(e("chat.copy"))}</button>`:"";return`<div class="chat-bubble ${h}${R}${E}" data-msg-idx="${f}">
        <div class="chat-bubble-head">
          <div class="chat-role">${t(v)}${d.streaming?` <span class="chat-live">${t(e("chat.streaming"))}</span>`:""}</div>
          ${W}
        </div>
        ${b}
        ${H}
        <div class="${S}" data-content-idx="${f}">${D}${d.streaming?'<span class="chat-cursor">▍</span>':""}</div>
        ${I}
      </div>`}).join(""),(s||n)&&(a.scrollTop=a.scrollHeight),Oe(),document.getElementById("chat-load-older")?.addEventListener("click",()=>{const d=a.scrollHeight;he=Math.max(0,he-fs),re();const y=document.getElementById("chat-messages");y&&(y.scrollTop=y.scrollHeight-d)}),a.querySelectorAll("[data-expand]").forEach(d=>{d.addEventListener("click",()=>{const y=a.querySelector(`[data-content-idx="${d.getAttribute("data-expand")}"]`);y&&(y.classList.toggle("is-expanded"),d.textContent=y.classList.contains("is-expanded")?e("chat.showLess"):e("chat.showMore"))})}),a.querySelectorAll("[data-copy-msg]").forEach(d=>{d.addEventListener("click",async y=>{y.preventDefault(),y.stopPropagation();const f=Number(d.getAttribute("data-copy-msg")),h=N[f];if(!h?.content)return;if(await Rt(h.content)){const b=d.textContent;d.textContent=e("chat.copied"),d.classList.add("is-copied"),setTimeout(()=>{d.isConnected&&(d.textContent=b||e("chat.copy"),d.classList.remove("is-copied"))},1600)}else L(e("chat.copyFail"))})})}function kt(a){const n=a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),o=n.pop()||"",i=[];for(const r of n){const l=r.trim();if(!l||l.startsWith(":")||!l.startsWith("data:"))continue;const c=l.slice(5).trim();c&&i.push(c)}return{events:i,rest:o}}function Ze(a,s){if(!s||typeof s!="object")return!1;if(s.error){const r=s.error.message||s.error.code||e("common.requestFailed");return a.error=!0,a.content=(a.content||"")+`
✗ ${r}`,!0}const n=s.choices?.[0]?.delta||{};let o=!1;n.reasoning_content&&(a.reasoning=(a.reasoning||"")+n.reasoning_content,o=!0),(n.thought&&!n.reasoning_content||n.thought&&n.reasoning_content&&n.thought!==n.reasoning_content)&&(a.reasoning=(a.reasoning||"")+n.thought,o=!0),typeof n.content=="string"&&n.content.length&&(a.content=(a.content||"")+n.content,o=!0);const i=s.choices?.[0]?.message;return i&&(i.content&&!a.content&&(a.content=i.content,o=!0),i.reasoning_content&&!a.reasoning&&(a.reasoning=i.reasoning_content,o=!0)),o}function Cs(a,s){const n=ze();return n?new Promise((o,i)=>{const r=new FormData;r.append("file",a,a.name);const l=Ge();l&&r.append("apiKeyId",l);const c=new XMLHttpRequest;c.open("POST","/admin/api/documents"),c.setRequestHeader("Authorization",`Bearer ${n}`),c.upload.onprogress=m=>{if(s)if(m.lengthComputable&&m.total>0){const p=Math.min(100,Math.round(m.loaded/m.total*100));s({loaded:m.loaded,total:m.total,percent:p})}else s({loaded:m.loaded||0,total:0,percent:-1})},c.onload=()=>{let m=null;try{m=c.responseText?JSON.parse(c.responseText):null}catch{m=null}if(c.status<200||c.status>=300){const y=m?.error?.message||m?.message||c.responseText||c.statusText;i(new Error(y||e("chat.uploadFail")));return}const p=m?.data||m,d=p?.id;if(!d||typeof d!="string"){i(new Error(e("chat.uploadFail")));return}o({id:d,name:p.originalName||p.filename||a.name,mime:p.mimeType||a.type||"",size:p.sizeBytes??p.size??a.size??0})},c.onerror=()=>i(new Error(e("chat.uploadFail"))),c.onabort=()=>i(new Error(e("chat.uploadFail"))),c.send(r)}):Promise.reject(new Error(e("chat.needKey")))}function et(a){const s=document.getElementById("chat-upload-progress");if(!s)return;const{visible:n,fileName:o,fileIndex:i,fileTotal:r,percent:l,indeterminate:c}=a;if(!n){s.hidden=!0,s.setAttribute("aria-hidden","true");return}s.hidden=!1,s.setAttribute("aria-hidden","false");const m=document.getElementById("chat-upload-label"),p=document.getElementById("chat-upload-bar"),d=document.getElementById("chat-upload-pct"),y=o||"",f=i||1,h=r||1;m&&(m.textContent=h>1?P("chat.uploadProgressMulti",{name:y,i:f,n:h}):P("chat.uploadProgress",{name:y}));const v=!!c||l<0;p&&(p.classList.toggle("is-indeterminate",v),v?p.style.width="40%":p.style.width=`${Math.max(0,Math.min(100,l))}%`),d&&(d.textContent=v?e("chat.uploading"):P("common.percent",{n:Math.max(0,Math.min(100,l))}))}function Bs(a){const s=Array.isArray(a)?a:[];if(!s.length)return{added:0,skipped:0};let n=0,o=0;const i=new Set(U.map(r=>r.id));for(const r of s){if(U.length>=dt){o+=s.length-n-o;break}const l=r?.id,c=r?.name||r?.originalName||"";if(!l||!Kt.test(String(l))){o+=1;continue}if(!ct(c)){o+=1;continue}if(i.has(l)){o+=1;continue}U.push({id:l,name:c||l,mime:r.mime||r.mimeType||"",size:r.size??r.sizeBytes??0}),i.add(l),n+=1}return ke(),{added:n,skipped:o}}async function As(){if(!ze()){L(e("chat.needKey"));return}const a=Ge(),s=Math.max(0,dt-U.length);if(s<=0){L(e("chat.tooManyFiles"));return}const n=new Map;let o=0;ft({title:e("chat.libraryTitle"),subtitle:t(e("chat.librarySubtitle")),size:"md",bodyHtml:`
      <div class="chat-lib">
        <div class="chat-lib-toolbar">
          <input type="search" id="chat-lib-q" class="chat-lib-search" placeholder="${t(e("chat.librarySearch"))}" autocomplete="off" />
          <span class="muted chat-lib-count" id="chat-lib-count">${t(P("chat.librarySelected",{n:0}))}</span>
        </div>
        <div class="muted chat-lib-formats">${t(e("chat.formatsLabel"))}: ${t(ut())}</div>
        <div id="chat-lib-list" class="chat-lib-list" role="listbox" aria-multiselectable="true">
          <div class="muted chat-lib-status">${t(e("common.loading")||"…")}</div>
        </div>
      </div>`,footerHtml:`
      <button type="button" class="btn secondary sm" id="chat-lib-cancel">${t(e("common.cancel"))}</button>
      <button type="button" class="btn sm" id="chat-lib-add" disabled>${t(e("chat.libraryAdd"))}</button>`});const i=document.getElementById("chat-lib-list"),r=document.getElementById("chat-lib-q"),l=document.getElementById("chat-lib-count"),c=document.getElementById("chat-lib-add");document.getElementById("chat-lib-cancel")?.addEventListener("click",()=>de());const m=()=>{l&&(l.textContent=P("chat.librarySelected",{n:n.size})),c&&(c.disabled=n.size===0,c.textContent=n.size>0?`${e("chat.libraryAdd")} (${n.size})`:e("chat.libraryAdd"))},p=f=>{if(!i)return;const h=new Set(U.map(b=>b.id)),v=(f||[]).filter(b=>ct(b.originalName));if(!v.length){i.innerHTML=`<div class="data-empty chat-lib-empty"><strong>${t(e("chat.libraryEmpty"))}</strong></div>`;return}i.innerHTML=v.map(b=>{const x=h.has(b.id),H=n.has(b.id),T=x&&!H;return`
          <label class="chat-lib-row ${x?"is-already":""} ${H?"is-selected":""}" data-id="${t(b.id)}">
            <input type="checkbox" data-lib-id="${t(b.id)}" ${H?"checked":""} ${T?"disabled":""} />
            <span class="chat-lib-meta">
              <span class="chat-lib-name" title="${t(b.originalName)}">${t(b.originalName)}</span>
              <span class="muted">${t(b.mimeType||"")} · ${ye(b.sizeBytes||0)}${x?` · ${t(e("chat.libraryAlready"))}`:""}</span>
            </span>
          </label>`}).join(""),i.querySelectorAll("input[data-lib-id]").forEach(b=>{b.addEventListener("change",()=>{const x=b.getAttribute("data-lib-id"),H=v.find(R=>R.id===x);if(!H)return;if(b.checked){if(n.size>=s&&!n.has(x)){b.checked=!1,L(e("chat.tooManyFiles"));return}n.set(x,H)}else n.delete(x);const T=b.closest(".chat-lib-row");T&&T.classList.toggle("is-selected",b.checked),m()})})},d=async()=>{const f=++o;i&&(i.innerHTML=`<div class="muted chat-lib-status">${t(e("common.loading")||"…")}</div>`);try{const h=new URLSearchParams({limit:"50",offset:"0"});a&&h.set("apiKeyId",a);const v=(r?.value||"").trim();v&&h.set("q",v);const b=await $(`/documents?${h}`);if(f!==o)return;p(b.data||[])}catch(h){if(f!==o)return;i&&(i.innerHTML=`<div class="error-box">${t(h.message||e("chat.libraryLoadFail"))}</div>`)}};let y=null;r?.addEventListener("input",()=>{y&&clearTimeout(y),y=setTimeout(()=>d(),280)}),c?.addEventListener("click",()=>{const f=[...n.values()],{added:h}=Bs(f.map(v=>({id:v.id,name:v.originalName,mime:v.mimeType,size:v.sizeBytes})));de(),h>0&&L("")}),m(),await d(),r?.focus()}async function Ta(a){const s=[...a||[]];if(!s.length)return;if(!ze()){L(e("chat.needKey"));return}const n=s.filter(c=>!ct(c.name)),o=s.filter(c=>ct(c.name));if(n.length&&(L(P("chat.formatsReject",{name:n.map(c=>c.name).join(", "),formats:ut()})),!o.length))return;if(U.length+o.length>dt){L(e("chat.tooManyFiles"));return}const i=document.getElementById("chat-attach"),r=document.getElementById("chat-send");i&&(i.disabled=!0,i.textContent=e("chat.uploading")),r&&(r.disabled=!0);const l=o.length;try{let c=0;for(const m of o){if(U.length>=dt)break;c+=1,et({visible:!0,fileName:m.name,fileIndex:c,fileTotal:l,percent:0,indeterminate:!1});const p=await Cs(m,({percent:d})=>{et({visible:!0,fileName:m.name,fileIndex:c,fileTotal:l,percent:d<0?0:d,indeterminate:d<0})});et({visible:!0,fileName:m.name,fileIndex:c,fileTotal:l,percent:100,indeterminate:!1}),U.some(d=>d.id===p.id)||U.push(p),ke()}n.length||L("")}catch(c){L(c.message||e("chat.uploadFail"))}finally{et({visible:!1}),i&&(i.disabled=!1,i.textContent=e("chat.attach")),r&&(r.disabled=!1)}}function Ls(){const a=u.me?.id||"",s=u.me?`${e("chat.useSessionKey")} · ${u.me.name||""} (${u.me.keyPrefix||""}…)`:e("chat.useSessionKey"),n=A.keyId||"session",o=(u.keys||[]).filter(r=>r.isActive!==!1),i=[`<option value="session" ${n==="session"||n===a||!n?"selected":""}>${t(s)}</option>`];for(const r of o){if(a&&r.id===a)continue;const l=`${r.name||"key"} · ${r.keyPrefix||""}… · ${r.role||""}/${r.mode||""}`;i.push(`<option value="${t(r.id)}" ${n===r.id?"selected":""}>${t(l)}</option>`)}return i.join("")}async function Hs(){await Promise.all([rt(!1),ht()]);const a=u.models||[];!A.model&&a.length&&(A.model=a[0]);const s=a.map(m=>`<option value="${t(m)}" ${A.model===m?"selected":""}>${t(m)}</option>`).join("");It(!1),document.getElementById("app").innerHTML=z(`
    <div class="chat-page" id="chat-page">
      <div class="chat-drop-overlay" id="chat-drop-overlay" hidden aria-hidden="true">
        <div class="chat-drop-overlay-card">
          <div class="chat-drop-overlay-icon" aria-hidden="true">📎</div>
          <strong>${t(e("chat.dropTitle"))}</strong>
          <span class="muted">${t(e("chat.dropHint"))}</span>
        </div>
      </div>
      <div class="topbar">
        <h2>${t(e("chat.title"))}</h2>
        <div class="toolbar">
          <button type="button" class="btn secondary sm" id="chat-history-toggle">${t(e("chat.historyOpen"))}</button>
          <button type="button" class="btn secondary sm" id="chat-compress" title="${t(e("chat.compress"))}">${t(e("chat.compress"))}</button>
          <button type="button" class="btn secondary sm" id="chat-new">${t(e("chat.new"))}</button>
        </div>
      </div>
      <div class="chat-body">
        <div class="chat-history-backdrop" id="chat-history-backdrop"></div>
        <div class="chat-shell">
          <div class="chat-toolbar">
            <label>${t(e("chat.keySelect"))}
              <select id="chat-key-select">${Ls()}</select>
            </label>
            <label>${t(e("chats.model"))}
              <select id="chat-model">${s||'<option value="grok-4.5">grok-4.5</option>'}</select>
            </label>
            <label class="check-inline" for="chat-reasoning">
              <input type="checkbox" id="chat-reasoning" ${A.reasoning!==!1?"checked":""} />
              ${t(e("chat.includeReasoning"))}
            </label>
            <label class="chat-ctx-label">${t(e("chat.ctxMode"))}
              <select id="chat-ctx-mode">
                <option value="full">${t(e("chat.ctxModeFull"))}</option>
                <option value="summary">${t(e("chat.ctxModeSummary"))}</option>
                <option value="recent">${t(e("chat.ctxModeRecent"))}</option>
              </select>
            </label>
            <label class="chat-ctx-label chat-ctx-n-label">${t(e("chat.ctxRecentN"))}
              <input type="number" id="chat-ctx-n" min="2" max="40" value="${M.recentN}" />
            </label>
            <button type="button" class="btn ghost sm" id="chat-system-toggle" title="${t(e("chat.systemHint"))}">
              ${t(e("chat.systemPrompt"))}${A.systemPrompt?" ·":""}
            </button>
          </div>
          <div class="chat-system-wrap" id="chat-system-wrap" ${A.systemOpen||A.systemPrompt?"":"hidden"}>
            <label class="chat-system-label" for="chat-system">${t(e("chat.systemPrompt"))}
              <span class="hint">${t(e("chat.systemHint"))}</span>
            </label>
            <textarea id="chat-system" rows="3" placeholder="${t(e("chat.systemPlaceholder"))}">${t(A.systemPrompt||"")}</textarea>
          </div>
          <div id="chat-compress-banner" class="chat-compress-banner" hidden></div>
          <div id="chat-messages" class="chat-messages"></div>
          <div class="chat-composer" id="chat-composer">
            <div id="chat-pending" class="chat-pending" hidden></div>
            <div id="chat-upload-progress" class="chat-upload-progress" hidden aria-hidden="true">
              <div class="chat-upload-meta">
                <span id="chat-upload-label" class="chat-upload-label"></span>
                <span id="chat-upload-pct" class="chat-upload-pct"></span>
              </div>
              <div class="chat-upload-track" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                <div id="chat-upload-bar" class="chat-upload-bar"></div>
              </div>
            </div>
            <div id="chat-stream-status" class="chat-stream-status" hidden></div>
            <textarea id="chat-input" rows="2" placeholder="${t(e("chat.placeholder"))}"></textarea>
            <div class="chat-composer-actions">
              <div class="chat-composer-left">
                <input type="file" id="chat-file" class="chat-file-input" multiple accept="${t(Na)}" />
                <button type="button" class="btn secondary sm" id="chat-attach" title="${t(e("chat.attachHint"))}">${t(e("chat.attach"))}</button>
                <button type="button" class="btn secondary sm" id="chat-attach-lib" title="${t(e("chat.libraryTitle"))}">${t(e("chat.attachLibrary"))}</button>
                <span class="chat-formats-hint" title="${t(ut())}">
                  <span class="chat-formats-label">${t(e("chat.formatsLabel"))}</span>
                  <span class="muted">${t(ut())}</span>
                </span>
              </div>
              <div class="chat-composer-right">
                <button type="button" class="btn secondary sm" id="chat-stop" disabled>${t(e("chat.stop"))}</button>
                <button type="button" class="btn sm" id="chat-send">${t(e("chat.send"))}</button>
              </div>
            </div>
          </div>
        </div>
        <aside class="chat-history-rail" id="chat-history-rail" aria-label="${t(e("chat.history"))}">
          <div class="chat-history-head">
            <div class="chat-history-head-row">
              <h3>${t(e("chat.history"))}</h3>
              <button type="button" class="btn ghost sm" id="chat-history-close-mobile" aria-label="${t(e("chat.historyClose"))}">×</button>
            </div>
            <input type="search" id="chat-history-search" class="chat-history-search" placeholder="${t(e("chat.historySearch"))}" value="${t(w.historyQ)}" />
          </div>
          <ul class="chat-history-list" id="chat-history-list"></ul>
          <div class="chat-history-pager" id="chat-history-pager"></div>
        </aside>
      </div>
    </div>
  `),J(),re(),ke(),ce(),Oe(),ve(),Ce(),$e().catch(()=>{}),document.getElementById("chat-key-select").onchange=()=>fe();const n=document.getElementById("chat-ctx-mode"),o=document.getElementById("chat-ctx-n");n&&(n.onchange=()=>{const m=n.value;if(m==="summary"&&!M.summary){L(e("chat.compressNeedSummary")),n.value=M.mode==="recent"?"recent":"full";return}M.mode=m==="summary"||m==="recent"?m:"full",ve(),Ce(),Qe().catch(()=>{})}),o&&(o.onchange=()=>{M.recentN=Math.min(40,Math.max(2,Number(o.value)||6)),ve(),Qe().catch(()=>{})}),document.getElementById("chat-model").onchange=()=>fe(),document.getElementById("chat-reasoning").onchange=()=>fe(),document.getElementById("chat-system").oninput=()=>fe(),document.getElementById("chat-system-toggle").onclick=()=>{fe(),A.systemOpen=!A.systemOpen;const m=document.getElementById("chat-system-wrap");m&&(m.hidden=!A.systemOpen&&!A.systemPrompt.trim()),A.systemOpen&&document.getElementById("chat-system")?.focus()},document.getElementById("chat-new").onclick=()=>{qs(!0)},document.getElementById("chat-compress").onclick=()=>{Ms().catch(()=>{})},document.getElementById("chat-stop").onclick=()=>{Z&&Z.abort()},document.getElementById("chat-send").onclick=()=>ta(),document.getElementById("chat-attach").onclick=()=>{document.getElementById("chat-file")?.click()},document.getElementById("chat-attach-lib")?.addEventListener("click",()=>{As().catch(m=>L(m.message||e("chat.libraryLoadFail")))}),document.getElementById("chat-file").onchange=m=>{const p=m.target;Ta(p.files).finally(()=>{p.value=""})};const i=document.getElementById("chat-history-toggle"),r=document.getElementById("chat-history-backdrop"),l=document.getElementById("chat-history-close-mobile");i&&(i.onclick=()=>{It(!w.historyOpenMobile)}),r&&(r.onclick=()=>qt()),l&&(l.onclick=()=>qt());const c=document.getElementById("chat-history-search");c&&(c.oninput=()=>{w.historyQ=c.value,bt&&clearTimeout(bt),bt=setTimeout(()=>{w.historyPage=0,$e()},280)}),Os(),document.getElementById("chat-input").onkeydown=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),ta())}}function Os(){const a=document.getElementById("chat-page"),s=document.getElementById("chat-drop-overlay"),n=document.getElementById("chat-composer");if(!a)return;let o=0;const i=f=>{const h=f.dataTransfer?.types;return h?typeof h.includes=="function"?h.includes("Files"):[...h].includes("Files"):!1},r=f=>{a.classList.toggle("is-file-drag",f),n&&n.classList.toggle("is-dragover",f),s&&(s.hidden=!f,s.setAttribute("aria-hidden",f?"false":"true"))},l=f=>{i(f)&&(f.preventDefault(),f.stopPropagation(),o+=1,r(!0))},c=f=>{i(f)&&(f.preventDefault(),f.stopPropagation(),f.dataTransfer&&(f.dataTransfer.dropEffect="copy"),r(!0))},m=f=>{i(f)&&(f.preventDefault(),f.stopPropagation(),o=Math.max(0,o-1),o===0&&r(!1))},p=f=>{if(!i(f))return;f.preventDefault(),f.stopPropagation(),o=0,r(!1);const h=f.dataTransfer?.files;h?.length&&Ta(h).catch(v=>L(v.message||e("chat.uploadFail")))};a.addEventListener("dragenter",l),a.addEventListener("dragover",c),a.addEventListener("dragleave",m),a.addEventListener("drop",p);const d=f=>{u.page==="chat"&&i(f)&&f.preventDefault()},y=f=>{u.page==="chat"&&i(f)&&f.preventDefault()};window.addEventListener("dragover",d),window.addEventListener("drop",y),a._chatDropCleanup=()=>{window.removeEventListener("dragover",d),window.removeEventListener("drop",y)}}function Ds(a){const s=new Set,n=[],o=i=>{if(!i||typeof i!="string")return;const r=i.trim();!Kt.test(r)||s.has(r)||(s.add(r),n.push(r))};for(const i of a||[])o(i?.id);for(const i of N)if(i?.docs?.length)for(const r of i.docs)o(r?.id);return n}async function ta(){fe();const a=document.getElementById("chat-input");let s=a?.value.trim()||"";const n=[...U];if(!s&&!n.length){L(e("chat.needContent"));return}const o=ze();if(!o){L(e("chat.needKey"));return}if(!s&&n.length&&(s=e("chat.fileOnlyPrompt")),n.filter(x=>!x?.id||!Kt.test(String(x.id))).length){L(e("chat.uploadFail"));return}const r=document.getElementById("chat-model")?.value||A.model||"grok-4.5",l=document.getElementById("chat-reasoning")?.checked!==!1;Ut();const c=n.map(x=>({id:x.id,name:x.name})),m=Ds(n);N.push({role:"user",content:s,docs:c.length?c:void 0}),a&&(a.value=""),U=[],ke();const p={role:"assistant",content:"",reasoning:"",streaming:!0};N.push(p),he=Math.max(0,N.length-xa),re();const y=ws(),f=document.getElementById("chat-send"),h=document.getElementById("chat-stop"),v=document.getElementById("chat-attach"),b=document.getElementById("chat-attach-lib");f&&(f.disabled=!0),v&&(v.disabled=!0),b&&(b.disabled=!0),h&&(h.disabled=!1),Z=new AbortController;try{const x={model:r,stream:!0,include_reasoning:l,messages:y};m.length&&(x.document_ids=m);const H=Ge();H&&(x.apiKeyId=H);const T=await fetch("/admin/api/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(x),signal:Z.signal});if(!T.ok){const R=await T.text();let E=R;try{E=JSON.parse(R).error?.message||R}catch{}throw new Error(E||T.statusText)}if(T.body&&typeof T.body.getReader=="function"){const R=T.body.getReader(),E=new TextDecoder;let C="",D=0;const k=(S=!1)=>{const I=performance.now();(S||I-D>40)&&(D=I,re())};for(;;){const{done:S,value:I}=await R.read();if(S)break;C+=E.decode(I,{stream:!0});const{events:W,rest:B}=kt(C);C=B;let ee=!1;for(const Re of W)if(Re!=="[DONE]")try{const Je=JSON.parse(Re);Ze(p,Je)&&(ee=!0)}catch{}ee&&k(!1)}if(C.trim()){const{events:S}=kt(C+`
`);for(const I of S)if(I!=="[DONE]")try{Ze(p,JSON.parse(I))}catch{}}k(!0)}else{const R=await T.text(),{events:E}=kt(R+`
`);for(const C of E)if(C!=="[DONE]")try{Ze(p,JSON.parse(C))}catch{try{const D=JSON.parse(R);Ze(p,D)}catch{}}re()}!p.content&&!p.reasoning&&(p.content=e("chat.emptyReply")),L("")}catch(x){x.name==="AbortError"?p.content=(p.content||"")+`
[${e("chat.stopped")}]`:(p.error=!0,p.content=(p.content||"")+`
✗ ${x.message||x}`,L(x.message||String(x)))}finally{p.streaming=!1,Z=null,re(),Oe(),f&&(f.disabled=!1),v&&(v.disabled=!1),b&&(b.disabled=!1),h&&(h.disabled=!0),Qe().catch(()=>{})}}async function yt(){const a=document.getElementById("app");try{if(!u.key){await ha();return}u.me||await ma(),u.page==="dashboard"?await St():u.page==="chat"?await Hs():u.page==="chats"?await tt():u.page==="keys"?await xe():u.page==="documents"?await _e():u.page==="media"?await Ae():u.page==="audit"?await at():u.page==="settings"?await ka():u.page==="apiFeatures"?await st():u.page==="usage"?await X():u.page==="ddos"?await G():u.page==="queue"?await j():u.page==="pm2"?await me():u.page==="system"?await wa():await St()}catch(s){a.innerHTML=z(`<div class="error-box">${t(s.message)}</div>`),J()}}let Me=null;const Q={status:"",limit:20,offset:0};function Wt(a){return!a||a<0?"—":a<1e3?`${a}ms`:a<6e4?`${Math.round(a/1e3)}s`:a<36e5?`${Math.round(a/6e4)}m`:`${(a/36e5).toFixed(1)}h`}const Rs=["enabled","globalConcurrency","perKeyConcurrency","maxQueueDepth","maxQueueDepthPerKey","fairness","defaultPriority","playgroundPriority","leaseMs","maxWaitMs"];function Ca(){return{relaxed:{enabled:!0,globalConcurrency:6,perKeyConcurrency:2,maxQueueDepth:200,maxQueueDepthPerKey:40,fairness:"weighted_round_robin",defaultPriority:100,playgroundPriority:40,leaseMs:6e4,maxWaitMs:9e5},balanced:{enabled:!0,globalConcurrency:4,perKeyConcurrency:1,maxQueueDepth:100,maxQueueDepthPerKey:20,fairness:"weighted_round_robin",defaultPriority:100,playgroundPriority:50,leaseMs:45e3,maxWaitMs:6e5},strict:{enabled:!0,globalConcurrency:2,perKeyConcurrency:1,maxQueueDepth:40,maxQueueDepthPerKey:8,fairness:"fifo_global",defaultPriority:100,playgroundPriority:80,leaseMs:3e4,maxWaitMs:3e5}}}function aa(a){if(!a)return{};const s={};for(const n of Rs){const o=a[n];typeof o=="boolean"?s[n]=o:typeof o=="number"&&Number.isFinite(o)?s[n]=Math.round(o):typeof o=="string"?s[n]=o:o==null?s[n]=null:s[n]=o}return s}function Ba(a,s){return JSON.stringify(aa(a))===JSON.stringify(aa(s))}function Tt(a){if(!a)return"custom";const s=Ca();for(const n of["relaxed","balanced","strict"])if(Ba(a,s[n]))return n;return"custom"}function Fs(a){return e(a==="relaxed"?"queue.presetRelaxed":a==="balanced"?"queue.presetBalanced":a==="strict"?"queue.presetStrict":"queue.presetCustom")}function Aa(a,{unsaved:s=!1}={}){const n=Fs(a),o=a==="relaxed"?"relaxed":a==="balanced"?"balanced":a==="strict"?"strict":"custom",i=s?P("queue.presetFormLabel",{name:n}):P("queue.presetActiveLabel",{name:n});return`<span class="ddos-preset-badge is-${o}" id="queue-preset-badge" title="${t(i)}">${t(i)}</span>`}function La(){return{enabled:document.getElementById("q-master-enabled")?Ee("q-master-enabled"):!0,globalConcurrency:Math.max(1,Math.min(64,Math.floor(O("qp-gconc",4)))),perKeyConcurrency:Math.max(1,Math.min(16,Math.floor(O("qp-kconc",1)))),maxQueueDepth:Math.max(1,Math.floor(O("qp-depth",100))),maxQueueDepthPerKey:Math.max(1,Math.floor(O("qp-depthk",20))),fairness:document.getElementById("qp-fair")?.value==="fifo_global"?"fifo_global":"weighted_round_robin",defaultPriority:Math.max(0,Math.min(1e3,Math.floor(O("qp-pri",100)))),playgroundPriority:Math.max(0,Math.min(1e3,Math.floor(O("qp-ppri",50)))),leaseMs:Math.max(5e3,Math.floor(O("qp-lease",45e3))),maxWaitMs:Math.max(5e3,Math.floor(O("qp-wait",6e5)))}}function mt(a){Ie("q-master-enabled",a,e("queue.masterOn"),e("queue.masterOff")),Te("queue-root",!a),qe("queue-disabled-banner",!a);const s=document.getElementById("qk-pill-enabled");s&&(s.innerHTML=ge(a,e("dash.on"),e("dash.off")))}function Ns(a){if(!a)return;const s=(o,i)=>{const r=document.getElementById(o);r&&(r.value=String(i))};mt(a.enabled!==!1),s("qp-gconc",a.globalConcurrency),s("qp-kconc",a.perKeyConcurrency),s("qp-depth",a.maxQueueDepth),s("qp-depthk",a.maxQueueDepthPerKey);const n=document.getElementById("qp-fair");n&&(n.value=a.fairness||"weighted_round_robin"),s("qp-pri",a.defaultPriority),s("qp-ppri",a.playgroundPriority),s("qp-lease",a.leaseMs),s("qp-wait",a.maxWaitMs),Ue()}function Ue(){if(!document.getElementById("queue-policy-panel"))return;let a;try{a=La()}catch{return}const s=Tt(a),n=Tt(u._queuePolicyCache||a),o=!Ba(a,u._queuePolicyCache||a);document.querySelectorAll("[data-queue-preset]").forEach(l=>{const c=l.dataset.queuePreset;if(c==="custom"){const y=s==="custom";l.classList.toggle("is-active",y),l.setAttribute("aria-pressed",y?"true":"false"),l.disabled=!y;return}const m=c===s,p=c===n;l.classList.toggle("is-active",m),l.classList.toggle("is-saved",p&&!m),l.setAttribute("aria-pressed",m?"true":"false");const d=e(c==="relaxed"?"queue.presetRelaxed":c==="balanced"?"queue.presetBalanced":"queue.presetStrict");m&&p?l.innerHTML=`${t(d)} <span class="preset-tag">${t(e("queue.presetTagActive"))}</span>`:m&&o?l.innerHTML=`${t(d)} <span class="preset-tag preset-tag--draft">${t(e("queue.presetTagDraft"))}</span>`:p?l.innerHTML=`${t(d)} <span class="preset-tag preset-tag--saved">${t(e("queue.presetTagSaved"))}</span>`:l.textContent=d});const i=document.getElementById("queue-preset-badge");i&&(i.outerHTML=Aa(s,{unsaved:o&&s!==n}));const r=document.getElementById("queue-preset-hint");if(r){const l={relaxed:e("queue.presetRelaxedHint"),balanced:e("queue.presetBalancedHint"),strict:e("queue.presetStrictHint"),custom:e("queue.presetCustomHint")};r.textContent=l[s]||l.custom}}function _s(){document.querySelectorAll("[data-queue-preset]").forEach(a=>{a.dataset.queuePreset!=="custom"&&(a.onclick=()=>{const s=a.dataset.queuePreset,n=Ca()[s];n&&Ns(n)})}),["qp-gconc","qp-kconc","qp-depth","qp-depthk","qp-fair","qp-pri","qp-ppri","qp-lease","qp-wait"].forEach(a=>{const s=document.getElementById(a);s&&(s.addEventListener("change",()=>Ue()),s.addEventListener("input",()=>Ue()))}),Ue()}function sa(){return document.querySelector(".main")}function Ha(a){return a.map(s=>{const n=s.status==="queued"||s.status==="leased"||s.status==="running",o=s.status==="failed"||s.status==="dead"||s.status==="cancelled",i=s.startedAt||s.finishedAt?null:s.queuedAt?Date.now()-new Date(s.queuedAt).getTime():null;return`
    <tr>
      <td>
        <div class="cell-primary mono">${t((s.id||"").slice(0,10))}…</div>
        <div class="cell-sub mono" title="${t(s.requestId||"")}">${t((s.requestId||"").slice(0,18))}${(s.requestId||"").length>18?"…":""}</div>
        ${s.errorMessage?`<div class="queue-job-err" title="${t(s.errorMessage)}">${t(String(s.errorMessage).slice(0,100))}</div>`:""}
      </td>
      <td>${ja(s.source)}</td>
      <td>
        ${Qa(s.status)}
        ${s.cancelRequested?`<div class="cell-sub">${t(e("queue.cancelReq"))}</div>`:""}
      </td>
      <td class="mono">${t(s.model||"—")}</td>
      <td><span class="queue-pri">${s.priority??"—"}</span></td>
      <td>
        <div class="cell-primary mono">${t((s.apiKeyId||"").slice(0,8))}…</div>
      </td>
      <td class="mono">${s.attempt??0}<span class="muted">/${s.maxAttempts??1}</span></td>
      <td>
        <div class="cell-primary">${_(s.queuedAt)}</div>
        ${i!=null&&s.status==="queued"?`<div class="cell-sub">${t(e("queue.wait"))}: ${Wt(i)}</div>`:s.startedAt?`<div class="cell-sub">${t(e("queue.started"))}: ${_(s.startedAt)}</div>`:""}
      </td>
      <td class="row-actions">
        ${n?`<button type="button" class="btn danger sm" data-q-cancel="${t(s.id)}" title="${t(e("queue.cancel"))}">${t(e("queue.cancel"))}</button>`:""}
        ${s.status==="queued"?`<button type="button" class="btn secondary sm" data-q-pri="${t(s.id)}" data-pri="${s.priority}" title="${t(e("queue.priorityBtn"))}">${t(e("queue.priorityBtn"))}</button>`:""}
        ${o?`<button type="button" class="btn secondary sm" data-q-requeue="${t(s.id)}" title="${t(e("queue.requeue"))}">${t(e("queue.requeue"))}</button>`:""}
      </td>
    </tr>`}).join("")}function Oa(){document.querySelectorAll("[data-q-cancel]").forEach(a=>{a.onclick=async()=>{await F({title:e("queue.cancel"),message:e("queue.cancelConfirm"),variant:"danger",confirmText:e("queue.cancel")})&&(await $(`/queue/jobs/${a.dataset.qCancel}/cancel`,{method:"POST",body:"{}"}),j().catch(g))}}),document.querySelectorAll("[data-q-requeue]").forEach(a=>{a.onclick=async()=>{await $(`/queue/jobs/${a.dataset.qRequeue}/requeue`,{method:"POST",body:"{}"}),j().catch(g)}}),document.querySelectorAll("[data-q-pri]").forEach(a=>{a.onclick=async()=>{const s=Number(a.dataset.pri)||100,n=window.prompt(e("queue.priorityPh"),String(s));if(n==null)return;const o=Number(n);!Number.isFinite(o)||o<0||o>1e3||(await $(`/queue/jobs/${a.dataset.qPri}/priority`,{method:"POST",body:JSON.stringify({priority:o})}),j().catch(g))}})}function Da(a){return a.enabled?a.paused?e("queue.paused"):a.drainMode?e("queue.drain"):e("queue.running"):e("queue.modeOff")}function Ks({s:a,pol:s,jobs:n,total:o,by:i}){const r=a.dead??i.dead??0,l=a.leased??i.leased??0,c=a.running??i.running??0,m=a.queued??i.queued??0,p=a.depth??m+l+c,d=Da(s),y=s.fairness==="fifo_global"?e("queue.fifo"):e("queue.wrr"),f=(k,S)=>{const I=document.getElementById(k);I&&(I.textContent=S)},h=(k,S)=>{const I=document.getElementById(k);I&&(I.innerHTML=S)};f("qk-depth",String(p)),f("qk-depth-sub",P("queue.kpiDepthSub",{q:m,l})),h("qk-running",`${c}<span class="dash-kpi-den">/${s.globalConcurrency??"—"}</span>`),f("qk-running-sub",P("queue.kpiActiveSub",{n:a.workerActive??0})),f("qk-queued",String(m)),f("qk-dead",String(r)),f("qk-oldest",a.oldestQueuedAgeMs?Wt(a.oldestQueuedAgeMs):"—"),f("qk-mode",d),f("qk-mode-sub",y);const v=document.getElementById("qk-worker-id");if(v){const k=a.workerId||"—";v.textContent=k,v.title=k}const b=(k,S,I,W)=>{const B=document.getElementById(k);B&&(B.outerHTML=`<span id="${k}">${ge(S,I,W)}</span>`)};b("qk-pill-enabled",s.enabled!==!1,e("dash.on"),e("dash.off")),b("qk-pill-consumer",!s.paused&&s.enabled!==!1,e("queue.running"),s.paused?e("queue.paused"):e("queue.modeOff")),b("qk-pill-admission",!s.drainMode,e("queue.accepting"),e("queue.drain")),f("qk-fairness-val",y),f("qk-conc-val",`${s.perKeyConcurrency??1} / ${s.globalConcurrency??"—"}`);const x=document.getElementById("queue-dlq-slot");x&&(r>0?(x.innerHTML=`
        <div class="queue-dlq-banner" role="status">
          <div class="queue-dlq-text">
            <strong>${t(e("queue.dlqTitle"))}</strong>
            <span class="queue-dlq-count">${r}</span>
            <span class="muted">${t(e("queue.dlqHint"))}</span>
          </div>
          <div class="toolbar">
            <button type="button" class="btn secondary sm" id="q-filter-dead">${t(e("queue.viewDlq"))}</button>
            <button type="button" class="btn danger sm" id="q-purge-dlq">${t(e("queue.purgeDead"))}</button>
          </div>
        </div>`,document.getElementById("q-filter-dead")?.addEventListener("click",()=>{Q.status="dead",Q.offset=0,j().catch(g)}),document.getElementById("q-purge-dlq")?.addEventListener("click",()=>{document.getElementById("q-purge")?.click()})):x.innerHTML="");const H=document.getElementById("qk-jobs-meta");H&&(H.textContent=P("queue.jobsMeta",{n:o}));const T=document.querySelector("#queue-jobs-table tbody");if(T&&(T.innerHTML=Ha(n)||`<tr class="empty-row"><td colspan="9">
        <div class="data-empty">
          <div class="data-empty-icon">∅</div>
          <strong>${t(e("queue.empty"))}</strong>
        </div>
      </td></tr>`,Oa()),document.querySelector("#queue-pager .data-pager-meta span")){const k=Math.max(1,Math.ceil((o||0)/Q.limit)||1),S=Math.floor(Q.offset/Q.limit)+1,I=document.querySelectorAll("#queue-pager .data-pager-meta > span");I[0]&&(I[0].textContent=P("common.pagerTotal",{n:o||0})),I[1]&&(I[1].textContent=P("common.pagerPage",{n:S,total:k}));const W=document.getElementById("queue-prev"),B=document.getElementById("queue-next");W&&(W.disabled=Q.offset<=0),B&&(B.disabled=Q.offset+Q.limit>=o)}const E=document.getElementById("q-pause");E&&(E.textContent=s.paused?e("queue.resume"):e("queue.pause"));const C=document.getElementById("q-drain");C&&(C.textContent=s.drainMode?e("queue.undrain"):e("queue.drainBtn"));const D=document.getElementById("q-master-enabled");D&&document.activeElement!==D&&mt(s.enabled!==!1)}function na(){Me||(Me=setInterval(()=>{if(u.page!=="queue"){clearInterval(Me),Me=null;return}const a=document.activeElement;a&&a.closest&&a.closest("#queue-policy-panel")&&(a.tagName==="INPUT"||a.tagName==="SELECT"||a.tagName==="TEXTAREA")||j({soft:!0}).catch(()=>{})},4e3))}async function j(a={}){const s=!!a.soft&&document.getElementById("queue-root");!s&&Me&&(clearInterval(Me),Me=null);const n=sa(),o=!s&&n?n.scrollTop:0,i=Q,r=new URLSearchParams;r.set("limit",String(i.limit)),r.set("offset",String(i.offset)),i.status&&r.set("status",i.status);const[l,c,m]=await Promise.all([$("/queue/stats"),$(`/queue/jobs?${r}`),$("/queue/policy")]);if(u.page!=="queue")return;const p=l.data||{},d=m.data||p.policy||{},y=c.data||[],f=c.total??y.length,h=p.byStatus||{},v=p.dead??h.dead??0,b=p.leased??h.leased??0,x=p.running??h.running??0,H=p.queued??h.queued??0,T=p.depth??H+b+x,R=Da(d),E=!d.enabled||d.paused||d.drainMode?"warn":"ok";if(u._queuePolicyCache={...d},s){Ks({s:p,pol:d,jobs:y,total:f,by:h}),na();return}const C=Ha(y),D=be({title:e("queue.filterTitle"),hint:e("queue.filterHint"),gridHtml:`
      <label>${t(e("queue.filterStatus"))}
        <select id="qf-status">
          <option value="">${t(e("queue.allStatuses"))}</option>
          <option value="queued" ${i.status==="queued"?"selected":""}>${t(e("queue.filterQueued"))}</option>
          <option value="active" ${i.status==="active"?"selected":""}>${t(e("queue.filterRunning"))}</option>
          <option value="dead" ${i.status==="dead"?"selected":""}>${t(e("queue.filterDead"))}</option>
          <option value="failed" ${i.status==="failed"?"selected":""}>${t(e("queue.filterFailed"))}</option>
          <option value="succeeded" ${i.status==="succeeded"?"selected":""}>${t(e("queue.filterSucceeded"))}</option>
          <option value="cancelled" ${i.status==="cancelled"?"selected":""}>${t(e("queue.filterCancelled"))}</option>
        </select>
      </label>`}),k=se({headHtml:`
      <th>${t(e("queue.colJob"))}</th>
      <th>${t(e("queue.colSource"))}</th>
      <th>${t(e("queue.colStatus"))}</th>
      <th>${t(e("queue.colModel"))}</th>
      <th>${t(e("queue.colPri"))}</th>
      <th>${t(e("queue.colKey"))}</th>
      <th>${t(e("queue.colTry"))}</th>
      <th>${t(e("queue.colTime"))}</th>
      <th></th>`,bodyHtml:C,colSpan:9,emptyText:e("queue.empty"),pagerHtml:le({total:f,limit:i.limit,offset:i.offset,idPrefix:"queue"})}),S=d.fairness==="fifo_global"?e("queue.fifo"):e("queue.wrr"),I=d.enabled!==!1;if(document.getElementById("app").innerHTML=z(`
  <div id="queue-root" class="${I?"":"is-feature-off"}">
    <div class="topbar">
      <h2>${t(e("queue.title"))}</h2>
      <div class="toolbar">
        ${Nt({id:"q-master-enabled",on:I,onLabel:e("queue.masterOn"),offLabel:e("queue.masterOff"),title:e("queue.masterHint")})}
        <button type="button" class="btn secondary sm" id="q-refresh">${t(e("queue.refresh"))}</button>
        <button type="button" class="btn secondary sm" id="q-pause">${t(d.paused?e("queue.resume"):e("queue.pause"))}</button>
        <button type="button" class="btn secondary sm" id="q-drain">${t(d.drainMode?e("queue.undrain"):e("queue.drainBtn"))}</button>
        <button type="button" class="btn danger sm" id="q-purge">${t(e("queue.purgeDead"))}</button>
      </div>
    </div>
    <p class="page-hint">${t(e("queue.subtitle"))}</p>
    <div class="feature-off-banner" id="queue-disabled-banner" ${I?"hidden":""} role="status">
      <strong>${t(e("common.featureOff"))}</strong>
      <span>${t(e("queue.disabledBanner"))}</span>
    </div>

    <div class="dash-kpi-grid queue-kpi-grid">
      ${K({label:e("queue.depth"),value:String(T),valueId:"qk-depth",sub:P("queue.kpiDepthSub",{q:H,l:b}),subId:"qk-depth-sub",tone:T>20?"warn":T>0?"primary":""})}
      ${K({label:e("queue.activeJobs"),value:`${x}<span class="dash-kpi-den">/${d.globalConcurrency??"—"}</span>`,valueId:"qk-running",sub:P("queue.kpiActiveSub",{n:p.workerActive??0}),subId:"qk-running-sub",tone:x>=(d.globalConcurrency||1)?"warn":""})}
      ${K({label:e("queue.queued"),value:String(H),valueId:"qk-queued",sub:e("queue.kpiQueuedSub")})}
      ${K({label:e("queue.dead"),value:String(v),valueId:"qk-dead",sub:e("queue.kpiDeadSub"),tone:v>0?"danger":"ok"})}
      ${K({label:e("queue.oldest"),value:p.oldestQueuedAgeMs?Wt(p.oldestQueuedAgeMs):"—",valueId:"qk-oldest",sub:e("queue.kpiOldestSub"),tone:(p.oldestQueuedAgeMs||0)>6e4?"warn":""})}
      ${K({label:e("queue.mode"),value:R,valueId:"qk-mode",sub:S,subId:"qk-mode-sub",tone:E==="ok"?"ok":"warn"})}
    </div>

    <div class="panel data-table-panel queue-status-panel">
      <div class="panel-h">
        <strong>${t(e("queue.statusPanel"))}</strong>
      </div>
      <div class="panel-pad">
        <div class="queue-status-row queue-status-row--6">
          <div class="queue-status-item">
            <span class="label">${t(e("queue.enabled"))}</span>
            <span id="qk-pill-enabled">${ge(d.enabled!==!1,e("dash.on"),e("dash.off"))}</span>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.consumer"))}</span>
            <span id="qk-pill-consumer">${ge(!d.paused&&d.enabled!==!1,e("queue.running"),d.paused?e("queue.paused"):e("queue.modeOff"))}</span>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.admission"))}</span>
            <span id="qk-pill-admission">${ge(!d.drainMode,e("queue.accepting"),e("queue.drain"))}</span>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.fairness"))}</span>
            <strong class="queue-status-val" id="qk-fairness-val">${t(S)}</strong>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.concurrency"))}</span>
            <strong class="queue-status-val mono" id="qk-conc-val">${d.perKeyConcurrency??1} / ${d.globalConcurrency??"—"}</strong>
          </div>
          <div class="queue-status-item queue-status-item--worker">
            <span class="label">${t(e("queue.workerInstance"))}</span>
            <code class="queue-worker-id" id="qk-worker-id" title="${t(p.workerId||"")}">${t(p.workerId||"—")}</code>
            <span class="queue-worker-hint muted">${t(e("queue.workerInstanceHint"))}</span>
          </div>
        </div>
      </div>
    </div>

    <div id="queue-dlq-slot">
    ${v>0?`<div class="queue-dlq-banner" role="status">
      <div class="queue-dlq-text">
        <strong>${t(e("queue.dlqTitle"))}</strong>
        <span class="queue-dlq-count">${v}</span>
        <span class="muted">${t(e("queue.dlqHint"))}</span>
      </div>
      <div class="toolbar">
        <button type="button" class="btn secondary sm" id="q-filter-dead">${t(e("queue.viewDlq"))}</button>
        <button type="button" class="btn danger sm" id="q-purge-dlq">${t(e("queue.purgeDead"))}</button>
      </div>
    </div>`:""}
    </div>

    <div class="panel data-table-panel" id="queue-policy-panel" style="margin-bottom:14px">
      <div class="panel-h">
        <div>
          <strong>${t(e("queue.policyTitle"))}</strong>
          <span class="muted">${t(e("queue.policyHint"))}</span>
        </div>
        ${Aa(Tt(d))}
      </div>
      <div class="panel-pad">
        <div class="ddos-preset-block">
          <div class="ddos-preset-block-h">
            <strong>${t(e("queue.presetTitle"))}</strong>
            <span class="muted">${t(e("queue.presetHint"))}</span>
          </div>
          <div class="ddos-presets" role="group" aria-label="${t(e("queue.presetTitle"))}">
            <button type="button" class="ddos-preset-btn" data-queue-preset="relaxed" data-ddos-preset="relaxed" aria-pressed="false">${t(e("queue.presetRelaxed"))}</button>
            <button type="button" class="ddos-preset-btn" data-queue-preset="balanced" data-ddos-preset="balanced" aria-pressed="false">${t(e("queue.presetBalanced"))}</button>
            <button type="button" class="ddos-preset-btn" data-queue-preset="strict" data-ddos-preset="strict" aria-pressed="false">${t(e("queue.presetStrict"))}</button>
            <button type="button" class="ddos-preset-btn ddos-preset-btn--custom" data-queue-preset="custom" disabled aria-pressed="false">${t(e("queue.presetCustom"))}</button>
          </div>
          <p class="ddos-preset-hint" id="queue-preset-hint"></p>
        </div>
        <div class="form-grid">
          <label>${t(e("queue.globalConcurrency"))}
            <input type="number" id="qp-gconc" min="1" max="64" value="${Number(d.globalConcurrency)||2}" />
            <span class="hint">${t(e("queue.hintGlobalConc"))}</span>
          </label>
          <label>${t(e("queue.perKeyConcurrency"))}
            <input type="number" id="qp-kconc" min="1" max="16" value="${Number(d.perKeyConcurrency)||1}" />
            <span class="hint">${t(e("queue.hintPerKeyConc"))}</span>
          </label>
          <label>${t(e("queue.maxDepth"))}
            <input type="number" id="qp-depth" min="1" value="${Number(d.maxQueueDepth)||100}" />
            <span class="hint">${t(e("queue.hintMaxDepth"))}</span>
          </label>
          <label>${t(e("queue.maxDepthKey"))}
            <input type="number" id="qp-depthk" min="1" value="${Number(d.maxQueueDepthPerKey)||20}" />
            <span class="hint">${t(e("queue.hintMaxDepthKey"))}</span>
          </label>
          <label>${t(e("queue.fairness"))}
            <select id="qp-fair">
              <option value="weighted_round_robin" ${d.fairness==="weighted_round_robin"?"selected":""}>${t(e("queue.wrr"))}</option>
              <option value="fifo_global" ${d.fairness==="fifo_global"?"selected":""}>${t(e("queue.fifo"))}</option>
            </select>
            <span class="hint">${t(e("queue.hintFairness"))}</span>
          </label>
          <label>${t(e("queue.defaultPriority"))}
            <input type="number" id="qp-pri" min="0" max="1000" value="${Number(d.defaultPriority)||100}" />
          </label>
          <label>${t(e("queue.playgroundPriority"))}
            <input type="number" id="qp-ppri" min="0" max="1000" value="${Number(d.playgroundPriority)||50}" />
          </label>
          <label>${t(e("queue.leaseMs"))}
            <input type="number" id="qp-lease" min="5000" step="1000" value="${Number(d.leaseMs)||45e3}" />
            <span class="hint">${t(e("queue.hintLease"))}</span>
          </label>
          <label>${t(e("queue.maxWaitMs"))}
            <input type="number" id="qp-wait" min="5000" step="1000" value="${Number(d.maxWaitMs)||6e5}" />
            <span class="hint">${t(e("queue.hintMaxWait"))}</span>
          </label>
        </div>
        <div class="toolbar settings-save-bar" style="margin-top:14px">
          <button type="button" class="btn sm" id="qp-save">${t(e("queue.savePolicy"))}</button>
        </div>
      </div>
    </div>

    <div class="panel-section-head">
      <div>
        <strong>${t(e("queue.jobs"))}</strong>
        <span class="muted" id="qk-jobs-meta">${t(P("queue.jobsMeta",{n:f}))}</span>
      </div>
    </div>
    ${D}
    <div id="queue-jobs-table">${k}</div>
  </div>
  `),J(),o>0){const B=sa();B&&(B.scrollTop=o,requestAnimationFrame(()=>{B.scrollTop=o}))}document.getElementById("q-master-enabled").onclick=async()=>{const B=!Ee("q-master-enabled");mt(B);try{const ee=await $("/queue/policy",{method:"PUT",body:JSON.stringify({enabled:B})});u._queuePolicyCache={...u._queuePolicyCache||{},...ee.data||{enabled:B}},Ue()}catch(ee){mt(!B),g(ee)}},document.getElementById("q-refresh").onclick=()=>j().catch(g),document.getElementById("q-pause").onclick=async()=>{await $(d.paused?"/queue/resume":"/queue/pause",{method:"POST",body:"{}"}),j().catch(g)},document.getElementById("q-drain").onclick=async()=>{await $(d.drainMode?"/queue/undrain":"/queue/drain",{method:"POST",body:"{}"}),j().catch(g)};const W=async()=>{await F({title:e("queue.purgeDead"),message:e("queue.purgeConfirm"),variant:"danger",confirmText:e("queue.purgeDead")})&&(await $("/queue/purge-dead",{method:"POST",body:"{}"}),j().catch(g))};document.getElementById("q-purge").onclick=()=>W().catch(g),document.getElementById("q-purge-dlq")?.addEventListener("click",()=>W().catch(g)),document.getElementById("q-filter-dead")?.addEventListener("click",()=>{Q.status="dead",Q.offset=0,j().catch(g)}),document.querySelectorAll("[data-filter-apply]").forEach(B=>{B.onclick=()=>{Q.status=document.getElementById("qf-status")?.value||"",Q.offset=0,j().catch(g)}}),document.querySelectorAll("[data-filter-reset]").forEach(B=>{B.onclick=()=>{Q.status="",Q.offset=0,j().catch(g)}}),De("queue",Q,()=>j().catch(g)),document.getElementById("qp-save").onclick=async()=>{const B=La();await $("/queue/policy",{method:"PUT",body:JSON.stringify(B)}),u._queuePolicyCache={...u._queuePolicyCache||{},...B},L(""),j().catch(g)},_s(),Oa(),na()}u.page=Ua();(!location.hash||location.hash==="#"||location.hash==="#/")&&At(u.page);window.addEventListener("hashchange",()=>{const a=Bt(location.hash);a&&a!==u.page&&Ot(a,{writeHash:!1})});window.addEventListener("popstate",()=>{const a=Bt(location.hash);!a||a===u.page||Ot(a,{writeHash:!1})});yt();
//# sourceMappingURL=boot.js.map
