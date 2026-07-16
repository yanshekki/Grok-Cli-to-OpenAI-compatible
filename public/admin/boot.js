const Ia="gog_admin_lang",Dt={en:{brand:"Grok Gateway",brandSub:"Admin Panel",loginTitle:"Admin",loginLabel:"API Key",loginOtpLabel:"One-time login code",loginBtn:"Sign in",loginCmdHint:"Get a key in terminal:",loginOtpHint:"Generate a code in terminal (required every login):",loginOtpExpiry:"Code expires in 5 minutes and can be used only once.",loginOtpFail:"Invalid or expired code",loginLostKey:"Lost old key? Create a new admin key (plaintext is not stored).",loginCopy:"Copy",loginCopied:"Copied",needKey:"Enter API key",needOtp:"Enter the one-time code from the terminal",logout:"Log out",shell:{menu:"Open menu",closeMenu:"Close menu"},nav:{dashboard:"Dashboard",chat:"Chat",chats:"Chat logs",keys:"API Keys",documents:"Documents",media:"Media",audit:"Audit Logs",settings:"Safety",apiFeatures:"API features",usage:"Usage & Limits",ddos:"DDoS Center",queue:"Queue",pm2:"PM2",system:"System"},queue:{title:"Chat queue",subtitle:"Pause, drain, requeue, and tune concurrency.",paused:"Paused",running:"Consuming",drain:"Drain mode",mode:"Mode",modeOff:"Disabled",depth:"Depth",queued:"Queued",leased:"Leased",activeJobs:"Running",dead:"Dead letter",oldest:"Oldest wait",concurrency:"Per-key / global",worker:"In-process workers",workerInstance:"Worker instance",workerInstanceHint:"This process’s consumer ID (lease owner). Changes on restart.",kpiActiveSub:"{n} active in this process",consumer:"Consumer",admission:"Admission",accepting:"Accepting jobs",pause:"Pause",resume:"Resume",drainBtn:"Drain",undrain:"Stop drain",savePolicy:"Save policy",refresh:"Refresh",jobs:"Jobs",tabOverview:"Overview",tabJobs:"Jobs",tabPolicy:"Policy",jobsMeta:"{n} matching",cancel:"Cancel",requeue:"Requeue",purgeDead:"Purge DLQ & old jobs",purgeTitle:"Purge finished jobs?",purgeConfirm:"Deletes all dead-letter (DLQ) jobs now, plus succeeded / failed / cancelled jobs finished more than 24 hours ago.",purgeConfirmBtn:"Delete",purgeDoneTitle:"Purge complete",purgeDoneMsg:"Deleted {n} job(s).",cancelConfirm:"Cancel this job? If it is running, cancellation is cooperative.",empty:"No jobs match this filter",enabled:"Queue enabled",masterOn:"Queue on",masterOff:"Queue off",masterHint:"Master switch for the durable chat queue. Applies immediately.",disabledBanner:"Queue is disabled — new chat requests bypass the queue and run immediately (subject to concurrency limits).",globalConcurrency:"Global concurrency",perKeyConcurrency:"Per-key concurrency",maxDepth:"Max queue depth",maxDepthKey:"Max per key",fairness:"Fairness",fifo:"Global FIFO",wrr:"Weighted round-robin",playgroundPriority:"Playground priority (lower first)",defaultPriority:"Default priority",leaseMs:"Lease (ms)",maxWaitMs:"Max wait (ms)",filterTitle:"Filter jobs",filterHint:"Filter by status. Auto-refreshes.",filterStatus:"Status",allStatuses:"All statuses",filterDead:"Dead letter (DLQ)",filterQueued:"Queued",filterRunning:"Running / leased",filterFailed:"Failed",filterSucceeded:"Succeeded",filterCancelled:"Cancelled",errorCol:"Error",priorityBtn:"Priority",priorityPh:"Priority (0–1000, lower first)",dlqTitle:"Dead letter queue",dlqHint:"Jobs that exhausted retries — requeue or purge when ready.",viewDlq:"View DLQ",statusPanel:"Runtime status",statusPanelHint:"Live consumer, admission, and worker identity. Auto-refreshes every few seconds.",policyTitle:"Queue policy",policyHint:"Pick a scheme or fine-tune values. Save to apply. Editing pauses auto-refresh.",presetTitle:"Policy schemes",presetHint:"One-click presets. Active = matches form · Saved = currently stored.",presetRelaxed:"Relaxed",presetBalanced:"Balanced",presetStrict:"Strict",presetCustom:"Custom",presetRelaxedHint:"Higher concurrency and deeper queues — better for multi-key playgrounds and burst traffic.",presetBalancedHint:"Default production balance: fair round-robin, moderate depth, one job per key.",presetStrictHint:"Tight limits + global FIFO — protects the host when traffic is untrusted or resource is scarce.",presetCustomHint:"Values do not match a built-in scheme. Adjust fields or pick a scheme above.",presetActiveLabel:"Active: {name}",presetFormLabel:"Draft: {name}",presetTagActive:"Active",presetTagDraft:"Draft",presetTagSaved:"Saved",hintGlobalConc:"Max jobs running at once across all keys",hintPerKeyConc:"Max concurrent jobs for a single API key",hintMaxDepth:"Reject new jobs when total queue is full",hintMaxDepthKey:"Reject when this key has too many waiting/running jobs",hintFairness:"WRR shares capacity across keys; FIFO is global order by priority/time",hintLease:"How long a worker holds a job before reclaim",hintMaxWait:"Client wait timeout while queued",colJob:"Job / request",colSource:"Source",colStatus:"Status",colModel:"Model",colPri:"Pri",colKey:"API key",colTry:"Try",colTime:"Queued",stQueued:"queued",stLeased:"leased",stRunning:"running",stSucceeded:"succeeded",stFailed:"failed",stDead:"dead",stCancelled:"cancelled",srcV1:"API",srcPlayground:"Playground",kpiDepthSub:"{q} queued · {l} leased",kpiQueuedSub:"Waiting for a worker",kpiDeadSub:"Exhausted attempts",kpiOldestSub:"Head of queue wait",wait:"Wait",started:"Started",cancelReq:"Cancel requested"},chat:{title:"Chat",new:"New chat",send:"Send",stop:"Stop",stopped:"stopped",placeholder:"Message… (Enter to send, Shift+Enter newline)",keyMode:"API key",keySelect:"API key",useSessionKey:"Signed-in admin key",useCustomKey:"Custom key",customKey:"Key",includeReasoning:"Show reasoning",reasoning:"Thinking",needKey:"Enter or select an API key",attach:"Upload",attachLibrary:"From library",attachHint:"Drop files anywhere on this page, upload, or pick from library",dropTitle:"Drop files to attach",dropHint:"Release to upload — same formats as the attach button",formatsLabel:"Formats",formatsHint:"txt, md, csv, json, xml, html, pdf, images (png/jpg/webp/gif), code (js/ts/py/go/rs/java/c/cpp/css/yml/sql/sh…)",formatsReject:"Unsupported type: {name}. Allowed: {formats}",libraryTitle:"Previously uploaded files",librarySubtitle:"Select files owned by the current API key (same formats as upload).",librarySearch:"Search by name…",libraryEmpty:"No matching files for this key",libraryAdd:"Add selected",librarySelected:"{n} selected",libraryAlready:"Already attached",libraryLoadFail:"Could not load documents",uploading:"Uploading…",uploadFail:"Upload failed",uploadProgress:"Uploading {name}",uploadProgressMulti:"Uploading {name} ({i}/{n})",emptyTitle:"Start a conversation",emptyHint:"Send a message or attach files. Open a previous chat from the history panel to continue.",needContent:"Type a message or attach at least one file",tooManyFiles:"Too many files (max 10 per message)",fileOnlyPrompt:"Please review the attached files.",removeFile:"Remove",docs:"Attachments",you:"You",assistant:"Assistant",streaming:"Streaming…",emptyReply:"(empty reply)",systemPrompt:"System prompt",systemPlaceholder:"Optional system instructions for the model…",systemHint:"Sent as a system message on every turn. Not shown in the chat bubbles.",history:"History",historyEmpty:"No saved conversations yet",historySearch:"Search topics…",historyOpen:"Show history",historyClose:"Close history",rename:"Rename",renamePh:"Conversation topic",untitled:"Untitled chat",deleteConversation:"Delete",deleteConfirm:"Delete this conversation? This cannot be undone.",saveFail:"Could not save conversation",loadFail:"Could not load conversation",historyPrev:"Previous",historyNext:"Next",historyPage:"Page {n} / {total}",msgs:"{n} messages",compress:"Summarize for context",compressConfirm:"Generate a conversation summary for later turns? Your full chat history stays on screen. Only the model context is shortened. This uses one model call.",compressing:"Summarizing…",compressNeedMore:"Need at least 3 messages (or 2 long ones) to summarize. Continue chatting, then try again.",compressFail:"Could not create summary",compressNeedSummary:"Create a summary first (Summarize for context).",compressedBadge:"Summary",compressOk:"Summary ready — full history kept. Context mode set to summary.",compressBusy:"Wait for the current reply to finish",compressResultTitle:"Conversation summary",compressView:"View summary",summaryMeta:"Created: {when} · Based on {n} messages",ctxPolicyTitle:"Model context",ctxRemark:"Full messages stay visible. This only controls what is sent to the model next.",ctxMode:"Context",ctxModeFull:"Full history",ctxModeSummary:"Summary + recent",ctxModeRecent:"Recent only",ctxModeFullLabel:"Sending full history to the model",ctxModeSummaryLabel:"Sending summary + last {n} messages",ctxModeRecentLabel:"Sending last {n} messages only",ctxRecentN:"Recent N",ctxLongHint:"Long thread detected — consider Summary or Recent to reduce tokens and lag.",loadOlder:"Load {n} earlier messages",showMore:"Show more",showLess:"Show less",copy:"Copy",copied:"Copied",copyFail:"Copy failed"},status:{success:"success",error:"error",timeout:"timeout",pending:"pending",active:"active",finished:"finished",online:"online",stopped:"stopped"},dash:{title:"Dashboard",subtitle:"Traffic, queue, safety, and protection at a glance.",last24:"Requests (24h)",totalChat:"Total chats",success:"Success",errors:"Errors / timeout",docs:"Documents",keys:"Active keys",concurrent:"Grok concurrency",recent:"Recent API chats",empty:"No data yet",emptyModels:"No model traffic in the last 24h",updated:"Updated",refresh:"Refresh",viewAll:"View all",openDdos:"DDoS center",openSettings:"Safety",openQueue:"Open queue",kpi24h:"Requests (24h)",kpi24hSub:"{ok} ok · {err} errors",kpiSuccessRate:"Success rate (24h)",kpiSuccessRateSub:"All-time {all}%",kpiErrors:"Errors (24h)",kpiErrorsSub:"All-time {all}",kpiKeys:"API keys",kpiKeysSub:"Active / total",kpiDocs:"Documents",kpiMedia:"Media assets",kpiMediaSub:"{n} in 24h",kpiDocsSub:"Stored files",kpiConv:"Playground threads",kpiConvSub:"{n} updated in 24h",kpiSessions:"OTP sessions",kpiSessionsSub:"Active admin logins",kpiConcurrent:"Grok concurrency",kpiConcurrentSub:"Active / max slots",kpiQueue:"Chat queue",kpiQueueSub:"Depth · running / max · dead",kpiQueueSubLive:"{run}/{max} run · {dead} dead{wait}",kpiQueuePaused:"Paused",kpiQueueDrain:"Drain",kpiQueueOff:"Disabled",kpiSafe:"Global safe",kpiSafeOn:"On",kpiSafeOff:"Off",kpiSafeSub:"{tools} · turns {turns} · {model}",kpiSafeSubEmpty:"Settings unavailable",queuePanel:"Chat queue",queueState:"State",queueLive:"Live",qQueued:"Queued",qRunning:"Running",qDead:"Dead",qSucceeded:"Succeeded",qWorker:"Worker",qWorkerActive:"active slots",qOldest:"oldest wait",qUnavailable:"Queue stats unavailable",safety:"Safety settings",globalSafe:"Global safe mode",safeTools:"Tools",safeTurns:"Max turns",safeTimeout:"Timeout",defaultModel:"Default model",safetyHint:"Affects safe-mode keys and forced-safe traffic. Playground OTP sessions use agent mode unless global safe is on.",protection:"Protection",autoBan:"Auto-ban",on:"On",off:"Off",ruleAuth:"Auth",ruleRate:"429",ruleConn:"Conn",ruleVelocity:"Velocity",bans:"Blacklist",blocked:"Blocked hits",rateHits:"Rate-limit hits",liveConn:"Live connections",proxy:"Proxy IP",hops:"hops",limits:"Key/IP limits",models24h:"Models (24h)",runtime:"Runtime",port:"Listen port",defaultPort:"default",env:"Environment",authMode:"Admin auth",authOtp:"OTP session",encryption:"Encryption",ready:"Ready",notReady:"Not ready"},chats:{title:"Chat history",total:"Total",decrypt:"Open a row to view decrypted content.",search:"Search",searchPh:"Request ID, key name, model…",filterTitle:"Search & filters",filterHint:"Filter, then open a row for full detail.",status:"Status",allStatus:"All statuses",model:"Model",allModels:"All models",apiKey:"API key",allKeys:"All keys",from:"From",to:"To",mode:"Mode",allModes:"All modes",hasDocs:"Has attachments",filter:"Apply filters",reset:"Reset",request:"Request",prompt:"Prompt",response:"Response",time:"Time",attachments:"Attachments",page:"Page",prev:"Previous",next:"Next",perPage:"Per page",detail:"Chat detail",noAttach:"No attachments",openFile:"Open / preview",close:"Close",copyPrompt:"Copy prompt",copyContent:"Copy content",copySystem:"Copy system prompt",copyRawPrompt:"Copy raw prompt",duration:"Duration",stream:"Stream",reasoning:"Reasoning / thought",content:"Content (output)",raw:"Raw stored response",rawPrompt:"Raw stored prompt",userPrompt:"User / conversation prompt",systemPrompt:"System prompt",systemHint:"Extracted from the stored prompt (system role messages).",noSystem:"No system prompt in this request.",hasSystem:"Has system",none:"(none)",file:"file",img:"img",previewFailed:"Preview failed"},keys:{title:"API Keys",new:"New key",searchPh:"Name or key prefix…",name:"Name",role:"Role",mode:"Mode",rate:"Rate / min",status:"Status",created:"Created",edit:"Edit",revoke:"Revoke",confirmRevoke:"Revoke this key?",empty:"No keys",usage24:"24h use",maxTurns:"Max turns",timeoutMs:"Timeout (ms)",ipWhitelist:"IP whitelist",ipWhitelistHint:"One IP or CIDR per line. Empty = allow all IPs.",ipWhitelistCol:"IP allow",ipAll:"All IPs",keyOnce:"Store this key securely — shown once:",roleClient:"client",roleAdmin:"admin",roleClientBadge:"client",roleAdminBadge:"admin",modeSafe:"safe (external)",modeAgent:"agent (full tools)",modeSafeBadge:"safe",modeAgentBadge:"agent",ipCount:"{n} IPs",ipPlaceholder:`127.0.0.1
203.0.113.0/24`},docs:{title:"Documents",total:"Total",file:"File",mime:"MIME",size:"Size",time:"Time",storage:"Storage",storageDb:"Database (encrypted)",storageFs:"Filesystem (encrypted)",storageHint:"Encrypted storage · DB under {dbMax}, files in {dir} · max {upMax}.",download:"Download",downloadFail:"Download failed",binaryPreview:"This is a binary file (e.g. PDF). Preview is not available — please use Download.",delete:"Delete",confirmDel:"Delete this document?",detail:"Document detail",preview:"Preview",copy:"Copy content",empty:"No documents",searchPh:"File name or MIME…",page:"Page",prev:"Previous",next:"Next"},audit:{title:"Audit logs",searchPh:"Action, resource, IP, key…",time:"Time",action:"Action",resource:"Resource",key:"Key",meta:"Meta",empty:"No logs",id:"ID",actions:{chat_create:"Chat create",document_upload:"Document upload",document_delete:"Document delete",document_list:"Document list",document_read:"Document read",document_download:"Document download",api_key_create:"API key create",api_key_update:"API key update",api_key_delete:"API key revoke",api_key_list:"API key list",settings_update:"Settings update",chat_admin_view:"Chat admin view",system_update:"System update",system_update_check:"Update check",ip_ban:"IP ban",ip_unban:"IP unban",ddos_policy_update:"DDoS policy update",pm2_start:"PM2 start",pm2_stop:"PM2 stop",pm2_restart:"PM2 restart",pm2_reload:"PM2 reload",pm2_config:"PM2 config",pm2_switch:"PM2 switch runner",playground_chat:"Playground chat",playground_upload:"Playground upload"},resources:{document:"Document",chat:"Chat",api_key:"API key",settings:"Settings",system:"System",pm2:"PM2",playground:"Playground",ip:"IP"},metaStorage:"Storage",metaAsKey:"As key id",metaAsKeyName:"As key name"},settings:{title:"Safety settings",hint:"Global safe mode for all keys.",globalSafe:"Global safe mode",globalSafeHint:"On = all keys safe. Off = each key’s own mode.",masterOn:"Safe mode on",masterOff:"Safe mode off",disabledBanner:"Global safe is off — keys use their own safe/agent mode.",tools:"Tools mode",toolsHint:"none: no shell/web/write. readonly: read/search only.",toolsNone:"none",toolsReadonly:"readonly",maxTurns:"Max turns",maxTurnsHint:"Safe-mode steps. Chat 3–6 · API 8–12 · multi-step 15–40.",timeout:"Timeout (ms)",timeoutHint:"Safe-mode deadline. 60s–120s normal · 300s–600s long jobs.",defaultModel:"Default model",defaultModelHint:"When client omits model.",modelSource:"Grok CLI",refreshModels:"Refresh models",panel:"Admin Panel",save:"Save",saved:"Saved",guideTitle:"Presets",guideIntro:"Apply, then tweak if needed.",guideApply:"Apply",guideActive:"Applied",guideApplyConfirm:"Apply “{name}” and save? Current values will be replaced.",guideApplied:"Preset saved",chipGlobalOn:"Safe: On",chipGlobalOff:"Safe: Off",scLocalTitle:"Local playground",scLocalDesc:"Full tools on your machine.",scLocalDetail:"Safe OFF · agent keys.",scProdTitle:"Public API",scProdDesc:"Least privilege for apps/customers.",scProdDetail:"Safe ON · tools none · turns 8–12 · 60–120s.",scCodeTitle:"Coding agent",scCodeDesc:"Trusted host only — edit & run.",scCodeDetail:"Safe OFF · agent keys.",scReadTitle:"Read-only",scReadDesc:"Explain/search code, no writes.",scReadDetail:"Safe ON · tools readonly · turns 8–15 · 120–180s.",scChatTitle:"Q&A only",scChatDesc:"Text answers, no tools.",scChatDetail:"Safe ON · tools none · turns 3–6 · 60s.",scLongTitle:"Long safe tasks",scLongDesc:"Many steps without max-turns fail.",scLongDetail:"Safe ON · none/readonly · turns 20–40 · 300–600s.",dangerTitle:"Danger zone",disablePanel:"Disable Admin Panel",disablePanelConfirm:"Disable panel and sign out? Re-enable: gctoac admin on",disablePanelDone:"Panel disabled. Re-enable: gctoac admin on",panelOffHint:"Turn off here. Re-enable on server: gctoac admin on",panelStatus:"Status",panelOn:"On",panelOff:"Off"},apiFeatures:{title:"API features",intro:"Toggle protocols & capabilities · applies in ~2s · no restart.",tabProtocols:"Protocols",tabMedia:"Media",tabCaps:"Capabilities",tabEmu:"Emulation",kpiEnabled:"Enabled",kpiEnabledSub:"Flags currently on",groupMeta:"{on} / {n} enabled",groupProtocols:"Protocol surfaces",groupMedia:"Media APIs (OpenAI-compatible)",groupCaps:"Grok CLI capabilities",groupEmu:"Emulation & safety",presetOpen:"Preset: Open",presetLocked:"Preset: Locked",presetDev:"Preset: Dev",presetConfirm:"Apply feature preset “{name}”? This overwrites all API feature flags.",flag:{openaiChat:"OpenAI Chat Completions",openaiResponses:"OpenAI Responses",anthropicMessages:"Anthropic Messages",imagesApi:"Images API",filesOpenAiAlias:"Files API alias",videoApi:"Videos API (async jobs)",audioApi:"Audio API (speech / STT)",tools:"Tools / function calling",structuredOutput:"Structured output (--json-schema)",vision:"Vision / image parts (--prompt-json)",reasoningEffort:"Reasoning effort",webSearch:"Web search tools",subagents:"Subagents",planMode:"Plan mode",memory:"Cross-session memory",sessionResume:"Session resume / continue",bestOfN:"best-of-n",checkLoop:"Self-check loop",systemOverride:"System prompt override",rules:"Extra rules",permissionMode:"Permission mode",sandbox:"Sandbox profile",usageEstimate:"Estimate token usage",assistantsEmulation:"Assistants-lite (local)",strictSampling:"Strict sampling (reject temperature…)",forceDisableToolsInSafe:"Force tool limits in safe mode"},hint:{openaiChat:"POST /v1/chat/completions",openaiResponses:"POST /v1/responses",anthropicMessages:"POST /v1/messages",imagesApi:"POST /v1/images/generations + /edits (agent key)",filesOpenAiAlias:"POST/GET /v1/files → documents + media store",videoApi:"POST /v1/videos + poll GET /v1/videos/:id",audioApi:"POST /v1/audio/speech + /transcriptions (needs provider)",tools:"Maps tools → Grok --tools + system tool list",structuredOutput:"response_format / json_schema",vision:"image_url content parts",reasoningEffort:"--reasoning-effort",webSearch:"When off: --disable-web-search",subagents:"--no-subagents when off",planMode:"--no-plan when off",memory:"--experimental-memory",sessionResume:"--resume / --continue",bestOfN:"--best-of-n (headless)",checkLoop:"--check",systemOverride:"--system-prompt-override",rules:"--rules",permissionMode:"--permission-mode",sandbox:"--sandbox",usageEstimate:"Fill usage with char/4 estimates",assistantsEmulation:"Local /v1/assistants + /v1/threads",strictSampling:"400 if temperature/top_p/stop sent",forceDisableToolsInSafe:"Keep safe-mode tool policy"}},media:{title:"Media library",intro:"Studio, assets, and video jobs. Needs imagesApi / tools (videoApi for video).",tabStudio:"Studio",tabAssets:"Assets",tabJobs:"Jobs",kpiAssetsSub:"Stored media files",kpiJobsSub:"Video generation jobs",kpiStudioSub:"Generate, edit, or image-to-video",assets:"Assets",jobs:"Video jobs",empty:"No media assets yet",jobsEmpty:"No video jobs yet",kind:"Kind",bytes:"Size",provider:"Provider",providerPh:"Provider name…",prompt:"Prompt",created:"Created",status:"Status",preview:"Preview",previewUnsupported:"This format cannot be previewed in the browser. Please download the file.",previewFail:"Failed to load preview",previewTruncated:"preview truncated",download:"Download",delete:"Delete",deleteConfirm:"Soft-delete this media asset?",allKinds:"All kinds",searchPh:"Prompt, filename, MIME, provider, or ID…",from:"From",to:"To",generate:"Generate image",generateTitle:"Generate image",studioTitle:"Media studio",studioHint:"Create images, edit existing images, or start image-to-video jobs. Execution limits follow Safety settings. Requires imagesApi and tools (videoApi for video).",generateHint:"Uses Grok Imagine tools (image_gen, image_edit, image_to_video).",generatePrompt:"Prompt",generatePromptPh:"Describe the image you want to create…",generateSize:"Size",aspectRatio:"Aspect ratio",aspectHint:"Grok Imagine aspect_ratio values (not OpenAI pixel sizes)",generateN:"Count",nHint:"Grok does not batch n; the gateway runs sequential generations (1–4)",generateKey:"API key",generateKeySession:"Signed-in admin session",generateSubmit:"Generate",generateBusy:"Generating… this may take a minute",generateOk:"Image generated. See the assets list below.",generateFail:"Image generation failed",generateNeedPrompt:"Please enter a prompt",modeGenerate:"Generate",modeEdit:"Edit",modeVideo:"Video",modelDefault:"system default",modelEmpty:"No models reported by Grok CLI",modelHint:"All models from the local Grok CLI; system default is pre-selected",editSubmit:"Edit image",editBusy:"Editing…",editOk:"Image edited. See the assets list below.",editNeedImage:"Select or drop a source image to edit",editImage:"Source image",editImageHint:"Required for image_edit",editPromptPh:"Describe the changes to apply…",videoSubmit:"Create video job",videoBusy:"Queuing video job…",videoOk:"Video job queued. See the Jobs tab.",videoDuration:"Duration",videoDurationHint:"Grok image_to_video supports 6s or 10s only",videoSource:"Source frame (optional)",videoSourceHint:"Optional. If omitted, a frame is generated from the prompt first, then animated.",videoNoSource:"Auto-generate frame from prompt",videoPromptPh:"Describe camera motion and the shot…",sourceTitle:"Source image",sourceHint:"Drag and drop an image, choose a local file, or pick any image from Documents or Media assets.",dropzoneAria:"Drop zone for source image",dropTitle:"Drop an image here",dropHint:"Or choose a local file / pick from the system library",dropTitleVideo:"Drop a source frame (optional)",dropHintVideo:"Optional for video. Empty source generates a frame from the prompt first.",pickFile:"Choose file",pickLibrary:"System library",clearSource:"Clear",sourceNeedImage:"Please provide an image file (PNG, JPEG, WebP, GIF…)",sourceKindUpload:"Upload",sourceKindAsset:"Media asset",sourceKindDocument:"Document",libraryTitle:"Select source file",librarySubtitle:"Any image stored in Documents or Media assets on this gateway.",libraryTabDocs:"Documents",libraryTabAssets:"Media assets",librarySearch:"Search by name, MIME, or ID…",libraryFormats:"Images only (PNG, JPEG, WebP, GIF, …)",libraryEmpty:"No matching files",librarySelect:"Use selected",libraryLoadFail:"Failed to load library"},usage:{title:"Usage & anti-abuse",window:"Window",requests:"Requests",success:"Success",errors:"Errors",errorRate:"Error rate",byModel:"By model",byKey:"Per API key",rateLimit:"Limit / min",util:"Est. utilization",limits:"Gateway limits",global:"Global max / window",ipMax:"Unauth IP max",burst:"Chat burst (10s)",block:"Auth fail block threshold",concurrent:"Grok max concurrent",refresh:"Refresh"},ddos:{title:"DDoS control center",tabPolicy:"Policy",tabLive:"Traffic",tabBlacklist:"Blacklist",tabEvents:"Events",live:"Live connections",recent:"Recent requests",blacklist:"IP blacklist",stats:"Abuse stats",refresh:"Refresh",pause:"Pause auto-refresh",resume:"Resume auto-refresh",ban:"Ban IP",unban:"Unban",banConfirm:"Ban this IP?",banWhitelistWarn:"This IP is on the auto-ban whitelist. Ban anyway?",unbanConfirm:"Remove this IP from blacklist?",ip:"IP",method:"Method",path:"Path",key:"API key",duration:"Duration",state:"State",ua:"User-Agent",reason:"Reason",source:"Source",expires:"Expires",permanent:"Permanent",addBan:"Add ban",ttl:"TTL",ttlPerm:"Permanent",ttl1h:"1 hour",ttl24h:"24 hours",ttl7d:"7 days",activeConn:"Active",rateHits:"Rate-limit hits",blockedHits:"Blocked hits",autoBans:"Auto bans",topIps:"Top IPs (recent)",emptyLive:"No active connections",emptyBan:"Blacklist is empty",emptyEvents:"No auto-ban events yet",reasonPh:"Optional reason",banReasonDefault:"manual from admin",ipPlaceholder:"1.2.3.4",policyTitle:"Protection policy",policyHint:"All thresholds are live — no restart. Env values are only the initial defaults.",autoOn:"Auto-judgment ON",autoOff:"Auto-judgment OFF",autoBanMaster:"Enable automatic IP bans",autoBanMasterHint:"When off, rate limits still apply but IPs are never auto-banned.",masterOn:"Auto-ban on",masterOff:"Auto-ban off",disabledBanner:"Automatic IP bans are off — rate limits still apply, but IPs will not be auto-blacklisted.",presetTitle:"Policy profile",presetHint:"Pick a profile or edit fields — custom is detected automatically.",presetRelaxed:"Relaxed",presetBalanced:"Balanced",presetStrict:"Strict",presetCustom:"Custom",presetActiveLabel:"Active: {name}",presetFormLabel:"Form: {name} (unsaved)",presetTagActive:"Active",presetTagDraft:"Draft",presetTagSaved:"Saved",presetActiveHint:"Current profile: {name}. Click Save if you changed other fields.",presetCustomHint:"Values do not match Relaxed / Balanced / Strict — treated as Custom.",presetUnsavedHint:"Form shows {form}; server still has {saved}. Click Save policy to apply.",savePolicy:"Save policy",resetPolicy:"Reset to env defaults",policySaved:"Protection policy saved. Rate limiters reloaded.",policyReset:"Policy reset to environment defaults.",confirmReset:"Reset all DDoS policy fields to .env defaults?",sectionProxy:"Reverse proxy / CDN",proxyHint:"When traffic passes through nginx or Cloudflare, enable trust hops so bans, rate limits, and audit logs use the real client IP — not the proxy IP.",proxyTrustHops:"Trusted proxy hops",proxyTrustHopsHint:"0 = direct only (ignore headers). 1 = nginx or Cloudflare→app. 2 = Cloudflare→nginx→app.",proxyIpSource:"Client IP source",proxyIpSourceHint:"auto tries CF-Connecting-IP, then X-Real-IP, then X-Forwarded-For. Use “socket” only for direct connections.",proxySrcAuto:"Auto (recommended)",proxySrcCf:"Cloudflare (CF-Connecting-IP)",proxySrcNginx:"nginx (X-Real-IP)",proxySrcXff:"X-Forwarded-For only",proxySrcSocket:"TCP socket only (no proxy)",trustedProxies:"Trusted proxy IPs / CIDRs",trustedProxiesHint:"Only these peers may set CF-Connecting-IP / X-Real-IP / XFF. Default 127.0.0.1 — add your nginx/LB host if remote. Direct clients cannot spoof headers.",sectionLimits:"Rate limits",sectionAuth:"Failed authentication",sectionRate:"Rate-limit abuse (429)",sectionConn:"Connection flood",sectionVelocity:"Request velocity",sectionEscalate:"Repeat offender escalation",sectionWhitelist:"Auto-ban whitelist",whitelistHint:"One IP or CIDR per line. These IPs are never auto-banned.",rateWindow:"Window (sec)",rateMaxKey:"Max / key",rateMaxIp:"Max / IP (no key)",burstWindow:"Burst window (sec)",burstMax:"Burst max",enableRule:"Enabled",threshold:"Threshold",windowSec:"Window (sec)",banMin:"Ban duration (min)",escalateAfter:"Escalate after N auto-bans",escalateMin:"Escalated ban (min)",maxConcurrent:"Max concurrent / IP",velocityMax:"Max requests",eventsTitle:"Recent auto-ban events",eventTime:"When",eventSource:"Rule",eventDuration:"Ban for",sources:{manual:"Manual","auto-auth":"Auto · auth","auto-rate":"Auto · 429","auto-conn":"Auto · concurrent","auto-velocity":"Auto · velocity","auto-escalate":"Auto · escalated"}},pm2:{title:"PM2 control",tabRunner:"Runner",tabPort:"Port",tabConfig:"Config",tabLogs:"Logs",status:"Process status",start:"Start with PM2",stop:"Stop PM2",restart:"Restart",reload:"Reload",logs:"Logs",logsHint:"Error log first",clearLogs:"Clear logs",confirmClearLogs:"Clear PM2 and gctoac log files? This cannot be undone (files are truncated).",logsCleared:"Cleared {n} log file(s).",logsAutoTrim:"Auto-trim over {maxMb} MB → keep last ~{keepKb} KB (on each log read).",refresh:"Refresh",confirmStop:"Stop the PM2 process?",confirmRestart:"Restart under PM2? Port will be handed over cleanly.",unavailable:"PM2 not available",disabled:"PM2 admin is disabled",app:"App name",pid:"PID",uptime:"Uptime",memory:"Memory",cpu:"CPU",restarts:"Restarts",portBusy:"Port in use",port:"Port",portTitle:"Listen port",portHint:"HTTP port for the gateway Admin UI and API. Changing the port updates .env and restarts the runner so the new port takes effect.",fieldPort:"Port",portDefaultNote:"Default is 3847. Valid range: 1–65535.",savePort:"Save port & restart",useDefaultPort:"Use default (3847)",portInvalid:"Enter a valid port number (1–65535).",confirmPortChange:"Change listen port to {port} and restart the gateway? You will need to open Admin on the new port (e.g. http://localhost:{port}/admin).",portChangedMsg:"Port updated: {from} → {to}.",portSavedNeedRestart:"Port {port} saved to .env. Restart the gateway for it to take effect.",portAfterRestart:"After restart, open Admin at http://localhost:{port}/admin",hint:"Run with PM2 or detached gctoac. Switch anytime here or via CLI.",switchTitle:"Runner",switchHint:"Only one runner should bind the port.",currentRunner:"Current runner",runnerPm2:"PM2",runnerGctoac:"gctoac (detached)",runnerNone:"Not running",runnerUnknown:"Unknown / mixed",switchToPm2:"Switch to PM2",switchToGctoac:"Switch to gctoac",confirmSwitchPm2:"Switch to PM2? Gateway restarts under PM2 in a few seconds.",confirmSwitchGctoac:"Switch to gctoac? Gateway restarts as a detached process in a few seconds.",switchScheduled:"Switch scheduled. Admin will refresh automatically in about 10 seconds.",autoRefreshIn:"This page will reload automatically in {n} seconds…",autoRefreshNow:"Reloading…",gctoacPid:"gctoac PID",configTitle:"PM2 config",configHint:"Saved to pm2.runtime.json and applied via ecosystem.config.cjs. Save & apply restarts PM2 if it is the active runner.",saveConfig:"Save & apply",saveOnly:"Save only",resetConfig:"Reset defaults",confirmReset:"Reset PM2 config to defaults?",configSaved:"Config saved",fieldName:"App name",fieldScript:"Script",fieldCwd:"Working directory (cwd)",fieldInstances:"Instances",fieldExecMode:"Exec mode",fieldAutorestart:"Autorestart",fieldWatch:"Watch",fieldMaxMem:"Max memory restart",fieldMaxRestarts:"Max restarts",fieldMinUptime:"Min uptime",fieldRestartDelay:"Restart delay (ms)",fieldBackoff:"Exp backoff restart delay (ms)",fieldMergeLogs:"Merge logs",fieldTime:"Log timestamps",fieldErrorFile:"Error log file",fieldOutFile:"Out log file",fieldEnvExtra:"Extra env (KEY=value per line)",fieldPreferred:"Preferred runner",empty:"App not in pm2 list",modeFork:"fork",modeCluster:"cluster",phCwd:"(package root)",phInstances:"1 or max",phEnv:"NODE_ENV=production",statusOnline:"online",statusErrored:"errored",statusStopped:"stopped",msgOk:"OK",msgDisabled:"PM2 admin is disabled (PM2_ADMIN_ENABLED=false).",msgBinaryMissing:"pm2 not found on PATH. Install: npm install -g pm2",msgNotInList:'App "{app}" is not in the PM2 list — use Start with PM2 or Switch to PM2.',msgPortGctoac:"Port {port} is held by gctoac (pid {pid}). Use “Switch to PM2” to hand over.",msgPortBusy:"Port {port} is in use (pid {pids}).",msgErrored:"PM2 process errored — check logs / config, then Restart or fix port conflicts.",msgBothRunners:"Both runners detected; gctoac pid {pid} also holds resources. Prefer one via Switch.",msgError:"PM2 error: {error}",msgSwitchPm2:"Switching to PM2… The gateway will restart under PM2 in a few seconds.",msgSwitchGctoac:"Switching to gctoac… The gateway will restart as a detached process in a few seconds."},system:{title:"System",tabSoftware:"Software",tabPackage:"Package",tabEnv:"Environment",envHint:"Runtime env & version snapshot.",checkUpdate:"Check for updates",oneClick:"Update package & restart",selfUpdate:"Package version",selfHint:"Compare versions · update package restarts the gateway.",current:"This install",npm:"npm latest",github:"GitHub latest",install:"Install channel",confirmUpdate:"Update the package and restart the gateway? API will be briefly unavailable.",scheduled:"Update scheduled. Refresh this page in ~30s.",database:"Database",grokCli:"Grok CLI",concurrency:"Concurrency",runtime:"Runtime health",software:"Required software",softwareHint:"Required tools and installed versions.",softName:"Software",softLevel:"Need",softInstalled:"Installed",softVersion:"Version",softStatus:"Status",softDetail:"Note",levelRequired:"Required",levelRecommended:"Recommended",levelOptional:"Optional",levelBundled:"Bundled",softOk:"OK",softMissing:"Missing",softWarn:"Warning",envTitle:"Environment",up:"Up",down:"Down",yes:"Yes",no:"No",badgeUpdate:"Update available",badgeOk:"Up to date",badgeAhead:"Newer than npm",badgeUnknown:"Unknown",statusHintUpdate:"A newer published version is available. Use “Update package & restart”.",statusHintOk:"This install matches the latest known release.",statusHintAhead:"Local version is newer than npm (typical for git / dev). “Update package” still pulls latest git commits if on the git channel.",statusHintUnknown:"Could not reach npm/GitHub to compare versions.",checkResult:"Version check",channelGit:"git (dev tree)",channelNpmGlobal:"npm global",channelNpmLocal:"npm local",channelUnknown:"unknown",encryption:"Encryption",ready:"Ready",notReady:"Not ready",allRequiredOk:"All required software present",requiredMissing:"Some required software is missing"},common:{empty:"No data",active:"active",revoked:"revoked",save:"Save",cancel:"Close",loading:"Loading…",powered:"Powered by",actions:"Actions",yes:"Yes",no:"No",ok:"OK",confirm:"Confirm",notice:"Notice",confirmTitle:"Please confirm",dangerTitle:"Confirm action",apply:"Apply",reset:"Reset",search:"Search",prev:"Previous",next:"Next",perPage:"Per page",pagerTotal:"Total {n}",pagerPage:"Page {n} / {total}",filterTitle:"Search & filters",filterHint:"Narrow results, then apply",all:"All",requestFailed:"Request failed",featureOff:"Off",ms:"{n} ms",perMin:"{n}/min",minutes:"{n} min",mb:"{n} MB",percent:"{n}%",ipLabel:"IP",uaLabel:"UA",httpStatus:"HTTP"},errors:{unauthorized:"Invalid or missing credentials. Please sign in again.",forbidden:"You do not have permission for this action.",not_found:"The requested resource was not found.",validation_error:"Invalid request. Please check your input.",rate_limit_exceeded:"Rate limit exceeded. Please try again later.",concurrency_limit_exceeded:"Too many concurrent Grok jobs. Please wait and retry.",internal_error:"An internal server error occurred.",grok_error:"Grok CLI returned an error.",grok_timeout:"Grok CLI timed out.",grok_not_available:"Grok CLI is not available on this server.",document_too_large:"The document exceeds the maximum allowed size.",document_type_not_allowed:"This document type is not allowed.",invalid_cwd:"The working directory is not allowed.",service_unavailable:"The service is temporarily unavailable.",queue_full:"The chat queue is full. Please try again later.",queue_draining:"The chat queue is paused or draining.",queue_wait_timeout:"Timed out while waiting in the chat queue.",queue_cancelled:"The chat job was cancelled.",media_not_supported:"This media feature is not available or is disabled.",media_provider_unavailable:"The media provider is not available.",media_generation_failed:"Media generation failed.",media_forbidden:"Media generation is not allowed for this API key. Use an agent-mode key or an admin session.",feature_disabled:"This API feature is disabled.",feature:{imagesApi:"Images API is disabled. Enable it under Admin → API features → Images API.",videoApi:"Video API is disabled. Enable it under Admin → API features → Videos API.",audioApi:"Audio API is disabled. Enable it under Admin → API features → Audio API.",tools:"Tools are disabled. Enable Tools under Admin → API features (required for image generation).",filesOpenAiAlias:"OpenAI Files API alias is disabled. Enable it under Admin → API features → Files API alias."},media:{agent_or_admin_required:"Image generation requires an agent-mode API key or an admin session. Safe-mode keys cannot use image tools.",source_required:"Provide an image file, a media asset, or a document as the source.",source_must_be_image:"The selected source must be an image for edit or video generation.",no_image_in_sandbox:"Grok finished but no image file was found. Ensure imagesApi and tools are enabled, and the key is agent-mode or admin.",no_video_in_sandbox:"Grok finished but no video file was found in the sandbox.",provider_no_edit:"The current media provider does not support image edits."}}},"zh-Hant":{brand:"Grok Gateway",brandSub:"管理面板",loginTitle:"管理員登入",loginLabel:"API 金鑰",loginOtpLabel:"一次性登入碼",loginBtn:"登入",loginCmdHint:"終端機取得 key：",loginOtpHint:"每次登入請在終端機產生新碼：",loginOtpExpiry:"登入碼 5 分鐘內有效，且只能使用一次。",loginOtpFail:"登入碼無效或已過期",loginLostKey:"舊 key 無法找回（只存 hash），請建立新的 admin key。",loginCopy:"複製",loginCopied:"已複製",needKey:"請輸入 API 金鑰",needOtp:"請輸入終端機產生的一次性登入碼",logout:"登出",shell:{menu:"開啟選單",closeMenu:"關閉選單"},nav:{dashboard:"儀表板",chat:"對話",chats:"對話記錄",keys:"API 金鑰",documents:"文件",media:"媒體庫",audit:"稽核日誌",settings:"安全設定",apiFeatures:"API 能力",usage:"用量與防護",ddos:"DDoS 中心",queue:"佇列",pm2:"PM2",system:"系統狀態"},queue:{title:"對話佇列",subtitle:"暫停、排空、重新入隊，並調整併發。",paused:"已暫停",running:"消費中",drain:"排空模式",mode:"模式",modeOff:"已停用",depth:"佇列深度",queued:"排隊中",leased:"已認領",activeJobs:"執行中",dead:"死信",oldest:"最長等待",concurrency:"每 Key / 全域",worker:"進程內 worker",workerInstance:"Worker 實例",workerInstanceHint:"本進程消費者 ID（租約持有者）。重啟後會變更。",kpiActiveSub:"本進程進行中 {n} 個",consumer:"消費者",admission:"接單",accepting:"接受新單",pause:"暫停消費",resume:"恢復消費",drainBtn:"排空",undrain:"停止排空",savePolicy:"儲存政策",refresh:"重新整理",jobs:"工作列表",tabOverview:"總覽",tabJobs:"工作列表",tabPolicy:"政策",jobsMeta:"共 {n} 筆",cancel:"取消",requeue:"重新入隊",purgeDead:"清理死信與舊工作",purgeTitle:"確認清理工作？",purgeConfirm:"會立即刪除全部死信（DLQ），以及完成已超過 24 小時的成功／失敗／取消工作。",purgeConfirmBtn:"確認刪除",purgeDoneTitle:"清理完成",purgeDoneMsg:"已刪除 {n} 筆工作。",cancelConfirm:"取消此工作？若正在執行，取消為協作式（cooperative）。",empty:"沒有符合篩選的工作",enabled:"啟用佇列",masterOn:"佇列已開",masterOff:"佇列已關",masterHint:"對話佇列總開關，即時生效。",disabledBanner:"佇列已關閉 — 新對話會跳過排隊、即時執行（仍受併發上限約束）。",globalConcurrency:"全域併發",perKeyConcurrency:"每 Key 併發",maxDepth:"全域佇列上限",maxDepthKey:"每 Key 上限",fairness:"公平策略",fifo:"全域 FIFO",wrr:"加權輪詢",playgroundPriority:"Playground 優先級（越小越先）",defaultPriority:"預設優先級",leaseMs:"租約（ms）",maxWaitMs:"最長等待（ms）",filterTitle:"篩選工作",filterHint:"依狀態篩選。會自動重新整理。",filterStatus:"狀態",allStatuses:"全部狀態",filterDead:"死信（DLQ）",filterQueued:"排隊中",filterRunning:"執行中 / 已認領",filterFailed:"失敗",filterSucceeded:"成功",filterCancelled:"已取消",errorCol:"錯誤",priorityBtn:"優先級",priorityPh:"優先級（0–1000，越小越先）",dlqTitle:"死信佇列",dlqHint:"已用盡重試次數 — 可重新入隊或清理。",viewDlq:"查看死信",statusPanel:"運行狀態",statusPanelHint:"消費者、接單與 worker 實例即時狀態；每隔數秒自動重新整理。",policyTitle:"佇列政策",policyHint:"可先選方案再微調數值；儲存後生效。編輯時會暫停自動重新整理。",presetTitle:"政策方案",presetHint:"一鍵套用。Active＝表單目前值 · Saved＝已儲存。",presetRelaxed:"寬鬆",presetBalanced:"均衡",presetStrict:"嚴格",presetCustom:"自訂",presetRelaxedHint:"較高併發、較深佇列 — 適合多 key／Playground 與突發流量。",presetBalancedHint:"預設生產平衡：公平輪詢、中等深度、每 key 同時只跑 1 個。",presetStrictHint:"較低上限 + 全域 FIFO — 流量不可信或主機資源緊張時使用。",presetCustomHint:"數值唔對應內建方案。可繼續微調，或上方選一個方案。",presetActiveLabel:"目前：{name}",presetFormLabel:"草稿：{name}",presetTagActive:"目前",presetTagDraft:"草稿",presetTagSaved:"已套用",hintGlobalConc:"全域同時執行的工作上限",hintPerKeyConc:"單一 API key 同時執行上限",hintMaxDepth:"佇列總深度滿時拒收新單",hintMaxDepthKey:"該 key 排隊／執行過多時拒收",hintFairness:"WRR 按 key 輪流；FIFO 按全域優先級與時間",hintLease:"Worker 持有工作多久未完成會被回收",hintMaxWait:"客戶端排隊最長等待時間",colJob:"工作 / 請求",colSource:"來源",colStatus:"狀態",colModel:"模型",colPri:"優先",colKey:"API 金鑰",colTry:"嘗試",colTime:"入隊時間",stQueued:"排隊",stLeased:"已認領",stRunning:"執行中",stSucceeded:"成功",stFailed:"失敗",stDead:"死信",stCancelled:"已取消",srcV1:"API",srcPlayground:"Playground",kpiDepthSub:"{q} 排隊 · {l} 認領",kpiQueuedSub:"等待 worker",kpiDeadSub:"重試已盡",kpiOldestSub:"隊頭等待時間",wait:"等待",started:"開始",cancelReq:"已請求取消"},chat:{title:"對話",new:"新對話",send:"傳送",stop:"停止",stopped:"已停止",placeholder:"輸入訊息…（Enter 傳送，Shift+Enter 換行）",keyMode:"API 金鑰",keySelect:"API 金鑰",useSessionKey:"目前登入的 admin 金鑰",useCustomKey:"自訂金鑰",customKey:"金鑰",includeReasoning:"顯示思考",reasoning:"思考過程",needKey:"請輸入或選擇 API 金鑰",attach:"上傳",attachLibrary:"從已上傳選擇",attachHint:"可喺本頁任意位置拖放檔案、上傳，或從已上傳庫挑選",dropTitle:"放開以附加檔案",dropHint:"放開即上傳 — 格式與「上傳」按鈕相同",formatsLabel:"格式",formatsHint:"txt、md、csv、json、xml、html、pdf、圖片（png/jpg/webp/gif）、程式碼（js/ts/py/go/rs/java/c/cpp/css/yml/sql/sh…）",formatsReject:"不支援的格式：{name}。允許：{formats}",libraryTitle:"已上傳的檔案",librarySubtitle:"選擇目前 API 金鑰名下的檔案（格式與上傳相同）。",librarySearch:"依檔名搜尋…",libraryEmpty:"此金鑰沒有符合的檔案",libraryAdd:"加入所選",librarySelected:"已選 {n} 個",libraryAlready:"已附加",libraryLoadFail:"無法載入檔案列表",uploading:"上傳中…",uploadFail:"上傳失敗",uploadProgress:"正在上傳 {name}",uploadProgressMulti:"正在上傳 {name}（{i}/{n}）",emptyTitle:"開始對話",emptyHint:"輸入訊息或附加檔案。可從右側歷史開啟舊對話繼續。",needContent:"請輸入訊息或至少附加一個檔案",tooManyFiles:"檔案太多（每則訊息最多 10 個）",fileOnlyPrompt:"請查看附加的檔案。",removeFile:"移除",docs:"附件",you:"你",assistant:"助理",streaming:"串流中…",emptyReply:"（無回覆內容）",systemPrompt:"系統提示",systemPlaceholder:"可選：模型系統指示（system 訊息）…",systemHint:"每次傳送會以 system 角色附帶，不會顯示於對話氣泡。",history:"歷史對話",historyEmpty:"尚未有已儲存的對話",historySearch:"搜尋主題…",historyOpen:"顯示歷史",historyClose:"關閉歷史",rename:"重新命名",renamePh:"對話主題",untitled:"未命名對話",deleteConversation:"刪除",deleteConfirm:"確定刪除此對話？此操作無法還原。",saveFail:"無法儲存對話",loadFail:"無法載入對話",historyPrev:"上一頁",historyNext:"下一頁",historyPage:"第 {n} / {total} 頁",msgs:"{n} 則訊息",compress:"產生語境摘要",compressConfirm:"為之後回合產生對話摘要以節省 token？畫面上的完整對話記錄不會被刪除或改寫，只影響傳送給模型的內容。此操作會呼叫模型一次。",compressing:"正在產生摘要…",compressNeedMore:"至少需要 3 則訊息（或 2 則較長內容）才可產生摘要。請先繼續對話再試。",compressFail:"無法產生摘要",compressNeedSummary:"請先按「產生語境摘要」建立摘要。",compressedBadge:"摘要",compressOk:"摘要已就緒（完整記錄仍保留）。已切換為「摘要 + 最近訊息」模式。",compressBusy:"請等待目前回覆完成",compressResultTitle:"對話摘要",compressView:"查看摘要",summaryMeta:"產生時間：{when} · 依據 {n} 則訊息",ctxPolicyTitle:"模型上下文",ctxRemark:"完整訊息仍顯示於對話區。此設定只控制下一次傳送給模型的內容。",ctxMode:"上下文",ctxModeFull:"完整記錄",ctxModeSummary:"摘要 + 最近",ctxModeRecent:"僅最近",ctxModeFullLabel:"目前送出完整對話記錄",ctxModeSummaryLabel:"目前送出摘要 + 最近 {n} 則",ctxModeRecentLabel:"目前只送出最近 {n} 則",ctxRecentN:"最近則數",ctxLongHint:"對話較長 — 建議改用「摘要 + 最近」或「僅最近」，以減少 token 並避免介面卡頓。",loadOlder:"載入較早的 {n} 則訊息",showMore:"顯示更多",showLess:"收合",copy:"複製",copied:"已複製",copyFail:"複製失敗"},status:{success:"成功",error:"錯誤",timeout:"逾時",pending:"處理中",active:"進行中",finished:"已完成",online:"運行中",stopped:"已停止"},dash:{title:"儀表板",subtitle:"流量、佇列、安全與防護一覽。",last24:"最近 24h 請求",totalChat:"總對話",success:"成功",errors:"錯誤/逾時",docs:"文件",keys:"活躍金鑰",concurrent:"Grok 併發",recent:"最近 API 請求",empty:"暫無資料",emptyModels:"最近 24h 尚無模型用量",updated:"更新於",refresh:"重新整理",viewAll:"查看全部",openDdos:"DDoS 中心",openSettings:"安全設定",openQueue:"開啟佇列",kpi24h:"請求（24h）",kpi24hSub:"{ok} 成功 · {err} 錯誤",kpiSuccessRate:"成功率（24h）",kpiSuccessRateSub:"全部時間 {all}%",kpiErrors:"錯誤（24h）",kpiErrorsSub:"全部時間 {all}",kpiKeys:"API 金鑰",kpiKeysSub:"活躍 / 總數",kpiDocs:"文件",kpiMedia:"媒體資產",kpiMediaSub:"24 小時 {n} 個",kpiDocsSub:"已儲存檔案",kpiConv:"Playground 對話",kpiConvSub:"24h 內更新 {n} 則",kpiSessions:"OTP 工作階段",kpiSessionsSub:"目前有效的管理員登入",kpiConcurrent:"Grok 併發",kpiConcurrentSub:"進行中 / 上限",kpiQueue:"對話佇列",kpiQueueSub:"深度 · 執行 / 上限 · 死信",kpiQueueSubLive:"{run}/{max} 執行 · {dead} 死信{wait}",kpiQueuePaused:"已暫停",kpiQueueDrain:"排空",kpiQueueOff:"已停用",kpiSafe:"全域安全",kpiSafeOn:"開",kpiSafeOff:"關",kpiSafeSub:"{tools} · turns {turns} · {model}",kpiSafeSubEmpty:"無法讀取設定",queuePanel:"對話佇列",queueState:"狀態",queueLive:"運作中",qQueued:"排隊中",qRunning:"執行中",qDead:"死信",qSucceeded:"已成功",qWorker:"Worker",qWorkerActive:"活躍槽",qOldest:"最舊等待",qUnavailable:"無法取得佇列統計",safety:"安全設定",globalSafe:"全域安全模式",safeTools:"工具",safeTurns:"最大 turns",safeTimeout:"逾時",defaultModel:"預設模型",safetyHint:"影響 safe 模式金鑰與強制 safe 的流量。Playground OTP 預設 agent；開啟全域安全後會套用 safe 限制。",protection:"防護狀態",autoBan:"自動封鎖",on:"開",off:"關",ruleAuth:"認證",ruleRate:"429",ruleConn:"並發",ruleVelocity:"速率",bans:"黑名單",blocked:"已攔截",rateHits:"限流次數",liveConn:"即時連線",proxy:"代理 IP",hops:"層數",limits:"金鑰/IP 上限",models24h:"模型用量（24h）",runtime:"運行環境",port:"監聽連接埠",defaultPort:"預設",env:"環境",authMode:"管理登入",authOtp:"OTP 工作階段",encryption:"加密",ready:"就緒",notReady:"未就緒"},chats:{title:"對話記錄",total:"共",decrypt:"點選列項可查看解密後內容。",search:"搜尋",searchPh:"請求 ID、金鑰名稱、模型…",filterTitle:"搜尋與篩選",filterHint:"篩選後點列項查看詳情。",status:"狀態",allStatus:"全部狀態",model:"模型",allModels:"全部模型",apiKey:"API 金鑰",allKeys:"全部金鑰",from:"由",to:"至",mode:"模式",allModes:"全部模式",hasDocs:"有附件",filter:"套用篩選",reset:"重設",request:"請求",prompt:"提示",response:"回覆",time:"時間",attachments:"附件",page:"頁",prev:"上一頁",next:"下一頁",perPage:"每頁",detail:"對話詳情",noAttach:"無附件",openFile:"開啟 / 預覽",close:"關閉",copyPrompt:"複製提示",copyContent:"複製內容",copySystem:"複製 system prompt",copyRawPrompt:"複製原始 prompt",duration:"耗時",stream:"串流",reasoning:"思考過程",content:"輸出內容",raw:"原始儲存回覆",rawPrompt:"原始儲存 prompt",userPrompt:"用戶／對話 prompt",systemPrompt:"System prompt",systemHint:"從已儲存 prompt 中抽出 system 角色內容。",noSystem:"此請求沒有 system prompt。",hasSystem:"有 system",none:"（無）",file:"檔案",img:"圖片",previewFailed:"預覽失敗"},keys:{title:"API 金鑰",new:"新增金鑰",searchPh:"名稱或 key 前綴…",name:"名稱",role:"角色",mode:"模式",rate:"速率 / 分",status:"狀態",created:"建立",edit:"編輯",revoke:"撤銷",confirmRevoke:"確定撤銷此金鑰？",empty:"暫無",usage24:"24h 用量",maxTurns:"最大 turns",timeoutMs:"逾時 (ms)",ipWhitelist:"IP 白名單",ipWhitelistHint:"每行一個 IP 或 CIDR。留空 = 不限制 IP。",ipWhitelistCol:"IP 允許",ipAll:"全部 IP",keyOnce:"請妥善保存（明文只顯示一次）：",roleClient:"用戶 (client)",roleAdmin:"管理員 (admin)",roleClientBadge:"用戶",roleAdminBadge:"管理員",modeSafe:"safe（對外）",modeAgent:"agent（全能力）",modeSafeBadge:"安全",modeAgentBadge:"代理",ipCount:"{n} 個 IP",ipPlaceholder:`127.0.0.1
203.0.113.0/24`},docs:{title:"文件",total:"共",file:"檔名",mime:"類型",size:"大小",time:"時間",storage:"儲存位置",storageDb:"資料庫（加密）",storageFs:"檔案系統（加密）",storageHint:"加密儲存 · 小於 {dbMax} 入 DB，其餘於 {dir} · 上限 {upMax}。",download:"下載",downloadFail:"下載失敗",binaryPreview:"此為二進位檔（例如 PDF），無法在此預覽，請使用「下載」。",delete:"刪除",confirmDel:"確定刪除此文件？",detail:"文件詳情",preview:"預覽",copy:"複製內容",empty:"暫無",searchPh:"檔名或 MIME…",page:"頁",prev:"上一頁",next:"下一頁"},audit:{title:"稽核日誌",searchPh:"動作、資源、IP、金鑰…",time:"時間",action:"動作",resource:"資源",key:"金鑰",meta:"詳情",empty:"暫無日誌",id:"識別碼",actions:{chat_create:"建立對話",document_upload:"上傳文件",document_delete:"刪除文件",document_list:"列出文件",document_read:"讀取文件",document_download:"下載文件",api_key_create:"建立金鑰",api_key_update:"更新金鑰",api_key_delete:"撤銷金鑰",api_key_list:"列出金鑰",settings_update:"更新設定",chat_admin_view:"管理員查看對話",system_update:"系統更新",system_update_check:"檢查更新",ip_ban:"封鎖 IP",ip_unban:"解除 IP 封鎖",ddos_policy_update:"DDoS 策略更新",pm2_start:"PM2 啟動",pm2_stop:"PM2 停止",pm2_restart:"PM2 重啟",pm2_reload:"PM2 重載",pm2_config:"PM2 設定",pm2_switch:"PM2 切換 runner",playground_chat:"對話試玩",playground_upload:"試玩上傳"},resources:{document:"文件",chat:"對話",api_key:"API 金鑰",settings:"設定",system:"系統",pm2:"PM2",playground:"試玩",ip:"IP"},metaStorage:"儲存方式",metaAsKey:"代行金鑰 ID",metaAsKeyName:"代行金鑰名稱"},settings:{title:"安全設定",hint:"全域安全模式，套用至所有金鑰。",globalSafe:"全域安全模式",globalSafeHint:"開＝全部 safe。關＝跟各金鑰自身模式。",masterOn:"安全模式：開",masterOff:"安全模式：關",disabledBanner:"全域安全已關 — 各金鑰用自身 safe／agent 設定。",tools:"工具模式",toolsHint:"none：禁 shell／上網／寫入。readonly：只讀搜尋。",toolsNone:"none",toolsReadonly:"readonly",maxTurns:"最大 turns",maxTurnsHint:"safe 步數。問答 3–6 · API 8–12 · 多步驟 15–40。",timeout:"逾時（ms）",timeoutHint:"safe 時限。一般 60–120s · 長任務 300–600s。",defaultModel:"預設模型",defaultModelHint:"客戶端未指定 model 時使用。",modelSource:"Grok CLI",refreshModels:"重新整理模型",panel:"管理面板",save:"儲存",saved:"已儲存",guideTitle:"建議預設",guideIntro:"套用後可再微調。",guideApply:"套用",guideActive:"已應用",guideApplyConfirm:"套用「{name}」並儲存？會覆寫目前數值。",guideApplied:"已套用",chipGlobalOn:"安全：開",chipGlobalOff:"安全：關",scLocalTitle:"本機試用",scLocalDesc:"本機完整能力。",scLocalDetail:"安全關 · agent 金鑰。",scProdTitle:"對外 API",scProdDesc:"產品端點，最小權限。",scProdDetail:"安全開 · none · turns 8–12 · 60–120s。",scCodeTitle:"程式代理",scCodeDesc:"可信主機改檔／跑指令。",scCodeDetail:"安全關 · agent 金鑰。",scReadTitle:"只讀分析",scReadDesc:"解碼／搜尋，不寫入。",scReadDetail:"安全開 · readonly · turns 8–15 · 120–180s。",scChatTitle:"純問答",scChatDesc:"只回文字，唔使工具。",scChatDetail:"安全開 · none · turns 3–6 · 60s。",scLongTitle:"長任務（safe）",scLongDesc:"多步驟，減少 max turns 失敗。",scLongDetail:"安全開 · none/readonly · turns 20–40 · 300–600s。",dangerTitle:"危險操作",disablePanel:"關閉管理面板",disablePanelConfirm:"關閉面板並登出？重開：gctoac admin on",disablePanelDone:"面板已關。重開：gctoac admin on",panelOffHint:"此處可關閉。重開請在伺服器執行 gctoac admin on。",panelStatus:"狀態",panelOn:"開",panelOff:"關"},apiFeatures:{title:"API 能力",intro:"開關協議與能力 · 約 2 秒生效 · 無需重啟。",tabProtocols:"協議",tabMedia:"媒體",tabCaps:"能力",tabEmu:"模擬",kpiEnabled:"已啟用",kpiEnabledSub:"目前開啟的開關",groupMeta:"已開 {on} / {n}",groupProtocols:"協議表面",groupMedia:"媒體 API（OpenAI 兼容）",groupCaps:"Grok CLI 能力",groupEmu:"模擬與安全",presetOpen:"預設：開放",presetLocked:"預設：鎖定",presetDev:"預設：開發",presetConfirm:"套用能力預設「{name}」？會覆寫全部 API 開關。",flag:{openaiChat:"OpenAI Chat Completions",openaiResponses:"OpenAI Responses",anthropicMessages:"Anthropic Messages",imagesApi:"Images API",filesOpenAiAlias:"Files API 別名",videoApi:"Videos API（異步 job）",audioApi:"Audio API（語音 / STT）",tools:"Tools / function calling",structuredOutput:"結構化輸出 (--json-schema)",vision:"視覺 / 圖片 (--prompt-json)",reasoningEffort:"推理力度",webSearch:"網絡搜尋工具",subagents:"子代理",planMode:"Plan 模式",memory:"跨 session 記憶",sessionResume:"恢復 session",bestOfN:"best-of-n",checkLoop:"自我檢查迴圈",systemOverride:"System prompt 覆寫",rules:"額外 rules",permissionMode:"權限模式",sandbox:"Sandbox profile",usageEstimate:"估算 token usage",assistantsEmulation:"Assistants-lite（本機）",strictSampling:"嚴格採樣（拒絕 temperature…）",forceDisableToolsInSafe:"Safe 模式強制工具限制"},hint:{openaiChat:"POST /v1/chat/completions",openaiResponses:"POST /v1/responses",anthropicMessages:"POST /v1/messages",imagesApi:"POST /v1/images/generations + /edits（要 agent key）",filesOpenAiAlias:"POST/GET /v1/files → documents + media",videoApi:"POST /v1/videos + poll GET /v1/videos/:id",audioApi:"POST /v1/audio/speech + /transcriptions（要 provider）",tools:"映射 tools → Grok --tools",structuredOutput:"response_format / json_schema",vision:"image_url content parts",reasoningEffort:"--reasoning-effort",webSearch:"關閉時加 --disable-web-search",subagents:"關閉時 --no-subagents",planMode:"關閉時 --no-plan",memory:"--experimental-memory",sessionResume:"--resume / --continue",bestOfN:"--best-of-n",checkLoop:"--check",systemOverride:"--system-prompt-override",rules:"--rules",permissionMode:"--permission-mode",sandbox:"--sandbox",usageEstimate:"usage 用字元/4 估算",assistantsEmulation:"本機 /v1/assistants + /v1/threads",strictSampling:"帶 temperature 等則 400",forceDisableToolsInSafe:"維持 safe 工具政策"}},media:{title:"媒體庫",intro:"工作室、資產與影片工作。需 imagesApi／tools（影片另需 videoApi）。",tabStudio:"工作室",tabAssets:"資產",tabJobs:"工作",kpiAssetsSub:"已儲存的媒體檔案",kpiJobsSub:"影片生成工作",kpiStudioSub:"生成、編輯或圖生影片",assets:"資產",jobs:"影片工作",empty:"尚無媒體資產",jobsEmpty:"尚無影片工作",kind:"類型",bytes:"大小",provider:"提供者",providerPh:"提供者名稱…",prompt:"提示詞",created:"建立時間",status:"狀態",preview:"預覽",previewUnsupported:"瀏覽器無法預覽此格式，請下載檔案後開啟。",previewFail:"無法載入預覽",previewTruncated:"預覽已截斷",download:"下載",delete:"刪除",deleteConfirm:"確定要軟刪除此媒體資產？",allKinds:"全部類型",searchPh:"提示詞、檔名、MIME、提供者或 ID…",from:"開始日期",to:"結束日期",generate:"生成圖片",generateTitle:"生成圖片",studioTitle:"媒體工作室",studioHint:"可生成圖片、編輯既有圖片，或建立圖生影片工作。執行限制依循安全設定。需啟用 imagesApi 與 tools（影片另需 videoApi）。",generateHint:"透過 Grok Imagine 工具（image_gen、image_edit、image_to_video）。",generatePrompt:"提示詞",generatePromptPh:"描述您想生成的圖像…",generateSize:"尺寸",aspectRatio:"長寬比",aspectHint:"採用 Grok Imagine 的 aspect_ratio（非 OpenAI 像素尺寸）",generateN:"數量",nHint:"Grok 不支援批量 n；閘道會依序執行 1–4 次",generateKey:"API 金鑰",generateKeySession:"目前登入的管理員工作階段",generateSubmit:"生成",generateBusy:"正在生成，可能需要一分鐘…",generateOk:"已生成圖像，請見下方資產列表。",generateFail:"圖像生成失敗",generateNeedPrompt:"請輸入提示詞",modeGenerate:"生成",modeEdit:"編輯",modeVideo:"影片",modelDefault:"系統預設",modelEmpty:"本機 Grok CLI 未回報模型",modelHint:"列出本機 Grok CLI 全部模型，並預選系統預設",editSubmit:"編輯圖像",editBusy:"正在編輯…",editOk:"已編輯圖像，請見下方資產列表。",editNeedImage:"請選擇或拖放來源圖像後再編輯",editImage:"來源圖像",editImageHint:"image_edit 必須提供來源圖像",editPromptPh:"描述要套用的變更…",videoSubmit:"建立影片工作",videoBusy:"正在將影片工作加入佇列…",videoOk:"影片工作已加入佇列，請見「影片工作」分頁。",videoDuration:"時長",videoDurationHint:"Grok image_to_video 僅支援 6 秒或 10 秒",videoSource:"來源幀（選填）",videoSourceHint:"選填。若未提供，會先依提示詞生成畫面，再進行動畫。",videoNoSource:"自動依提示詞生成畫面",videoPromptPh:"描述鏡頭運動與畫面內容…",sourceTitle:"來源圖像",sourceHint:"可拖放圖像、選擇本機檔案，或從文件庫／媒體資產中挑選任一圖像。",dropzoneAria:"來源圖像拖放區",dropTitle:"將圖像拖放至此",dropHint:"亦可選擇本機檔案，或從系統庫挑選",dropTitleVideo:"拖放來源幀（選填）",dropHintVideo:"影片可選填來源。未指定時，會先依提示詞生成畫面。",pickFile:"選擇檔案",pickLibrary:"系統庫",clearSource:"清除",sourceNeedImage:"請提供圖像檔（PNG、JPEG、WebP、GIF 等）",sourceKindUpload:"上傳",sourceKindAsset:"媒體資產",sourceKindDocument:"文件",libraryTitle:"選擇來源檔案",librarySubtitle:"可選取本閘道「文件」或「媒體資產」中的任一圖像。",libraryTabDocs:"文件",libraryTabAssets:"媒體資產",librarySearch:"依名稱、MIME 或 ID 搜尋…",libraryFormats:"僅圖像（PNG、JPEG、WebP、GIF 等）",libraryEmpty:"沒有符合的檔案",librarySelect:"使用所選",libraryLoadFail:"無法載入檔案庫"},usage:{title:"用量與防濫用",window:"統計區間",requests:"請求數",success:"成功",errors:"錯誤",errorRate:"錯誤率",byModel:"按模型",byKey:"按 API 金鑰",rateLimit:"上限 / 分",util:"估計使用率",limits:"Gateway 限流設定",global:"全域上限 / 視窗",ipMax:"未認證 IP 上限",burst:"對話短窗 burst（10s）",block:"認證失敗封鎖門檻",concurrent:"Grok 最大併發",refresh:"重新整理"},ddos:{title:"DDoS 控制中心",tabPolicy:"政策",tabLive:"流量",tabBlacklist:"黑名單",tabEvents:"事件",live:"即時連線",recent:"最近請求",blacklist:"IP 黑名單",stats:"濫用統計",refresh:"重新整理",pause:"暫停自動刷新",resume:"恢復自動刷新",ban:"封鎖 IP",unban:"解除封鎖",banConfirm:"確定封鎖此 IP？",banWhitelistWarn:"此 IP 在自動封鎖白名單內。仍要手動封鎖？",unbanConfirm:"確定從黑名單移除此 IP？",ip:"IP",method:"方法",path:"路徑",key:"API 金鑰",duration:"耗時",state:"狀態",ua:"瀏覽器識別 (UA)",reason:"原因",source:"來源",expires:"到期",permanent:"永久",addBan:"新增封鎖",ttl:"有效期",ttlPerm:"永久",ttl1h:"1 小時",ttl24h:"24 小時",ttl7d:"7 日",activeConn:"進行中",rateHits:"限流次數",blockedHits:"已封鎖攔截",autoBans:"自動封鎖",topIps:"熱門 IP（最近）",emptyLive:"目前無進行中連線",emptyBan:"黑名單為空",emptyEvents:"尚無自動封鎖事件",reasonPh:"可選原因",banReasonDefault:"管理員手動封鎖",ipPlaceholder:"1.2.3.4",policyTitle:"防護策略",policyHint:"所有門檻即時生效，無需重啟。環境變數僅作為初始預設值。",autoOn:"自動判斷：開",autoOff:"自動判斷：關",autoBanMaster:"啟用自動封鎖 IP",autoBanMasterHint:"關閉後仍會限流，但不會自動加入黑名單。",masterOn:"自動封鎖：開",masterOff:"自動封鎖：關",disabledBanner:"自動封鎖已關閉 — 仍會限流，但 IP 不會被自動加入黑名單。",presetTitle:"防護方案",presetHint:"點選預設方案，或自行改數值；系統會自動判斷是否為自訂。",presetRelaxed:"寬鬆",presetBalanced:"均衡",presetStrict:"嚴格",presetCustom:"自訂",presetActiveLabel:"目前：{name}",presetFormLabel:"表單：{name}（未儲存）",presetTagActive:"使用中",presetTagDraft:"草稿",presetTagSaved:"已儲存",presetActiveHint:"目前方案：{name}。若改動其他欄位請按「儲存策略」。",presetCustomHint:"目前數值唔屬於寬鬆／均衡／嚴格，已判定為「自訂」。",presetUnsavedHint:"表單顯示「{form}」，伺服器仍為「{saved}」。請按「儲存策略」先套用。",savePolicy:"儲存策略",resetPolicy:"重設為環境預設",policySaved:"防護策略已儲存，限流器已重新載入。",policyReset:"已重設為環境變數預設值。",confirmReset:"確定將所有 DDoS 策略欄位重設為 .env 預設？",sectionProxy:"反向代理 / CDN",proxyHint:"流量經 nginx 或 Cloudflare 時，請設定信任層數，令封鎖、限流、稽核日誌使用真實用戶 IP，而唔係代理伺服器 IP。",proxyTrustHops:"信任代理層數",proxyTrustHopsHint:"0 = 直連（忽略 header）。1 = nginx 或 Cloudflare→應用。2 = Cloudflare→nginx→應用。",proxyIpSource:"客戶端 IP 來源",proxyIpSourceHint:"auto 會依序嘗試 CF-Connecting-IP、X-Real-IP、X-Forwarded-For。僅直連時先選「socket」。",proxySrcAuto:"自動（建議）",proxySrcCf:"Cloudflare（CF-Connecting-IP）",proxySrcNginx:"nginx（X-Real-IP）",proxySrcXff:"僅 X-Forwarded-For",proxySrcSocket:"僅 TCP socket（無代理）",trustedProxies:"可信代理 IP / CIDR",trustedProxiesHint:"只有呢啲 peer 先可以設定 CF-Connecting-IP / X-Real-IP / XFF。預設 127.0.0.1（本機 nginx）。遠端代理請加其 IP。直連客戶無法偽造 header。",sectionLimits:"限流",sectionAuth:"失敗認證",sectionRate:"限流濫用（429）",sectionConn:"連線洪水",sectionVelocity:"請求速率",sectionEscalate:"累犯升級",sectionWhitelist:"自動封鎖白名單",whitelistHint:"每行一個 IP 或 CIDR。白名單 IP 永不被自動封鎖。",rateWindow:"視窗（秒）",rateMaxKey:"金鑰上限",rateMaxIp:"未認證 IP 上限",burstWindow:"Burst 視窗（秒）",burstMax:"Burst 上限",enableRule:"啟用",threshold:"門檻",windowSec:"視窗（秒）",banMin:"封鎖時長（分）",escalateAfter:"累計自動封鎖 N 次後升級",escalateMin:"升級後封鎖（分）",maxConcurrent:"每 IP 最大並發",velocityMax:"最大請求數",eventsTitle:"最近自動封鎖事件",eventTime:"時間",eventSource:"規則",eventDuration:"封鎖時長",sources:{manual:"手動","auto-auth":"自動 · 認證","auto-rate":"自動 · 429","auto-conn":"自動 · 並發","auto-velocity":"自動 · 速率","auto-escalate":"自動 · 升級"}},pm2:{title:"PM2 控制",tabRunner:"運行方式",tabPort:"連接埠",tabConfig:"設定",tabLogs:"日誌",status:"進程狀態",start:"用 PM2 啟動",stop:"停止 PM2",restart:"重啟",reload:"重載",logs:"日誌",logsHint:"優先顯示錯誤日誌",clearLogs:"清除日誌",confirmClearLogs:"確定清除 PM2 與 gctoac 日誌檔？此操作無法復原（檔案會被清空）。",logsCleared:"已清除 {n} 個日誌檔。",logsAutoTrim:"超過 {maxMb} MB 會自動裁剪，只保留最後約 {keepKb} KB（每次讀取日誌時檢查）。",refresh:"重新整理",confirmStop:"確定停止 PM2 進程？",confirmRestart:"確定以 PM2 重啟？會妥善移交 port。",unavailable:"PM2 不可用",disabled:"已停用 PM2 管理",app:"應用名稱",pid:"進程 ID",uptime:"運行時間",memory:"記憶體",cpu:"CPU",restarts:"重啟次數",portBusy:"連接埠佔用中",port:"連接埠",portTitle:"監聽連接埠",portHint:"Gateway Admin 與 API 的 HTTP 連接埠。更改後會寫入 .env 並重啟進程，新連接埠才會生效。",fieldPort:"連接埠",portDefaultNote:"預設為 3847。有效範圍：1–65535。",savePort:"儲存連接埠並重啟",useDefaultPort:"使用預設（3847）",portInvalid:"請輸入有效連接埠（1–65535）。",confirmPortChange:"將監聽連接埠改為 {port} 並重啟 Gateway？之後請用新連接埠開啟 Admin（例如 http://localhost:{port}/admin）。",portChangedMsg:"連接埠已更新：{from} → {to}。",portSavedNeedRestart:"連接埠 {port} 已寫入 .env。請重啟後才會生效。",portAfterRestart:"重啟後請開啟 http://localhost:{port}/admin",hint:"可用 PM2 或 gctoac 運行，可在此或 CLI 切換。",switchTitle:"運行方式",switchHint:"同一時間只應有一個進程綁定連接埠。",currentRunner:"目前 runner",runnerPm2:"PM2",runnerGctoac:"gctoac（獨立進程）",runnerNone:"未運行",runnerUnknown:"未知／混合",switchToPm2:"切換到 PM2",switchToGctoac:"切換到 gctoac",confirmSwitchPm2:"確定切換到 PM2？gateway 會在數秒內以 PM2 重啟。",confirmSwitchGctoac:"確定切換到 gctoac？gateway 會在數秒內以獨立進程重啟。",switchScheduled:"已排程切換。管理面板將在約 10 秒後自動重新整理。",autoRefreshIn:"本頁將於 {n} 秒後自動重新載入…",autoRefreshNow:"正在重新載入…",gctoacPid:"gctoac 進程 ID",configTitle:"PM2 設定",configHint:"儲存至 pm2.runtime.json，經 ecosystem.config.cjs 套用。若目前用 PM2 運行，「儲存並套用」會重啟 PM2。",saveConfig:"儲存並套用",saveOnly:"只儲存",resetConfig:"還原預設",confirmReset:"確定將 PM2 設定還原為預設？",configSaved:"設定已儲存",fieldName:"應用名稱",fieldScript:"啟動腳本",fieldCwd:"工作目錄 (cwd)",fieldInstances:"實例數",fieldExecMode:"執行模式",fieldAutorestart:"自動重啟",fieldWatch:"檔案監視 (Watch)",fieldMaxMem:"記憶體上限重啟",fieldMaxRestarts:"最大重啟次數",fieldMinUptime:"最短運行時間",fieldRestartDelay:"重啟延遲 (ms)",fieldBackoff:"指數退避延遲 (ms)",fieldMergeLogs:"合併日誌",fieldTime:"日誌時間戳",fieldErrorFile:"錯誤日誌檔",fieldOutFile:"輸出日誌檔",fieldEnvExtra:"額外環境變數（每行 KEY=value）",fieldPreferred:"偏好 runner",empty:"pm2 列表中找不到此應用",modeFork:"fork",modeCluster:"cluster",phCwd:"（套件根目錄）",phInstances:"1 或 max",phEnv:"NODE_ENV=production",statusOnline:"運行中",statusErrored:"錯誤",statusStopped:"已停止",msgOk:"正常",msgDisabled:"PM2 管理已停用（PM2_ADMIN_ENABLED=false）。",msgBinaryMissing:"找不到 pm2，請執行：npm install -g pm2",msgNotInList:"應用「{app}」不在 PM2 列表中 — 請用「用 PM2 啟動」或「切換到 PM2」。",msgPortGctoac:"連接埠 {port} 正由 gctoac 佔用（pid {pid}）。請按「切換到 PM2」移交。",msgPortBusy:"連接埠 {port} 被佔用（pid {pids}）。",msgErrored:"PM2 進程出錯 — 請查日誌／設定，然後重啟或處理連接埠衝突。",msgBothRunners:"偵測到兩個 runner；gctoac pid {pid} 仍佔用資源。請用「切換」只保留一個。",msgError:"PM2 錯誤：{error}",msgSwitchPm2:"正在切換至 PM2… Gateway 將於數秒內以 PM2 重新啟動。",msgSwitchGctoac:"正在切換至 gctoac… Gateway 將於數秒內以獨立進程重新啟動。"},system:{title:"系統狀態",tabSoftware:"軟件",tabPackage:"套件",tabEnv:"環境",envHint:"運行環境與版本快照。",checkUpdate:"檢查更新",oneClick:"更新套件並重啟",selfUpdate:"套件版本",selfHint:"對比版本 · 更新套件會重啟 gateway。",current:"本機版本",npm:"npm 最新版",github:"GitHub 最新版",install:"安裝渠道",confirmUpdate:"確定更新套件並重啟 gateway？期間 API 會短暫中斷。",scheduled:"已排程更新，請約 30 秒後重新整理頁面。",database:"資料庫",grokCli:"Grok CLI",concurrency:"併發",runtime:"運行狀態",software:"系統軟件",softwareHint:"所需軟件與已安裝版本。",softName:"軟件",softLevel:"需求",softInstalled:"已安裝",softVersion:"版本",softStatus:"狀態",softDetail:"說明",levelRequired:"必須",levelRecommended:"建議",levelOptional:"可選",levelBundled:"內建",softOk:"正常",softMissing:"未安裝",softWarn:"注意",envTitle:"環境變數",up:"正常",down:"異常",yes:"是",no:"否",badgeUpdate:"有新版本",badgeOk:"已是最新",badgeAhead:"新於 npm",badgeUnknown:"無法比較",statusHintUpdate:"發佈庫有較新版本，可按「更新套件並重啟」。",statusHintOk:"本機版本與目前已知最新發佈版一致。",statusHintAhead:"本機版本比 npm 新（常見於 git／開發版）。若是 git 安裝，「更新套件」仍可拉取最新 commits。",statusHintUnknown:"無法連上 npm／GitHub，未能比較版本。",checkResult:"版本檢查結果",channelGit:"git（開發目錄）",channelNpmGlobal:"npm 全域",channelNpmLocal:"npm 本地",channelUnknown:"未知",encryption:"加密",ready:"就緒",notReady:"未就緒",allRequiredOk:"必須軟件齊全",requiredMissing:"有必須軟件缺失"},common:{empty:"暫無資料",active:"啟用",revoked:"已撤銷",save:"儲存",cancel:"關閉",loading:"載入中…",powered:"技術支援",actions:"操作",yes:"是",no:"否",ok:"確定",confirm:"確定",notice:"提示",confirmTitle:"請確認",dangerTitle:"確認操作",apply:"套用",reset:"重設",search:"搜尋",prev:"上一頁",next:"下一頁",perPage:"每頁",pagerTotal:"共 {n} 筆",pagerPage:"第 {n} / {total} 頁",filterTitle:"搜尋與篩選",filterHint:"設定條件後按「套用」",featureOff:"已關閉",all:"全部",requestFailed:"請求失敗",ms:"{n} 毫秒",perMin:"{n}/分",minutes:"{n} 分鐘",mb:"{n} MB",percent:"{n}%",ipLabel:"IP",uaLabel:"UA",httpStatus:"HTTP"},errors:{unauthorized:"憑證無效或缺失，請重新登入。",forbidden:"您沒有執行此操作的權限。",not_found:"找不到請求的資源。",validation_error:"請求無效，請檢查輸入內容。",rate_limit_exceeded:"已超過速率限制，請稍後再試。",concurrency_limit_exceeded:"Grok 並行工作過多，請稍候再試。",internal_error:"伺服器發生內部錯誤。",grok_error:"Grok CLI 回傳錯誤。",grok_timeout:"Grok CLI 執行逾時。",grok_not_available:"此伺服器無法使用 Grok CLI。",document_too_large:"文件大小超過允許上限。",document_type_not_allowed:"不允許此文件類型。",invalid_cwd:"不允許使用此工作目錄。",service_unavailable:"服務暫時無法使用。",queue_full:"對話佇列已滿，請稍後再試。",queue_draining:"對話佇列已暫停或正在排空。",queue_wait_timeout:"在對話佇列中等待逾時。",queue_cancelled:"對話工作已取消。",media_not_supported:"此媒體功能不可用或已停用。",media_provider_unavailable:"媒體提供者不可用。",media_generation_failed:"媒體生成失敗。",media_forbidden:"此 API 金鑰不允許生成媒體。請使用 agent 模式金鑰或管理員工作階段。",feature_disabled:"此 API 功能已停用。",feature:{imagesApi:"Images API 已停用。請至「管理 → API 能力 → Images API」啟用。",videoApi:"Video API 已停用。請至「管理 → API 能力 → Videos API」啟用。",audioApi:"Audio API 已停用。請至「管理 → API 能力 → Audio API」啟用。",tools:"Tools 已停用。請至「管理 → API 能力」啟用 Tools（圖像生成需要）。",filesOpenAiAlias:"OpenAI Files API 別名已停用。請至「管理 → API 能力 → Files API 別名」啟用。"},media:{agent_or_admin_required:"圖像生成需要 agent 模式 API 金鑰或管理員工作階段。安全模式金鑰無法使用圖像工具。",source_required:"請提供圖像檔、媒體資產或文件作為來源。",source_must_be_image:"編輯或生成影片時，來源必須為圖像。",no_image_in_sandbox:"Grok 已結束，但未在沙箱中找到圖像檔。請確認已啟用 imagesApi 與 tools，且金鑰為 agent 模式或管理員。",no_video_in_sandbox:"Grok 已結束，但未在沙箱中找到影片檔。",provider_no_edit:"目前媒體提供者不支援圖像編輯。"}}}};function os(){const a=localStorage.getItem(Ia);return a==="en"||a==="zh-Hant"?a:(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh-Hant":"en"}let Xe=os();function it(){return Xe}function Ma(a){a!=="en"&&a!=="zh-Hant"||(Xe=a,localStorage.setItem(Ia,a))}function e(a){const s=a.split(".");let n=Dt[Xe]||Dt.en;for(const o of s)if(n&&typeof n=="object"&&o in n)n=n[o];else{n=Dt.en;for(const i of s)if(n&&typeof n=="object"&&i in n)n=n[i];else return a;break}return typeof n=="string"?n:a}function Se(a){return e(a)!==a}function I(a,s={}){let n=e(a);for(const[o,i]of Object.entries(s))n=n.replaceAll(`{${o}}`,String(i));return n}function jt(){return`
  <div class="lang-switch" role="group" aria-label="${Xe==="zh-Hant"?"語言":"Language"}">
    <button type="button" data-lang="en" class="${Xe==="en"?"is-active":""}">EN</button>
    <button type="button" data-lang="zh-Hant" class="${Xe==="zh-Hant"?"is-active":""}">中文</button>
  </div>`}const qa=new Set([".txt",".md",".markdown",".csv",".json",".xml",".html",".htm",".js",".ts",".tsx",".jsx",".py",".java",".go",".rs",".c",".cpp",".h",".hpp",".css",".yml",".yaml",".toml",".ini",".env",".sh",".sql",".log",".pdf",".png",".jpg",".jpeg",".webp",".gif"]),is=[...qa].join(","),Zt="/admin/api",Pt="gog_admin_session";let _e=null,Re=!1;function ea(a,s){const n=a?.error&&typeof a.error=="object"?a.error:a||{},o=typeof n.code=="string"?n.code:"",i=n.details&&typeof n.details=="object"?n.details:{},r=typeof i.feature=="string"?i.feature:typeof i.flag=="string"?i.flag:"",d=typeof i.reason=="string"?i.reason:"",u=String(n.message||a?.message||s||"");if(r&&(o==="feature_disabled"||o==="media_not_supported"||o==="forbidden")){const l=`errors.feature.${r}`;if(Se(l))return e(l)}if(o==="feature_disabled"&&Se("errors.feature_disabled")){const l=Ot(u);return l&&Se(`errors.feature.${l}`)?e(`errors.feature.${l}`):e("errors.feature_disabled")}if(d&&Se(`errors.media.${d}`))return e(`errors.media.${d}`);if(o==="media_generation_failed"&&d&&Se(`errors.media.${d}`))return e(`errors.media.${d}`);if(o==="media_forbidden"&&Se("errors.media_forbidden"))return e("errors.media_forbidden");const m=Ot(u);if(m&&Se(`errors.feature.${m}`))return e(`errors.feature.${m}`);if(o){const l=`errors.${o}`;if(Se(l))return e(l)}const p=Ot(u);return p&&Se(`errors.feature.${p}`)?e(`errors.feature.${p}`):/agent-mode|agent mode|Safe keys cannot/i.test(u)?e("errors.media.agent_or_admin_required"):/no image file was found/i.test(u)?e("errors.media.no_image_in_sandbox"):/no video file was found/i.test(u)?e("errors.media.no_video_in_sandbox"):/does not support image edits/i.test(u)?e("errors.media.provider_no_edit"):/Provide an image file|sourceAssetId|sourceDocumentId/i.test(u)?e("errors.media.source_required"):/must be an image/i.test(u)?e("errors.media.source_must_be_image"):u||e("common.requestFailed")}function Ot(a){const s=String(a||"");return/videoApi/i.test(s)||/Video API is disabled/i.test(s)?"videoApi":/imagesApi/i.test(s)||/Images API is disabled/i.test(s)?"imagesApi":/audioApi/i.test(s)||/Audio API is disabled/i.test(s)?"audioApi":/filesOpenAiAlias/i.test(s)||/Files API alias/i.test(s)?"filesOpenAiAlias":/Tools are disabled/i.test(s)||/\btools\b/i.test(s)&&/disabled/i.test(s)&&/image/i.test(s)?"tools":""}const c={key:sessionStorage.getItem(Pt)||"",page:"dashboard",me:null,error:"",modal:null,chatFilter:{q:"",status:"",model:"",apiKeyId:"",from:"",to:"",policyMode:"",hasDocuments:"",limit:50,offset:0},docFilter:{q:"",apiKeyId:"",storageType:"",from:"",to:"",limit:20,offset:0},keyFilter:{q:"",role:"",mode:"",isActive:"",limit:20,offset:0},auditFilter:{q:"",action:"",apiKeyId:"",from:"",to:"",limit:50,offset:0},usageFilter:{tab:"model",modelQ:"",keyQ:"",keyActive:"",modelPage:0,keyPage:0,pageSize:10},ddosFilter:{tab:"policy",liveQ:"",banQ:"",banSource:"",livePage:0,banPage:0,pageSize:15},mediaFilter:{tab:"studio",q:"",kind:"",provider:"",from:"",to:"",limit:20,offset:0},systemTab:"software",pm2Tab:"runner",apiFeaturesTab:"protocols",models:[],keys:[]},ds={login:"login",dashboard:"dashboard",chat:"chat",chats:"chats",keys:"keys",documents:"documents",media:"media",audit:"audit",settings:"settings","api-features":"apiFeatures",apifeatures:"apiFeatures",usage:"usage",ddos:"ddos",queue:"queue",pm2:"pm2",system:"system"};function rs(a){return a==="apiFeatures"?"api-features":a||"dashboard"}function ta(a){const s=String(a||"").replace(/^#\/?/,"").split("?")[0].split("/")[0].toLowerCase();return s&&ds[s]||null}function aa(a){const s=`#/${rs(a)}`;location.hash!==s&&history.pushState(null,"",s)}function ls(){const a=ta(location.hash);return a||(c.key?"dashboard":"login")}async function P(a,s={}){const n={...s.body?{"Content-Type":"application/json"}:{},...c.key?{Authorization:`Bearer ${c.key}`}:{},...s.headers||{}},o=await fetch(`${Zt}${a}`,{...s,headers:n}),i=await o.text();let r=null;try{r=i?JSON.parse(i):null}catch{r={error:{message:i}}}if(!o.ok){const d=ea(r,o.statusText),u=r?.error?.code||"";o.status===401?c.page!=="login"&&Et(!1):o.status===403&&!["media_forbidden","feature_disabled","forbidden","media_not_supported"].includes(u)&&c.page!=="login"&&Et(!1);const m=new Error(d);throw m.status=o.status,m.code=u,m.details=r?.error?.details,m}return r}async function pa(a){const s=await a.text();let n=null;try{n=s?JSON.parse(s):null}catch{n={error:{message:s}}}if(!a.ok){const o=ea(n,a.statusText),i=new Error(o);throw i.status=a.status,i.code=n?.error?.code,i.details=n?.error?.details,i}return n}function Et(a=!0){const s=c.key;a&&s&&String(s).startsWith("gog_sess_")&&fetch("/admin/api/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${s}`}}).catch(()=>{}),a&&sessionStorage.removeItem(Pt),c.key="",c.me=null,c.page="login",aa("login"),Lt()}function sa(a){na(a,{writeHash:!0})}function na(a,s={}){const n=a||"dashboard";c.page=n,c.modal=null,c.error="",n==="chats"&&(c.chatFilter.offset=0),n==="documents"&&(c.docFilter.offset=0),n==="keys"&&(c.keyFilter.offset=0),n==="audit"&&(c.auditFilter.offset=0),n==="media"&&(c.mediaFilter.offset=0),n!=="ddos"&&_e&&(clearInterval(_e),_e=null),n!=="chat"&&document.body.classList.remove("chat-history-open"),s.writeHash!==!1&&aa(n),Lt()}function t(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}let ve=null,xt=null;function Ne(a){const s=xt;xt=null,ve&&(ve.remove(),ve=null),document.body.classList.remove("ui-dialog-open"),document.removeEventListener("keydown",oa,!0),s&&s(a)}function oa(a){if(ve&&a.key==="Escape"){a.preventDefault(),a.stopPropagation();const s=ve.dataset.cancelable!=="0";Ne(s?ve.dataset.prompt==="1"?null:!1:!0)}}function Ta(a){ve&&Ne(!1);const s=a.variant||(a.showCancel===!1?"info":"confirm"),n=a.showCancel!==!1,o=!!a.input,i=a.title||e(s==="danger"?"common.dangerTitle":n?"common.confirmTitle":"common.notice"),r=a.confirmText||e(n?"common.confirm":"common.ok"),d=a.cancelText||e("common.cancel"),u=s==="danger"?"!":s==="info"&&!n?"i":"?",m=document.createElement("div");m.className="ui-dialog-back",m.id="ui-dialog-back",m.dataset.cancelable=n||o?"1":"0",m.dataset.prompt=o?"1":"0",m.setAttribute("role","presentation"),m.innerHTML=`
    <div class="ui-dialog ui-dialog--${t(s)}" role="alertdialog" aria-modal="true" aria-labelledby="ui-dialog-title" aria-describedby="ui-dialog-msg">
      <div class="ui-dialog-h">
        <div class="ui-dialog-icon" aria-hidden="true">${u}</div>
        <h3 class="ui-dialog-title" id="ui-dialog-title">${t(i)}</h3>
      </div>
      <div class="ui-dialog-body" id="ui-dialog-msg">${t(a.message||"")}</div>
      ${o?`<div class="ui-dialog-input-wrap">
              <input type="text" class="ui-dialog-input" id="ui-dialog-input" value="${t(a.defaultValue||"")}" placeholder="${t(a.placeholder||"")}" maxlength="${a.maxLength||500}" autocomplete="off" />
            </div>`:""}
      <div class="ui-dialog-actions">
        ${n||o?`<button type="button" class="btn secondary sm" id="ui-dialog-cancel">${t(d)}</button>`:""}
        <button type="button" class="btn ${s==="danger"?"danger":""} sm" id="ui-dialog-ok">${t(r)}</button>
      </div>
    </div>`,document.body.appendChild(m),document.body.classList.add("ui-dialog-open"),ve=m,document.addEventListener("keydown",oa,!0);const p=m.querySelector("#ui-dialog-ok"),l=m.querySelector("#ui-dialog-cancel"),b=m.querySelector("#ui-dialog-input"),h=f=>{if(o){if(!f){Ne(null);return}const v=b instanceof HTMLInputElement?b.value:"";Ne(v);return}Ne(!!f)};return p?.addEventListener("click",f=>{f.preventDefault(),h(!0)}),l?.addEventListener("click",f=>{f.preventDefault(),h(!1)}),m.addEventListener("click",f=>{f.target===m&&(n||o)&&h(!1)}),b instanceof HTMLInputElement&&b.addEventListener("keydown",f=>{f.key==="Enter"&&(f.preventDefault(),h(!0))}),requestAnimationFrame(()=>{b instanceof HTMLInputElement?(b.focus(),b.select()):p?.focus()}),new Promise(f=>{xt=f})}async function le(a){const s=typeof a=="string"?{message:a,showCancel:!1,variant:"info"}:{title:a.title,message:a.message,showCancel:!1,variant:a.variant||"info",confirmText:a.confirmText||e("common.ok")};await Ta(s)}async function V(a){const s=typeof a=="string"?{message:a,showCancel:!0,variant:"confirm"}:{title:a.title,message:a.message,showCancel:!0,variant:a.variant||"confirm",confirmText:a.confirmText,cancelText:a.cancelText};return!!await Ta(s)}function cs(){const a=typeof window<"u"?window.marked:null;if(!a||a.__gogConfigured)return a;try{typeof a.setOptions=="function"?a.setOptions({gfm:!0,breaks:!0}):a.marked&&typeof a.marked.setOptions=="function"&&a.marked.setOptions({gfm:!0,breaks:!0})}catch{}return a.__gogConfigured=!0,a}function Aa(a){if(!a)return"";const s=cs(),n=typeof window<"u"?window.DOMPurify||window.dompurify:null;if(!s)return t(a);let o="";try{if(typeof s.parse=="function")o=s.parse(a,{gfm:!0,breaks:!0});else if(typeof s=="function")o=s(a,{gfm:!0,breaks:!0});else if(s.marked&&typeof s.marked.parse=="function")o=s.marked.parse(a,{gfm:!0,breaks:!0});else return t(a)}catch{return t(a)}if(typeof o!="string"&&(o=String(o??"")),n&&typeof n.sanitize=="function"){o=n.sanitize(o,{USE_PROFILES:{html:!0},ADD_ATTR:["target","rel"]});try{o=o.replace(/<a\s+([^>]*href=)/gi,'<a target="_blank" rel="noopener noreferrer" $1')}catch{}return o}return t(a)}async function ia(a){const s=String(a??"");if(!s)return!1;try{if(navigator.clipboard&&window.isSecureContext!==!1)return await navigator.clipboard.writeText(s),!0}catch{}try{const n=document.createElement("textarea");n.value=s,n.setAttribute("readonly",""),n.style.position="fixed",n.style.left="-9999px",document.body.appendChild(n),n.select();const o=document.execCommand("copy");return document.body.removeChild(n),o}catch{return!1}}function Z(a){if(!a)return"-";try{return new Date(a).toLocaleString(it()==="zh-Hant"?"zh-HK":"en-US")}catch{return a}}function $e(a){return a==null?"—":a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:I("common.mb",{n:(a/1024/1024).toFixed(1)})}function It(a){return a==null||a===""?"—":I("common.ms",{n:a})}function Ba(a){return a==null||a===""?"—":I("common.perMin",{n:a})}function R(a){c.error=a;const s=document.querySelector("#flash-error");s&&(s.hidden=!a,s.textContent=a)}function da(a){const s=a==="success"?"success":a==="error"||a==="timeout"?"error":"pending",n=a==="success"?e("status.success"):a==="error"?e("status.error"):a==="timeout"?e("status.timeout"):a==="pending"?e("status.pending"):a||"-";return`<span class="badge ${s}">${t(n)}</span>`}function us(a){const n={queued:{cls:"pending",label:e("queue.stQueued")},leased:{cls:"info",label:e("queue.stLeased")},running:{cls:"success",label:e("queue.stRunning")},succeeded:{cls:"success",label:e("queue.stSucceeded")},failed:{cls:"error",label:e("queue.stFailed")},dead:{cls:"error",label:e("queue.stDead")},cancelled:{cls:"muted",label:e("queue.stCancelled")}}[a]||{cls:"pending",label:a||"—"};return`<span class="badge ${n.cls}">${t(n.label)}</span>`}function ms(a){const s=a==="playground"?e("queue.srcPlayground"):a==="v1"?e("queue.srcV1"):a||"—";return`<span class="badge muted">${t(s)}</span>`}function Ct(a){const s=a==="agent"?"agent":a==="safe"?"safe":a||"safe",n=s==="agent"?e("keys.modeAgentBadge"):s==="safe"?e("keys.modeSafeBadge"):s;return`<span class="badge ${s==="agent"?"agent":"safe"}">${t(n)}</span>`}function ps(a){const s=String(a||"").toLowerCase(),n=s==="admin"?e("keys.roleAdminBadge"):s==="client"||s==="user"?e("keys.roleClientBadge"):a||"-";return t(n)}function lt(a){return String(a||"").toLowerCase().startsWith("image/")}function ra(a,s=""){const n=String(a||"").toLowerCase().trim(),i=(String(s||"").toLowerCase().match(/\.([a-z0-9]+)$/)||[])[1]||"";return n.startsWith("image/")||["png","jpg","jpeg","gif","webp","svg","bmp","avif","ico"].includes(i)?"image":n.startsWith("video/")||["mp4","webm","ogg","ogv","mov","m4v"].includes(i)?"video":n.startsWith("audio/")||["mp3","wav","ogg","oga","m4a","aac","flac","opus"].includes(i)?"audio":n==="application/pdf"||i==="pdf"?"pdf":n.startsWith("text/")||n==="application/json"||n==="application/xml"||n==="application/javascript"||["txt","md","csv","json","xml","html","htm","css","js","log","svg"].includes(i)?i==="svg"?"image":"text":null}function fs(a,s=""){return ra(a,s)!=null}let yt=null;function Ca(){if(yt){try{URL.revokeObjectURL(yt)}catch{}yt=null}}function gs(a,s,n){return a==="image"?`<img class="media-lb-media media-lb-img" src="${s}" alt="${t(n)}" />`:a==="video"?`<video class="media-lb-media media-lb-video" src="${s}" controls playsinline preload="metadata"></video>`:a==="audio"?`
      <div class="media-lb-audio-wrap">
        <div class="media-lb-audio-icon" aria-hidden="true">♪</div>
        <audio class="media-lb-media media-lb-audio" src="${s}" controls preload="metadata"></audio>
      </div>`:a==="pdf"?`<iframe class="media-lb-media media-lb-pdf" src="${s}#toolbar=1" title="${t(n)}"></iframe>`:a==="text"?`<div class="media-lb-text-loading muted">${t(e("common.loading")||"…")}</div>`:`<div class="data-empty"><strong>${t(e("media.previewUnsupported"))}</strong></div>`}function fa(a,s){const n=a.mime||s.type||"",o=a.filename||a.id||"asset",i=ra(n,o)||"image",r=e("media.preview"),d=[o,n||"—",a.bytes!=null?$e(a.bytes):"",a.kind||""].filter(Boolean),u=t(d.join(" · ")),m=a.prompt?`<div class="media-lb-prompt"><span class="muted">${t(e("media.prompt"))}</span><p>${t(a.prompt)}</p></div>`:"";et({title:r,subtitle:u,size:"xl",bodyHtml:`
      <div class="media-lightbox" data-preview-kind="${t(i)}">
        <div class="media-lb-stage">
          <div class="media-lb-text-loading muted">${t(e("common.loading")||"…")}</div>
        </div>
        ${m}
      </div>`,footerHtml:`
      <button type="button" class="btn secondary sm" id="media-lb-download">${t(e("media.download"))}</button>
      <button type="button" class="btn sm" id="media-lb-close">${t(e("common.cancel"))}</button>`});const p=document.querySelector("#modal-back .modal");p&&p.classList.add("modal--media-preview");const l=URL.createObjectURL(s);yt=l;const b=document.querySelector("#modal-back .media-lb-stage");b&&(b.innerHTML=gs(i,l,o));const h=()=>{document.querySelectorAll("#modal-back video, #modal-back audio").forEach(f=>{try{f.pause()}catch{}}),Ca(),ce()};document.getElementById("modal-close")?.addEventListener("click",f=>{f.preventDefault(),h()}),document.getElementById("media-lb-close")?.addEventListener("click",f=>{f.preventDefault(),h()}),document.getElementById("modal-back")?.addEventListener("click",f=>{f.target?.id==="modal-back"&&h()}),document.getElementById("media-lb-download")?.addEventListener("click",()=>{const f=document.createElement("a");f.href=l,f.download=o,f.click()}),i==="text"&&s.text().then(f=>{const v=document.querySelector("#modal-back .media-lb-stage");if(!v)return;const y=4e5,w=f.length>y?f.slice(0,y)+`
… (${e("media.previewTruncated")})`:f;v.innerHTML=`<pre class="media-lb-text">${t(w)}</pre>`}).catch(()=>{const f=document.querySelector("#modal-back .media-lb-stage");f&&(f.innerHTML=`<div class="error-box">${t(e("media.previewFail"))}</div>`)})}function La(){return`
  <footer class="site-footer">
    <a class="powered-by" href="https://ysk.hk/" target="_blank" rel="noopener noreferrer">
      <img src="/admin/assets/logo.svg" alt="" width="22" height="22" />
      <span>${t(e("common.powered"))} <strong>YSK Limited</strong></span>
    </a>
  </footer>`}function hs(){return{dashboard:e("nav.dashboard"),chat:e("nav.chat"),chats:e("nav.chats"),keys:e("nav.keys"),documents:e("nav.documents"),audit:e("nav.audit"),settings:e("nav.settings"),apiFeatures:e("nav.apiFeatures"),media:e("nav.media"),usage:e("nav.usage"),ddos:e("nav.ddos"),queue:e("nav.queue"),pm2:e("nav.pm2"),system:e("nav.system")}[c.page]||e("brand")}function ft(){document.body.classList.remove("nav-open")}function bs(){document.body.classList.add("nav-open")}function ne(a){return`
  <div class="app-shell">
    <header class="mobile-bar">
      <button type="button" class="icon-btn" id="nav-open" aria-label="${t(e("shell.menu"))}">☰</button>
      <div class="mobile-title">${t(hs())}</div>
      ${jt()}
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
        ${jt()}
        ${ie("dashboard",e("nav.dashboard"))}
        ${ie("chat",e("nav.chat"))}
        ${ie("chats",e("nav.chats"))}
        ${ie("keys",e("nav.keys"))}
        ${ie("documents",e("nav.documents"))}
        ${ie("media",e("nav.media"))}
        ${ie("audit",e("nav.audit"))}
        ${ie("settings",e("nav.settings"))}
        ${ie("apiFeatures",e("nav.apiFeatures"))}
        ${ie("usage",e("nav.usage"))}
        ${ie("ddos",e("nav.ddos"))}
        ${ie("queue",e("nav.queue"))}
        ${ie("pm2",e("nav.pm2"))}
        ${ie("system",e("nav.system"))}
        <div class="sidebar-foot">
          <button class="btn secondary sm logout-btn" id="btn-logout">${t(e("logout"))}</button>
        </div>
      </aside>
      <main class="main">
        <div id="flash-error" class="error-box" ${c.error?"":"hidden"}>${t(c.error)}</div>
        ${a}
      </main>
    </div>
    ${La()}
  </div>
  ${c.modal||""}
  `}function ie(a,s){return`<button type="button" class="nav-btn ${c.page===a?"active":""}" data-nav="${a}">${t(s)}</button>`}function oe(){ft(),document.querySelectorAll("[data-nav]").forEach(s=>{s.onclick=()=>{ft(),sa(s.dataset.nav)}});const a=()=>Et(!0);document.getElementById("btn-logout")?.addEventListener("click",a),document.getElementById("btn-logout-mobile")?.addEventListener("click",a),document.getElementById("nav-open")?.addEventListener("click",bs),document.getElementById("nav-backdrop")?.addEventListener("click",ft),document.addEventListener("keydown",s=>{s.key==="Escape"&&ft()},{once:!0}),document.querySelectorAll("[data-lang]").forEach(s=>{s.onclick=()=>{Ma(s.dataset.lang),Lt().catch($)}})}function $(a){console.error(a),R(a.message||String(a))}async function Ha(){if(!c.key)return!1;const a=await P("/me");return c.me=a.data,!0}async function dt(a=!1){try{const s=await P(`/models${a?"?refresh=1":""}`);return c.models=s.data?.models||[],s.data}catch{return c.models=[],{models:[],source:"fallback",defaultModel:""}}}async function ct(){try{const a=await P("/keys?all=1");c.keys=a.data||[]}catch{c.keys=[]}}function we(a){const s=(Array.isArray(a)?a:[a]).filter(Boolean);return s.length?`<div class="page-meta" role="status">${s.map(o=>`<span>${typeof o=="string"?t(o):o}</span>`).join('<span class="page-meta-sep" aria-hidden="true">·</span>')}</div>`:""}function He({title:a,hint:s,meta:n,searchHtml:o,gridHtml:i}){return`
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
    </div>`}function be({headHtml:a,bodyHtml:s,colSpan:n,emptyText:o,pagerHtml:i}){const r=s||`<tr class="empty-row"><td colspan="${n||6}">
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
    </div>`}function ke({total:a,limit:s,offset:n,idPrefix:o}){const i=Math.max(1,Math.ceil((a||0)/s)||1),r=Math.floor(n/s)+1,d=n>0,u=n+s<a;return`
    <div class="data-pager" id="${o}-pager">
      <div class="data-pager-meta">
        <span>${t(I("common.pagerTotal",{n:a||0}))}</span>
        <span>${t(I("common.pagerPage",{n:r,total:i}))}</span>
        <label class="muted">${t(e("common.perPage"))}
          <select id="${o}-limit">
            ${[10,20,50,100].map(m=>`<option value="${m}" ${s===m?"selected":""}>${m}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="data-pager-actions">
        <button type="button" class="btn secondary sm" id="${o}-prev" ${d?"":"disabled"}>${t(e("common.prev"))}</button>
        <button type="button" class="btn secondary sm" id="${o}-next" ${u?"":"disabled"}>${t(e("common.next"))}</button>
      </div>
    </div>`}function Ze(a,s,n){document.getElementById(`${a}-prev`)?.addEventListener("click",()=>{s.offset=Math.max(0,s.offset-s.limit),n()}),document.getElementById(`${a}-next`)?.addEventListener("click",()=>{s.offset=s.offset+s.limit,n()}),document.getElementById(`${a}-limit`)?.addEventListener("change",o=>{s.limit=Number(o.target.value)||20,s.offset=0,n()})}function ce(){document.querySelectorAll("#modal-back video, #modal-back audio").forEach(a=>{try{a.pause()}catch{}}),Ca(),document.getElementById("modal-back")?.remove(),c.modal=null}function et({title:a,subtitle:s,bodyHtml:n,footerHtml:o,size:i="md"}){ce();const r=`
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
    </div>`;document.getElementById("app").insertAdjacentHTML("beforeend",r);const d=()=>ce();document.getElementById("modal-close").onclick=d,document.getElementById("modal-back").onclick=m=>{m.target.id==="modal-back"&&d()};const u=m=>{m.key==="Escape"&&(d(),document.removeEventListener("keydown",u))};document.addEventListener("keydown",u)}async function Da(){const a="gctoac admin otp";document.getElementById("app").innerHTML=`
    <div class="login-wrap">
      <div class="login-stage">
        <div class="login-card">
          <div class="login-brand">
            <img src="/admin/assets/logo.svg" alt="YSK" width="48" height="48" />
            <h1 class="brand-title">${t(e("loginTitle"))}</h1>
          </div>
          ${jt()}
          <div id="flash-error" class="error-box" ${c.error?"":"hidden"}>${t(c.error)}</div>
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
      ${La()}
    </div>
  `,document.querySelectorAll("[data-lang]").forEach(s=>{s.onclick=()=>{Ma(s.dataset.lang),Da().catch($)}}),document.getElementById("btn-copy-cmd").onclick=async()=>{try{await navigator.clipboard.writeText(a);const s=document.getElementById("btn-copy-cmd");s.textContent=e("loginCopied"),setTimeout(()=>{s.textContent=e("loginCopy")},1500)}catch{}},document.getElementById("btn-login").onclick=async()=>{const s=document.getElementById("login-key").value.trim();if(!s)return R(e("needOtp"));try{const n=await fetch("/admin/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:s})}),o=await n.json().catch(()=>({}));if(!n.ok)throw new Error(o?.error?.message||o?.message||e("loginOtpFail"));const i=o?.data?.token;if(!i)throw new Error(e("loginOtpFail"));c.key=i,sessionStorage.setItem(Pt,i),await Ha(),c.error="",sa("dashboard")}catch(n){c.key="",sessionStorage.removeItem(Pt),R(n.message||e("loginOtpFail"))}},document.getElementById("login-key").onkeydown=s=>{s.key==="Enter"&&document.getElementById("btn-login").click()}}function ge({label:a,value:s,sub:n,tone:o,href:i,valueId:r,subId:d}){const u=o?` dash-kpi--${o}`:"",m=r?` id="${t(r)}"`:"",p=d?` id="${t(d)}"`:"",l=`
    <div class="label">${t(a)}</div>
    <div class="value"${m}>${s}</div>
    ${n!=null&&n!==""?`<div class="dash-kpi-sub muted"${p}>${n}</div>`:""}`;return i?`<button type="button" class="card dash-kpi${u}" data-nav="${t(i)}">${l}</button>`:`<div class="card dash-kpi${u}">${l}</div>`}function Ce(a,s,n){return a?`<span class="badge success">${t(s)}</span>`:`<span class="badge warn">${t(n)}</span>`}function la({id:a,on:s,onLabel:n,offLabel:o,title:i}){return`<button type="button"
    class="master-toggle ${s?"is-on":"is-off"}"
    id="${t(a)}"
    aria-pressed="${s?"true":"false"}"
    title="${t(i||"")}">
    <span class="master-toggle-track" aria-hidden="true"><span class="master-toggle-knob"></span></span>
    <span class="master-toggle-label">${t(s?n:o)}</span>
  </button>`}function Ue(a){const s=document.getElementById(a);return s?s.classList.contains("is-on"):!1}function We(a,s,n,o){const i=document.getElementById(a);if(!i)return;i.classList.toggle("is-on",!!s),i.classList.toggle("is-off",!s),i.setAttribute("aria-pressed",s?"true":"false");const r=i.querySelector(".master-toggle-label");r&&n!=null&&o!=null&&(r.textContent=s?n:o)}function Ge(a,s){const n=document.getElementById(a);n&&(n.hidden=!s)}function Qe(a,s){const n=document.getElementById(a);n&&n.classList.toggle("is-feature-off",!!s)}function ys(a){return{auto:e("ddos.proxySrcAuto"),cloudflare:e("ddos.proxySrcCf"),nginx:e("ddos.proxySrcNginx"),"x-forwarded-for":e("ddos.proxySrcXff"),socket:e("ddos.proxySrcSocket")}[a]||a||"—"}async function Ut(){const s=(await P("/stats")).data||{},n=s.totals||{},o=s.protection||{},i=s.runtime||{},r=s.concurrency||{},d=s.queue||null,u=s.safety||null,m=s.models24h||[],p=n.successRate24h??0,l=n.successRate??0,b=s.generatedAt?Z(s.generatedAt):"—";let h="—",f=e("dash.kpiQueueSub"),v="";if(d){d.enabled?d.paused?(h=e("dash.kpiQueuePaused"),v="warn"):d.drainMode?(h=e("dash.kpiQueueDrain"),v="warn"):h=`${d.depth??0}`:(h=e("dash.kpiQueueOff"),v="warn");const g=d.oldestQueuedAgeMs>0?` · wait ${Math.round(d.oldestQueuedAgeMs/1e3)}s`:"";f=I("dash.kpiQueueSubLive",{run:d.running??0,max:d.globalConcurrency??"—",dead:d.dead??0,wait:g}),((d.dead||0)>0||(d.depth||0)>20)&&(v=v||"warn")}const y=!!u?.globalSafeMode,w=u?e(y?"dash.kpiSafeOn":"dash.kpiSafeOff"):"—",C=u?I("dash.kpiSafeSub",{tools:u.safeToolsMode||"—",turns:u.safeMaxTurns??"—",model:u.defaultModel||"—"}):e("dash.kpiSafeSubEmpty"),A=(s.recentChats||[]).map(g=>`
    <tr>
      <td><button class="linkish cell-primary" data-chat="${g.id}">${t(g.requestId)}</button>
        <div class="cell-sub">${t(g.apiKey?.name||"")}</div></td>
      <td>${t(g.model)}</td>
      <td>${da(g.status)}</td>
      <td>${Ct(g.policyMode||"-")}</td>
      <td>${It(g.durationMs)}</td>
      <td>${Z(g.createdAt)}</td>
    </tr>`).join(""),T=be({headHtml:`
      <th>${t(e("chats.request"))}</th>
      <th>${t(e("chats.model"))}</th>
      <th>${t(e("chats.status"))}</th>
      <th>${t(e("chats.mode"))}</th>
      <th>${t(e("chats.duration"))}</th>
      <th>${t(e("chats.time"))}</th>`,bodyHtml:A,colSpan:6,emptyText:e("dash.empty")}),M=Math.max(1,...m.map(g=>g.requests||0)),H=m.length?m.map(g=>{const k=Math.round((g.requests||0)/M*100);return`
          <div class="dash-bar-row">
            <div class="dash-bar-label" title="${t(g.model)}">${t(g.model)}</div>
            <div class="dash-bar-track"><span style="width:${k}%"></span></div>
            <div class="dash-bar-n">${g.requests}</div>
          </div>`}).join(""):`<div class="data-empty" style="padding:20px"><strong>${t(e("dash.emptyModels"))}</strong></div>`,G=(g,k)=>`<span class="dash-rule-chip ${g?"is-on":"is-off"}">${t(k)}</span>`,J=d?`
      <div class="dash-stat-grid">
        <div><div class="label">${t(e("dash.qQueued"))}</div><div class="value value-sm">${d.queued??0}</div></div>
        <div><div class="label">${t(e("dash.qRunning"))}</div><div class="value value-sm">${d.running??0}<span class="dash-kpi-den">/${d.globalConcurrency??"—"}</span></div></div>
        <div><div class="label">${t(e("dash.qDead"))}</div><div class="value value-sm">${d.dead??0}</div></div>
        <div><div class="label">${t(e("dash.qSucceeded"))}</div><div class="value value-sm">${d.succeeded??0}</div></div>
      </div>
      <div class="dash-prot-meta muted">
        ${t(e("dash.qWorker"))}: ${t(d.workerId||"—")}
        · ${t(e("dash.qWorkerActive"))}: ${d.workerActive??0}
        ${d.oldestQueuedAgeMs>0?` · ${t(e("dash.qOldest"))}: ${Math.round(d.oldestQueuedAgeMs/1e3)}s`:""}
      </div>`:`<div class="data-empty" style="padding:12px 0"><strong>${t(e("dash.qUnavailable"))}</strong></div>`;document.getElementById("app").innerHTML=ne(`
    <div class="dash-hero">
      <div class="dash-hero-text">
        <h2>${t(e("dash.title"))}</h2>
        <p class="muted">${t(e("dash.subtitle"))}</p>
      </div>
      <div class="dash-hero-meta">
        <span class="muted">${t(e("dash.updated"))}: ${t(b)}</span>
        <button type="button" class="btn secondary sm" id="dash-refresh">${t(e("dash.refresh"))}</button>
      </div>
    </div>

    <div class="dash-kpi-grid">
      ${ge({label:e("dash.kpi24h"),value:n.chats24h??0,sub:I("dash.kpi24hSub",{ok:n.success24h??0,err:n.error24h??0}),tone:"primary",href:"chats"})}
      ${ge({label:e("dash.kpiSuccessRate"),value:`${p}%`,sub:I("dash.kpiSuccessRateSub",{all:l}),tone:p>=90?"ok":p>=70?"warn":"danger",href:"usage"})}
      ${ge({label:e("dash.kpiErrors"),value:n.error24h??0,sub:I("dash.kpiErrorsSub",{all:n.errors??0}),tone:(n.error24h||0)>0?"warn":"ok",href:"chats"})}
      ${ge({label:e("dash.kpiQueue"),value:h,sub:f,tone:v,href:"queue"})}
      ${ge({label:e("dash.kpiSafe"),value:w,sub:C,tone:u?y?"ok":"warn":"",href:"settings"})}
      ${ge({label:e("dash.kpiKeys"),value:`${n.activeKeys??0}<span class="dash-kpi-den">/${n.totalKeys??0}</span>`,sub:e("dash.kpiKeysSub"),href:"keys"})}
      ${ge({label:e("dash.kpiDocs"),value:n.documents??0,sub:e("dash.kpiDocsSub"),href:"documents"})}
      ${ge({label:e("dash.kpiMedia")||"Media",value:n.mediaAssets??0,sub:I("dash.kpiMediaSub",{n:n.mediaAssets24h??0}),href:"media"})}
      ${ge({label:e("dash.kpiConv"),value:n.conversations??0,sub:I("dash.kpiConvSub",{n:n.conversations24h??0}),href:"chat"})}
      ${ge({label:e("dash.kpiSessions"),value:n.adminSessions??i.adminSessions??0,sub:e("dash.kpiSessionsSub")})}
      ${ge({label:e("dash.kpiConcurrent"),value:`${r.active??0}<span class="dash-kpi-den">/${r.max??0}</span>`,sub:e("dash.kpiConcurrentSub"),tone:(r.active||0)>=(r.max||1)?"warn":""})}
    </div>

    <div class="dash-layout">
      <div class="dash-main">
        <div class="panel dash-panel">
          <div class="panel-h">
            <strong>${t(e("dash.recent"))}</strong>
            <button type="button" class="btn secondary sm" data-nav="chats">${t(e("dash.viewAll"))}</button>
          </div>
          ${T.replace("data-table-panel","data-table-panel dash-embed-table")}
        </div>

        <div class="panel dash-panel">
          <div class="panel-h">
            <strong>${t(e("dash.queuePanel"))}</strong>
            <button type="button" class="btn secondary sm" data-nav="queue">${t(e("dash.openQueue"))}</button>
          </div>
          <div class="panel-pad dash-prot">
            <div class="dash-prot-row">
              <span>${t(e("dash.queueState"))}</span>
              ${d?d.enabled?d.paused?`<span class="badge warn">${t(e("dash.kpiQueuePaused"))}</span>`:d.drainMode?`<span class="badge warn">${t(e("dash.kpiQueueDrain"))}</span>`:`<span class="badge success">${t(e("dash.queueLive"))}</span>`:`<span class="badge warn">${t(e("dash.kpiQueueOff"))}</span>`:`<span class="badge warn">${t(e("dash.kpiQueueOff"))}</span>`}
            </div>
            ${J}
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
              ${Ce(y,e("dash.on"),e("dash.off"))}
            </div>
            <div class="dash-stat-grid">
              <div><div class="label">${t(e("dash.safeTools"))}</div><div class="value value-sm">${t(u?.safeToolsMode||"—")}</div></div>
              <div><div class="label">${t(e("dash.safeTurns"))}</div><div class="value value-sm">${u?.safeMaxTurns??"—"}</div></div>
              <div><div class="label">${t(e("dash.safeTimeout"))}</div><div class="value value-sm">${u?.safeTimeoutMs!=null?Math.round(u.safeTimeoutMs/1e3)+"s":"—"}</div></div>
              <div><div class="label">${t(e("dash.defaultModel"))}</div><div class="value value-sm" style="font-size:0.95rem!important">${t(u?.defaultModel||"—")}</div></div>
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
              ${Ce(!!o.autoBanEnabled,e("dash.on"),e("dash.off"))}
            </div>
            <div class="dash-rule-row">
              ${G(o.autoAuthEnabled,e("dash.ruleAuth"))}
              ${G(o.autoRateEnabled,e("dash.ruleRate"))}
              ${G(o.autoConnEnabled,e("dash.ruleConn"))}
              ${G(o.autoVelocityEnabled,e("dash.ruleVelocity"))}
            </div>
            <div class="dash-stat-grid">
              <div><div class="label">${t(e("dash.bans"))}</div><div class="value value-sm">${o.bans??0}</div></div>
              <div><div class="label">${t(e("dash.blocked"))}</div><div class="value value-sm">${o.blockedHits??0}</div></div>
              <div><div class="label">${t(e("dash.rateHits"))}</div><div class="value value-sm">${o.rateLimitedHits??0}</div></div>
              <div><div class="label">${t(e("dash.liveConn"))}</div><div class="value value-sm">${o.activeConnections??0}</div></div>
            </div>
            <div class="dash-prot-meta muted">
              ${t(e("dash.proxy"))}: ${t(ys(o.proxyIpSource))}
              · ${t(e("dash.hops"))}: ${o.proxyTrustHops??0}
              · ${t(e("dash.limits"))}: ${o.rateLimitMax??"—"}/${o.rateLimitIpMax??"—"}
            </div>
          </div>
        </div>

        <div class="panel dash-panel">
          <div class="panel-h"><strong>${t(e("dash.models24h"))}</strong></div>
          <div class="panel-pad">${H}</div>
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
              ${Ce(!!i.encryptionReady,e("dash.ready"),e("dash.notReady"))}
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
  `),oe(),document.getElementById("dash-refresh")?.addEventListener("click",()=>Ut().catch($)),document.querySelectorAll("[data-nav]").forEach(g=>{g.onclick=()=>{const k=g.dataset.nav;k&&sa(k)}}),document.querySelectorAll("[data-chat]").forEach(g=>{g.onclick=()=>Fa(g.dataset.chat)})}function vs(a){return a?.length?a.map(s=>`<span class="chip ${lt(s.mimeType)?"img":""}" title="${t(s.mimeType)}">${t(s.originalName||e("chats.file"))}</span>`).join(" "):'<span class="muted">—</span>'}function Oa(a){const s=String(a||"");if(!s.trim())return{system:"",body:"",hasRoles:!1};if(!/^(system|user|assistant|tool): /m.test(s))return{system:"",body:s,hasRoles:!1};const n=/(^|\n)(system|user|assistant|tool): /g,o=[];let i;for(;(i=n.exec(s))!==null;)o.push({role:i[2],contentStart:i.index+i[0].length,index:i.index});if(!o.length)return{system:"",body:s,hasRoles:!1};const r=o.map((m,p)=>{const l=p+1<o.length?o[p+1].index:s.length;return{role:m.role,content:s.slice(m.contentStart,l)}}),d=r.filter(m=>m.role==="system").map(m=>m.content),u=r.filter(m=>m.role!=="system").map(m=>`${m.role}: ${m.content}`);return{system:d.join(`

`).trim(),body:u.length?u.join(`
`):s,hasRoles:!0,blocks:r}}async function vt(){await Promise.all([dt(),ct()]);const a=c.chatFilter,s=new URLSearchParams;if(s.set("limit",String(a.limit)),s.set("offset",String(a.offset)),a.status&&s.set("status",a.status),a.model&&s.set("model",a.model),a.apiKeyId&&s.set("apiKeyId",a.apiKeyId),a.q&&s.set("q",a.q),a.from&&s.set("from",new Date(a.from).toISOString()),a.to){const l=new Date(a.to);l.setHours(23,59,59,999),s.set("to",l.toISOString())}a.policyMode&&s.set("policyMode",a.policyMode),a.hasDocuments!==""&&s.set("hasDocuments",a.hasDocuments);const n=await P(`/chats?${s}`),o=n.total||0,i=[`<option value="">${t(e("chats.allModels"))}</option>`,...c.models.map(l=>`<option value="${t(l)}" ${a.model===l?"selected":""}>${t(l)}</option>`)].join(""),r=[`<option value="">${t(e("chats.allKeys"))}</option>`,...c.keys.map(l=>`<option value="${l.id}" ${a.apiKeyId===l.id?"selected":""}>${t(l.name)} (${t(l.keyPrefix)})</option>`)].join(""),d=(n.items||[]).map(l=>{const b=Oa(l.promptPreview||""),h=!!b.system,f=h?b.body.slice(0,160):l.promptPreview||"";return`
    <tr>
      <td><button class="linkish cell-primary" data-chat="${l.id}">${t(l.requestId)}</button></td>
      <td><div class="cell-primary">${t(l.apiKey?.name||"")}</div><div class="cell-sub">${t(l.apiKey?.keyPrefix||"")}</div></td>
      <td>${t(l.model)}</td>
      <td>${da(l.status)} ${Ct(l.policyMode||"-")}</td>
      <td>${vs(l.documents)} ${l.documentCount?`<span class="muted">×${l.documentCount}</span>`:""}</td>
      <td class="chats-preview-cell">
        ${h?`<span class="chip sys-chip" title="${t(b.system.slice(0,400))}">${t(e("chats.hasSystem"))}</span>`:""}
        <div class="muted preview-text">${t(f)}</div>
      </td>
      <td class="chats-preview-cell"><div class="muted preview-text">${t(l.contentPreview)}</div></td>
      <td>${Z(l.createdAt)}</td>
    </tr>`}).join(""),u=He({title:e("chats.filterTitle")||e("common.filterTitle"),hint:e("chats.filterHint")||e("common.filterHint"),meta:I("common.pagerTotal",{n:o}),searchHtml:`
      <div class="data-filter-search">
        <label for="f-q">${t(e("chats.search"))}</label>
        <input type="search" id="f-q" value="${t(a.q)}" placeholder="${t(e("chats.searchPh"))}" />
      </div>`,gridHtml:`
      <label>${t(e("chats.status"))}
        <select id="f-status">
          <option value="">${t(e("chats.allStatus"))}</option>
          ${["success","error","timeout","pending"].map(l=>`<option value="${l}" ${a.status===l?"selected":""}>${t(e(`status.${l}`))}</option>`).join("")}
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
      </label>`}),m=be({headHtml:`
      <th>${t(e("chats.request"))}</th>
      <th>${t(e("chats.apiKey"))}</th>
      <th>${t(e("chats.model"))}</th>
      <th>${t(e("chats.status"))}</th>
      <th>${t(e("chats.attachments"))}</th>
      <th>${t(e("chats.prompt"))}</th>
      <th>${t(e("chats.response"))}</th>
      <th>${t(e("chats.time"))}</th>`,bodyHtml:d,colSpan:8,emptyText:e("common.empty"),pagerHtml:ke({total:o,limit:a.limit,offset:a.offset,idPrefix:"chats"})});document.getElementById("app").innerHTML=ne(`
    <div class="topbar">
      <h2>${t(e("chats.title"))}</h2>
    </div>
    ${we([e("chats.decrypt")])}
    ${u}
    ${m}
  `),oe(),Ze("chats",c.chatFilter,()=>vt().catch($));const p=()=>{c.chatFilter.q=document.getElementById("f-q").value.trim(),c.chatFilter.status=document.getElementById("f-status").value,c.chatFilter.model=document.getElementById("f-model").value,c.chatFilter.apiKeyId=document.getElementById("f-key").value,c.chatFilter.policyMode=document.getElementById("f-mode").value,c.chatFilter.from=document.getElementById("f-from").value,c.chatFilter.to=document.getElementById("f-to").value,c.chatFilter.hasDocuments=document.getElementById("f-docs").checked?"true":"",c.chatFilter.offset=0,vt().catch($)};document.querySelector("[data-filter-apply]").onclick=p,document.getElementById("f-q").onkeydown=l=>{l.key==="Enter"&&p()},document.querySelector("[data-filter-reset]").onclick=()=>{c.chatFilter={q:"",status:"",model:"",apiKeyId:"",from:"",to:"",policyMode:"",hasDocuments:"",limit:50,offset:0},vt().catch($)},document.querySelectorAll("[data-chat]").forEach(l=>{l.onclick=()=>Fa(l.dataset.chat)})}async function Fa(a){const{data:s}=await P(`/chats/${a}`),n=s.response||{},o=s.documents||[];let i=`<p class="muted">${t(e("chats.noAttach"))}</p>`;if(o.length){const m=[];for(const p of o){let l="";if(lt(p.mimeType))try{const b=await P(`/documents/${p.id}`),h=await Na(b.data||{id:p.id,isImage:!0,mimeType:p.mimeType});h?.src&&(l=`<img class="preview" src="${h.src}" alt="${t(p.originalName)}" />`)}catch{l=`<span class="muted">${t(e("chats.previewFailed"))}</span>`}m.push(`
        <div class="attach-item">
          <div style="flex:1;min-width:0">
            <strong>${t(p.originalName)}</strong>
            <div class="muted">${t(p.mimeType)} · ${$e(p.sizeBytes)}</div>
            ${l}
          </div>
          <button class="btn secondary sm" data-open-doc="${p.id}">${t(e("chats.openFile"))}</button>
        </div>`)}i=`<div class="attach-list">${m.join("")}</div>`}const r=Oa(s.prompt||""),d=r.system?`<div class="block block-system">
        <div class="block-head">
          <h4>${t(e("chats.systemPrompt"))}</h4>
          <button class="btn secondary sm" data-copy="system">${t(e("chats.copySystem"))}</button>
        </div>
        <p class="hint">${t(e("chats.systemHint"))}</p>
        <div class="pre pre-system">${t(r.system)}</div>
      </div>`:`<div class="block block-system muted-block">
        <h4>${t(e("chats.systemPrompt"))}</h4>
        <p class="muted">${t(e("chats.noSystem"))}</p>
      </div>`,u=`
    <div class="grid modal-meta-grid">
      <div class="card"><div class="label">${t(e("chats.model"))}</div><div class="value value-sm">${t(s.model)}</div></div>
      <div class="card"><div class="label">${t(e("chats.duration"))}</div><div class="value value-sm">${It(s.durationMs)}</div></div>
      <div class="card"><div class="label">${t(e("chats.apiKey"))}</div><div class="value value-sm">${t(s.apiKey?.name||"")}</div></div>
      <div class="card"><div class="label">${t(e("chats.stream"))}</div><div class="value value-sm">${s.stream?e("common.yes"):e("common.no")}</div></div>
    </div>
    ${s.errorMessage?`<div class="error-box">${t(s.errorMessage)}</div>`:""}
    ${d}
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
    <div class="modal-meta-foot muted">${t(e("common.ipLabel"))}: ${t(s.ip||"—")} · ${t(e("common.uaLabel"))}: ${t(s.userAgent||"—")} · ${Z(s.createdAt)}</div>`;et({title:e("chats.detail"),subtitle:`${t(s.requestId)} · ${da(s.status)} ${Ct(s.policyMode||"-")}`,bodyHtml:u,size:"xl",footerHtml:`<button type="button" class="btn secondary sm" id="modal-ok">${t(e("chats.close"))}</button>`}),document.getElementById("modal-ok")?.addEventListener("click",()=>ce()),document.querySelector('[data-copy="system"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(r.system||"")}),document.querySelector('[data-copy="prompt"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(r.body||s.prompt||"")}),document.querySelector('[data-copy="raw-prompt"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(s.prompt||"")}),document.querySelector('[data-copy="content"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(n.content||"")}),document.querySelectorAll("[data-open-doc]").forEach(m=>{m.onclick=()=>Ka(m.dataset.openDoc)})}async function Ke(){const a=c.keyFilter;let s={};try{const p=await P("/usage");for(const l of p.data?.perKey||[])s[l.apiKeyId]=l}catch{}const n=new URLSearchParams;n.set("limit",String(a.limit)),n.set("offset",String(a.offset)),a.q&&n.set("q",a.q),a.role&&n.set("role",a.role),a.mode&&n.set("mode",a.mode),a.isActive!==""&&n.set("isActive",a.isActive);const o=await P(`/keys?${n}`),i=o.data||[],r=o.total??i.length,d=i.map(p=>{const l=s[p.id],b=l?.requests??"—",h=l?Math.round((l.utilization||0)*100):0,f=p.ipWhitelist||[],v=f.length?I("keys.ipCount",{n:f.length}):e("keys.ipAll");return`
    <tr>
      <td><div class="cell-primary">${t(p.name)}</div><div class="cell-sub">${t(p.keyPrefix)}…</div></td>
      <td>${ps(p.role)}</td>
      <td>${Ct(p.mode)}</td>
      <td>${Ba(p.rateLimit)}</td>
      <td title="${t(f.join(", "))}">${t(v)}</td>
      <td>
        <div>${b} <span class="muted">(${t(e("keys.usage24"))})</span></div>
        <div class="usage-bar ${h>80?"warn":""}"><span style="width:${h}%"></span></div>
      </td>
      <td>${p.isActive?`<span class="badge success">${t(e("common.active"))}</span>`:`<span class="badge error">${t(e("common.revoked"))}</span>`}</td>
      <td>${Z(p.createdAt)}</td>
      <td><div class="row-actions">
        <button class="btn secondary sm" data-edit="${p.id}">${t(e("keys.edit"))}</button>
        ${p.isActive?`<button class="btn danger sm" data-revoke="${p.id}">${t(e("keys.revoke"))}</button>`:""}
      </div></td>
    </tr>`}).join(""),u=He({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:I("common.pagerTotal",{n:r}),searchHtml:`
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
      </label>`}),m=be({headHtml:`
      <th>${t(e("keys.name"))}</th><th>${t(e("keys.role"))}</th>
      <th>${t(e("keys.mode"))}</th><th>${t(e("keys.rate"))}</th>
      <th>${t(e("keys.ipWhitelistCol"))}</th>
      <th>${t(e("keys.usage24"))}</th><th>${t(e("keys.status"))}</th>
      <th>${t(e("keys.created"))}</th><th>${t(e("common.actions"))}</th>`,bodyHtml:d,colSpan:9,emptyText:e("keys.empty"),pagerHtml:ke({total:r,limit:a.limit,offset:a.offset,idPrefix:"keys"})});document.getElementById("app").innerHTML=ne(`
    <div class="topbar">
      <h2>${t(e("keys.title"))}</h2>
      <div class="toolbar">
        <button class="btn" id="btn-new-key">${t(e("keys.new"))}</button>
      </div>
    </div>
    ${u}
    ${m}
  `),oe(),Ze("keys",c.keyFilter,()=>Ke().catch($)),document.querySelector("[data-filter-apply]").onclick=()=>{c.keyFilter.q=document.getElementById("kf-q").value.trim(),c.keyFilter.role=document.getElementById("kf-role").value,c.keyFilter.mode=document.getElementById("kf-mode").value,c.keyFilter.isActive=document.getElementById("kf-active").value,c.keyFilter.offset=0,Ke().catch($)},document.querySelector("[data-filter-reset]").onclick=()=>{c.keyFilter={q:"",role:"",mode:"",isActive:"",limit:20,offset:0},Ke().catch($)},document.getElementById("btn-new-key").onclick=()=>ga(),document.querySelectorAll("[data-edit]").forEach(p=>{const l=i.find(b=>b.id===p.dataset.edit);p.onclick=()=>ga(l)}),document.querySelectorAll("[data-revoke]").forEach(p=>{p.onclick=async()=>{await V({message:e("keys.confirmRevoke"),variant:"danger",confirmText:e("keys.revoke")})&&(await P(`/keys/${p.dataset.revoke}`,{method:"DELETE"}),Ke().catch($))}})}function ga(a){const s=!!a,n=(a?.ipWhitelist||[]).join(`
`);et({title:e(s?"keys.edit":"keys.new"),subtitle:s?`${t(a?.name||"")} · ${t(a?.keyPrefix||"")}…`:"",size:"md",bodyHtml:`
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
      <button type="button" class="btn sm" id="k-save">${t(e("common.save"))}</button>`}),document.getElementById("k-role").value=a?.role||"client",document.getElementById("k-mode").value=a?.mode||"safe",s&&(document.getElementById("k-active").value=String(a.isActive)),document.getElementById("k-cancel").onclick=()=>ce(),document.getElementById("k-save").onclick=async()=>{const o=document.getElementById("k-ip").value.split(/[\n,]+/).map(r=>r.trim()).filter(Boolean),i={name:document.getElementById("k-name").value.trim(),role:document.getElementById("k-role").value,mode:document.getElementById("k-mode").value,rateLimit:Number(document.getElementById("k-rate").value||60),maxTurns:document.getElementById("k-turns").value?Number(document.getElementById("k-turns").value):null,timeoutMs:document.getElementById("k-timeout").value?Number(document.getElementById("k-timeout").value):null,ipWhitelist:o};try{if(s)i.isActive=document.getElementById("k-active").value==="true",await P(`/keys/${a.id}`,{method:"PATCH",body:JSON.stringify(i)}),ce(),Ke().catch($);else{const r=await P("/keys",{method:"POST",body:JSON.stringify(i)}),d=document.getElementById("k-created");d&&(d.hidden=!1,d.textContent=`${e("keys.keyOnce")}
${r.data?.key||JSON.stringify(r.data)}`);const u=document.getElementById("k-save");u&&(u.textContent=e("chats.close"),u.onclick=()=>{ce(),Ke().catch($)})}}catch(r){$(r)}}}function _a(a){return e(a==="filesystem"?"docs.storageFs":"docs.storageDb")}async function Ra(a,s){try{const n=await fetch(`${Zt}/documents/${a}/download`,{headers:c.key?{Authorization:`Bearer ${c.key}`}:{}});if(!n.ok){const d=await n.text();let u=d;try{u=JSON.parse(d).error?.message||d}catch{}throw new Error(u||e("docs.downloadFail"))}const o=await n.blob(),i=URL.createObjectURL(o),r=document.createElement("a");r.href=i,r.download=s||"download",document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}catch(n){R(n.message||e("docs.downloadFail"))}}async function st(){await ct();const a=c.docFilter,s=new URLSearchParams({limit:String(a.limit),offset:String(a.offset)});if(a.q&&s.set("q",a.q),a.apiKeyId&&s.set("apiKeyId",a.apiKeyId),a.storageType&&s.set("storageType",a.storageType),a.from&&s.set("from",new Date(a.from).toISOString()),a.to){const l=new Date(a.to);l.setHours(23,59,59,999),s.set("to",l.toISOString())}const n=await P(`/documents?${s}`),o=n.total??0,i=n.meta||{},r=I("docs.storageHint",{dir:i.storageDir||"—",dbMax:$e(i.documentDbMaxBytes),upMax:$e(i.uploadMaxBytes)}),d=[`<option value="">${t(e("common.all"))}</option>`,...c.keys.map(l=>`<option value="${l.id}" ${a.apiKeyId===l.id?"selected":""}>${t(l.name)}</option>`)].join(""),u=(n.data||[]).map(l=>`
    <tr>
      <td><button class="linkish cell-primary" data-doc="${l.id}">${t(l.originalName)}</button>
        ${lt(l.mimeType)?`<span class="chip img">${t(e("chats.img"))}</span>`:""}</td>
      <td>${t(l.apiKey?.name||"")}</td>
      <td>${t(l.mimeType)}</td>
      <td>${$e(l.sizeBytes)}</td>
      <td>
        <span title="${t(l.storagePath||"")}">${t(_a(l.storageType))}</span>
        ${l.storagePath?`<div class="cell-sub">${t(l.storagePath)}</div>`:""}
      </td>
      <td>${Z(l.createdAt)}</td>
      <td><div class="row-actions">
        <button class="btn secondary sm" data-dl="${l.id}" data-name="${t(l.originalName)}">${t(e("docs.download"))}</button>
        <button class="btn danger sm" data-del="${l.id}">${t(e("docs.delete"))}</button>
      </div></td>
    </tr>`).join(""),m=He({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:I("common.pagerTotal",{n:o}),searchHtml:`
      <div class="data-filter-search">
        <label for="df-q">${t(e("common.search"))}</label>
        <input type="search" id="df-q" value="${t(a.q)}" placeholder="${t(e("docs.searchPh"))}" />
      </div>`,gridHtml:`
      <label>${t(e("chats.apiKey"))}
        <select id="df-key">${d}</select>
      </label>
      <label>${t(e("docs.storage"))}
        <select id="df-storage">
          <option value="">${t(e("common.all"))}</option>
          <option value="db" ${a.storageType==="db"?"selected":""}>${t(e("docs.storageDb"))}</option>
          <option value="filesystem" ${a.storageType==="filesystem"?"selected":""}>${t(e("docs.storageFs"))}</option>
        </select>
      </label>
      <label>${t(e("chats.from"))}<input type="date" id="df-from" value="${t(a.from)}" /></label>
      <label>${t(e("chats.to"))}<input type="date" id="df-to" value="${t(a.to)}" /></label>`}),p=be({headHtml:`
      <th>${t(e("docs.file"))}</th>
      <th>${t(e("chats.apiKey"))}</th>
      <th>${t(e("docs.mime"))}</th>
      <th>${t(e("docs.size"))}</th>
      <th>${t(e("docs.storage"))}</th>
      <th>${t(e("docs.time"))}</th>
      <th>${t(e("common.actions"))}</th>`,bodyHtml:u,colSpan:7,emptyText:e("docs.empty"),pagerHtml:ke({total:o,limit:a.limit,offset:a.offset,idPrefix:"docs"})});document.getElementById("app").innerHTML=ne(`
    <div class="topbar">
      <h2>${t(e("docs.title"))}</h2>
    </div>
    ${we([r])}
    ${m}
    ${p}
  `),oe(),Ze("docs",c.docFilter,()=>st().catch($)),document.querySelector("[data-filter-apply]").onclick=()=>{c.docFilter.q=document.getElementById("df-q").value.trim(),c.docFilter.apiKeyId=document.getElementById("df-key").value,c.docFilter.storageType=document.getElementById("df-storage").value,c.docFilter.from=document.getElementById("df-from").value,c.docFilter.to=document.getElementById("df-to").value,c.docFilter.offset=0,st().catch($)},document.querySelector("[data-filter-reset]").onclick=()=>{c.docFilter={q:"",apiKeyId:"",storageType:"",from:"",to:"",limit:20,offset:0},st().catch($)},document.querySelectorAll("[data-doc]").forEach(l=>{l.onclick=()=>Ka(l.dataset.doc)}),document.querySelectorAll("[data-dl]").forEach(l=>{l.onclick=()=>Ra(l.getAttribute("data-dl"),l.getAttribute("data-name")||"file")}),document.querySelectorAll("[data-del]").forEach(l=>{l.onclick=async()=>{await V({message:e("docs.confirmDel"),variant:"danger",confirmText:e("docs.delete")})&&(await P(`/documents/${l.dataset.del}`,{method:"DELETE"}),st().catch($))}})}async function $s(a){const s=await fetch(`${Zt}/documents/${a}/download`,{headers:c.key?{Authorization:`Bearer ${c.key}`}:{}});if(!s.ok){const o=await s.text();let i=o;try{i=JSON.parse(o)?.error?.message||o}catch{}throw new Error(i||e("docs.downloadFail"))}const n=await s.blob();return URL.createObjectURL(n)}async function Na(a){if(a?.imageDataUrl)return{src:a.imageDataUrl,revoke:null};if(a?.isImage||lt(a?.mimeType)){const s=await $s(a.id);return{src:s,revoke:s}}return null}async function Ka(a){const{data:s}=await P(`/documents/${a}`);let n,o=null;try{const d=await Na(s);d?(o=d.revoke,n=`<img class="preview doc-preview-img" src="${d.src}" alt="${t(s.originalName||"")}" />`):s.isBinary||s.content==null?n=`<div class="data-empty"><div class="data-empty-icon">⧉</div><strong>${t(e("docs.binaryPreview"))}</strong></div>`:n=`<div class="pre" id="doc-content">${t(s.content||e("chats.none"))}</div>`}catch{n=`<div class="data-empty"><div class="data-empty-icon">⧉</div><strong>${t(e("chats.previewFailed")||e("docs.binaryPreview"))}</strong></div>`}const i=`${_a(s.storageType)}${s.storagePath?` · ${s.storagePath}`:""}`;et({title:e("docs.detail"),subtitle:`${t(s.originalName)} · ${t(s.mimeType)} · ${$e(s.sizeBytes)}<br/><span class="muted">${t(e("docs.storage"))}: ${t(i)}</span>`,size:"lg",bodyHtml:`
      <div class="block">
        <h4>${t(e("docs.preview"))}</h4>
        ${n}
      </div>`,footerHtml:`
      ${!s.imageDataUrl&&!(s.isImage||lt(s.mimeType))&&s.content&&!s.isBinary?`<button type="button" class="btn secondary sm" id="doc-copy">${t(e("docs.copy"))}</button>`:""}
      <button type="button" class="btn sm" id="doc-download">${t(e("docs.download"))}</button>
      <button type="button" class="btn secondary sm" id="doc-close">${t(e("chats.close"))}</button>`});const r=()=>{if(o)try{URL.revokeObjectURL(o)}catch{}ce()};document.getElementById("doc-close")?.addEventListener("click",r),document.getElementById("doc-download").onclick=()=>Ra(s.id,s.originalName),document.getElementById("doc-copy")?.addEventListener("click",async()=>{if(await ia(s.content||"")){const u=document.getElementById("doc-copy");u&&(u.textContent=e("chat.copied"))}})}function ha(a){if(!a)return"-";const s=`audit.actions.${String(a).replace(/\./g,"_")}`,n=e(s);return n===s?a:n}function ks(a){if(!a)return"";const s=`audit.resources.${String(a).replace(/\./g,"_")}`,n=e(s);return n===s?a:n}function ws(a){if(!a)return"";try{const s=typeof a=="string"?JSON.parse(a):a;return!s||typeof s!="object"?String(a):Object.entries(s).map(([n,o])=>{const i={originalName:e("docs.file"),mimeType:e("docs.mime"),sizeBytes:e("docs.size"),storageType:e("audit.metaStorage"),asKeyId:e("audit.metaAsKey"),asKeyName:e("audit.metaAsKeyName"),model:e("chats.model"),stream:e("chats.stream")}[n]||n,r=typeof o=="object"?JSON.stringify(o):String(o??"");return`${i}: ${r}`}).join(" · ")}catch{return String(a)}}async function $t(){await ct();const a=c.auditFilter,s=new URLSearchParams;if(s.set("limit",String(a.limit)),s.set("offset",String(a.offset)),a.q&&s.set("q",a.q),a.action&&s.set("action",a.action),a.apiKeyId&&s.set("apiKeyId",a.apiKeyId),a.from&&s.set("from",new Date(a.from).toISOString()),a.to){const l=new Date(a.to);l.setHours(23,59,59,999),s.set("to",l.toISOString())}const n=await P(`/audit-logs?${s}`),o=n.total??0,i=["","chat.create","document.upload","document.delete","document.download","api_key.create","api_key.update","api_key.delete","settings.update","playground.chat","ip.ban","ip.unban","ddos.policy_update","pm2.switch","system.update"],r=[`<option value="">${t(e("common.all"))}</option>`,...c.keys.map(l=>`<option value="${l.id}" ${a.apiKeyId===l.id?"selected":""}>${t(l.name)}</option>`)].join(""),d=i.map(l=>l?`<option value="${t(l)}" ${a.action===l?"selected":""}>${t(ha(l))}</option>`:`<option value="">${t(e("common.all"))}</option>`).join(""),u=(n.data||[]).map(l=>`
    <tr>
      <td>${Z(l.createdAt)}</td>
      <td title="${t(l.action||"")}"><span class="cell-primary">${t(ha(l.action))}</span></td>
      <td>
        <div>${t(ks(l.resource))}</div>
        ${l.resourceId?`<div class="cell-sub audit-id" title="${t(l.resourceId)}">${t(l.resourceId)}</div>`:""}
      </td>
      <td>${t(l.apiKey?.name||"-")}</td>
      <td class="muted audit-meta">${t(ws(l.metaJson))}</td>
    </tr>`).join(""),m=He({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:I("common.pagerTotal",{n:o}),searchHtml:`
      <div class="data-filter-search">
        <label for="af-q">${t(e("common.search"))}</label>
        <input type="search" id="af-q" value="${t(a.q)}" placeholder="${t(e("audit.searchPh"))}" />
      </div>`,gridHtml:`
      <label>${t(e("audit.action"))}
        <select id="af-action">${d}</select>
      </label>
      <label>${t(e("audit.key"))}
        <select id="af-key">${r}</select>
      </label>
      <label>${t(e("chats.from"))}<input type="date" id="af-from" value="${t(a.from)}" /></label>
      <label>${t(e("chats.to"))}<input type="date" id="af-to" value="${t(a.to)}" /></label>`}),p=be({headHtml:`
      <th>${t(e("audit.time"))}</th>
      <th>${t(e("audit.action"))}</th>
      <th>${t(e("audit.resource"))}</th>
      <th>${t(e("audit.key"))}</th>
      <th>${t(e("audit.meta"))}</th>`,bodyHtml:u,colSpan:5,emptyText:e("audit.empty"),pagerHtml:ke({total:o,limit:a.limit,offset:a.offset,idPrefix:"audit"})});document.getElementById("app").innerHTML=ne(`
    <div class="topbar">
      <h2>${t(e("audit.title"))}</h2>
    </div>
    ${m}
    ${p}
  `),oe(),Ze("audit",c.auditFilter,()=>$t().catch($)),document.querySelector("[data-filter-apply]").onclick=()=>{c.auditFilter.q=document.getElementById("af-q").value.trim(),c.auditFilter.action=document.getElementById("af-action").value,c.auditFilter.apiKeyId=document.getElementById("af-key").value,c.auditFilter.from=document.getElementById("af-from").value,c.auditFilter.to=document.getElementById("af-to").value,c.auditFilter.offset=0,$t().catch($)},document.querySelector("[data-filter-reset]").onclick=()=>{c.auditFilter={q:"",action:"",apiKeyId:"",from:"",to:"",limit:50,offset:0},$t().catch($)}}function Wt(){return[{id:"local",titleKey:"settings.scLocalTitle",descKey:"settings.scLocalDesc",detailKey:"settings.scLocalDetail",values:{globalSafeMode:!1,safeToolsMode:"none",safeMaxTurns:16,safeTimeoutMs:18e4}},{id:"prod",titleKey:"settings.scProdTitle",descKey:"settings.scProdDesc",detailKey:"settings.scProdDetail",values:{globalSafeMode:!0,safeToolsMode:"none",safeMaxTurns:10,safeTimeoutMs:12e4}},{id:"code",titleKey:"settings.scCodeTitle",descKey:"settings.scCodeDesc",detailKey:"settings.scCodeDetail",values:{globalSafeMode:!1,safeToolsMode:"none",safeMaxTurns:20,safeTimeoutMs:3e5}},{id:"read",titleKey:"settings.scReadTitle",descKey:"settings.scReadDesc",detailKey:"settings.scReadDetail",values:{globalSafeMode:!0,safeToolsMode:"readonly",safeMaxTurns:12,safeTimeoutMs:15e4}},{id:"chat",titleKey:"settings.scChatTitle",descKey:"settings.scChatDesc",detailKey:"settings.scChatDetail",values:{globalSafeMode:!0,safeToolsMode:"none",safeMaxTurns:5,safeTimeoutMs:6e4}},{id:"long",titleKey:"settings.scLongTitle",descKey:"settings.scLongDesc",detailKey:"settings.scLongDetail",values:{globalSafeMode:!0,safeToolsMode:"none",safeMaxTurns:40,safeTimeoutMs:6e5}}]}function Ss(){return{globalSafeMode:document.getElementById("s-master-global")?Ue("s-master-global"):!1,safeToolsMode:document.getElementById("s-tools")?.value||"none",safeMaxTurns:Number(document.getElementById("s-turns")?.value),safeTimeoutMs:Number(document.getElementById("s-timeout")?.value)}}function Ps(a){const s=Ss();return!Number.isFinite(s.safeMaxTurns)||!Number.isFinite(s.safeTimeoutMs)?!1:s.globalSafeMode===!!a.globalSafeMode&&s.safeToolsMode===a.safeToolsMode&&s.safeMaxTurns===Number(a.safeMaxTurns)&&s.safeTimeoutMs===Number(a.safeTimeoutMs)}function Ve(){for(const a of Wt()){const s=document.querySelector(`[data-preset="${a.id}"]`),n=document.querySelector(`[data-apply-preset="${a.id}"]`);if(!s||!n)continue;const o=Ps(a.values);s.classList.toggle("is-applied",o),n.textContent=e(o?"settings.guideActive":"settings.guideApply"),n.disabled=o,n.classList.toggle("is-applied",o),n.setAttribute("aria-pressed",o?"true":"false")}}function Es(a){const s=document.getElementById("s-tools"),n=document.getElementById("s-turns"),o=document.getElementById("s-timeout"),i=!!a.globalSafeMode;We("s-master-global",i,e("settings.masterOn"),e("settings.masterOff")),Qe("settings-root",!i),Ge("settings-disabled-banner",!i),s&&a.safeToolsMode&&(s.value=a.safeToolsMode),n&&a.safeMaxTurns!=null&&(n.value=String(a.safeMaxTurns)),o&&a.safeTimeoutMs!=null&&(o.value=String(a.safeTimeoutMs)),Ve()}async function xs(a){if(a?.values&&await V({title:e(a.titleKey),message:I("settings.guideApplyConfirm",{name:e(a.titleKey)}),variant:"confirm",confirmText:e("settings.guideApply")})){Es(a.values);try{await P("/settings",{method:"PUT",body:JSON.stringify({globalSafeMode:!!a.values.globalSafeMode,safeToolsMode:a.values.safeToolsMode,safeMaxTurns:Number(a.values.safeMaxTurns),safeTimeoutMs:Number(a.values.safeTimeoutMs),defaultModel:document.getElementById("s-model")?.value?.trim()||""})}),Ve();const s=document.querySelector("#flash-error");s&&(s.hidden=!1,s.classList.add("flash-ok"),s.textContent=e("settings.guideApplied"),setTimeout(()=>{s.textContent===e("settings.guideApplied")&&(s.hidden=!0,s.classList.remove("flash-ok"),s.textContent="")},2500))}catch(s){$(s)}}}async function ja(){const[{data:a},s]=await Promise.all([P("/settings"),dt()]),n=(s.models||c.models||[]).map(d=>`<option value="${t(d)}" ${a.defaultModel===d?"selected":""}>${t(d)}</option>`).join(""),o=Wt().map(d=>`
      <article class="settings-guide-card" data-preset="${t(d.id)}">
        <div class="settings-guide-card-h">
          <strong>${t(e(d.titleKey))}</strong>
          <button type="button" class="btn secondary sm" data-apply-preset="${t(d.id)}">${t(e("settings.guideApply"))}</button>
        </div>
        <p class="settings-guide-desc">${t(e(d.descKey))}</p>
        <p class="settings-guide-detail muted">${t(e(d.detailKey))}</p>
        <div class="settings-guide-chips">
          <span class="chip">${t(d.values.globalSafeMode?e("settings.chipGlobalOn"):e("settings.chipGlobalOff"))}</span>
          <span class="chip">${t(d.values.safeToolsMode)}</span>
          <span class="chip">turns ${d.values.safeMaxTurns}</span>
          <span class="chip">${Math.round(d.values.safeTimeoutMs/1e3)}s</span>
        </div>
      </article>`).join(""),i=!!a.globalSafeMode;document.getElementById("app").innerHTML=ne(`
    <div id="settings-root" class="${i?"":"is-feature-off"}">
    <div class="topbar">
      <h2>${t(e("settings.title"))}</h2>
      <div class="toolbar">
        ${la({id:"s-master-global",on:i,onLabel:e("settings.masterOn"),offLabel:e("settings.masterOff"),title:e("settings.globalSafeHint")})}
        <button class="btn secondary sm" id="btn-refresh-models">${t(e("settings.refreshModels"))}</button>
      </div>
    </div>
    <div class="feature-off-banner" id="settings-disabled-banner" ${i?"hidden":""} role="status">
      <strong>${t(e("common.featureOff"))}</strong>
      <span>${t(e("settings.disabledBanner"))}</span>
    </div>
    ${we([e("settings.globalSafeHint")])}
    <div class="panel">
      <div class="modal-b">
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
            <span class="hint">${t(e("settings.defaultModelHint"))}${s.source?` · ${t(s.source)}`:""}</span>
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
        <span class="muted panel-h-sub">${t(e("settings.guideIntro"))}</span>
      </div>
      <div class="modal-b">
        <div class="settings-guide-grid">${o}</div>
      </div>
    </div>
    <div class="danger-zone">
      <h3>${t(e("settings.dangerTitle"))}</h3>
      <p class="muted">${t(e("settings.panelOffHint"))} · ${t(e("settings.panelStatus"))}: <strong>${a.adminPanelEnabled?e("settings.panelOn"):e("settings.panelOff")}</strong></p>
      <button class="btn danger sm" id="s-disable-panel" ${a.adminPanelEnabled?"":"disabled"}>${t(e("settings.disablePanel"))}</button>
    </div>
    </div>
  `),oe(),document.getElementById("s-tools").value=a.safeToolsMode||"none";const r=()=>Ve();["s-tools","s-turns","s-timeout"].forEach(d=>{const u=document.getElementById(d);u&&(u.addEventListener("change",r),u.addEventListener("input",r))}),Ve(),document.getElementById("s-master-global")?.addEventListener("click",async()=>{const d=!Ue("s-master-global");We("s-master-global",d,e("settings.masterOn"),e("settings.masterOff")),Qe("settings-root",!d),Ge("settings-disabled-banner",!d),Ve();try{await P("/settings",{method:"PUT",body:JSON.stringify({globalSafeMode:d,safeToolsMode:document.getElementById("s-tools").value,safeMaxTurns:Number(document.getElementById("s-turns").value),safeTimeoutMs:Number(document.getElementById("s-timeout").value),defaultModel:document.getElementById("s-model").value.trim()})})}catch(u){We("s-master-global",!d,e("settings.masterOn"),e("settings.masterOff")),Qe("settings-root",d),Ge("settings-disabled-banner",d),$(u)}}),document.getElementById("btn-refresh-models").onclick=async()=>{await dt(!0),ja().catch($)},document.getElementById("s-save").onclick=async()=>{try{await P("/settings",{method:"PUT",body:JSON.stringify({globalSafeMode:Ue("s-master-global"),safeToolsMode:document.getElementById("s-tools").value,safeMaxTurns:Number(document.getElementById("s-turns").value),safeTimeoutMs:Number(document.getElementById("s-timeout").value),defaultModel:document.getElementById("s-model").value.trim()})}),Ve();const d=document.querySelector("#flash-error");d&&(d.hidden=!1,d.classList.add("flash-ok"),d.textContent=e("settings.saved"),setTimeout(()=>{d.hidden=!0,d.classList.remove("flash-ok"),d.textContent=""},2e3))}catch(d){$(d)}},document.querySelectorAll("[data-apply-preset]").forEach(d=>{d.addEventListener("click",async()=>{if(d.disabled)return;const u=d.getAttribute("data-apply-preset"),m=Wt().find(p=>p.id===u);m&&await xs(m)})}),document.getElementById("s-disable-panel").onclick=async()=>{if(await V({message:e("settings.disablePanelConfirm"),variant:"danger",confirmText:e("settings.disablePanel")}))try{await P("/settings",{method:"PUT",body:JSON.stringify({adminPanelEnabled:!1})}),await le({message:e("settings.disablePanelDone"),title:e("common.notice")}),Et(!1)}catch(d){$(d)}}}async function kt(){const a=await P("/api-features");if(c.page!=="apiFeatures")return;const s=a.data||{},n=[{id:"protocols",title:e("apiFeatures.groupProtocols"),tabLabel:e("apiFeatures.tabProtocols"),keys:["openaiChat","openaiResponses","anthropicMessages"]},{id:"media",title:e("apiFeatures.groupMedia"),tabLabel:e("apiFeatures.tabMedia"),keys:["imagesApi","filesOpenAiAlias","videoApi","audioApi"]},{id:"caps",title:e("apiFeatures.groupCaps"),tabLabel:e("apiFeatures.tabCaps"),keys:["tools","structuredOutput","vision","reasoningEffort","webSearch","subagents","planMode","memory","sessionResume","bestOfN","checkLoop","systemOverride","rules","permissionMode","sandbox"]},{id:"emu",title:e("apiFeatures.groupEmu"),tabLabel:e("apiFeatures.tabEmu"),keys:["usageEstimate","assistantsEmulation","strictSampling","forceDisableToolsInSafe"]}],o=c.apiFeaturesTab==="media"||c.apiFeaturesTab==="caps"||c.apiFeaturesTab==="emu"||c.apiFeaturesTab==="protocols"?c.apiFeaturesTab:"protocols";c.apiFeaturesTab=o;const i=f=>e(`apiFeatures.flag.${f}`)||f,r=f=>e(`apiFeatures.hint.${f}`)||"",d=f=>f.filter(v=>!!s[v]).length,u=f=>f.map(v=>{const y=!!s[v];return`
          <div class="dash-prot-row api-feat-row" data-feat="${t(v)}">
            <div>
              <strong>${t(i(v))}</strong>
              <div class="muted api-feat-hint">${t(r(v))}</div>
            </div>
            <button type="button" class="master-toggle ${y?"is-on":"is-off"}" data-feat-toggle="${t(v)}" aria-pressed="${y?"true":"false"}">
              <span class="master-toggle-track" aria-hidden="true"><span class="master-toggle-knob"></span></span>
              <span class="master-toggle-label">${t(e(y?"dash.on":"dash.off"))}</span>
            </button>
          </div>`}).join(""),m=n.reduce((f,v)=>f+v.keys.length,0),p=n.reduce((f,v)=>f+d(v.keys),0),l=`
    <div class="grid api-feat-kpi-grid">
      <div class="card">
        <div class="label">${t(e("apiFeatures.kpiEnabled"))}</div>
        <div class="value value-sm">${p}<span class="dash-kpi-den">/${m}</span></div>
        <div class="muted card-sub">${t(e("apiFeatures.kpiEnabledSub"))}</div>
      </div>
      ${n.map(f=>{const v=d(f.keys);return`
        <div class="card">
          <div class="label">${t(f.tabLabel)}</div>
          <div class="value value-sm">${v}<span class="dash-kpi-den">/${f.keys.length}</span></div>
          <div class="muted card-sub">${t(f.title)}</div>
        </div>`}).join("")}
    </div>`,b=n.map(f=>{const v=d(f.keys);return`
        <button type="button" role="tab" class="seg-tab ${o===f.id?"is-active":""}" data-feat-tab="${t(f.id)}" aria-selected="${o===f.id}">
          ${t(f.tabLabel)}
          <span class="seg-tab-count">${v}/${f.keys.length}</span>
        </button>`}).join(""),h=n.map(f=>`
        <div class="usage-tab-pane api-feat-tab-pane" id="api-feat-tab-${t(f.id)}" ${o===f.id?"":"hidden"}>
          <div class="panel data-table-panel api-feat-panel">
            <div class="panel-h">
              <div class="panel-h-text">
                <strong>${t(f.title)}</strong>
                <span class="muted panel-h-sub">${t(I("apiFeatures.groupMeta",{on:d(f.keys),n:f.keys.length}))}</span>
              </div>
            </div>
            <div class="panel-pad api-feat-list">${u(f.keys)}</div>
          </div>
        </div>`).join("");document.getElementById("app").innerHTML=ne(`
    <div class="topbar">
      <h2>${t(e("apiFeatures.title"))}</h2>
      <div class="toolbar">
        <button type="button" class="btn secondary sm" data-feat-preset="open">${t(e("apiFeatures.presetOpen"))}</button>
        <button type="button" class="btn secondary sm" data-feat-preset="locked">${t(e("apiFeatures.presetLocked"))}</button>
        <button type="button" class="btn secondary sm" data-feat-preset="dev">${t(e("apiFeatures.presetDev"))}</button>
      </div>
    </div>
    ${we([e("apiFeatures.intro")])}
    ${l}

    <div class="usage-tabs-panel panel api-feat-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("apiFeatures.title"))}">
        ${b}
      </div>
      <div class="usage-tab-body">
        ${h}
      </div>
    </div>
  `),oe(),document.querySelectorAll("[data-feat-tab]").forEach(f=>{f.addEventListener("click",()=>{const v=f.getAttribute("data-feat-tab")||"protocols",y=v==="media"||v==="caps"||v==="emu"||v==="protocols"?v:"protocols";c.apiFeaturesTab!==y&&(c.apiFeaturesTab=y,kt().catch($))})}),document.querySelectorAll("[data-feat-toggle]").forEach(f=>{f.addEventListener("click",async()=>{const v=f.getAttribute("data-feat-toggle");if(!v)return;const y=!f.classList.contains("is-on");try{await P("/api-features",{method:"PUT",body:JSON.stringify({[v]:y})}),await kt()}catch(w){$(w)}})}),document.querySelectorAll("[data-feat-preset]").forEach(f=>{f.addEventListener("click",async()=>{const v=f.getAttribute("data-feat-preset");if(await V({message:I("apiFeatures.presetConfirm",{name:v}),confirmText:e("common.confirm")}))try{await P("/api-features/preset",{method:"POST",body:JSON.stringify({name:v})}),await kt()}catch(y){$(y)}})})}async function Pe(){c.mediaFilter||(c.mediaFilter={tab:"studio",q:"",kind:"",provider:"",from:"",to:"",limit:20,offset:0}),c.mediaFilter.tab||(c.mediaFilter.tab="studio");const a=c.mediaFilter,s=a.tab==="assets"||a.tab==="jobs"||a.tab==="studio"?a.tab:"studio";a.tab=s;const n=new URLSearchParams({limit:String(a.limit),offset:String(a.offset)});if(a.q&&n.set("q",a.q),a.kind&&n.set("kind",a.kind),a.provider&&n.set("provider",a.provider),a.from&&n.set("from",new Date(a.from).toISOString()),a.to){const g=new Date(a.to);g.setHours(23,59,59,999),n.set("to",g.toISOString())}const[o,,i,r]=await Promise.all([dt(!1).catch(()=>({models:c.models||[],defaultModel:""})),ct().catch(()=>{}),P(`/media/assets?${n}`),P("/media/jobs?limit=50").catch(()=>({data:[],total:0}))]),d=i.data||[],u=i.total??d.length,m=r.data||[],p=r.total??m.length,l=(c.keys||[]).filter(g=>g.isActive!==!1&&(g.mode==="agent"||g.role==="admin")),b=[`<option value="">${t(e("media.generateKeySession"))}</option>`,...l.map(g=>`<option value="${t(g.id)}">${t(g.name||g.id)} · ${t(g.keyPrefix||"")}… · ${t(g.mode||"")}</option>`)].join(""),h=o.models?.length?o.models:c.models||[],f=o.defaultModel||h[0]||"",v=h.length?h.map(g=>`<option value="${t(g)}" ${g===f?"selected":""}>${t(g)}${g===f?` · ${t(e("media.modelDefault"))}`:""}</option>`).join(""):`<option value="">${t(f||e("media.modelEmpty"))}</option>`,y=[["1:1","1:1 · square"],["16:9","16:9 · landscape"],["9:16","9:16 · portrait / story"],["4:3","4:3"],["3:4","3:4"],["3:2","3:2"],["2:3","2:3"],["auto","auto"]].map(([g,k],x)=>`<option value="${g}" ${x===0?"selected":""}>${t(k)}</option>`).join(""),w=d.map(g=>{const k=g.mime||"",x=g.filename||g.originalName||"",N=fs(k,x),K=ra(k,x)||"",E=N?`<button type="button" class="btn ghost sm" data-media-preview="${t(g.id)}" data-media-mime="${t(k)}" data-media-name="${t(x)}" data-media-kind="${t(g.kind||"")}" data-media-bytes="${t(String(g.bytes??""))}" data-media-prompt="${t(g.prompt||"")}" data-preview-kind="${t(K)}" title="${t(e("media.preview"))}">${t(e("media.preview"))}</button>`:"";return`
    <tr>
      <td>
        <div class="cell-primary mono" title="${t(g.id)}">${t(String(g.id).slice(0,8))}…</div>
        <div class="cell-sub">${t(x||g.source||"—")}</div>
      </td>
      <td>${t(g.kind||"—")}</td>
      <td class="muted">${t(k||"—")}</td>
      <td>${$e(g.bytes)}</td>
      <td>${t(g.provider||"—")}</td>
      <td class="muted" title="${t(g.prompt||"")}">${t((g.prompt||"—").slice(0,48))}</td>
      <td>${Z(g.created_at)}</td>
      <td><div class="row-actions">
        ${E}
        <button type="button" class="btn ghost sm" data-media-dl="${t(g.id)}" data-media-name="${t(x)}">${t(e("media.download"))}</button>
        <button type="button" class="btn danger sm" data-media-del="${t(g.id)}">${t(e("media.delete"))}</button>
      </div></td>
    </tr>`}).join(""),C=He({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:I("common.pagerTotal",{n:u}),searchHtml:`
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
      <label>${t(e("media.from"))}
        <input type="date" id="mf-from" value="${t(a.from)}" />
      </label>
      <label>${t(e("media.to"))}
        <input type="date" id="mf-to" value="${t(a.to)}" />
      </label>`}),A=be({headHtml:`
      <th>ID</th>
      <th>${t(e("media.kind"))}</th>
      <th>MIME</th>
      <th>${t(e("media.bytes"))}</th>
      <th>${t(e("media.provider"))}</th>
      <th>${t(e("media.prompt"))}</th>
      <th>${t(e("media.created"))}</th>
      <th>${t(e("common.actions"))}</th>`,bodyHtml:w,colSpan:8,emptyText:e("media.empty"),pagerHtml:ke({total:u,limit:a.limit,offset:a.offset,idPrefix:"media"})}),T=m.map(g=>`
    <tr>
      <td>
        <div class="cell-primary mono" title="${t(g.id)}">${t(String(g.id).slice(0,8))}…</div>
      </td>
      <td>${t(g.status||"—")}</td>
      <td class="muted" title="${t(g.prompt||"")}">${t((g.prompt||"—").slice(0,64))}</td>
      <td class="mono">${t(g.result_asset_id?String(g.result_asset_id).slice(0,8)+"…":"—")}</td>
      <td>${Z(g.created_at)}</td>
    </tr>`).join(""),M=be({headHtml:`
      <th>ID</th>
      <th>${t(e("media.status"))}</th>
      <th>${t(e("media.prompt"))}</th>
      <th>Asset</th>
      <th>${t(e("media.created"))}</th>`,bodyHtml:T,colSpan:5,emptyText:e("media.jobsEmpty")}),H=`
    <div class="panel media-studio-panel data-table-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("media.studioTitle"))}</strong>
          <span class="muted panel-h-sub">${t(e("media.studioHint"))}</span>
        </div>
      </div>
      <div class="panel-pad">
        <div class="seg-tabs media-mode-tabs" role="tablist" aria-label="${t(e("media.studioTitle"))}">
          <button type="button" class="seg-tab is-active" data-mg-mode="generate" role="tab" aria-selected="true">${t(e("media.modeGenerate"))}</button>
          <button type="button" class="seg-tab" data-mg-mode="edit" role="tab" aria-selected="false">${t(e("media.modeEdit"))}</button>
          <button type="button" class="seg-tab" data-mg-mode="video" role="tab" aria-selected="false">${t(e("media.modeVideo"))}</button>
        </div>
        <div class="form-grid">
          <label class="full">${t(e("media.generatePrompt"))}
            <textarea id="mg-prompt" rows="3" placeholder="${t(e("media.generatePromptPh"))}"></textarea>
          </label>
          <label>${t(e("media.generateKey"))}
            <select id="mg-key">${b}</select>
          </label>
          <label>${t(e("chats.model"))}
            <select id="mg-model">${v}</select>
            <span class="hint">${t(e("media.modelHint"))}</span>
          </label>
          <label id="mg-aspect-wrap">${t(e("media.aspectRatio"))}
            <select id="mg-aspect">${y}</select>
            <span class="hint">${t(e("media.aspectHint"))}</span>
          </label>
          <label id="mg-n-wrap">${t(e("media.generateN"))}
            <input type="number" id="mg-n" min="1" max="4" value="1" />
            <span class="hint">${t(e("media.nHint"))}</span>
          </label>
          <label id="mg-duration-wrap" hidden>${t(e("media.videoDuration"))}
            <select id="mg-duration">
              <option value="6" selected>6s</option>
              <option value="10">10s</option>
            </select>
            <span class="hint">${t(e("media.videoDurationHint"))}</span>
          </label>
        </div>
        <div id="mg-source-section" class="media-source-section" hidden>
          <div class="media-source-head">
            <strong>${t(e("media.sourceTitle"))}</strong>
            <span class="muted hint">${t(e("media.sourceHint"))}</span>
          </div>
          <div class="media-dropzone" id="mg-dropzone" tabindex="0" role="button" aria-label="${t(e("media.dropzoneAria"))}">
            <input type="file" id="mg-file" accept="image/*" hidden />
            <div class="media-dropzone-inner" id="mg-drop-inner">
              <div class="media-dropzone-icon" aria-hidden="true">📎</div>
              <strong id="mg-drop-title">${t(e("media.dropTitle"))}</strong>
              <span class="muted" id="mg-drop-hint">${t(e("media.dropHint"))}</span>
              <div class="media-dropzone-actions">
                <button type="button" class="btn secondary sm" id="mg-pick-file">${t(e("media.pickFile"))}</button>
                <button type="button" class="btn secondary sm" id="mg-pick-lib">${t(e("media.pickLibrary"))}</button>
                <button type="button" class="btn ghost sm" id="mg-clear-source" hidden>${t(e("media.clearSource"))}</button>
              </div>
              <div class="media-source-chip" id="mg-source-chip" hidden></div>
            </div>
          </div>
        </div>
        <div class="media-gen-actions toolbar">
          <button type="button" class="btn" id="mg-submit">${t(e("media.generateSubmit"))}</button>
          <span id="mg-status" class="muted" hidden></span>
        </div>
      </div>
    </div>`,G=`
    <div class="grid media-kpi-grid" id="media-kpi-grid">
      <div class="card">
        <div class="label">${t(e("media.assets"))}</div>
        <div class="value value-sm">${u}</div>
        <div class="muted card-sub">${t(e("media.kpiAssetsSub"))}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("media.jobs"))}</div>
        <div class="value value-sm">${p}</div>
        <div class="muted card-sub">${t(e("media.kpiJobsSub"))}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("media.tabStudio"))}</div>
        <div class="value value-sm">${t(e("media.modeGenerate"))} / ${t(e("media.modeEdit"))} / ${t(e("media.modeVideo"))}</div>
        <div class="muted card-sub">${t(e("media.kpiStudioSub"))}</div>
      </div>
    </div>`;document.getElementById("app").innerHTML=ne(`
    <div class="topbar">
      <h2>${t(e("media.title"))}</h2>
    </div>
    ${we([e("media.intro")])}
    ${G}
    <div class="usage-tabs-panel panel media-tabs-panel queue-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("media.title"))}">
        <button type="button" role="tab" class="seg-tab ${s==="studio"?"is-active":""}" data-media-tab="studio" aria-selected="${s==="studio"}">
          ${t(e("media.tabStudio"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${s==="assets"?"is-active":""}" data-media-tab="assets" aria-selected="${s==="assets"}">
          ${t(e("media.tabAssets"))}
          <span class="seg-tab-count">${u}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${s==="jobs"?"is-active":""}" data-media-tab="jobs" aria-selected="${s==="jobs"}">
          ${t(e("media.tabJobs"))}
          <span class="seg-tab-count">${p}</span>
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane media-tab-pane-studio" id="media-tab-studio" ${s==="studio"?"":"hidden"}>
          ${H}
        </div>
        <div class="usage-tab-pane media-tab-pane-assets" id="media-tab-assets" ${s==="assets"?"":"hidden"}>
          ${C}
          ${A}
        </div>
        <div class="usage-tab-pane media-tab-pane-jobs" id="media-tab-jobs" ${s==="jobs"?"":"hidden"}>
          ${M}
        </div>
      </div>
    </div>
  `),oe(),document.querySelectorAll("[data-media-tab]").forEach(g=>{g.addEventListener("click",()=>{const k=g.getAttribute("data-media-tab")||"studio",x=k==="assets"||k==="jobs"||k==="studio"?k:"studio";c.mediaFilter.tab!==x&&(c.mediaFilter.tab=x,Pe().catch($))})});async function J(g){const k=await fetch(`/admin/api/media/assets/${g}/download`,{headers:{Authorization:`Bearer ${c.key}`}});if(!k.ok)throw new Error(await k.text());return k.blob()}{let g="generate",k=null;const x=()=>{const S=document.getElementById("mg-source-chip"),D=document.getElementById("mg-clear-source");if(!S)return;if(!k){S.hidden=!0,S.innerHTML="",D&&(D.hidden=!0);return}const ae=k.kind==="file"?e("media.sourceKindUpload"):k.kind==="asset"?e("media.sourceKindAsset"):e("media.sourceKindDocument");S.hidden=!1,S.innerHTML=`<span class="chip">${t(ae)}</span> <span class="mono">${t(k.name||k.id||"")}</span>`,D&&(D.hidden=!1)},N=S=>{k=S;const D=document.getElementById("mg-file");D&&S?.kind!=="file"&&(D.value=""),x()},K=S=>{g=S==="edit"||S==="video"?S:"generate",document.querySelectorAll("[data-mg-mode]").forEach(de=>{const Ht=de.getAttribute("data-mg-mode")===g;de.classList.toggle("is-active",Ht),de.setAttribute("aria-selected",Ht?"true":"false")});const D=document.getElementById("mg-source-section"),ae=document.getElementById("mg-n-wrap"),Me=document.getElementById("mg-duration-wrap"),Fe=document.getElementById("mg-submit");D&&(D.hidden=g==="generate"),ae&&(ae.hidden=g==="video"),Me&&(Me.hidden=g!=="video"),Fe&&(Fe.textContent=e(g==="edit"?"media.editSubmit":g==="video"?"media.videoSubmit":"media.generateSubmit"));const pe=document.getElementById("mg-prompt");pe&&(pe.placeholder=e(g==="edit"?"media.editPromptPh":g==="video"?"media.videoPromptPh":"media.generatePromptPh"));const ee=document.getElementById("mg-drop-title"),fe=document.getElementById("mg-drop-hint");ee&&(ee.textContent=e(g==="video"?"media.dropTitleVideo":"media.dropTitle")),fe&&(fe.textContent=e(g==="video"?"media.dropHintVideo":"media.dropHint"))};document.querySelectorAll("[data-mg-mode]").forEach(S=>{S.addEventListener("click",()=>K(S.getAttribute("data-mg-mode")||"generate"))}),K("generate");const E=document.getElementById("mg-dropzone"),_=document.getElementById("mg-file"),j=S=>S?S.type&&S.type.startsWith("image/")?!0:/\.(png|jpe?g|webp|gif|bmp|svg)$/i.test(S.name||""):!1,me=S=>{const D=[...S||[]].find(j);if(!D){R(e("media.sourceNeedImage"));return}N({kind:"file",file:D,name:D.name,mime:D.type||"image/*"}),R("")};if(document.getElementById("mg-pick-file")?.addEventListener("click",S=>{S.preventDefault(),S.stopPropagation(),_?.click()}),_?.addEventListener("change",()=>{_.files?.length&&me(_.files)}),document.getElementById("mg-clear-source")?.addEventListener("click",S=>{S.preventDefault(),S.stopPropagation(),N(null)}),document.getElementById("mg-pick-lib")?.addEventListener("click",S=>{S.preventDefault(),S.stopPropagation(),Is({imagesOnly:!0,onPick:D=>{N({kind:D.kind,id:D.id,name:D.name,mime:D.mime}),R("")}}).catch(D=>R(D.message||e("media.libraryLoadFail")))}),E&&(E.addEventListener("click",S=>{S.target.closest("button")||_?.click()}),E.addEventListener("keydown",S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),_?.click())}),["dragenter","dragover"].forEach(S=>{E.addEventListener(S,D=>{D.preventDefault(),D.stopPropagation(),E.classList.add("is-dragover")})}),["dragleave","drop"].forEach(S=>{E.addEventListener(S,D=>{D.preventDefault(),D.stopPropagation(),E.classList.remove("is-dragover")})}),E.addEventListener("drop",S=>{const D=S.dataTransfer;D?.files?.length&&me(D.files)})),c._mediaDragAbort)try{c._mediaDragAbort.abort()}catch{}c._mediaDragAbort=new AbortController;const L={signal:c._mediaDragAbort.signal},O=document.getElementById("app");let F=0;window.addEventListener("dragenter",S=>{g!=="generate"&&[...S.dataTransfer?.types||[]].includes("Files")&&(F+=1,O?.classList.add("is-media-file-drag"))},L),window.addEventListener("dragleave",()=>{F=Math.max(0,F-1),F===0&&O?.classList.remove("is-media-file-drag")},L),window.addEventListener("drop",S=>{F=0,O?.classList.remove("is-media-file-drag"),g!=="generate"&&S.dataTransfer?.files?.length&&(S.preventDefault(),me(S.dataTransfer.files))},L),window.addEventListener("dragover",S=>{g!=="generate"&&[...S.dataTransfer?.types||[]].includes("Files")&&S.preventDefault()},L),document.getElementById("mg-submit")?.addEventListener("click",async()=>{const S=document.getElementById("mg-prompt")?.value?.trim()||"";if(!S){R(e("media.generateNeedPrompt"));return}const D=document.getElementById("mg-key")?.value||"",ae=document.getElementById("mg-model")?.value||void 0,Me=document.getElementById("mg-aspect")?.value||"1:1",Fe=Math.min(4,Math.max(1,Number(document.getElementById("mg-n")?.value)||1)),pe=document.getElementById("mg-submit"),ee=document.getElementById("mg-status"),fe=e(g==="video"?"media.videoBusy":g==="edit"?"media.editBusy":"media.generateBusy");pe&&(pe.disabled=!0,pe.textContent=fe),ee&&(ee.hidden=!1,ee.textContent=fe),R("");try{if(g==="edit"){if(!k)throw new Error(e("media.editNeedImage"));const z=new FormData;z.append("prompt",S),z.append("aspect_ratio",Me),z.append("n",String(Fe)),z.append("response_format","url"),ae&&z.append("model",ae),D&&z.append("apiKeyId",D),k.kind==="file"&&k.file?z.append("image",k.file):k.kind==="asset"&&k.id?z.append("sourceAssetId",k.id):k.kind==="document"&&k.id&&z.append("sourceDocumentId",k.id),await pa(await fetch("/admin/api/media/edit",{method:"POST",headers:{Authorization:`Bearer ${c.key}`},body:z})),ee&&(ee.textContent=e("media.editOk")),c.mediaFilter.tab="assets",c.mediaFilter.offset=0,await Pe();return}if(g==="video"){const z=new FormData;z.append("prompt",S),z.append("aspect_ratio",Me),z.append("seconds",String(document.getElementById("mg-duration")?.value||6)),ae&&z.append("model",ae),D&&z.append("apiKeyId",D),k?.kind==="file"&&k.file?z.append("image",k.file):k?.kind==="asset"&&k.id?z.append("source_asset_id",k.id):k?.kind==="document"&&k.id&&z.append("source_document_id",k.id),await pa(await fetch("/admin/api/media/videos",{method:"POST",headers:{Authorization:`Bearer ${c.key}`},body:z})),ee&&(ee.textContent=e("media.videoOk")),c.mediaFilter.tab="jobs",await Pe();return}const de={prompt:S,aspect_ratio:Me,n:Fe,response_format:"url"};ae&&(de.model=ae),D&&(de.apiKeyId=D);const pt=(await P("/media/generate",{method:"POST",body:JSON.stringify(de)}))?.data?.grok?.asset_ids||[];if(ee&&(ee.textContent=e("media.generateOk")),c.mediaFilter.tab="assets",c.mediaFilter.offset=0,await Pe(),pt[0])try{const z=await J(pt[0]);fa({id:pt[0],mime:z.type||"image/png",filename:`generated-${String(pt[0]).slice(0,8)}`,kind:"image",bytes:z.size,prompt:S},z)}catch{}}catch(de){$(de),ee&&(ee.textContent=de.message||e("media.generateFail")),pe&&(pe.disabled=!1,K(g))}})}s==="assets"&&(Ze("media",c.mediaFilter,()=>Pe().catch($)),document.querySelector("#media-tab-assets [data-filter-apply]")?.addEventListener("click",()=>{c.mediaFilter.q=document.getElementById("mf-q")?.value.trim()||"",c.mediaFilter.kind=document.getElementById("mf-kind")?.value||"",c.mediaFilter.provider=document.getElementById("mf-provider")?.value.trim()||"",c.mediaFilter.from=document.getElementById("mf-from")?.value||"",c.mediaFilter.to=document.getElementById("mf-to")?.value||"",c.mediaFilter.offset=0,Pe().catch($)}),document.querySelector("#media-tab-assets [data-filter-reset]")?.addEventListener("click",()=>{const g=c.mediaFilter.tab;c.mediaFilter={tab:g,q:"",kind:"",provider:"",from:"",to:"",limit:20,offset:0},Pe().catch($)}),document.querySelectorAll("[data-media-preview]").forEach(g=>{g.addEventListener("click",async()=>{try{const k=g.getAttribute("data-media-preview");if(!k)return;const x=g.getAttribute("data-media-mime")||"",N=g.getAttribute("data-media-name")||"",K=g.getAttribute("data-media-kind")||"",E=g.getAttribute("data-media-bytes")||"",_=g.getAttribute("data-media-prompt")||"",j=await J(k);fa({id:k,mime:x||j.type||"",filename:N,kind:K,bytes:E?Number(E):j.size,prompt:_},j)}catch(k){$(k)}})}),document.querySelectorAll("[data-media-dl]").forEach(g=>{g.addEventListener("click",async()=>{try{const k=g.getAttribute("data-media-dl"),x=g.getAttribute("data-media-name")||"",N=await J(k),K=document.createElement("a");K.href=URL.createObjectURL(N),K.download=x||`media-${String(k).slice(0,8)}`,K.click(),setTimeout(()=>URL.revokeObjectURL(K.href),3e4)}catch(k){$(k)}})}),document.querySelectorAll("[data-media-del]").forEach(g=>{g.addEventListener("click",async()=>{const k=g.getAttribute("data-media-del");if(await V({message:e("media.deleteConfirm"),variant:"danger",confirmText:e("media.delete")}))try{await P(`/media/assets/${k}`,{method:"DELETE"}),await Pe()}catch(x){$(x)}})}))}async function Is(a){const s=a.imagesOnly!==!1;let n="documents",o=0,i=null;et({title:e("media.libraryTitle"),subtitle:t(e("media.librarySubtitle")),size:"md",bodyHtml:`
      <div class="chat-lib media-lib">
        <div class="seg-tabs" role="tablist" style="margin-bottom:0.75rem">
          <button type="button" class="seg-tab is-active" data-mlib-tab="documents">${t(e("media.libraryTabDocs"))}</button>
          <button type="button" class="seg-tab" data-mlib-tab="assets">${t(e("media.libraryTabAssets"))}</button>
        </div>
        <div class="chat-lib-toolbar">
          <input type="search" id="mlib-q" class="chat-lib-search" placeholder="${t(e("media.librarySearch"))}" autocomplete="off" />
          <span class="muted chat-lib-count" id="mlib-count"></span>
        </div>
        <div class="muted chat-lib-formats">${t(e("media.libraryFormats"))}</div>
        <div id="mlib-list" class="chat-lib-list" role="listbox">
          <div class="muted chat-lib-status">${t(e("common.loading")||"…")}</div>
        </div>
      </div>`,footerHtml:`
      <button type="button" class="btn secondary sm" id="mlib-cancel">${t(e("common.cancel"))}</button>
      <button type="button" class="btn sm" id="mlib-add" disabled>${t(e("media.librarySelect"))}</button>`});const r=document.getElementById("mlib-list"),d=document.getElementById("mlib-q"),u=document.getElementById("mlib-add");document.getElementById("mlib-cancel")?.addEventListener("click",()=>ce());const m=()=>{u&&(u.disabled=!i,u.textContent=i?`${e("media.librarySelect")} · ${i.name.slice(0,24)}`:e("media.librarySelect"))},p=v=>String(v||"").startsWith("image/"),l=v=>/\.(png|jpe?g|webp|gif|bmp|svg)$/i.test(String(v||"")),b=v=>{if(r){if(!v.length){r.innerHTML=`<div class="data-empty chat-lib-empty"><strong>${t(e("media.libraryEmpty"))}</strong></div>`;return}r.innerHTML=v.map(y=>{const w=i?.id===y.id&&i?.kind===y.kind;return`
          <label class="chat-lib-row ${w?"is-selected":""}" data-kind="${t(y.kind)}" data-id="${t(y.id)}">
            <input type="radio" name="mlib-pick" ${w?"checked":""} />
            <span class="chat-lib-meta">
              <span class="chat-lib-name" title="${t(y.name)}">${t(y.name)}</span>
              <span class="muted">${t(y.kindLabel)} · ${t(y.mime||"—")}${y.size!=null?` · ${$e(y.size)}`:""}</span>
            </span>
          </label>`}).join(""),r.querySelectorAll(".chat-lib-row").forEach(y=>{y.addEventListener("click",()=>{const w=y.getAttribute("data-kind"),C=y.getAttribute("data-id"),A=v.find(T=>T.id===C&&T.kind===w);A&&(i={kind:A.kind,id:A.id,name:A.name,mime:A.mime},r.querySelectorAll(".chat-lib-row").forEach(T=>{T.classList.toggle("is-selected",T.getAttribute("data-id")===C&&T.getAttribute("data-kind")===w);const M=T.querySelector("input");M&&(M.checked=T.getAttribute("data-id")===C&&T.getAttribute("data-kind")===w)}),m())})})}},h=async()=>{const v=++o;r&&(r.innerHTML=`<div class="muted chat-lib-status">${t(e("common.loading")||"…")}</div>`);try{const y=(d?.value||"").trim();let w=[];if(n==="assets"){const C=new URLSearchParams({limit:"80",offset:"0"});y&&C.set("q",y),s&&C.set("kind","image"),w=((await P(`/media/assets?${C}`)).data||[]).filter(T=>!s||p(T.mime)||l(T.filename)).map(T=>({kind:"asset",kindLabel:e("media.sourceKindAsset"),id:T.id,name:T.filename||T.prompt||T.id,mime:T.mime||"",size:T.bytes}))}else{const C=new URLSearchParams({limit:"80",offset:"0"});y&&C.set("q",y),w=((await P(`/documents?${C}`)).data||[]).filter(T=>!s||p(T.mimeType)||l(T.originalName)).map(T=>({kind:"document",kindLabel:e("media.sourceKindDocument"),id:T.id,name:T.originalName||T.id,mime:T.mimeType||"",size:T.sizeBytes}))}if(v!==o)return;b(w)}catch(y){if(v!==o)return;r&&(r.innerHTML=`<div class="error-box">${t(y.message||e("media.libraryLoadFail"))}</div>`)}};document.querySelectorAll("[data-mlib-tab]").forEach(v=>{v.addEventListener("click",()=>{n=v.getAttribute("data-mlib-tab")==="assets"?"assets":"documents",document.querySelectorAll("[data-mlib-tab]").forEach(y=>{y.classList.toggle("is-active",y.getAttribute("data-mlib-tab")===n)}),i=null,m(),h()})});let f=null;d?.addEventListener("input",()=>{f&&clearTimeout(f),f=setTimeout(()=>h(),280)}),u?.addEventListener("click",()=>{i&&(a.onPick(i),ce())}),m(),await h()}async function re(){const{data:a}=await P("/usage"),s=a.totals||{},n=a.limits||{},o=c.usageFilter,i=o.pageSize||10;let r=a.byModel||[];if(o.modelQ.trim()){const M=o.modelQ.trim().toLowerCase();r=r.filter(H=>String(H.model||"").toLowerCase().includes(M))}const d=r.length,m=r.slice(o.modelPage*i,o.modelPage*i+i).map(M=>`<tr><td class="cell-primary">${t(M.model)}</td><td>${M.requests}</td></tr>`).join("");let p=a.perKey||[];if(o.keyQ.trim()){const M=o.keyQ.trim().toLowerCase();p=p.filter(H=>String(H.name||"").toLowerCase().includes(M)||String(H.keyPrefix||"").toLowerCase().includes(M))}o.keyActive==="true"&&(p=p.filter(M=>M.isActive)),o.keyActive==="false"&&(p=p.filter(M=>!M.isActive));const l=p.length,h=p.slice(o.keyPage*i,o.keyPage*i+i).map(M=>{const H=Math.round((M.utilization||0)*100);return`<tr>
        <td><div class="cell-primary">${t(M.name)}</div><div class="cell-sub">${t(M.keyPrefix)}</div></td>
        <td>${M.requests}</td>
        <td>${Ba(M.rateLimit)}</td>
        <td>
          <div>${I("common.percent",{n:H})}</div>
          <div class="usage-bar ${H>80?"warn":""}"><span style="width:${H}%"></span></div>
        </td>
        <td>${M.isActive?`<span class="badge success">${t(e("common.active"))}</span>`:`<span class="badge error">${t(e("common.revoked"))}</span>`}</td>
      </tr>`}).join(""),f=ke({total:d,limit:i,offset:o.modelPage*i,idPrefix:"umodel"}),v=ke({total:l,limit:i,offset:o.keyPage*i,idPrefix:"ukey"}),y=o.tab==="key"?"key":"model",w=He({title:e("usage.byModel"),hint:e("common.filterHint"),searchHtml:`<div class="data-filter-search"><label>${t(e("common.search"))}<input type="search" id="uf-model" value="${t(o.modelQ)}" placeholder="${t(e("chats.model"))}" /></label></div>`,gridHtml:""}),C=be({headHtml:`<th>${t(e("chats.model"))}</th><th>${t(e("usage.requests"))}</th>`,bodyHtml:m,colSpan:2,emptyText:e("common.empty"),pagerHtml:f}),A=He({title:e("usage.byKey"),hint:e("common.filterHint"),searchHtml:`<div class="data-filter-search"><label>${t(e("common.search"))}<input type="search" id="uf-key" value="${t(o.keyQ)}" placeholder="${t(e("keys.name"))}" /></label></div>`,gridHtml:`<label>${t(e("keys.status"))}
      <select id="uf-active">
        <option value="">${t(e("common.all"))}</option>
        <option value="true" ${o.keyActive==="true"?"selected":""}>${t(e("common.active"))}</option>
        <option value="false" ${o.keyActive==="false"?"selected":""}>${t(e("common.revoked"))}</option>
      </select>
    </label>`}),T=be({headHtml:`
      <th>${t(e("keys.name"))}</th>
      <th>${t(e("usage.requests"))}</th>
      <th>${t(e("usage.rateLimit"))}</th>
      <th>${t(e("usage.util"))}</th>
      <th>${t(e("keys.status"))}</th>`,bodyHtml:h,colSpan:5,emptyText:e("common.empty"),pagerHtml:v});document.getElementById("app").innerHTML=ne(`
    <div class="topbar">
      <h2>${t(e("usage.title"))}</h2>
      <button class="btn secondary sm" id="btn-usage-refresh">${t(e("usage.refresh"))}</button>
    </div>
    ${we([`${e("usage.window")}: ${Z(a.from)} → ${Z(a.to)} (${I("common.minutes",{n:a.windowMinutes})})`])}
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
        <button type="button" role="tab" class="seg-tab ${y==="model"?"is-active":""}" data-usage-tab="model" aria-selected="${y==="model"}">
          ${t(e("usage.byModel"))}
          <span class="seg-tab-count">${d}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${y==="key"?"is-active":""}" data-usage-tab="key" aria-selected="${y==="key"}">
          ${t(e("usage.byKey"))}
          <span class="seg-tab-count">${l}</span>
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane" id="usage-tab-model" ${y==="model"?"":"hidden"}>
          ${w}
          ${C}
        </div>
        <div class="usage-tab-pane" id="usage-tab-key" ${y==="key"?"":"hidden"}>
          ${A}
          ${T}
        </div>
      </div>
    </div>
  `),oe(),document.getElementById("btn-usage-refresh").onclick=()=>re().catch($),document.querySelectorAll("[data-usage-tab]").forEach(M=>{M.onclick=()=>{const H=M.dataset.usageTab==="key"?"key":"model";c.usageFilter.tab!==H&&(c.usageFilter.tab=H,re().catch($))}}),document.getElementById("umodel-prev")?.addEventListener("click",()=>{c.usageFilter.modelPage=Math.max(0,o.modelPage-1),re().catch($)}),document.getElementById("umodel-next")?.addEventListener("click",()=>{(o.modelPage+1)*i<d&&(c.usageFilter.modelPage+=1,re().catch($))}),document.getElementById("umodel-limit")?.addEventListener("change",M=>{c.usageFilter.pageSize=Number(M.target.value)||10,c.usageFilter.modelPage=0,re().catch($)}),document.getElementById("ukey-prev")?.addEventListener("click",()=>{c.usageFilter.keyPage=Math.max(0,o.keyPage-1),re().catch($)}),document.getElementById("ukey-next")?.addEventListener("click",()=>{(o.keyPage+1)*i<l&&(c.usageFilter.keyPage+=1,re().catch($))}),document.getElementById("ukey-limit")?.addEventListener("change",M=>{c.usageFilter.pageSize=Number(M.target.value)||10,c.usageFilter.keyPage=0,re().catch($)}),document.querySelectorAll("#usage-tab-model [data-filter-apply]").forEach(M=>{M.onclick=()=>{c.usageFilter.modelQ=document.getElementById("uf-model")?.value?.trim()||"",c.usageFilter.modelPage=0,re().catch($)}}),document.querySelectorAll("#usage-tab-model [data-filter-reset]").forEach(M=>{M.onclick=()=>{c.usageFilter.modelQ="",c.usageFilter.modelPage=0,re().catch($)}}),document.querySelectorAll("#usage-tab-key [data-filter-apply]").forEach(M=>{M.onclick=()=>{c.usageFilter.keyQ=document.getElementById("uf-key")?.value?.trim()||"",c.usageFilter.keyActive=document.getElementById("uf-active")?.value||"",c.usageFilter.keyPage=0,re().catch($)}}),document.querySelectorAll("#usage-tab-key [data-filter-reset]").forEach(M=>{M.onclick=()=>{c.usageFilter.keyQ="",c.usageFilter.keyActive="",c.usageFilter.keyPage=0,re().catch($)}})}function ba(a){const s=a.versionStatus||(a.updateAvailable?"update_available":a.latest?"up_to_date":"unknown");return s==="update_available"?{badge:`<span class="badge warn" title="${t(e("system.statusHintUpdate"))}">${t(e("system.badgeUpdate"))}</span>`,hint:e("system.statusHintUpdate")}:s==="ahead"?{badge:`<span class="badge pending" title="${t(e("system.statusHintAhead"))}">${t(e("system.badgeAhead"))}</span>`,hint:e("system.statusHintAhead")}:s==="up_to_date"?{badge:`<span class="badge success" title="${t(e("system.statusHintOk"))}">${t(e("system.badgeOk"))}</span>`,hint:e("system.statusHintOk")}:{badge:`<span class="badge pending" title="${t(e("system.statusHintUnknown"))}">${t(e("system.badgeUnknown"))}</span>`,hint:e("system.statusHintUnknown")}}function Ms(a){return e(a==="git"?"system.channelGit":a==="npm-global"?"system.channelNpmGlobal":a==="npm-local"?"system.channelNpmLocal":"system.channelUnknown")}function qs(a){return a==="required"?e("system.levelRequired"):a==="recommended"?e("system.levelRecommended"):a==="optional"?e("system.levelOptional"):a==="bundled"?e("system.levelBundled"):a||"—"}function Ts(a){return a.installed?a.ok?`<span class="badge success">${t(e("system.softOk"))}</span>`:`<span class="badge warn">${t(e("system.softWarn"))}</span>`:a.level==="required"||a.level==="bundled"?`<span class="badge error">${t(e("system.softMissing"))}</span>`:`<span class="badge pending">${t(e("system.softMissing"))}</span>`}function ya(a){return a==="up"?`<span class="badge success">${t(e("system.up"))}</span>`:`<span class="badge error">${t(e("system.down"))}</span>`}async function wt(){const{data:a}=await P("/system");if(c.page!=="system")return;const s=a.version||{},n=ba(s),o=a.software||{checks:[],allRequiredOk:!0},i=o.checks||[],r=c.systemTab==="package"||c.systemTab==="env"?c.systemTab:"software";c.systemTab=r;const d=i.map(w=>`
      <tr>
        <td><div class="cell-primary">${t(w.name||w.id)}</div>${w.requiredVersion?`<div class="cell-sub">${t(w.requiredVersion)}</div>`:""}</td>
        <td>${t(qs(w.level))}</td>
        <td>${t(w.installed?e("system.yes"):e("system.no"))}${w.path?`<div class="cell-sub soft-path">${t(w.path)}</div>`:""}</td>
        <td><code class="cell-code">${t(w.version||"—")}</code></td>
        <td>${Ts(w)}</td>
        <td class="muted">${t(w.detail||"")}</td>
      </tr>`).join(""),u=o.allRequiredOk?`<span class="badge success">${t(e("system.allRequiredOk"))}</span>`:`<span class="badge error">${t(e("system.requiredMissing"))}</span>`,m=a.encryption&&a.encryption.ready,p=Ms(s.channel),l=s.installSource?`${p} · ${s.installSource}`:p,b=be({headHtml:`
      <th>${t(e("system.softName"))}</th>
      <th>${t(e("system.softLevel"))}</th>
      <th>${t(e("system.softInstalled"))}</th>
      <th>${t(e("system.softVersion"))}</th>
      <th>${t(e("system.softStatus"))}</th>
      <th>${t(e("system.softDetail"))}</th>`,bodyHtml:d,colSpan:6,emptyText:e("common.empty")}),h=`
    <div class="grid system-kpi-grid" id="system-kpi-grid">
      <div class="card">
        <div class="label">${t(e("system.database"))}</div>
        <div class="value value-sm">${ya(a.database)}</div>
        <div class="muted card-sub">${t(e("system.runtime"))}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("system.grokCli"))}</div>
        <div class="value value-sm">${ya(a.grokCli)}</div>
        <div class="muted card-sub">${t(e("system.runtime"))}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("system.concurrency"))}</div>
        <div class="value value-sm">${a.concurrency?.active??0}<span class="dash-kpi-den">/${a.concurrency?.max??"—"}</span></div>
        <div class="muted card-sub">${t(e("system.concurrency"))}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("system.encryption"))}</div>
        <div class="value value-sm">${m?`<span class="badge success">${t(e("system.ready"))}</span>`:`<span class="badge error">${t(e("system.notReady"))}</span>`}</div>
        <div class="muted card-sub">${t(e("system.runtime"))}</div>
      </div>
    </div>`,f=`
    <div class="system-tab-toolbar">
      <span class="muted">${t(e("system.softwareHint"))}</span>
      ${u}
    </div>
    ${b}`,v=`
    <div class="panel data-table-panel system-package-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("system.selfUpdate"))}</strong>
          <span class="muted panel-h-sub">${t(n.hint)}</span>
        </div>
        ${n.badge}
      </div>
      <div class="panel-pad">
        <div class="grid">
          <div class="card"><div class="label">${t(e("system.current"))}</div><div class="value value-sm">${t(s.current||"-")} ${n.badge}</div></div>
          <div class="card"><div class="label">${t(e("system.npm"))}</div><div class="value value-sm">${t(s.latestNpm||"n/a")}</div></div>
          <div class="card"><div class="label">${t(e("system.github"))}</div><div class="value value-sm">${t(s.latestGithub||"n/a")}</div></div>
          <div class="card"><div class="label">${t(e("system.install"))}</div><div class="value value-sm">${t(l)}</div></div>
        </div>
        <pre id="update-log" class="pre" style="display:none;margin-top:12px"></pre>
      </div>
    </div>`,y=`
    <div class="panel data-table-panel system-env-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("system.envTitle"))}</strong>
          <span class="muted panel-h-sub">${t(e("system.envHint"))}</span>
        </div>
      </div>
      <div class="panel-pad">
        <pre class="pre system-env-pre">${t(JSON.stringify({env:a.env,version:s},null,2))}</pre>
      </div>
    </div>`;document.getElementById("app").innerHTML=ne(`
    <div class="topbar">
      <h2>${t(e("system.title"))}</h2>
      <div class="toolbar">
        <button class="btn secondary sm" id="btn-check-update" title="${t(e("system.selfHint"))}">${t(e("system.checkUpdate"))}</button>
        <button class="btn sm" id="btn-one-click-update" title="${t(e("system.confirmUpdate"))}">${t(e("system.oneClick"))}</button>
      </div>
    </div>
    ${we([e("system.selfHint")])}
    ${h}

    <div class="usage-tabs-panel panel system-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("system.title"))}">
        <button type="button" role="tab" class="seg-tab ${r==="software"?"is-active":""}" data-system-tab="software" aria-selected="${r==="software"}">
          ${t(e("system.tabSoftware"))}
          <span class="seg-tab-count">${i.length}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${r==="package"?"is-active":""}" data-system-tab="package" aria-selected="${r==="package"}">
          ${t(e("system.tabPackage"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${r==="env"?"is-active":""}" data-system-tab="env" aria-selected="${r==="env"}">
          ${t(e("system.tabEnv"))}
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane system-tab-pane-software" id="system-tab-software" ${r==="software"?"":"hidden"}>
          ${f}
        </div>
        <div class="usage-tab-pane system-tab-pane-package" id="system-tab-package" ${r==="package"?"":"hidden"}>
          ${v}
        </div>
        <div class="usage-tab-pane system-tab-pane-env" id="system-tab-env" ${r==="env"?"":"hidden"}>
          ${y}
        </div>
      </div>
    </div>
  `),oe(),document.querySelectorAll("[data-system-tab]").forEach(w=>{w.addEventListener("click",()=>{const C=w.getAttribute("data-system-tab")||"software",A=C==="package"||C==="env"||C==="software"?C:"software";c.systemTab!==A&&(c.systemTab=A,wt().catch($))})}),document.getElementById("btn-check-update").onclick=async()=>{try{const C=(await P("/system/update-check")).data||{},A=ba(C);await le({title:e("system.checkResult"),message:`${e("system.current")}: ${C.current||"?"}
${e("system.npm")}: ${C.latestNpm||"n/a"}
${e("system.github")}: ${C.latestGithub||"n/a"}
${A.hint}`}),c.systemTab="package",wt().catch($)}catch(w){$(w)}},document.getElementById("btn-one-click-update").onclick=async()=>{if(!await V({message:e("system.confirmUpdate"),variant:"danger",confirmText:e("system.oneClick")}))return;c.systemTab!=="package"&&(c.systemTab="package",await wt());const w=document.getElementById("update-log");try{const C=document.getElementById("btn-one-click-update");C&&(C.disabled=!0);const A=await P("/system/update",{method:"POST",body:JSON.stringify({restart:!0})});w&&(w.style.display="block",w.textContent=A.data&&(A.data.message||JSON.stringify(A.data,null,2))||e("system.scheduled")),await le(A.data&&A.data.message||e("system.scheduled"))}catch(C){$(C)}}}function Gt(a){if(!a)return"—";const s=`ddos.sources.${a}`,n=e(s);return n===s?a:n}function ye(a){return Math.max(1,Math.round(Number(a||0)/1e3))}function he(a){return Math.max(1,Math.round(Number(a||0)/6e4))}function tt(a){return Math.max(1e3,Math.round(Number(a||0)*1e3))}function at(a){return Math.max(1e3,Math.round(Number(a||0)*6e4))}function W(a,s){const n=Number(document.getElementById(a)?.value);return Number.isFinite(n)?n:s}function Je(a){return document.getElementById(a)?.checked===!0}function Qt(){const a=(document.getElementById("dp-whitelist")?.value||"").split(/[\n,]+/).map(o=>o.trim()).filter(Boolean),s=(document.getElementById("dp-trustedProxies")?.value||"").split(/[\n,]+/).map(o=>o.trim()).filter(Boolean);return{autoBanEnabled:document.getElementById("ddos-master-autoban")?Ue("ddos-master-autoban"):Je("dp-autoBanEnabled")||document.getElementById("dp-autoBanEnabled")?.value==="1",rateLimitWindowMs:tt(W("dp-rateWindowSec",60)),rateLimitMax:Math.floor(W("dp-rateMaxKey",120)),rateLimitIpMax:Math.floor(W("dp-rateMaxIp",60)),chatBurstWindowMs:tt(W("dp-burstWindowSec",10)),chatBurstMax:Math.floor(W("dp-burstMax",20)),autoAuthEnabled:Je("dp-autoAuthEnabled"),failedAuthThreshold:Math.floor(W("dp-authThreshold",20)),failedAuthWindowMs:tt(W("dp-authWindowSec",300)),authBanDurationMs:at(W("dp-authBanMin",10)),autoRateEnabled:Je("dp-autoRateEnabled"),rateHitThreshold:Math.floor(W("dp-rateHitThreshold",30)),rateHitWindowMs:tt(W("dp-rateHitWindowSec",60)),rateBanDurationMs:at(W("dp-rateBanMin",15)),autoConnEnabled:Je("dp-autoConnEnabled"),maxConcurrentPerIp:Math.floor(W("dp-maxConcurrent",20)),connBanDurationMs:at(W("dp-connBanMin",10)),autoVelocityEnabled:Je("dp-autoVelocityEnabled"),velocityMaxRequests:Math.floor(W("dp-velocityMax",200)),velocityWindowMs:tt(W("dp-velocityWindowSec",60)),velocityBanDurationMs:at(W("dp-velocityBanMin",10)),escalateEnabled:Je("dp-escalateEnabled"),escalateAfterBans:Math.floor(W("dp-escalateAfter",3)),escalateDurationMs:at(W("dp-escalateMin",1440)),whitelist:a,proxyTrustHops:Math.max(0,Math.min(10,Math.floor(W("dp-proxyTrustHops",1)))),proxyIpSource:document.getElementById("dp-proxyIpSource")?.value||"auto",trustedProxies:s.length?s:["127.0.0.1","::1"]}}const As=["autoBanEnabled","rateLimitWindowMs","rateLimitMax","rateLimitIpMax","chatBurstWindowMs","chatBurstMax","autoAuthEnabled","failedAuthThreshold","failedAuthWindowMs","authBanDurationMs","autoRateEnabled","rateHitThreshold","rateHitWindowMs","rateBanDurationMs","autoConnEnabled","maxConcurrentPerIp","connBanDurationMs","autoVelocityEnabled","velocityMaxRequests","velocityWindowMs","velocityBanDurationMs","escalateEnabled","escalateAfterBans","escalateDurationMs"];function va(a){if(!a)return{};const s={};for(const n of As){const o=a[n];typeof o=="boolean"?s[n]=o:typeof o=="number"&&Number.isFinite(o)?s[n]=Math.round(o):o==null?s[n]=null:s[n]=o}return s}function Ua(a,s){return JSON.stringify(va(a))===JSON.stringify(va(s))}function zt(a){const s=c._ddosPresetsCache;if(!s||!a)return"custom";for(const n of["relaxed","balanced","strict"])if(s[n]&&Ua(a,s[n]))return n;return"custom"}function St(a){return e(a==="relaxed"?"ddos.presetRelaxed":a==="balanced"?"ddos.presetBalanced":a==="strict"?"ddos.presetStrict":"ddos.presetCustom")}function Wa(a,{unsaved:s=!1}={}){const n=St(a),o=a==="relaxed"?"relaxed":a==="balanced"?"balanced":a==="strict"?"strict":"custom",i=s?I("ddos.presetFormLabel",{name:n}):I("ddos.presetActiveLabel",{name:n});return`<span class="ddos-preset-badge is-${o}" id="ddos-preset-badge" title="${t(i)}">${t(i)}</span>`}function qe(){if(!document.getElementById("ddos-policy-panel"))return;let a;try{a=Qt()}catch{return}const s=zt(a),n=zt(c._ddosPolicyCache||a),o=!Ua(a,c._ddosPolicyCache||a);document.querySelectorAll("[data-ddos-preset]").forEach(u=>{const m=u.dataset.ddosPreset,p=m===s,l=m===n;u.classList.toggle("is-active",p),u.classList.toggle("is-saved",l&&!p),u.setAttribute("aria-pressed",p?"true":"false");const b=e(m==="relaxed"?"ddos.presetRelaxed":m==="balanced"?"ddos.presetBalanced":"ddos.presetStrict");p&&l?u.innerHTML=`${t(b)} <span class="preset-tag">${t(e("ddos.presetTagActive"))}</span>`:p&&o?u.innerHTML=`${t(b)} <span class="preset-tag preset-tag--draft">${t(e("ddos.presetTagDraft"))}</span>`:l?u.innerHTML=`${t(b)} <span class="preset-tag preset-tag--saved">${t(e("ddos.presetTagSaved"))}</span>`:u.textContent=b});const i=document.getElementById("ddos-preset-badge");if(i){const u=Wa(s,{unsaved:o&&s!==n});i.outerHTML=u}const r=document.getElementById("ddos-preset-custom");r&&(r.classList.toggle("is-active",s==="custom"),r.setAttribute("aria-pressed",s==="custom"?"true":"false"));const d=document.getElementById("ddos-preset-hint");d&&(o&&s!==n?(d.textContent=I("ddos.presetUnsavedHint",{form:St(s),saved:St(n)}),d.hidden=!1):s==="custom"?(d.textContent=e("ddos.presetCustomHint"),d.hidden=!1):(d.textContent=I("ddos.presetActiveHint",{name:St(s)}),d.hidden=!1))}function Ft(a){if(!a||!document.getElementById("dp-autoBanEnabled"))return;const s=(o,i)=>{const r=document.getElementById(o);r&&(r.type==="checkbox"?r.checked=!!i:r.value=i)},n=document.getElementById("dp-autoBanEnabled");n&&(n.type==="checkbox"?n.checked=!!a.autoBanEnabled:n.value=a.autoBanEnabled?"1":"0"),We("ddos-master-autoban",!!a.autoBanEnabled,e("ddos.masterOn"),e("ddos.masterOff")),Qe("ddos-root",!a.autoBanEnabled),Ge("ddos-disabled-banner",!a.autoBanEnabled),s("dp-rateWindowSec",ye(a.rateLimitWindowMs)),s("dp-rateMaxKey",a.rateLimitMax),s("dp-rateMaxIp",a.rateLimitIpMax),s("dp-burstWindowSec",ye(a.chatBurstWindowMs)),s("dp-burstMax",a.chatBurstMax),s("dp-autoAuthEnabled",a.autoAuthEnabled),s("dp-authThreshold",a.failedAuthThreshold),s("dp-authWindowSec",ye(a.failedAuthWindowMs)),s("dp-authBanMin",he(a.authBanDurationMs)),s("dp-autoRateEnabled",a.autoRateEnabled),s("dp-rateHitThreshold",a.rateHitThreshold),s("dp-rateHitWindowSec",ye(a.rateHitWindowMs)),s("dp-rateBanMin",he(a.rateBanDurationMs)),s("dp-autoConnEnabled",a.autoConnEnabled),s("dp-maxConcurrent",a.maxConcurrentPerIp),s("dp-connBanMin",he(a.connBanDurationMs)),s("dp-autoVelocityEnabled",a.autoVelocityEnabled),s("dp-velocityMax",a.velocityMaxRequests),s("dp-velocityWindowSec",ye(a.velocityWindowMs)),s("dp-velocityBanMin",he(a.velocityBanDurationMs)),s("dp-escalateEnabled",a.escalateEnabled),s("dp-escalateAfter",a.escalateAfterBans),s("dp-escalateMin",he(a.escalateDurationMs)),s("dp-whitelist",(a.whitelist||[]).join(`
`)),s("dp-proxyTrustHops",a.proxyTrustHops??1),s("dp-proxyIpSource",a.proxyIpSource||"auto"),s("dp-trustedProxies",(a.trustedProxies&&a.trustedProxies.length?a.trustedProxies:["127.0.0.1","::1"]).join(`
`)),ca(a.autoBanEnabled),qe()}function ca(a){const s=document.getElementById("ddos-auto-badge");s&&(s.className=`badge ${a?"success":"pending"}`,s.textContent=e(a?"ddos.autoOn":"ddos.autoOff"))}function Bs(a){const s=(r,d)=>`<label class="data-filter-check policy-enable"><input type="checkbox" id="${r}" ${d?"checked":""} /> <span>${t(e("ddos.enableRule"))}</span></label>`,n=(r,d,u,m="1")=>`<label>${t(r)}<input type="number" id="${d}" value="${t(String(u))}" min="1" step="${m}" /></label>`,o=zt(a),i=Wa(o);return`
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
            ${n(e("ddos.rateWindow"),"dp-rateWindowSec",ye(a.rateLimitWindowMs))}
            ${n(e("ddos.rateMaxKey"),"dp-rateMaxKey",a.rateLimitMax)}
            ${n(e("ddos.rateMaxIp"),"dp-rateMaxIp",a.rateLimitIpMax)}
            ${n(e("ddos.burstWindow"),"dp-burstWindowSec",ye(a.chatBurstWindowMs))}
            ${n(e("ddos.burstMax"),"dp-burstMax",a.chatBurstMax)}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionAuth"))}</h4>${s("dp-autoAuthEnabled",a.autoAuthEnabled)}</div>
          <div class="form-grid">
            ${n(e("ddos.threshold"),"dp-authThreshold",a.failedAuthThreshold)}
            ${n(e("ddos.windowSec"),"dp-authWindowSec",ye(a.failedAuthWindowMs))}
            ${n(e("ddos.banMin"),"dp-authBanMin",he(a.authBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionRate"))}</h4>${s("dp-autoRateEnabled",a.autoRateEnabled)}</div>
          <div class="form-grid">
            ${n(e("ddos.threshold"),"dp-rateHitThreshold",a.rateHitThreshold)}
            ${n(e("ddos.windowSec"),"dp-rateHitWindowSec",ye(a.rateHitWindowMs))}
            ${n(e("ddos.banMin"),"dp-rateBanMin",he(a.rateBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionConn"))}</h4>${s("dp-autoConnEnabled",a.autoConnEnabled)}</div>
          <div class="form-grid">
            ${n(e("ddos.maxConcurrent"),"dp-maxConcurrent",a.maxConcurrentPerIp)}
            ${n(e("ddos.banMin"),"dp-connBanMin",he(a.connBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionVelocity"))}</h4>${s("dp-autoVelocityEnabled",a.autoVelocityEnabled)}</div>
          <div class="form-grid">
            ${n(e("ddos.velocityMax"),"dp-velocityMax",a.velocityMaxRequests)}
            ${n(e("ddos.windowSec"),"dp-velocityWindowSec",ye(a.velocityWindowMs))}
            ${n(e("ddos.banMin"),"dp-velocityBanMin",he(a.velocityBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionEscalate"))}</h4>${s("dp-escalateEnabled",a.escalateEnabled)}</div>
          <div class="form-grid">
            ${n(e("ddos.escalateAfter"),"dp-escalateAfter",a.escalateAfterBans)}
            ${n(e("ddos.escalateMin"),"dp-escalateMin",he(a.escalateDurationMs))}
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
    </div>`}function Cs(a){return a?.length?a.map(s=>`
    <tr>
      <td>${Z(s.at)}</td>
      <td class="cell-primary">${t(s.ip)}</td>
      <td><span class="badge ${s.escalated?"warn":"pending"}">${t(Gt(s.source))}</span></td>
      <td class="muted" style="max-width:280px;word-break:break-word">${t(s.reason||"")}</td>
      <td>${t(he(s.durationMs))} min</td>
    </tr>`).join(""):`<tr class="empty-row"><td colspan="5"><div class="data-empty"><strong>${t(e("ddos.emptyEvents"))}</strong></div></td></tr>`}async function Y(a={}){const s=!!a.soft&&document.getElementById("ddos-root"),n=document.querySelector(".main"),o=n?n.scrollTop:0;_e&&(clearInterval(_e),_e=null);const i=[P("/ddos/connections"),P("/ddos/blacklist"),P("/ddos/stats"),P("/ddos/events")];s||i.push(P("/ddos/policy"));const r=await Promise.all(i),[d,u,m,p]=r,l=s?null:r[4],b=c.ddosFilter,h=b.pageSize;let f=d.data?.active||[],v=d.data?.recent||[],y=u.data||[];const w=m.data||{},C=p.data||[],A=l?.data||c._ddosPolicyCache||null,T=l?.presets||c._ddosPresetsCache||null;A&&(c._ddosPolicyCache=A),T&&(c._ddosPresetsCache=T);const M=(c._ddosPolicyCache?.whitelist||[]).map(String);if(b.liveQ.trim()){const L=b.liveQ.trim().toLowerCase(),O=F=>[F.ip,F.path,F.method,F.apiKeyName,F.apiKeyPrefix].filter(Boolean).some(S=>String(S).toLowerCase().includes(L));f=f.filter(O),v=v.filter(O)}if(b.banQ.trim()){const L=b.banQ.trim().toLowerCase();y=y.filter(O=>String(O.ip||"").toLowerCase().includes(L)||String(O.reason||"").toLowerCase().includes(L))}b.banSource&&(y=y.filter(L=>L.source===b.banSource));const H=f.slice(b.livePage*h,b.livePage*h+h),G=y.slice(b.banPage*h,b.banPage*h+h),J=H.map(L=>`
    <tr>
      <td class="cell-primary">${t(L.ip)}</td>
      <td>${t(L.method)}</td>
      <td class="muted" style="max-width:220px;word-break:break-all">${t(L.path)}</td>
      <td>${t(L.apiKeyName||L.apiKeyPrefix||"—")}</td>
      <td><span class="badge pending">${t(e("status.active"))}</span></td>
      <td>${It(Date.now()-L.startedAt)}</td>
      <td><div class="row-actions"><button class="btn danger sm" data-ban="${t(L.ip)}">${t(e("ddos.ban"))}</button></div></td>
    </tr>`).join(""),g=v.slice(0,40).map(L=>`
    <tr>
      <td class="cell-primary">${t(L.ip)}</td>
      <td>${t(L.method)} ${t(L.path)}</td>
      <td>${L.statusCode??"—"}</td>
      <td>${It(L.durationMs)}</td>
      <td><div class="row-actions"><button class="btn danger sm" data-ban="${t(L.ip)}">${t(e("ddos.ban"))}</button></div></td>
    </tr>`).join(""),k=G.map(L=>`
    <tr>
      <td class="cell-primary">${t(L.ip)}</td>
      <td>${t(L.reason||"—")}</td>
      <td><span class="badge pending">${t(Gt(L.source))}</span></td>
      <td>${L.expiresAt?Z(L.expiresAt):t(e("ddos.permanent"))}</td>
      <td><div class="row-actions"><button class="btn secondary sm" data-unban="${t(L.ip)}">${t(e("ddos.unban"))}</button></div></td>
    </tr>`).join(""),x=(w.topIps||[]).map(L=>`<tr><td class="cell-primary">${t(L.ip)}</td><td>${L.requests}</td>
      <td><div class="row-actions"><button class="btn danger sm" data-ban="${t(L.ip)}">${t(e("ddos.ban"))}</button></div></td></tr>`).join(""),N=Cs(C),K=`<tr class="empty-row"><td colspan="7"><div class="data-empty"><strong>${t(e("ddos.emptyLive"))}</strong></div></td></tr>`,E=`<tr class="empty-row"><td colspan="5"><div class="data-empty"><strong>${t(e("common.empty"))}</strong></div></td></tr>`,_=`<tr class="empty-row"><td colspan="5"><div class="data-empty"><strong>${t(e("ddos.emptyBan"))}</strong></div></td></tr>`,j=`<tr class="empty-row"><td colspan="3"><div class="data-empty"><strong>${t(e("common.empty"))}</strong></div></td></tr>`,me=["","manual","auto-auth","auto-rate","auto-conn","auto-velocity","auto-escalate"].map(L=>L?`<option value="${L}" ${b.banSource===L?"selected":""}>${t(Gt(L))}</option>`:`<option value="">${t(e("common.all"))}</option>`).join("");if(s){const L=(F,S)=>{const D=document.getElementById(F);D&&(D.innerHTML=S)},O=(F,S)=>{const D=document.getElementById(F);D&&(D.textContent=S)};O("ddos-stat-active",String(w.activeConnections??f.length)),O("ddos-stat-rate",String(w.rateLimitedHits??0)),O("ddos-stat-blocked",String(w.blockedHits??0)),O("ddos-stat-ban",String(y.length)),O("ddos-stat-auto",String(w.autoBanTotal??0)),O("ddos-tab-count-live",String(f.length)),O("ddos-tab-count-ban",String(y.length)),O("ddos-tab-count-events",String(C.length)),L("ddos-live-body",J||K),L("ddos-recent-body",g||E),L("ddos-ban-body",k||_),L("ddos-top-body",x||j),L("ddos-events-body",N),w.policySummary&&ca(!!w.policySummary.autoBanEnabled),$a(),n&&(n.scrollTop=o)}else{const L=A||{autoBanEnabled:!0,rateLimitWindowMs:6e4,rateLimitMax:120,rateLimitIpMax:60,chatBurstWindowMs:1e4,chatBurstMax:20,autoAuthEnabled:!0,failedAuthThreshold:20,failedAuthWindowMs:3e5,authBanDurationMs:6e5,autoRateEnabled:!0,rateHitThreshold:30,rateHitWindowMs:6e4,rateBanDurationMs:9e5,autoConnEnabled:!0,maxConcurrentPerIp:20,connBanDurationMs:6e5,autoVelocityEnabled:!0,velocityMaxRequests:200,velocityWindowMs:6e4,velocityBanDurationMs:6e5,escalateEnabled:!0,escalateAfterBans:3,escalateDurationMs:864e5,whitelist:["127.0.0.1","::1"],proxyTrustHops:1,proxyIpSource:"auto",trustedProxies:["127.0.0.1","::1"]},O=!!L.autoBanEnabled,F=b.tab==="live"||b.tab==="blacklist"||b.tab==="events"||b.tab==="policy"?b.tab:"policy";c.ddosFilter.tab=F;const S=`
    <div class="grid ddos-kpi-grid">
      <div class="card"><div class="label">${t(e("ddos.activeConn"))}</div><div class="value value-sm" id="ddos-stat-active">${w.activeConnections??f.length}</div><div class="muted card-sub">${t(e("ddos.live"))}</div></div>
      <div class="card"><div class="label">${t(e("ddos.rateHits"))}</div><div class="value value-sm" id="ddos-stat-rate">${w.rateLimitedHits??0}</div><div class="muted card-sub">${t(e("ddos.stats"))}</div></div>
      <div class="card"><div class="label">${t(e("ddos.blockedHits"))}</div><div class="value value-sm" id="ddos-stat-blocked">${w.blockedHits??0}</div><div class="muted card-sub">${t(e("ddos.stats"))}</div></div>
      <div class="card"><div class="label">${t(e("ddos.blacklist"))}</div><div class="value value-sm" id="ddos-stat-ban">${y.length}</div><div class="muted card-sub">${t(e("ddos.tabBlacklist"))}</div></div>
      <div class="card"><div class="label">${t(e("ddos.autoBans"))}</div><div class="value value-sm" id="ddos-stat-auto">${w.autoBanTotal??0}</div><div class="muted card-sub">${t(e("ddos.tabEvents"))}</div></div>
    </div>`,D=Bs(L),ae=`
    <div class="panel data-filter-panel ddos-filter-panel">
      <div class="panel-h"><strong>${t(e("common.filterTitle"))}</strong></div>
      <div class="data-filter">
        <div class="data-filter-grid">
          <label class="full">${t(e("ddos.live"))} / ${t(e("ddos.recent"))}
            <input type="search" id="ddos-live-q" value="${t(b.liveQ)}" placeholder="IP / path / key" />
          </label>
        </div>
        <div class="data-filter-actions">
          <button type="button" class="btn secondary sm" id="ddos-live-filter-reset">${t(e("common.reset"))}</button>
          <button type="button" class="btn sm" id="ddos-live-filter-apply">${t(e("common.apply"))}</button>
        </div>
      </div>
    </div>
    <div class="panel data-table-panel ddos-stack-panel">
      <div class="panel-h"><strong>${t(e("ddos.live"))}</strong>
        <span class="muted">${t(I("common.pagerTotal",{n:f.length}))}</span>
      </div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>${t(e("ddos.ip"))}</th><th>${t(e("ddos.method"))}</th>
          <th>${t(e("ddos.path"))}</th><th>${t(e("ddos.key"))}</th>
          <th>${t(e("ddos.state"))}</th><th>${t(e("ddos.duration"))}</th>
          <th>${t(e("common.actions"))}</th>
        </tr></thead>
        <tbody id="ddos-live-body">${J||K}</tbody>
      </table>
      </div>
      ${ke({total:f.length,limit:h,offset:b.livePage*h,idPrefix:"ddoslive"})}
    </div>
    <div class="panel data-table-panel ddos-stack-panel">
      <div class="panel-h"><strong>${t(e("ddos.recent"))}</strong></div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>${t(e("ddos.ip"))}</th><th>${t(e("ddos.path"))}</th>
          <th>${t(e("common.httpStatus"))}</th><th>${t(e("ddos.duration"))}</th><th>${t(e("common.actions"))}</th>
        </tr></thead>
        <tbody id="ddos-recent-body">${g||E}</tbody>
      </table>
      </div>
    </div>`,Me=`
    <div class="panel data-filter-panel ddos-filter-panel">
      <div class="panel-h"><strong>${t(e("common.filterTitle"))}</strong></div>
      <div class="data-filter">
        <div class="data-filter-grid">
          <label>${t(e("ddos.blacklist"))}
            <input type="search" id="ddos-ban-q" value="${t(b.banQ)}" placeholder="IP / reason" />
          </label>
          <label>${t(e("ddos.source"))}
            <select id="ddos-ban-source">${me}</select>
          </label>
        </div>
        <div class="data-filter-actions">
          <button type="button" class="btn secondary sm" id="ddos-ban-filter-reset">${t(e("common.reset"))}</button>
          <button type="button" class="btn sm" id="ddos-ban-filter-apply">${t(e("common.apply"))}</button>
        </div>
      </div>
    </div>
    <div class="panel data-table-panel ddos-stack-panel">
      <div class="panel-h"><strong>${t(e("ddos.blacklist"))}</strong>
        <span class="muted">${t(I("common.pagerTotal",{n:y.length}))}</span>
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
        <tbody id="ddos-ban-body">${k||_}</tbody>
      </table>
      </div>
      ${ke({total:y.length,limit:h,offset:b.banPage*h,idPrefix:"ddosban"})}
    </div>`,Fe=`
    <div class="panel data-table-panel ddos-stack-panel">
      <div class="panel-h"><strong>${t(e("ddos.eventsTitle"))}</strong>
        <span class="muted">${t(I("common.pagerTotal",{n:C.length}))}</span>
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
        <tbody id="ddos-events-body">${N}</tbody>
      </table>
      </div>
    </div>
    <div class="panel data-table-panel ddos-stack-panel">
      <div class="panel-h"><strong>${t(e("ddos.topIps"))}</strong></div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr><th>${t(e("ddos.ip"))}</th><th>${t(e("usage.requests"))}</th><th>${t(e("common.actions"))}</th></tr></thead>
        <tbody id="ddos-top-body">${x||j}</tbody>
      </table>
      </div>
    </div>`;document.getElementById("app").innerHTML=ne(`
    <div id="ddos-root" class="${O?"":"is-feature-off"}">
    <div class="topbar">
      <h2>${t(e("ddos.title"))}</h2>
      <div class="toolbar">
        ${la({id:"ddos-master-autoban",on:O,onLabel:e("ddos.masterOn"),offLabel:e("ddos.masterOff"),title:e("ddos.autoBanMasterHint")})}
        <button class="btn secondary sm" id="ddos-refresh">${t(e("ddos.refresh"))}</button>
        <button class="btn secondary sm" id="ddos-pause">${t(e(Re?"ddos.resume":"ddos.pause"))}</button>
      </div>
    </div>
    ${we([e("ddos.policyHint")])}
    <div class="feature-off-banner" id="ddos-disabled-banner" ${O?"hidden":""} role="status">
      <strong>${t(e("common.featureOff"))}</strong>
      <span>${t(e("ddos.disabledBanner"))}</span>
    </div>
    ${S}

    <div class="usage-tabs-panel panel ddos-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("ddos.title"))}">
        <button type="button" role="tab" class="seg-tab ${F==="policy"?"is-active":""}" data-ddos-tab="policy" aria-selected="${F==="policy"}">
          ${t(e("ddos.tabPolicy"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${F==="live"?"is-active":""}" data-ddos-tab="live" aria-selected="${F==="live"}">
          ${t(e("ddos.tabLive"))}
          <span class="seg-tab-count" id="ddos-tab-count-live">${f.length}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${F==="blacklist"?"is-active":""}" data-ddos-tab="blacklist" aria-selected="${F==="blacklist"}">
          ${t(e("ddos.tabBlacklist"))}
          <span class="seg-tab-count" id="ddos-tab-count-ban">${y.length}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${F==="events"?"is-active":""}" data-ddos-tab="events" aria-selected="${F==="events"}">
          ${t(e("ddos.tabEvents"))}
          <span class="seg-tab-count" id="ddos-tab-count-events">${C.length}</span>
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane ddos-tab-pane ddos-tab-pane-policy" id="ddos-tab-policy" ${F==="policy"?"":"hidden"}>
          ${D}
        </div>
        <div class="usage-tab-pane ddos-tab-pane ddos-tab-pane-stack" id="ddos-tab-live" ${F==="live"?"":"hidden"}>
          ${ae}
        </div>
        <div class="usage-tab-pane ddos-tab-pane ddos-tab-pane-stack" id="ddos-tab-blacklist" ${F==="blacklist"?"":"hidden"}>
          ${Me}
        </div>
        <div class="usage-tab-pane ddos-tab-pane ddos-tab-pane-stack" id="ddos-tab-events" ${F==="events"?"":"hidden"}>
          ${Fe}
        </div>
      </div>
    </div>
    </div>
  `),oe(),$a(!0,M),document.querySelectorAll("[data-ddos-tab]").forEach(ee=>{ee.addEventListener("click",()=>{const fe=ee.getAttribute("data-ddos-tab")||"policy",de=fe==="live"||fe==="blacklist"||fe==="events"||fe==="policy"?fe:"policy";c.ddosFilter.tab!==de&&(c.ddosFilter.tab=de,Y().catch($))})}),document.getElementById("ddos-live-filter-apply")?.addEventListener("click",()=>{c.ddosFilter.liveQ=document.getElementById("ddos-live-q")?.value?.trim()||"",c.ddosFilter.livePage=0,Y().catch($)}),document.getElementById("ddos-live-filter-reset")?.addEventListener("click",()=>{c.ddosFilter.liveQ="",c.ddosFilter.livePage=0,Y().catch($)}),document.getElementById("ddos-ban-filter-apply")?.addEventListener("click",()=>{c.ddosFilter.banQ=document.getElementById("ddos-ban-q")?.value?.trim()||"",c.ddosFilter.banSource=document.getElementById("ddos-ban-source")?.value||"",c.ddosFilter.banPage=0,Y().catch($)}),document.getElementById("ddos-ban-filter-reset")?.addEventListener("click",()=>{c.ddosFilter.banQ="",c.ddosFilter.banSource="",c.ddosFilter.banPage=0,Y().catch($)}),document.getElementById("ddoslive-prev")?.addEventListener("click",()=>{c.ddosFilter.livePage=Math.max(0,b.livePage-1),Y().catch($)}),document.getElementById("ddoslive-next")?.addEventListener("click",()=>{(b.livePage+1)*h<f.length&&(c.ddosFilter.livePage+=1,Y().catch($))}),document.getElementById("ddosban-prev")?.addEventListener("click",()=>{c.ddosFilter.banPage=Math.max(0,b.banPage-1),Y().catch($)}),document.getElementById("ddosban-next")?.addEventListener("click",()=>{(b.banPage+1)*h<y.length&&(c.ddosFilter.banPage+=1,Y().catch($))});const pe=document.querySelector(".main");pe&&(pe.onscroll=()=>{c._ddosScrollPauseUntil=Date.now()+4e3})}!Re&&c.page==="ddos"&&(_e=setInterval(()=>{c.page!=="ddos"||Re||c._ddosScrollPauseUntil&&Date.now()<c._ddosScrollPauseUntil||Y({soft:!0}).catch(()=>{})},2e3))}function $a(a=!1,s=[]){const n=s.length?s:c._ddosPolicyCache?.whitelist||[],o=async i=>{if(!i)return;const r=n.some(d=>String(d)===i||String(d).startsWith(i));await V({message:e(r?"ddos.banWhitelistWarn":"ddos.banConfirm"),variant:"danger",confirmText:e("ddos.ban")})&&(await P("/ddos/blacklist",{method:"POST",body:JSON.stringify({ip:i,reason:e("ddos.banReasonDefault"),ttlSeconds:null})}),Y({soft:!0}).catch($))};if(document.querySelectorAll("[data-ban]").forEach(i=>{i.onclick=()=>o(i.dataset.ban)}),document.querySelectorAll("[data-unban]").forEach(i=>{i.onclick=async()=>{await V({message:e("ddos.unbanConfirm"),variant:"danger",confirmText:e("ddos.unban")})&&(await P(`/ddos/blacklist/${encodeURIComponent(i.dataset.unban)}`,{method:"DELETE"}),Y({soft:!0}).catch($))}}),a){document.getElementById("ban-add").onclick=async()=>{const r=document.getElementById("ban-ip").value.trim();if(!r||n.some(m=>String(m)===r)&&!await V({message:e("ddos.banWhitelistWarn"),variant:"danger",confirmText:e("ddos.ban")}))return;const u=document.getElementById("ban-ttl").value;await P("/ddos/blacklist",{method:"POST",body:JSON.stringify({ip:r,reason:document.getElementById("ban-reason").value.trim()||void 0,ttlSeconds:u?Number(u):null})}),Y({soft:!0}).catch($)},document.getElementById("ddos-refresh").onclick=()=>Y({soft:!1}).catch($),document.getElementById("ddos-pause").onclick=()=>{Re=!Re;const r=document.getElementById("ddos-pause");r&&(r.textContent=e(Re?"ddos.resume":"ddos.pause")),Re||Y({soft:!0}).catch($)},document.getElementById("ddos-master-autoban")?.addEventListener("click",async()=>{const r=!Ue("ddos-master-autoban");We("ddos-master-autoban",r,e("ddos.masterOn"),e("ddos.masterOff"));const d=document.getElementById("dp-autoBanEnabled");d&&(d.type==="checkbox"?d.checked=r:d.value=r?"1":"0"),ca(r),Qe("ddos-root",!r),Ge("ddos-disabled-banner",!r),qe();try{const u=Qt(),m=await P("/ddos/policy",{method:"PUT",body:JSON.stringify(u)});c._ddosPolicyCache=m.data,qe()}catch(u){We("ddos-master-autoban",!r,e("ddos.masterOn"),e("ddos.masterOff")),Qe("ddos-root",r),Ge("ddos-disabled-banner",r),$(u)}});const i=document.getElementById("ddos-policy-panel");i?.addEventListener("input",()=>qe()),i?.addEventListener("change",()=>qe()),document.querySelectorAll("[data-ddos-preset]").forEach(r=>{r.onclick=()=>{const d=r.dataset.ddosPreset;if(d==="custom")return;const u=c._ddosPresetsCache?.[d];u&&Ft(u)}}),qe(),document.getElementById("dp-save")?.addEventListener("click",async()=>{try{const r=Qt(),d=await P("/ddos/policy",{method:"PUT",body:JSON.stringify(r)});c._ddosPolicyCache=d.data,Ft(d.data),qe(),await le({title:e("ddos.policyTitle"),message:e("ddos.policySaved")}),Y({soft:!0}).catch($)}catch(r){$(r)}}),document.getElementById("dp-reset")?.addEventListener("click",async()=>{if(await V({message:e("ddos.confirmReset"),variant:"danger",confirmText:e("ddos.resetPolicy")}))try{const r=await P("/ddos/policy/reset",{method:"POST"});c._ddosPolicyCache=r.data,Ft(r.data),qe(),await le({title:e("ddos.policyTitle"),message:e("ddos.policyReset")}),Y({soft:!0}).catch($)}catch(r){$(r)}})}}function gt(a){return e(a==="pm2"?"pm2.runnerPm2":a==="gctoac"?"pm2.runnerGctoac":a==="none"?"pm2.runnerNone":"pm2.runnerUnknown")}function Jt(a){if(!a)return"";const s=a.messageKey;if(s&&typeof s=="string"){if(s==="pm2.msgOk")return"";const o=a.messageParams||{},i=I(s,o);if(i&&i!==s)return i}const n=a.message||"";return!n||n==="ok"?"":n}function ka(a=10){const s=Math.max(1,Number(a)||10)*1e3;window.setTimeout(()=>{try{window.location.reload()}catch{window.location.href=window.location.href}},s)}function Ls(a,s){const n=s?.messageKey||(a==="pm2"?"pm2.msgSwitchPm2":"pm2.msgSwitchGctoac");let o=Jt({messageKey:n,messageParams:s?.messageParams,message:void 0});o||(o=e(a==="pm2"?"pm2.msgSwitchPm2":"pm2.msgSwitchGctoac"));const i=s?.port||s?.messageParams?.port||(typeof location<"u"&&location.port?location.port:"3847");return[o,I("pm2.portAfterRestart",{port:i}),I("pm2.autoRefreshIn",{n:10})].filter(Boolean).join(`
`)}function _t(a){return a==="pm2"?`<span class="badge success">${t(gt(a))}</span>`:a==="gctoac"?`<span class="badge agent">${t(gt(a))}</span>`:a==="none"?`<span class="badge pending">${t(gt(a))}</span>`:`<span class="badge warn">${t(gt(a))}</span>`}function Hs(a){return!a||typeof a!="object"?"":Object.entries(a).map(([s,n])=>`${s}=${n}`).join(`
`)}function Ds(a){const s={};for(const n of(a||"").split(`
`)){const o=n.trim();if(!o||o.startsWith("#"))continue;const i=o.indexOf("=");i<=0||(s[o.slice(0,i).trim()]=o.slice(i+1).trim())}return s}function Os(){const a=r=>document.getElementById(r)?.checked===!0,s=r=>document.getElementById(r)?.value??"";let n=s("pm2-cfg-instances").trim();if(n!=="max"){const r=Number(n);n=Number.isFinite(r)&&r>=1?r:1}const o=s("pm2-cfg-port").trim(),i=Number(o);return{port:Number.isFinite(i)&&i>=1&&i<=65535?i:void 0,name:s("pm2-cfg-name").trim()||"grok-openai-gateway",script:s("pm2-cfg-script").trim()||"dist/server.js",cwd:s("pm2-cfg-cwd").trim()||void 0,instances:n,exec_mode:s("pm2-cfg-exec")==="cluster"?"cluster":"fork",autorestart:a("pm2-cfg-autorestart"),watch:a("pm2-cfg-watch"),max_memory_restart:s("pm2-cfg-maxmem").trim()||"512M",max_restarts:Number(s("pm2-cfg-maxrestarts"))||10,min_uptime:s("pm2-cfg-minuptime").trim()||"5s",restart_delay:Number(s("pm2-cfg-restartdelay"))||2e3,exp_backoff_restart_delay:Number(s("pm2-cfg-backoff"))||1e3,merge_logs:a("pm2-cfg-mergelogs"),time:a("pm2-cfg-time"),error_file:s("pm2-cfg-errfile").trim()||"logs/pm2-error.log",out_file:s("pm2-cfg-outfile").trim()||"logs/pm2-out.log",env_extra:Ds(s("pm2-cfg-envextra")),preferred_runner:s("pm2-cfg-preferred")==="pm2"?"pm2":"gctoac"}}async function Ee(){const s=(await P("/pm2/status")).data||{},n=s.app,o=s.config||{},i=s.portHolders||{},r=i.pids&&i.pids.length>0||!1,d=Jt(s);let u="",m=null;try{const E=await P("/pm2/logs?lines=80");u=(E.data?.stdout||"")+(E.data?.stderr?`
`+E.data.stderr:""),m=E.data||null}catch(E){u=E.message||""}s.lastError&&(u=`===== last errors =====
${s.lastError}

${u}`);const p=m?.files||[],l=p.length?p.filter(E=>E.exists).map(E=>`${E.label}: ${E.size<1024?E.size+" B":Math.round(E.size/1024)+" KB"}`).join(" · "):"",b=m?.maxBytes?Math.round(m.maxBytes/(1024*1024)):5,h=m?.keepBytes?Math.round(m.keepBytes/1024):512,f=n?.status||"—",v=f==="online"?e("pm2.statusOnline"):f==="errored"?e("pm2.statusErrored"):f==="stopped"?e("pm2.statusStopped"):f,y=f==="online"?`<span class="badge success">${t(v)}</span>`:f==="errored"?`<span class="badge error">${t(v)}</span>`:t(v),w=s.available,C=s.available&&n,A=s.runner||"unknown",T=d&&f!=="errored"&&s.available!==!1&&s.messageKey!=="pm2.msgErrored",M=Hs(o.env_extra),H=c.pm2Tab==="port"||c.pm2Tab==="config"||c.pm2Tab==="logs"||c.pm2Tab==="runner"?c.pm2Tab:"runner";c.pm2Tab=H;const G=`
    <div class="grid pm2-kpi-grid" id="pm2-kpi-grid">
      <div class="card">
        <div class="label">${t(e("pm2.app"))}</div>
        <div class="value value-sm">${t(s.appName||o.name||"grok-openai-gateway")}</div>
        <div class="muted card-sub">${_t(A)}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("pm2.status"))}</div>
        <div class="value value-sm">${y}</div>
        <div class="muted card-sub">${t(e("pm2.pid"))}: ${n?.pid&&n.pid!==0?n.pid:"—"}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("pm2.restarts"))}</div>
        <div class="value value-sm">${n?.restarts??"—"}</div>
        <div class="muted card-sub">CPU ${n?.cpu!=null?n.cpu+"%":"—"} · ${n?.memory!=null?I("common.mb",{n:Math.round(n.memory/1024/1024)}):"—"}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("pm2.port"))}</div>
        <div class="value value-sm">${s.port??"—"}</div>
        <div class="muted card-sub">${t(e("pm2.portBusy"))}: ${e(r?"common.yes":"common.no")}</div>
      </div>
    </div>`,J=`
    <div class="panel data-table-panel pm2-section-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("pm2.switchTitle"))}</strong>
          <span class="muted panel-h-sub">${t(e("pm2.switchHint"))}</span>
        </div>
        ${_t(A)}
      </div>
      <div class="panel-pad">
        <div class="grid">
          <div class="card"><div class="label">${t(e("pm2.currentRunner"))}</div><div class="value value-sm">${_t(A)}</div></div>
          <div class="card"><div class="label">${t(e("pm2.gctoacPid"))}</div><div class="value value-sm">${s.gctoac?.running&&s.gctoac?.pid?s.gctoac.pid:"—"}</div></div>
          <div class="card"><div class="label">${t(e("pm2.port"))}</div><div class="value value-sm">${s.port??"—"}</div></div>
          <div class="card"><div class="label">${t(e("pm2.portBusy"))}</div><div class="value value-sm">${e(r?"common.yes":"common.no")}</div></div>
        </div>
        <div class="toolbar settings-save-bar">
          <button class="btn sm" id="pm2-switch-pm2" ${w?"":"disabled"}>${t(e("pm2.switchToPm2"))}</button>
          <button class="btn secondary sm" id="pm2-switch-gctoac">${t(e("pm2.switchToGctoac"))}</button>
        </div>
      </div>
    </div>`,g=`
    <div class="panel data-table-panel pm2-section-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("pm2.portTitle"))}</strong>
          <span class="muted panel-h-sub">${t(e("pm2.portHint"))}</span>
        </div>
      </div>
      <div class="panel-pad">
        <div class="form-grid">
          <label class="full">${t(e("pm2.fieldPort"))}
            <input type="number" id="pm2-cfg-port" min="1" max="65535" step="1" value="${t(String(s.port??3847))}" placeholder="3847" />
            <span class="hint">${t(e("pm2.portDefaultNote"))}</span>
          </label>
        </div>
        <div class="toolbar settings-save-bar">
          <button type="button" class="btn sm" id="pm2-port-save">${t(e("pm2.savePort"))}</button>
          <button type="button" class="btn secondary sm" id="pm2-port-default">${t(e("pm2.useDefaultPort"))}</button>
        </div>
      </div>
    </div>`,k=`
    <div class="panel data-table-panel pm2-section-panel" id="pm2-config-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("pm2.configTitle"))}</strong>
          <span class="muted panel-h-sub">${t(e("pm2.configHint"))}</span>
        </div>
      </div>
      <div class="panel-pad">
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
          <label class="full">${t(e("pm2.fieldEnvExtra"))}<textarea id="pm2-cfg-envextra" rows="4" placeholder="${t(e("pm2.phEnv"))}">${t(M)}</textarea></label>
        </div>
        <div class="toolbar settings-save-bar">
          <button class="btn sm" id="pm2-cfg-save">${t(e("pm2.saveConfig"))}</button>
          <button class="btn secondary sm" id="pm2-cfg-save-only">${t(e("pm2.saveOnly"))}</button>
          <button class="btn secondary sm" id="pm2-cfg-reset">${t(e("pm2.resetConfig"))}</button>
        </div>
      </div>
    </div>`,x=`
    <div class="panel data-table-panel pm2-section-panel pm2-logs-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("pm2.logs"))}</strong>
          <span class="muted panel-h-sub">${t(e("pm2.logsHint"))}</span>
        </div>
        <div class="toolbar">
          <button type="button" class="btn secondary sm" id="pm2-logs-refresh">${t(e("pm2.refresh"))}</button>
          <button type="button" class="btn danger sm" id="pm2-logs-clear">${t(e("pm2.clearLogs"))}</button>
        </div>
      </div>
      <div class="panel-pad">
        <p class="muted" style="margin:0 0 8px;font-size:0.82rem">
          ${t(I("pm2.logsAutoTrim",{maxMb:b,keepKb:h}))}
          ${l?` · ${t(l)}`:""}
        </p>
        <pre class="pre pre-logs" id="pm2-logs-pre">${t(u||e("common.empty"))}</pre>
      </div>
    </div>`;document.getElementById("app").innerHTML=ne(`
    <div class="topbar">
      <h2>${t(e("pm2.title"))}</h2>
      <div class="toolbar">
        <button class="btn secondary sm" id="pm2-refresh">${t(e("pm2.refresh"))}</button>
        <button class="btn sm" id="pm2-start" ${w?"":"disabled"}>${t(e("pm2.start"))}</button>
        <button class="btn secondary sm" id="pm2-stop" ${C?"":"disabled"}>${t(e("pm2.stop"))}</button>
        <button class="btn sm" id="pm2-restart" ${w?"":"disabled"}>${t(e("pm2.restart"))}</button>
        <button class="btn secondary sm" id="pm2-reload" ${!C||n?.status!=="online"?"disabled":""}>${t(e("pm2.reload"))}</button>
      </div>
    </div>
    ${we([e("pm2.hint")])}
    ${d?`<div class="error-box${T?" warn-box":""}">${t(d)}</div>`:s.available?"":`<div class="error-box">${t(e("pm2.unavailable"))}</div>`}
    ${G}

    <div class="usage-tabs-panel panel pm2-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("pm2.title"))}">
        <button type="button" role="tab" class="seg-tab ${H==="runner"?"is-active":""}" data-pm2-tab="runner" aria-selected="${H==="runner"}">
          ${t(e("pm2.tabRunner"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${H==="port"?"is-active":""}" data-pm2-tab="port" aria-selected="${H==="port"}">
          ${t(e("pm2.tabPort"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${H==="config"?"is-active":""}" data-pm2-tab="config" aria-selected="${H==="config"}">
          ${t(e("pm2.tabConfig"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${H==="logs"?"is-active":""}" data-pm2-tab="logs" aria-selected="${H==="logs"}">
          ${t(e("pm2.tabLogs"))}
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane pm2-tab-pane" id="pm2-tab-runner" ${H==="runner"?"":"hidden"}>
          ${J}
        </div>
        <div class="usage-tab-pane pm2-tab-pane" id="pm2-tab-port" ${H==="port"?"":"hidden"}>
          ${g}
        </div>
        <div class="usage-tab-pane pm2-tab-pane" id="pm2-tab-config" ${H==="config"?"":"hidden"}>
          ${k}
        </div>
        <div class="usage-tab-pane pm2-tab-pane" id="pm2-tab-logs" ${H==="logs"?"":"hidden"}>
          ${x}
        </div>
      </div>
    </div>
  `),oe(),document.querySelectorAll("[data-pm2-tab]").forEach(E=>{E.addEventListener("click",()=>{const _=E.getAttribute("data-pm2-tab")||"runner",j=_==="port"||_==="config"||_==="logs"||_==="runner"?_:"runner";c.pm2Tab!==j&&(c.pm2Tab=j,Ee().catch($))})}),document.getElementById("pm2-logs-refresh")?.addEventListener("click",()=>{c.pm2Tab="logs",Ee().catch($)}),document.getElementById("pm2-logs-clear")?.addEventListener("click",async()=>{if(await V({message:e("pm2.confirmClearLogs"),variant:"danger",confirmText:e("pm2.clearLogs")}))try{const _=(await P("/pm2/logs/clear",{method:"POST",body:JSON.stringify({which:"all"})})).data?.cleared?.length||0;await le({message:I("pm2.logsCleared",{n:_})}),Ee().catch($)}catch(E){$(E)}});const N=async E=>{if(await V({message:e(E==="pm2"?"pm2.confirmSwitchPm2":"pm2.confirmSwitchGctoac"),variant:"confirm",confirmText:e(E==="pm2"?"pm2.switchToPm2":"pm2.switchToGctoac")}))try{const j=await P("/pm2/switch",{method:"POST",body:JSON.stringify({mode:E})}),me=j?.data||j||{},L=Ls(E==="pm2"?"pm2":"gctoac",me);ka(10),await le({title:e("common.notice"),message:L,confirmText:e("common.ok")});try{window.location.reload()}catch{window.location.href=window.location.href}}catch(j){$(j)}};document.getElementById("pm2-refresh").onclick=()=>Ee().catch($),document.getElementById("pm2-switch-pm2").onclick=()=>N("pm2"),document.getElementById("pm2-switch-gctoac").onclick=()=>N("gctoac"),document.getElementById("pm2-start").onclick=()=>N("pm2"),document.getElementById("pm2-stop").onclick=async()=>{if(await V({message:e("pm2.confirmStop"),variant:"danger",confirmText:e("pm2.stop")}))try{await P("/pm2/stop",{method:"POST",body:"{}"}),Ee().catch($)}catch(E){$(E)}},document.getElementById("pm2-restart").onclick=async()=>{if(await V({message:e("pm2.confirmRestart"),variant:"confirm",confirmText:e("pm2.restart")}))try{await N("pm2")}catch(E){$(E)}},document.getElementById("pm2-reload").onclick=async()=>{try{await P("/pm2/reload",{method:"POST",body:"{}"}),Ee().catch($)}catch(E){$(E)}};const K=async E=>{try{const _={...Os(),restart:E};if(_.port==null){await le({message:e("pm2.portInvalid")});return}const j=await P("/pm2/config",{method:"PUT",body:JSON.stringify(_)});if(j.data?.scheduled){const me=j.data.portChange?`
${I("pm2.portChangedMsg",{from:j.data.portChange.previous,to:j.data.portChange.port})}`:"",L=Jt(j.data.scheduled)||e("pm2.switchScheduled");ka(10),await le({title:e("common.notice"),message:L+me+`
${I("pm2.autoRefreshIn",{n:10})}`});try{window.location.reload()}catch{window.location.href=window.location.href}}else await le(j.data?.portChange?I("pm2.portSavedNeedRestart",{port:j.data.port}):e("pm2.configSaved")),Ee().catch($)}catch(_){$(_)}};document.getElementById("pm2-cfg-save").onclick=()=>K(!0),document.getElementById("pm2-cfg-save-only").onclick=()=>K(!1),document.getElementById("pm2-port-default")?.addEventListener("click",()=>{const E=document.getElementById("pm2-cfg-port");E&&(E.value="3847")}),document.getElementById("pm2-port-save")?.addEventListener("click",async()=>{const E=Number(document.getElementById("pm2-cfg-port")?.value);if(!Number.isFinite(E)||E<1||E>65535){await le({message:e("pm2.portInvalid")});return}if(await V({message:I("pm2.confirmPortChange",{port:E}),variant:"confirm",confirmText:e("pm2.savePort")}))try{const _=await P("/pm2/config",{method:"PUT",body:JSON.stringify({port:E,restart:!0})}),j=_.data?.scheduled?.message||(_.data?.portChange?I("pm2.portChangedMsg",{from:_.data.portChange.previous,to:_.data.portChange.port}):e("pm2.configSaved"));await le(j+`
`+I("pm2.portAfterRestart",{port:E}))}catch(_){$(_)}}),document.getElementById("pm2-cfg-reset").onclick=async()=>{if(await V({message:e("pm2.confirmReset"),variant:"danger",confirmText:e("pm2.resetConfig")}))try{await P("/pm2/config/reset",{method:"POST",body:"{}"}),Ee().catch($)}catch(E){$(E)}}}let X=[],ue=null,te=[],nt=!1,Ae=0;const Te=new Map,U={keyId:"",model:"",reasoning:!0,systemPrompt:"",systemOpen:!1},B={mode:"full",recentN:6,summary:"",summaryAt:null,summarySourceCount:0},Fs=3,Ga=40,_s=20,Rs=2200,q={conversationId:null,historyPage:0,historyLimit:20,historyQ:"",historyTotal:0,historyItems:[],historyLoading:!1,historyOpenMobile:!1,saving:!1,saveQueued:!1,renamingId:null};let Rt=null;const Mt=10,ua=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function Ns(a){const s=String(a||"").split(/[/\\]/).pop()||"",n=s.lastIndexOf(".");return n<0?"":s.slice(n).toLowerCase()}function qt(a){return qa.has(Ns(a))}function Tt(){return e("chat.formatsHint")}function Qa(){B.mode="full",B.recentN=6,B.summary="",B.summaryAt=null,B.summarySourceCount=0,Ae=0,Te.clear()}function Ks(a){const s=(a?.title||"").trim();if(s)return s;const n=(a?.preview||"").trim();return n||e("chat.untitled")}function js(){return X.filter(a=>!a.streaming).map(a=>{const s={role:a.role,content:a.content||""};return a.reasoning&&(s.reasoning=a.reasoning),a.docs&&a.docs.length&&(s.docs=a.docs),a.error&&(s.error=!0),s})}function Us(){return{contextMode:B.mode,contextRecentN:B.recentN,summaryText:B.summary||"",summaryAt:B.summaryAt,summarySourceCount:B.summarySourceCount||0}}function Ws(a){a&&(B.mode=a.contextMode==="summary"||a.contextMode==="recent"?a.contextMode:"full",B.recentN=Math.min(40,Math.max(2,Number(a.contextRecentN)||6)),B.summary=(a.summaryText||"").trim(),B.summaryAt=a.summaryAt||null,B.summarySourceCount=Number(a.summarySourceCount)||0,B.mode==="summary"&&!B.summary&&(B.mode="full"))}function za(a){return a.reduce((s,n)=>s+(n.content||"").length+(n.reasoning||"").length,0)}function Ja(){const a=X.filter(s=>!s.streaming);return a.length<2?!1:a.length>=Fs?!0:za(a)>=800}function Gs(){const a=(U.systemPrompt||"").trim(),s=X.filter(d=>!d.streaming),n=Math.min(40,Math.max(2,Number(B.recentN)||6));let o=s.map(d=>({role:d.role,content:d.content||""})),i=a;if(B.mode==="summary"&&B.summary){const d=(it()==="zh-Hant"?`【先前對話摘要 — 僅供延續語境，完整記錄仍在用戶介面】
`:`[Prior conversation summary — full history remains in the UI]
`)+B.summary;i=i?`${i}

${d}`:d;const u=s.slice(B.summarySourceCount||0);o=(u.length?u:s.slice(-n)).slice(-n).map(p=>({role:p.role,content:p.content||""}))}else B.mode==="recent"&&(o=s.slice(-n).map(d=>({role:d.role,content:d.content||""})));const r=o.map(d=>({role:d.role,content:d.content}));return i&&r.unshift({role:"system",content:i}),r}function Qs(){return B.mode==="summary"&&B.summary?I("chat.ctxModeSummaryLabel",{n:B.recentN}):B.mode==="recent"?I("chat.ctxModeRecentLabel",{n:B.recentN}):e("chat.ctxModeFullLabel")}function Ye(){const a=document.getElementById("chat-compress");if(!a)return;const s=X.some(i=>i.streaming),n=!!ue||nt||s,o=Ja();a.disabled=n||!o,a.textContent=e(nt?"chat.compressing":"chat.compress"),a.title=e(o?"chat.compress":"chat.compressNeedMore"),Le(),ze()}function ze(){const a=document.getElementById("chat-ctx-mode"),s=document.getElementById("chat-ctx-n");if(a){const n=B.mode==="summary"&&!B.summary?"full":B.mode;a.value=n;const o=a.querySelector('option[value="summary"]');o&&(o.disabled=!B.summary)}s&&(s.value=String(B.recentN),s.disabled=B.mode==="full")}function Le(){const a=document.getElementById("chat-compress-banner");if(!a)return;const s=!!B.summary,n=X.filter(r=>!r.streaming).length>40||za(X)>6e4;if(!s&&B.mode==="full"&&!n){a.hidden=!0,a.innerHTML="";return}a.hidden=!1;const o=s?B.summary.length>160?`${B.summary.slice(0,159)}…`:B.summary:"",i=n?`<p class="chat-compress-warn">${t(e("chat.ctxLongHint"))}</p>`:"";a.innerHTML=`
    <div class="chat-compress-banner-inner">
      <div class="chat-compress-banner-text">
        <strong>${t(e("chat.ctxPolicyTitle"))}</strong>
        <span class="muted">${t(Qs())}</span>
        <p class="chat-compress-remark">${t(e("chat.ctxRemark"))}</p>
        ${o?`<p class="chat-compress-preview">${t(o)}</p>`:""}
        ${i}
      </div>
      <div class="chat-compress-banner-actions">
        ${s?`<button type="button" class="btn secondary sm" id="chat-summary-view">${t(e("chat.compressView"))}</button>`:""}
      </div>
    </div>`,document.getElementById("chat-summary-view")?.addEventListener("click",()=>{Va()})}async function Va(){if(!B.summary){R(e("chat.compressNeedSummary"));return}const a=B.summaryAt?Z(B.summaryAt):"—",s=Aa(B.summary);ve&&Ne(!1);const n=document.createElement("div");return n.className="ui-dialog-back",n.id="ui-dialog-back",n.dataset.cancelable="1",n.innerHTML=`
    <div class="ui-dialog ui-dialog--info ui-dialog--large" role="dialog" aria-modal="true">
      <div class="ui-dialog-h">
        <div class="ui-dialog-icon" aria-hidden="true">Σ</div>
        <h3 class="ui-dialog-title">${t(e("chat.compressResultTitle"))}</h3>
      </div>
      <div class="ui-dialog-body ui-dialog-body--md">
        <p class="muted" style="margin:0 0 10px">${t(I("chat.summaryMeta",{when:a,n:B.summarySourceCount}))}</p>
        <div class="chat-content md">${s}</div>
      </div>
      <div class="ui-dialog-actions">
        <button type="button" class="btn secondary sm" id="ui-dialog-copy">${t(e("chat.copy"))}</button>
        <button type="button" class="btn sm" id="ui-dialog-ok">${t(e("common.ok"))}</button>
      </div>
    </div>`,document.body.appendChild(n),document.body.classList.add("ui-dialog-open"),ve=n,document.addEventListener("keydown",oa,!0),new Promise(o=>{xt=o;const i=()=>Ne(!0);n.querySelector("#ui-dialog-ok")?.addEventListener("click",i),n.addEventListener("click",r=>{r.target===n&&i()}),n.querySelector("#ui-dialog-copy")?.addEventListener("click",async()=>{const r=await ia(B.summary),d=n.querySelector("#ui-dialog-copy");r&&d&&(d.textContent=e("chat.copied"),setTimeout(()=>{d.isConnected&&(d.textContent=e("chat.copy"))},1500))})})}function zs(a){return a.map(s=>{const n=s.role||"user";let o=(s.content||"").trim();if(s.docs&&s.docs.length){const i=s.docs.map(r=>r.name).join(", ");o=o?`${o}
[attachments: ${i}]`:`[attachments: ${i}]`}return o.length>5e3&&(o=`${o.slice(0,4999)}…`),`${n}: ${o}`}).join(`

`)}function Js(){return it()==="zh-Hant"?["你是對話摘要助手。只輸出精簡摘要，不要使用任何工具、不要上網、不要反問。","若已有舊摘要，請合併更新為一份。","請用繁體中文（或對齊原對話語言）條列：","1) 主題與目標 2) 已確定事實／決定 3) 未完成事項 4) 用戶偏好或約束","控制在約 600–1000 字。不要大段複製原文。只輸出摘要正文。"].join(`
`):["You are a conversation summary assistant. Output only a concise summary.","Merge any prior summary into one updated summary. No tools, no browsing, no questions.","Cover: (1) topics/goals (2) facts/decisions (3) open items (4) preferences.","Keep under ~600–1000 words. Summary body only."].join(`
`)}async function Vs(){if(nt||ue||X.some(i=>i.streaming)){R(e("chat.compressBusy"));return}const a=X.filter(i=>!i.streaming);if(!Ja()){R(e("chat.compressNeedMore"));return}if(!await V({title:e("chat.compress"),message:e("chat.compressConfirm"),variant:"confirm",confirmText:e("chat.compress")}))return;const s=mt();if(!s){R(e("chat.needKey"));return}Be(),nt=!0,Ye();const n=document.getElementById("chat-send");n&&(n.disabled=!0);const o=document.getElementById("chat-stream-status");o&&(o.hidden=!1,o.textContent=e("chat.compressing"));try{let i=zs(a);B.summary&&(i=(it()==="zh-Hant"?`先前摘要：
${B.summary}

完整對話：
`:`Prior summary:
${B.summary}

Full conversation:
`)+i);const r=document.getElementById("chat-model")?.value||U.model||"grok-4.5",d=ma(),u={model:r,stream:!1,include_reasoning:!1,messages:[{role:"system",content:Js()},{role:"user",content:(it()==="zh-Hant"?`請為以下對話產生摘要（僅供之後回合作為語境，不會刪除用戶介面中的記錄）：

`:`Summarize the following conversation (for later context only; UI history is kept):

`)+i}]},m=ut();m&&(u.apiKeyId=m);const p=await fetch("/admin/api/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify(u)});if(!p.ok){const h=await p.text();let f=h;try{f=JSON.parse(h).error?.message||h}catch{}throw new Error(f||e("chat.compressFail"))}const l=await p.json();let b=l?.choices?.[0]?.message?.content||l?.choices?.[0]?.delta?.content||"";if(typeof b!="string"&&(b=String(b||"")),b=b.trim().replace(/^【對話摘要】\s*/u,"").replace(/^\[Conversation summary\]\s*/i,""),!b)throw new Error(e("chat.compressFail"));B.summary=b,B.summaryAt=new Date().toISOString(),B.summarySourceCount=a.length,B.mode="summary",Le(),ze(),R(""),o&&(o.hidden=!1,o.textContent=e("chat.compressOk"),setTimeout(()=>{const h=document.getElementById("chat-stream-status");h&&h.textContent===e("chat.compressOk")&&(h.hidden=!0,h.textContent="")},2800)),await rt().catch(()=>{}),await Va()}catch(i){R(i.message||e("chat.compressFail"))}finally{nt=!1,Ye(),n&&(n.disabled=!1),o&&o.textContent===e("chat.compressing")&&(o.hidden=!0,o.textContent="")}}function Vt(a){q.historyOpenMobile=!!a,document.body.classList.toggle("chat-history-open",q.historyOpenMobile)}function Xt(){Vt(!1)}async function De(){if(c.key){q.historyLoading=!0,Ie();try{const a=q.historyPage*q.historyLimit,s=new URLSearchParams({limit:String(q.historyLimit),offset:String(a)});q.historyQ.trim()&&s.set("q",q.historyQ.trim());const n=await P(`/conversations?${s}`);q.historyItems=n.data||[],q.historyTotal=n.total??0}catch(a){q.historyItems=[],q.historyTotal=0,console.warn(a)}finally{q.historyLoading=!1,Ie()}}}function Ie(){const a=document.getElementById("chat-history-list"),s=document.getElementById("chat-history-pager");if(a){if(q.historyLoading&&!q.historyItems.length?a.innerHTML=`<li class="chat-history-empty">${t(e("common.loading"))}</li>`:q.historyItems.length?a.innerHTML=q.historyItems.map(n=>{const o=q.conversationId===n.id?" is-active":"",i=Ks(n),r=n.title&&n.preview&&n.preview!==n.title?n.preview:n.model||I("chat.msgs",{n:n.messageCount||0}),d=q.renamingId===n.id,u=i,m=d?`<input type="text" class="chat-history-title-input" data-title-input="${t(n.id)}" value="${t(u)}" maxlength="120" placeholder="${t(e("chat.renamePh"))}" aria-label="${t(e("chat.renamePh"))}" />
            <span class="preview">${t(r||"—")}</span>
            <span class="meta"><span>${t(Z(n.updatedAt))}</span></span>`:`<span class="title" data-title-label="${t(n.id)}" title="${t(e("chat.rename"))}">${t(i)}</span>
            <span class="preview">${t(r||"—")}</span>
            <span class="meta"><span>${t(Z(n.updatedAt))}</span></span>`,p=d?`<div class="chat-history-item${o} is-editing" data-conv-body="${t(n.id)}">${m}</div>`:`<div class="chat-history-item${o}" data-open-conv="${t(n.id)}" role="button" tabindex="0" title="${t(i)}">${m}</div>`;return`
        <li class="chat-history-row${o}${d?" is-renaming":""}" data-conv-row="${t(n.id)}">
          ${p}
          <div class="chat-history-item-actions">
            <button type="button" class="icon-action" data-rename-conv="${t(n.id)}" title="${t(e("chat.rename"))}" aria-label="${t(e("chat.rename"))}">✎</button>
            <button type="button" class="icon-action danger" data-del-conv="${t(n.id)}" title="${t(e("chat.deleteConversation"))}" aria-label="${t(e("chat.deleteConversation"))}">×</button>
          </div>
        </li>`}).join(""):a.innerHTML=`<li class="chat-history-empty">${t(e("chat.historyEmpty"))}</li>`,s){const n=q.historyLimit,o=Math.max(1,Math.ceil(q.historyTotal/n)||1),i=Math.min(q.historyPage+1,o),r=I("chat.historyPage",{n:i,total:o}),d=q.historyPage>0,u=(q.historyPage+1)*n<q.historyTotal;s.innerHTML=`
      <button type="button" class="btn secondary sm" id="chat-hist-prev" ${d?"":"disabled"}>${t(e("chat.historyPrev"))}</button>
      <span>${t(r)}</span>
      <button type="button" class="btn secondary sm" id="chat-hist-next" ${u?"":"disabled"}>${t(e("chat.historyNext"))}</button>
    `;const m=document.getElementById("chat-hist-prev"),p=document.getElementById("chat-hist-next");m&&(m.onclick=()=>{q.historyPage>0&&(q.historyPage-=1,De())}),p&&(p.onclick=()=>{(q.historyPage+1)*n<q.historyTotal&&(q.historyPage+=1,De())})}if(a.querySelectorAll("[data-open-conv]").forEach(n=>{const o=n.getAttribute("data-open-conv");if(!o)return;let i=null;const r=()=>{i&&(clearTimeout(i),i=null)};n.addEventListener("click",d=>{q.renamingId||d.target instanceof Element&&d.target.closest(".chat-history-item-actions")||(r(),i=setTimeout(()=>{i=null,!q.renamingId&&wa(o)},280))}),n.addEventListener("dblclick",d=>{d.preventDefault(),d.stopPropagation(),r(),Nt(o)}),n.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),q.renamingId||wa(o))})}),a.querySelectorAll("[data-title-label]").forEach(n=>{n.addEventListener("dblclick",o=>{o.preventDefault(),o.stopPropagation();const i=n.getAttribute("data-title-label");i&&Nt(i)})}),a.querySelectorAll("[data-rename-conv]").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation();const i=n.getAttribute("data-rename-conv");i&&Nt(i)})}),a.querySelectorAll("[data-del-conv]").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation();const i=n.getAttribute("data-del-conv");i&&Ys(i)})}),q.renamingId){const n=String(q.renamingId).replace(/\\/g,"\\\\").replace(/"/g,'\\"'),o=a.querySelector(`[data-title-input="${n}"]`);o instanceof HTMLInputElement&&(Xs(o,q.renamingId),requestAnimationFrame(()=>{o.isConnected&&(o.focus(),o.select())}))}}}function Nt(a){a&&(q.renamingId&&q.renamingId!==a&&(q.renamingId=null),q.renamingId=a,Ie())}function Xs(a,s){let n=!1;const o=async i=>{if(n)return;n=!0;const r=a.value;if(q.renamingId=null,!i){Ie();return}const d=String(r??"").trim().slice(0,120),u=q.historyItems.find(p=>p.id===s),m=u?(u.title||"").trim():"";if(d===m){Ie();return}u&&(u.title=d),Ie();try{await P(`/conversations/${s}`,{method:"PATCH",body:JSON.stringify({title:d})}),await De()}catch(p){R(p.message||e("chat.saveFail")),await De()}};a.addEventListener("keydown",i=>{i.stopPropagation(),i.key==="Enter"?(i.preventDefault(),o(!0)):i.key==="Escape"&&(i.preventDefault(),o(!1))}),a.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation()}),a.addEventListener("mousedown",i=>i.stopPropagation()),a.addEventListener("dblclick",i=>{i.preventDefault(),i.stopPropagation()}),a.addEventListener("blur",()=>{setTimeout(()=>o(!0),0)})}async function wa(a){(!a||ue)&&ue&&ue.abort();try{R("");const s=await P(`/conversations/${a}`),n=s.data||s;q.conversationId=n.id,Ae=0,Te.clear(),X=(n.messages||[]).filter(u=>!u.compressed).map(u=>({role:u.role,content:u.content||"",reasoning:u.reasoning||void 0,docs:u.docs,error:u.error})),te=[],U.systemPrompt=n.systemPrompt||"",Ws(n),n.model&&(U.model=n.model),n.apiKeyId&&(U.keyId=n.apiKeyId);const o=document.getElementById("chat-system");o&&(o.value=U.systemPrompt);const i=document.getElementById("chat-system-wrap");i&&(i.hidden=!U.systemPrompt.trim()&&!U.systemOpen);const r=document.getElementById("chat-model");r&&n.model&&(r.value=n.model);const d=document.getElementById("chat-key-select");d&&n.apiKeyId&&[...d.options].some(m=>m.value===n.apiKeyId)&&(d.value=n.apiKeyId,U.keyId=n.apiKeyId),xe(),Oe(),Ie(),Le(),ze(),Xt()}catch(s){R(s.message||e("chat.loadFail"))}}function ut(){const a=ma();return!a||String(a).startsWith("admin-session:")||!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(a)?null:a}async function rt(){const a=js();if(!a.length&&!B.summary)return;if(q.saving){q.saveQueued=!0;return}q.saving=!0,q.saveQueued=!1,Be();const s={messages:a,model:U.model||null,systemPrompt:U.systemPrompt||"",apiKeyId:ut(),...Us()};try{if(q.conversationId)await P(`/conversations/${q.conversationId}`,{method:"PATCH",body:JSON.stringify(s)});else{if(!a.length)return;const n=await P("/conversations",{method:"POST",body:JSON.stringify({...s,title:""})}),o=n.data||n;q.conversationId=o.id}await De()}catch(n){console.warn(n)}finally{q.saving=!1,q.saveQueued&&(q.saveQueued=!1,rt().catch(()=>{}))}}async function Ys(a){if(await V({title:e("chat.deleteConversation"),message:e("chat.deleteConfirm"),variant:"danger",confirmText:e("chat.deleteConversation")}))try{await P(`/conversations/${a}`,{method:"DELETE"}),q.conversationId===a&&(q.conversationId=null,X=[],te=[],Qa(),xe(),Oe(),Le(),ze()),q.historyItems.length<=1&&q.historyPage>0&&(q.historyPage-=1),await De()}catch(s){R(s.message||e("common.requestFailed"))}}function Zs(a=!0){ue&&ue.abort(),X=[],te=[],q.conversationId=null,Qa(),a||(U.systemPrompt="",U.systemOpen=!1),xe(),Oe(),Ie(),Le(),ze()}function mt(){return c.key}function ma(){const s=document.getElementById("chat-key-select")?.value||U.keyId||"";return s&&s!=="session"?s:c.me?.id||""}function Be(){const a=document.getElementById("chat-key-select"),s=document.getElementById("chat-model"),n=document.getElementById("chat-reasoning"),o=document.getElementById("chat-system");a&&(U.keyId=a.value==="session"?"":a.value),s&&(U.model=s.value),n&&(U.reasoning=n.checked),o&&(U.systemPrompt=o.value)}function Oe(){const a=document.getElementById("chat-pending");if(a){if(!te.length){a.innerHTML="",a.hidden=!0;return}a.hidden=!1,a.innerHTML=te.map((s,n)=>`
      <div class="chat-pending-item" title="${t(s.name)}">
        <span class="name">${t(s.name)}</span>
        <span class="muted">${$e(s.size)}</span>
        <button type="button" class="rm" data-rm-doc="${n}" aria-label="${t(e("chat.removeFile"))}">×</button>
      </div>`).join(""),a.querySelectorAll("[data-rm-doc]").forEach(s=>{s.onclick=()=>{const n=Number(s.getAttribute("data-rm-doc"));te.splice(n,1),Oe()}})}}function en(a,s){return`${a}:${(s||"").length}:${(s||"").slice(0,40)}`}function xe(){const a=document.getElementById("chat-messages");if(!a)return;const s=a.scrollHeight-a.scrollTop-a.clientHeight<120,n=X.some(l=>l.streaming),o=document.getElementById("chat-stream-status");if(o&&(o.hidden=!n,o.textContent=n?e("chat.streaming"):""),!X.length){a.innerHTML=`
      <div class="chat-empty">
        <strong>${t(e("chat.emptyTitle"))}</strong>
        <p>${t(e("chat.emptyHint"))}</p>
      </div>`,Ye();return}const i=X.length,r=Math.max(0,i-Ga);Ae>r&&(Ae=r);const d=Ae,u=X.slice(d),m=d,p=m>0?`<div class="chat-load-older">
          <button type="button" class="btn secondary sm" id="chat-load-older">${t(I("chat.loadOlder",{n:m}))}</button>
        </div>`:"";a.innerHTML=p+u.map((l,b)=>{const h=d+b,f=l.role==="user"?"user":"assistant",v=l.role==="user"?e("chat.you"):e("chat.assistant"),y=l.docs&&l.docs.length?`<div class="chat-attach-list">${l.docs.map(N=>`<span class="chat-attach-chip" title="${t(N.name)}"><span>📎 ${t(N.name)}</span></span>`).join("")}</div>`:"",C=!!l.reasoning?`<details class="chat-reasoning" ${l.streaming||!l.content?"open":""}>
            <summary>${t(e("chat.reasoning"))}${l.streaming&&!l.content?` · ${t(e("chat.streaming"))}`:""}</summary>
            <pre>${t(l.reasoning)}</pre>
          </details>`:"";let A=l.content||"";!A&&l.streaming&&(A=l.reasoning?"":"…");const T=l.error?" error":"",M=l.streaming?" is-streaming":"",H=f==="assistant"&&!l.streaming&&!!A;let G;if(H){const N=en(h,A);if(Te.has(N))G=Te.get(N);else if(G=Aa(A),Te.set(N,G),Te.size>200){const K=Te.keys().next().value;Te.delete(K)}}else G=t(A);const J=!l.streaming&&A.length>Rs,g=`${H?"chat-content md":"chat-content"}${J?" is-collapsible":""}`,k=J?`<button type="button" class="btn ghost sm chat-expand-btn" data-expand="${h}">${t(e("chat.showMore"))}</button>`:"",x=A?`<button type="button" class="chat-copy-btn" data-copy-msg="${h}" title="${t(e("chat.copy"))}">${t(e("chat.copy"))}</button>`:"";return`<div class="chat-bubble ${f}${T}${M}" data-msg-idx="${h}">
        <div class="chat-bubble-head">
          <div class="chat-role">${t(v)}${l.streaming?` <span class="chat-live">${t(e("chat.streaming"))}</span>`:""}</div>
          ${x}
        </div>
        ${y}
        ${C}
        <div class="${g}" data-content-idx="${h}">${G}${l.streaming?'<span class="chat-cursor">▍</span>':""}</div>
        ${k}
      </div>`}).join(""),(s||n)&&(a.scrollTop=a.scrollHeight),Ye(),document.getElementById("chat-load-older")?.addEventListener("click",()=>{const l=a.scrollHeight;Ae=Math.max(0,Ae-_s),xe();const b=document.getElementById("chat-messages");b&&(b.scrollTop=b.scrollHeight-l)}),a.querySelectorAll("[data-expand]").forEach(l=>{l.addEventListener("click",()=>{const b=a.querySelector(`[data-content-idx="${l.getAttribute("data-expand")}"]`);b&&(b.classList.toggle("is-expanded"),l.textContent=b.classList.contains("is-expanded")?e("chat.showLess"):e("chat.showMore"))})}),a.querySelectorAll("[data-copy-msg]").forEach(l=>{l.addEventListener("click",async b=>{b.preventDefault(),b.stopPropagation();const h=Number(l.getAttribute("data-copy-msg")),f=X[h];if(!f?.content)return;if(await ia(f.content)){const y=l.textContent;l.textContent=e("chat.copied"),l.classList.add("is-copied"),setTimeout(()=>{l.isConnected&&(l.textContent=y||e("chat.copy"),l.classList.remove("is-copied"))},1600)}else R(e("chat.copyFail"))})})}function Kt(a){const n=a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),o=n.pop()||"",i=[];for(const r of n){const d=r.trim();if(!d||d.startsWith(":")||!d.startsWith("data:"))continue;const u=d.slice(5).trim();u&&i.push(u)}return{events:i,rest:o}}function ht(a,s){if(!s||typeof s!="object")return!1;if(s.error){const r=ea({error:s.error});return a.error=!0,a.content=(a.content||"")+`
✗ ${r}`,!0}const n=s.choices?.[0]?.delta||{};let o=!1;n.reasoning_content&&(a.reasoning=(a.reasoning||"")+n.reasoning_content,o=!0),(n.thought&&!n.reasoning_content||n.thought&&n.reasoning_content&&n.thought!==n.reasoning_content)&&(a.reasoning=(a.reasoning||"")+n.thought,o=!0),typeof n.content=="string"&&n.content.length&&(a.content=(a.content||"")+n.content,o=!0);const i=s.choices?.[0]?.message;return i&&(i.content&&!a.content&&(a.content=i.content,o=!0),i.reasoning_content&&!a.reasoning&&(a.reasoning=i.reasoning_content,o=!0)),o}function tn(a,s){const n=mt();return n?new Promise((o,i)=>{const r=new FormData;r.append("file",a,a.name);const d=ut();d&&r.append("apiKeyId",d);const u=new XMLHttpRequest;u.open("POST","/admin/api/documents"),u.setRequestHeader("Authorization",`Bearer ${n}`),u.upload.onprogress=m=>{if(s)if(m.lengthComputable&&m.total>0){const p=Math.min(100,Math.round(m.loaded/m.total*100));s({loaded:m.loaded,total:m.total,percent:p})}else s({loaded:m.loaded||0,total:0,percent:-1})},u.onload=()=>{let m=null;try{m=u.responseText?JSON.parse(u.responseText):null}catch{m=null}if(u.status<200||u.status>=300){const b=m?.error?.message||m?.message||u.responseText||u.statusText;i(new Error(b||e("chat.uploadFail")));return}const p=m?.data||m,l=p?.id;if(!l||typeof l!="string"){i(new Error(e("chat.uploadFail")));return}o({id:l,name:p.originalName||p.filename||a.name,mime:p.mimeType||a.type||"",size:p.sizeBytes??p.size??a.size??0})},u.onerror=()=>i(new Error(e("chat.uploadFail"))),u.onabort=()=>i(new Error(e("chat.uploadFail"))),u.send(r)}):Promise.reject(new Error(e("chat.needKey")))}function bt(a){const s=document.getElementById("chat-upload-progress");if(!s)return;const{visible:n,fileName:o,fileIndex:i,fileTotal:r,percent:d,indeterminate:u}=a;if(!n){s.hidden=!0,s.setAttribute("aria-hidden","true");return}s.hidden=!1,s.setAttribute("aria-hidden","false");const m=document.getElementById("chat-upload-label"),p=document.getElementById("chat-upload-bar"),l=document.getElementById("chat-upload-pct"),b=o||"",h=i||1,f=r||1;m&&(m.textContent=f>1?I("chat.uploadProgressMulti",{name:b,i:h,n:f}):I("chat.uploadProgress",{name:b}));const v=!!u||d<0;p&&(p.classList.toggle("is-indeterminate",v),v?p.style.width="40%":p.style.width=`${Math.max(0,Math.min(100,d))}%`),l&&(l.textContent=v?e("chat.uploading"):I("common.percent",{n:Math.max(0,Math.min(100,d))}))}function an(a){const s=Array.isArray(a)?a:[];if(!s.length)return{added:0,skipped:0};let n=0,o=0;const i=new Set(te.map(r=>r.id));for(const r of s){if(te.length>=Mt){o+=s.length-n-o;break}const d=r?.id,u=r?.name||r?.originalName||"";if(!d||!ua.test(String(d))){o+=1;continue}if(!qt(u)){o+=1;continue}if(i.has(d)){o+=1;continue}te.push({id:d,name:u||d,mime:r.mime||r.mimeType||"",size:r.size??r.sizeBytes??0}),i.add(d),n+=1}return Oe(),{added:n,skipped:o}}async function sn(){if(!mt()){R(e("chat.needKey"));return}const a=ut(),s=Math.max(0,Mt-te.length);if(s<=0){R(e("chat.tooManyFiles"));return}const n=new Map;let o=0;et({title:e("chat.libraryTitle"),subtitle:t(e("chat.librarySubtitle")),size:"md",bodyHtml:`
      <div class="chat-lib">
        <div class="chat-lib-toolbar">
          <input type="search" id="chat-lib-q" class="chat-lib-search" placeholder="${t(e("chat.librarySearch"))}" autocomplete="off" />
          <span class="muted chat-lib-count" id="chat-lib-count">${t(I("chat.librarySelected",{n:0}))}</span>
        </div>
        <div class="muted chat-lib-formats">${t(e("chat.formatsLabel"))}: ${t(Tt())}</div>
        <div id="chat-lib-list" class="chat-lib-list" role="listbox" aria-multiselectable="true">
          <div class="muted chat-lib-status">${t(e("common.loading")||"…")}</div>
        </div>
      </div>`,footerHtml:`
      <button type="button" class="btn secondary sm" id="chat-lib-cancel">${t(e("common.cancel"))}</button>
      <button type="button" class="btn sm" id="chat-lib-add" disabled>${t(e("chat.libraryAdd"))}</button>`});const i=document.getElementById("chat-lib-list"),r=document.getElementById("chat-lib-q"),d=document.getElementById("chat-lib-count"),u=document.getElementById("chat-lib-add");document.getElementById("chat-lib-cancel")?.addEventListener("click",()=>ce());const m=()=>{d&&(d.textContent=I("chat.librarySelected",{n:n.size})),u&&(u.disabled=n.size===0,u.textContent=n.size>0?`${e("chat.libraryAdd")} (${n.size})`:e("chat.libraryAdd"))},p=h=>{if(!i)return;const f=new Set(te.map(y=>y.id)),v=(h||[]).filter(y=>qt(y.originalName));if(!v.length){i.innerHTML=`<div class="data-empty chat-lib-empty"><strong>${t(e("chat.libraryEmpty"))}</strong></div>`;return}i.innerHTML=v.map(y=>{const w=f.has(y.id),C=n.has(y.id),A=w&&!C;return`
          <label class="chat-lib-row ${w?"is-already":""} ${C?"is-selected":""}" data-id="${t(y.id)}">
            <input type="checkbox" data-lib-id="${t(y.id)}" ${C?"checked":""} ${A?"disabled":""} />
            <span class="chat-lib-meta">
              <span class="chat-lib-name" title="${t(y.originalName)}">${t(y.originalName)}</span>
              <span class="muted">${t(y.mimeType||"")} · ${$e(y.sizeBytes||0)}${w?` · ${t(e("chat.libraryAlready"))}`:""}</span>
            </span>
          </label>`}).join(""),i.querySelectorAll("input[data-lib-id]").forEach(y=>{y.addEventListener("change",()=>{const w=y.getAttribute("data-lib-id"),C=v.find(T=>T.id===w);if(!C)return;if(y.checked){if(n.size>=s&&!n.has(w)){y.checked=!1,R(e("chat.tooManyFiles"));return}n.set(w,C)}else n.delete(w);const A=y.closest(".chat-lib-row");A&&A.classList.toggle("is-selected",y.checked),m()})})},l=async()=>{const h=++o;i&&(i.innerHTML=`<div class="muted chat-lib-status">${t(e("common.loading")||"…")}</div>`);try{const f=new URLSearchParams({limit:"50",offset:"0"});a&&f.set("apiKeyId",a);const v=(r?.value||"").trim();v&&f.set("q",v);const y=await P(`/documents?${f}`);if(h!==o)return;p(y.data||[])}catch(f){if(h!==o)return;i&&(i.innerHTML=`<div class="error-box">${t(f.message||e("chat.libraryLoadFail"))}</div>`)}};let b=null;r?.addEventListener("input",()=>{b&&clearTimeout(b),b=setTimeout(()=>l(),280)}),u?.addEventListener("click",()=>{const h=[...n.values()],{added:f}=an(h.map(v=>({id:v.id,name:v.originalName,mime:v.mimeType,size:v.sizeBytes})));ce(),f>0&&R("")}),m(),await l(),r?.focus()}async function Xa(a){const s=[...a||[]];if(!s.length)return;if(!mt()){R(e("chat.needKey"));return}const n=s.filter(u=>!qt(u.name)),o=s.filter(u=>qt(u.name));if(n.length&&(R(I("chat.formatsReject",{name:n.map(u=>u.name).join(", "),formats:Tt()})),!o.length))return;if(te.length+o.length>Mt){R(e("chat.tooManyFiles"));return}const i=document.getElementById("chat-attach"),r=document.getElementById("chat-send");i&&(i.disabled=!0,i.textContent=e("chat.uploading")),r&&(r.disabled=!0);const d=o.length;try{let u=0;for(const m of o){if(te.length>=Mt)break;u+=1,bt({visible:!0,fileName:m.name,fileIndex:u,fileTotal:d,percent:0,indeterminate:!1});const p=await tn(m,({percent:l})=>{bt({visible:!0,fileName:m.name,fileIndex:u,fileTotal:d,percent:l<0?0:l,indeterminate:l<0})});bt({visible:!0,fileName:m.name,fileIndex:u,fileTotal:d,percent:100,indeterminate:!1}),te.some(l=>l.id===p.id)||te.push(p),Oe()}n.length||R("")}catch(u){R(u.message||e("chat.uploadFail"))}finally{bt({visible:!1}),i&&(i.disabled=!1,i.textContent=e("chat.attach")),r&&(r.disabled=!1)}}function nn(){const a=c.me?.id||"",s=c.me?`${e("chat.useSessionKey")} · ${c.me.name||""} (${c.me.keyPrefix||""}…)`:e("chat.useSessionKey"),n=U.keyId||"session",o=(c.keys||[]).filter(r=>r.isActive!==!1),i=[`<option value="session" ${n==="session"||n===a||!n?"selected":""}>${t(s)}</option>`];for(const r of o){if(a&&r.id===a)continue;const d=`${r.name||"key"} · ${r.keyPrefix||""}… · ${r.role||""}/${r.mode||""}`;i.push(`<option value="${t(r.id)}" ${n===r.id?"selected":""}>${t(d)}</option>`)}return i.join("")}async function on(){await Promise.all([dt(!1),ct()]);const a=c.models||[];!U.model&&a.length&&(U.model=a[0]);const s=a.map(m=>`<option value="${t(m)}" ${U.model===m?"selected":""}>${t(m)}</option>`).join("");Vt(!1),document.getElementById("app").innerHTML=ne(`
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
              <select id="chat-key-select">${nn()}</select>
            </label>
            <label>${t(e("chats.model"))}
              <select id="chat-model">${s||'<option value="grok-4.5">grok-4.5</option>'}</select>
            </label>
            <label class="check-inline" for="chat-reasoning">
              <input type="checkbox" id="chat-reasoning" ${U.reasoning!==!1?"checked":""} />
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
              <input type="number" id="chat-ctx-n" min="2" max="40" value="${B.recentN}" />
            </label>
            <button type="button" class="btn ghost sm" id="chat-system-toggle" title="${t(e("chat.systemHint"))}">
              ${t(e("chat.systemPrompt"))}${U.systemPrompt?" ·":""}
            </button>
          </div>
          <div class="chat-system-wrap" id="chat-system-wrap" ${U.systemOpen||U.systemPrompt?"":"hidden"}>
            <label class="chat-system-label" for="chat-system">${t(e("chat.systemPrompt"))}
              <span class="hint">${t(e("chat.systemHint"))}</span>
            </label>
            <textarea id="chat-system" rows="3" placeholder="${t(e("chat.systemPlaceholder"))}">${t(U.systemPrompt||"")}</textarea>
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
                <input type="file" id="chat-file" class="chat-file-input" multiple accept="${t(is)}" />
                <button type="button" class="btn secondary sm" id="chat-attach" title="${t(e("chat.attachHint"))}">${t(e("chat.attach"))}</button>
                <button type="button" class="btn secondary sm" id="chat-attach-lib" title="${t(e("chat.libraryTitle"))}">${t(e("chat.attachLibrary"))}</button>
                <span class="chat-formats-hint" title="${t(Tt())}">
                  <span class="chat-formats-label">${t(e("chat.formatsLabel"))}</span>
                  <span class="muted">${t(Tt())}</span>
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
            <input type="search" id="chat-history-search" class="chat-history-search" placeholder="${t(e("chat.historySearch"))}" value="${t(q.historyQ)}" />
          </div>
          <ul class="chat-history-list" id="chat-history-list"></ul>
          <div class="chat-history-pager" id="chat-history-pager"></div>
        </aside>
      </div>
    </div>
  `),oe(),xe(),Oe(),Ie(),Ye(),Le(),ze(),De().catch(()=>{}),document.getElementById("chat-key-select").onchange=()=>Be();const n=document.getElementById("chat-ctx-mode"),o=document.getElementById("chat-ctx-n");n&&(n.onchange=()=>{const m=n.value;if(m==="summary"&&!B.summary){R(e("chat.compressNeedSummary")),n.value=B.mode==="recent"?"recent":"full";return}B.mode=m==="summary"||m==="recent"?m:"full",Le(),ze(),rt().catch(()=>{})}),o&&(o.onchange=()=>{B.recentN=Math.min(40,Math.max(2,Number(o.value)||6)),Le(),rt().catch(()=>{})}),document.getElementById("chat-model").onchange=()=>Be(),document.getElementById("chat-reasoning").onchange=()=>Be(),document.getElementById("chat-system").oninput=()=>Be(),document.getElementById("chat-system-toggle").onclick=()=>{Be(),U.systemOpen=!U.systemOpen;const m=document.getElementById("chat-system-wrap");m&&(m.hidden=!U.systemOpen&&!U.systemPrompt.trim()),U.systemOpen&&document.getElementById("chat-system")?.focus()},document.getElementById("chat-new").onclick=()=>{Zs(!0)},document.getElementById("chat-compress").onclick=()=>{Vs().catch(()=>{})},document.getElementById("chat-stop").onclick=()=>{ue&&ue.abort()},document.getElementById("chat-send").onclick=()=>Sa(),document.getElementById("chat-attach").onclick=()=>{document.getElementById("chat-file")?.click()},document.getElementById("chat-attach-lib")?.addEventListener("click",()=>{sn().catch(m=>R(m.message||e("chat.libraryLoadFail")))}),document.getElementById("chat-file").onchange=m=>{const p=m.target;Xa(p.files).finally(()=>{p.value=""})};const i=document.getElementById("chat-history-toggle"),r=document.getElementById("chat-history-backdrop"),d=document.getElementById("chat-history-close-mobile");i&&(i.onclick=()=>{Vt(!q.historyOpenMobile)}),r&&(r.onclick=()=>Xt()),d&&(d.onclick=()=>Xt());const u=document.getElementById("chat-history-search");u&&(u.oninput=()=>{q.historyQ=u.value,Rt&&clearTimeout(Rt),Rt=setTimeout(()=>{q.historyPage=0,De()},280)}),dn(),document.getElementById("chat-input").onkeydown=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Sa())}}function dn(){const a=document.getElementById("chat-page"),s=document.getElementById("chat-drop-overlay"),n=document.getElementById("chat-composer");if(!a)return;let o=0;const i=h=>{const f=h.dataTransfer?.types;return f?typeof f.includes=="function"?f.includes("Files"):[...f].includes("Files"):!1},r=h=>{a.classList.toggle("is-file-drag",h),n&&n.classList.toggle("is-dragover",h),s&&(s.hidden=!h,s.setAttribute("aria-hidden",h?"false":"true"))},d=h=>{i(h)&&(h.preventDefault(),h.stopPropagation(),o+=1,r(!0))},u=h=>{i(h)&&(h.preventDefault(),h.stopPropagation(),h.dataTransfer&&(h.dataTransfer.dropEffect="copy"),r(!0))},m=h=>{i(h)&&(h.preventDefault(),h.stopPropagation(),o=Math.max(0,o-1),o===0&&r(!1))},p=h=>{if(!i(h))return;h.preventDefault(),h.stopPropagation(),o=0,r(!1);const f=h.dataTransfer?.files;f?.length&&Xa(f).catch(v=>R(v.message||e("chat.uploadFail")))};a.addEventListener("dragenter",d),a.addEventListener("dragover",u),a.addEventListener("dragleave",m),a.addEventListener("drop",p);const l=h=>{c.page==="chat"&&i(h)&&h.preventDefault()},b=h=>{c.page==="chat"&&i(h)&&h.preventDefault()};window.addEventListener("dragover",l),window.addEventListener("drop",b),a._chatDropCleanup=()=>{window.removeEventListener("dragover",l),window.removeEventListener("drop",b)}}function rn(a){const s=new Set,n=[],o=i=>{if(!i||typeof i!="string")return;const r=i.trim();!ua.test(r)||s.has(r)||(s.add(r),n.push(r))};for(const i of a||[])o(i?.id);for(const i of X)if(i?.docs?.length)for(const r of i.docs)o(r?.id);return n}async function Sa(){Be();const a=document.getElementById("chat-input");let s=a?.value.trim()||"";const n=[...te];if(!s&&!n.length){R(e("chat.needContent"));return}const o=mt();if(!o){R(e("chat.needKey"));return}if(!s&&n.length&&(s=e("chat.fileOnlyPrompt")),n.filter(w=>!w?.id||!ua.test(String(w.id))).length){R(e("chat.uploadFail"));return}const r=document.getElementById("chat-model")?.value||U.model||"grok-4.5",d=document.getElementById("chat-reasoning")?.checked!==!1;ma();const u=n.map(w=>({id:w.id,name:w.name})),m=rn(n);X.push({role:"user",content:s,docs:u.length?u:void 0}),a&&(a.value=""),te=[],Oe();const p={role:"assistant",content:"",reasoning:"",streaming:!0};X.push(p),Ae=Math.max(0,X.length-Ga),xe();const b=Gs(),h=document.getElementById("chat-send"),f=document.getElementById("chat-stop"),v=document.getElementById("chat-attach"),y=document.getElementById("chat-attach-lib");h&&(h.disabled=!0),v&&(v.disabled=!0),y&&(y.disabled=!0),f&&(f.disabled=!1),ue=new AbortController;try{const w={model:r,stream:!0,include_reasoning:d,messages:b};m.length&&(w.document_ids=m);const C=ut();C&&(w.apiKeyId=C);const A=await fetch("/admin/api/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(w),signal:ue.signal});if(!A.ok){const T=await A.text();let M=T;try{M=JSON.parse(T).error?.message||T}catch{}throw new Error(M||A.statusText)}if(A.body&&typeof A.body.getReader=="function"){const T=A.body.getReader(),M=new TextDecoder;let H="",G=0;const J=(g=!1)=>{const k=performance.now();(g||k-G>40)&&(G=k,xe())};for(;;){const{done:g,value:k}=await T.read();if(g)break;H+=M.decode(k,{stream:!0});const{events:x,rest:N}=Kt(H);H=N;let K=!1;for(const E of x)if(E!=="[DONE]")try{const _=JSON.parse(E);ht(p,_)&&(K=!0)}catch{}K&&J(!1)}if(H.trim()){const{events:g}=Kt(H+`
`);for(const k of g)if(k!=="[DONE]")try{ht(p,JSON.parse(k))}catch{}}J(!0)}else{const T=await A.text(),{events:M}=Kt(T+`
`);for(const H of M)if(H!=="[DONE]")try{ht(p,JSON.parse(H))}catch{try{const G=JSON.parse(T);ht(p,G)}catch{}}xe()}!p.content&&!p.reasoning&&(p.content=e("chat.emptyReply")),R("")}catch(w){w.name==="AbortError"?p.content=(p.content||"")+`
[${e("chat.stopped")}]`:(p.error=!0,p.content=(p.content||"")+`
✗ ${w.message||w}`,R(w.message||String(w)))}finally{p.streaming=!1,ue=null,xe(),Ye(),h&&(h.disabled=!1),v&&(v.disabled=!1),y&&(y.disabled=!1),f&&(f.disabled=!0),rt().catch(()=>{})}}async function Lt(){const a=document.getElementById("app");try{if(!c.key){await Da();return}c.me||await Ha(),c.page==="dashboard"?await Ut():c.page==="chat"?await on():c.page==="chats"?await vt():c.page==="keys"?await Ke():c.page==="documents"?await st():c.page==="media"?await Pe():c.page==="audit"?await $t():c.page==="settings"?await ja():c.page==="apiFeatures"?await kt():c.page==="usage"?await re():c.page==="ddos"?await Y():c.page==="queue"?await se():c.page==="pm2"?await Ee():c.page==="system"?await wt():await Ut()}catch(s){a.innerHTML=ne(`<div class="error-box">${t(s.message)}</div>`),oe()}}let je=null;const Q={tab:"overview",status:"",limit:20,offset:0};function At(a){return!a||a<0?"—":a<1e3?`${a}ms`:a<6e4?`${Math.round(a/1e3)}s`:a<36e5?`${Math.round(a/6e4)}m`:`${(a/36e5).toFixed(1)}h`}const ln=["enabled","globalConcurrency","perKeyConcurrency","maxQueueDepth","maxQueueDepthPerKey","fairness","defaultPriority","playgroundPriority","leaseMs","maxWaitMs"];function Ya(){return{relaxed:{enabled:!0,globalConcurrency:6,perKeyConcurrency:2,maxQueueDepth:200,maxQueueDepthPerKey:40,fairness:"weighted_round_robin",defaultPriority:100,playgroundPriority:40,leaseMs:6e4,maxWaitMs:9e5},balanced:{enabled:!0,globalConcurrency:4,perKeyConcurrency:1,maxQueueDepth:100,maxQueueDepthPerKey:20,fairness:"weighted_round_robin",defaultPriority:100,playgroundPriority:50,leaseMs:45e3,maxWaitMs:6e5},strict:{enabled:!0,globalConcurrency:2,perKeyConcurrency:1,maxQueueDepth:40,maxQueueDepthPerKey:8,fairness:"fifo_global",defaultPriority:100,playgroundPriority:80,leaseMs:3e4,maxWaitMs:3e5}}}function Pa(a){if(!a)return{};const s={};for(const n of ln){const o=a[n];typeof o=="boolean"?s[n]=o:typeof o=="number"&&Number.isFinite(o)?s[n]=Math.round(o):typeof o=="string"?s[n]=o:o==null?s[n]=null:s[n]=o}return s}function Za(a,s){return JSON.stringify(Pa(a))===JSON.stringify(Pa(s))}function Yt(a){if(!a)return"custom";const s=Ya();for(const n of["relaxed","balanced","strict"])if(Za(a,s[n]))return n;return"custom"}function cn(a){return e(a==="relaxed"?"queue.presetRelaxed":a==="balanced"?"queue.presetBalanced":a==="strict"?"queue.presetStrict":"queue.presetCustom")}function es(a,{unsaved:s=!1}={}){const n=cn(a),o=a==="relaxed"?"relaxed":a==="balanced"?"balanced":a==="strict"?"strict":"custom",i=s?I("queue.presetFormLabel",{name:n}):I("queue.presetActiveLabel",{name:n});return`<span class="ddos-preset-badge is-${o}" id="queue-preset-badge" title="${t(i)}">${t(i)}</span>`}function ts(){return{enabled:document.getElementById("q-master-enabled")?Ue("q-master-enabled"):!0,globalConcurrency:Math.max(1,Math.min(64,Math.floor(W("qp-gconc",4)))),perKeyConcurrency:Math.max(1,Math.min(16,Math.floor(W("qp-kconc",1)))),maxQueueDepth:Math.max(1,Math.floor(W("qp-depth",100))),maxQueueDepthPerKey:Math.max(1,Math.floor(W("qp-depthk",20))),fairness:document.getElementById("qp-fair")?.value==="fifo_global"?"fifo_global":"weighted_round_robin",defaultPriority:Math.max(0,Math.min(1e3,Math.floor(W("qp-pri",100)))),playgroundPriority:Math.max(0,Math.min(1e3,Math.floor(W("qp-ppri",50)))),leaseMs:Math.max(5e3,Math.floor(W("qp-lease",45e3))),maxWaitMs:Math.max(5e3,Math.floor(W("qp-wait",6e5)))}}function Bt(a){We("q-master-enabled",a,e("queue.masterOn"),e("queue.masterOff")),Qe("queue-root",!a),Ge("queue-disabled-banner",!a);const s=document.getElementById("qk-pill-enabled");s&&(s.innerHTML=Ce(a,e("dash.on"),e("dash.off")))}function un(a){if(!a)return;const s=(o,i)=>{const r=document.getElementById(o);r&&(r.value=String(i))};Bt(a.enabled!==!1),s("qp-gconc",a.globalConcurrency),s("qp-kconc",a.perKeyConcurrency),s("qp-depth",a.maxQueueDepth),s("qp-depthk",a.maxQueueDepthPerKey);const n=document.getElementById("qp-fair");n&&(n.value=a.fairness||"weighted_round_robin"),s("qp-pri",a.defaultPriority),s("qp-ppri",a.playgroundPriority),s("qp-lease",a.leaseMs),s("qp-wait",a.maxWaitMs),ot()}function ot(){if(!document.getElementById("queue-policy-panel"))return;let a;try{a=ts()}catch{return}const s=Yt(a),n=Yt(c._queuePolicyCache||a),o=!Za(a,c._queuePolicyCache||a);document.querySelectorAll("[data-queue-preset]").forEach(d=>{const u=d.dataset.queuePreset;if(u==="custom"){const b=s==="custom";d.classList.toggle("is-active",b),d.setAttribute("aria-pressed",b?"true":"false"),d.disabled=!b;return}const m=u===s,p=u===n;d.classList.toggle("is-active",m),d.classList.toggle("is-saved",p&&!m),d.setAttribute("aria-pressed",m?"true":"false");const l=e(u==="relaxed"?"queue.presetRelaxed":u==="balanced"?"queue.presetBalanced":"queue.presetStrict");m&&p?d.innerHTML=`${t(l)} <span class="preset-tag">${t(e("queue.presetTagActive"))}</span>`:m&&o?d.innerHTML=`${t(l)} <span class="preset-tag preset-tag--draft">${t(e("queue.presetTagDraft"))}</span>`:p?d.innerHTML=`${t(l)} <span class="preset-tag preset-tag--saved">${t(e("queue.presetTagSaved"))}</span>`:d.textContent=l});const i=document.getElementById("queue-preset-badge");i&&(i.outerHTML=es(s,{unsaved:o&&s!==n}));const r=document.getElementById("queue-preset-hint");if(r){const d={relaxed:e("queue.presetRelaxedHint"),balanced:e("queue.presetBalancedHint"),strict:e("queue.presetStrictHint"),custom:e("queue.presetCustomHint")};r.textContent=d[s]||d.custom}}function mn(){document.querySelectorAll("[data-queue-preset]").forEach(a=>{a.dataset.queuePreset!=="custom"&&(a.onclick=()=>{const s=a.dataset.queuePreset,n=Ya()[s];n&&un(n)})}),["qp-gconc","qp-kconc","qp-depth","qp-depthk","qp-fair","qp-pri","qp-ppri","qp-lease","qp-wait"].forEach(a=>{const s=document.getElementById(a);s&&(s.addEventListener("change",()=>ot()),s.addEventListener("input",()=>ot()))}),ot()}function Ea(){return document.querySelector(".main")}function as(a){return a.map(s=>{const n=s.status==="queued"||s.status==="leased"||s.status==="running",o=s.status==="failed"||s.status==="dead"||s.status==="cancelled",i=s.startedAt||s.finishedAt?null:s.queuedAt?Date.now()-new Date(s.queuedAt).getTime():null;return`
    <tr data-q-row="${t(s.id)}">
      <td>
        <div class="cell-primary mono" title="${t(s.id||"")}">${t((s.id||"").slice(0,10))}…</div>
        <div class="cell-sub mono" title="${t(s.requestId||"")}">${t((s.requestId||"").slice(0,18))}${(s.requestId||"").length>18?"…":""}</div>
        ${s.errorMessage?`<div class="queue-job-err" title="${t(s.errorMessage)}">${t(String(s.errorMessage).slice(0,80))}</div>`:""}
      </td>
      <td>${ms(s.source)}</td>
      <td>
        ${us(s.status)}
        ${s.cancelRequested?`<div class="cell-sub">${t(e("queue.cancelReq"))}</div>`:""}
      </td>
      <td class="mono" title="${t(s.model||"")}">${t(s.model||"—")}</td>
      <td><span class="queue-pri">${s.priority??"—"}</span></td>
      <td>
        <div class="cell-primary mono" title="${t(s.apiKeyId||"")}">${t((s.apiKeyId||"").slice(0,8))}…</div>
      </td>
      <td class="mono">${s.attempt??0}<span class="muted">/${s.maxAttempts??1}</span></td>
      <td>
        <div class="cell-primary">${Z(s.queuedAt)}</div>
        ${i!=null&&s.status==="queued"?`<div class="cell-sub" data-q-wait>${t(e("queue.wait"))}: ${At(i)}</div>`:s.startedAt?`<div class="cell-sub">${t(e("queue.started"))}: ${Z(s.startedAt)}</div>`:""}
      </td>
      <td>
        <div class="row-actions">
        ${n?`<button type="button" class="btn danger sm" data-q-cancel="${t(s.id)}">${t(e("queue.cancel"))}</button>`:""}
        ${s.status==="queued"?`<button type="button" class="btn secondary sm" data-q-pri="${t(s.id)}" data-pri="${s.priority}">${t(e("queue.priorityBtn"))}</button>`:""}
        ${o?`<button type="button" class="btn secondary sm" data-q-requeue="${t(s.id)}">${t(e("queue.requeue"))}</button>`:""}
        </div>
      </td>
    </tr>`}).join("")}function ss(){document.querySelectorAll("[data-q-cancel]").forEach(a=>{a.onclick=async()=>{await V({title:e("queue.cancel"),message:e("queue.cancelConfirm"),variant:"danger",confirmText:e("queue.cancel")})&&(await P(`/queue/jobs/${a.dataset.qCancel}/cancel`,{method:"POST",body:"{}"}),se().catch($))}}),document.querySelectorAll("[data-q-requeue]").forEach(a=>{a.onclick=async()=>{await P(`/queue/jobs/${a.dataset.qRequeue}/requeue`,{method:"POST",body:"{}"}),se().catch($)}}),document.querySelectorAll("[data-q-pri]").forEach(a=>{a.onclick=async()=>{const s=Number(a.dataset.pri)||100,n=window.prompt(e("queue.priorityPh"),String(s));if(n==null)return;const o=Number(n);!Number.isFinite(o)||o<0||o>1e3||(await P(`/queue/jobs/${a.dataset.qPri}/priority`,{method:"POST",body:JSON.stringify({priority:o})}),se().catch($))}})}function ns(a){return a.enabled?a.paused?e("queue.paused"):a.drainMode?e("queue.drain"):e("queue.running"):e("queue.modeOff")}function pn({s:a,pol:s,jobs:n,total:o,by:i}){const r=a.dead??i.dead??0,d=a.leased??i.leased??0,u=a.running??i.running??0,m=a.queued??i.queued??0,p=a.depth??m+d+u,l=ns(s),b=s.fairness==="fifo_global"?e("queue.fifo"):e("queue.wrr"),h=(g,k)=>{const x=document.getElementById(g);x&&(x.textContent=k)},f=(g,k)=>{const x=document.getElementById(g);x&&(x.innerHTML=k)};h("qk-depth",String(p)),h("qk-depth-sub",I("queue.kpiDepthSub",{q:m,l:d})),f("qk-running",`${u}<span class="dash-kpi-den">/${s.globalConcurrency??"—"}</span>`),h("qk-running-sub",I("queue.kpiActiveSub",{n:a.workerActive??0})),h("qk-queued",String(m)),h("qk-dead",String(r)),h("qk-oldest",a.oldestQueuedAgeMs?At(a.oldestQueuedAgeMs):"—"),h("qk-mode",l),h("qk-mode-sub",b);const v=document.getElementById("qk-worker-id");if(v){const g=a.workerId||"—";v.textContent=g,v.title=g}const y=(g,k,x,N)=>{const K=document.getElementById(g);K&&(K.outerHTML=`<span id="${g}">${Ce(k,x,N)}</span>`)};y("qk-pill-enabled",s.enabled!==!1,e("dash.on"),e("dash.off")),y("qk-pill-consumer",!s.paused&&s.enabled!==!1,e("queue.running"),s.paused?e("queue.paused"):e("queue.modeOff")),y("qk-pill-admission",!s.drainMode,e("queue.accepting"),e("queue.drain")),h("qk-fairness-val",b),h("qk-conc-val",`${s.perKeyConcurrency??1} / ${s.globalConcurrency??"—"}`);const w=document.getElementById("queue-dlq-slot");w&&(r>0?(w.innerHTML=`
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
        </div>`,document.getElementById("q-filter-dead")?.addEventListener("click",()=>{Q.status="dead",Q.offset=0,Q.tab="jobs",se().catch($)})):w.innerHTML="");const C=(g,k)=>{const x=document.getElementById(g);x&&(x.textContent=String(k??0))};C("q-tab-count-jobs",o),C("q-tab-count-dead",r);const A=document.getElementById("qk-jobs-meta");A&&(A.textContent=I("queue.jobsMeta",{n:o}));const T=document.querySelector("#queue-jobs-table tbody");if(T){const g=n.map(x=>`${x.id}|${x.status}|${x.priority}|${x.attempt}|${x.cancelRequested?1:0}|${x.errorMessage||""}|${x.startedAt||""}|${x.finishedAt||""}`).join(";"),k=as(n)||`<tr class="empty-row"><td colspan="9">
        <div class="data-empty">
          <div class="data-empty-icon">∅</div>
          <strong>${t(e("queue.empty"))}</strong>
        </div>
      </td></tr>`;if(T.dataset.qsig!==g){const x=document.querySelector("#queue-jobs-table .table-wrap"),N=x?.scrollLeft||0;T.dataset.qsig=g,T.innerHTML=k,ss(),x&&(x.scrollLeft=N)}else n.forEach(x=>{if(x.status!=="queued"||!x.queuedAt)return;const N=Date.now()-new Date(x.queuedAt).getTime(),K=String(x.id||"");let E=null;T.querySelectorAll("[data-q-row]").forEach(j=>{j.getAttribute("data-q-row")===K&&(E=j)});const _=E?.querySelector("[data-q-wait]");_&&(_.textContent=`${e("queue.wait")}: ${At(N)}`)})}if(document.querySelector("#queue-pager .data-pager-meta span")){const g=Math.max(1,Math.ceil((o||0)/Q.limit)||1),k=Math.floor(Q.offset/Q.limit)+1,x=document.querySelectorAll("#queue-pager .data-pager-meta > span");x[0]&&(x[0].textContent=I("common.pagerTotal",{n:o||0})),x[1]&&(x[1].textContent=I("common.pagerPage",{n:k,total:g}));const N=document.getElementById("queue-prev"),K=document.getElementById("queue-next");N&&(N.disabled=Q.offset<=0),K&&(K.disabled=Q.offset+Q.limit>=o)}const H=document.getElementById("q-pause");H&&(H.textContent=s.paused?e("queue.resume"):e("queue.pause"));const G=document.getElementById("q-drain");G&&(G.textContent=s.drainMode?e("queue.undrain"):e("queue.drainBtn"));const J=document.getElementById("q-master-enabled");J&&document.activeElement!==J&&Bt(s.enabled!==!1)}function xa(){je||(je=setInterval(()=>{if(c.page!=="queue"){clearInterval(je),je=null;return}const a=document.activeElement;a&&a.closest&&a.closest("#queue-policy-panel")&&(a.tagName==="INPUT"||a.tagName==="SELECT"||a.tagName==="TEXTAREA")||se({soft:!0}).catch(()=>{})},4e3))}async function se(a={}){const s=!!a.soft&&document.getElementById("queue-root");!s&&je&&(clearInterval(je),je=null);const n=Ea(),o=!s&&n?n.scrollTop:0,i=Q,r=new URLSearchParams;r.set("limit",String(i.limit)),r.set("offset",String(i.offset)),i.status&&r.set("status",i.status);const[d,u,m]=await Promise.all([P("/queue/stats"),P(`/queue/jobs?${r}`),P("/queue/policy")]);if(c.page!=="queue")return;const p=d.data||{},l=m.data||p.policy||{},b=u.data||[],h=u.total??b.length,f=p.byStatus||{},v=p.dead??f.dead??0,y=p.leased??f.leased??0,w=p.running??f.running??0,C=p.queued??f.queued??0,A=p.depth??C+y+w,T=ns(l);if(c._queuePolicyCache={...l},s){pn({s:p,pol:l,jobs:b,total:h,by:f}),xa();return}Q.tab||(Q.tab="overview");const M=Q.tab==="jobs"||Q.tab==="policy"?Q.tab:"overview";Q.tab=M;const H=as(b),G=He({title:e("queue.filterTitle"),hint:e("queue.filterHint"),meta:I("queue.jobsMeta",{n:h}),gridHtml:`
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
      </label>`}),J=be({headHtml:`
      <th>${t(e("queue.colJob"))}</th>
      <th>${t(e("queue.colSource"))}</th>
      <th>${t(e("queue.colStatus"))}</th>
      <th>${t(e("queue.colModel"))}</th>
      <th>${t(e("queue.colPri"))}</th>
      <th>${t(e("queue.colKey"))}</th>
      <th>${t(e("queue.colTry"))}</th>
      <th>${t(e("queue.colTime"))}</th>
      <th>${t(e("common.actions"))}</th>`,bodyHtml:H,colSpan:9,emptyText:e("queue.empty"),pagerHtml:ke({total:h,limit:i.limit,offset:i.offset,idPrefix:"queue"})}),g=l.fairness==="fifo_global"?e("queue.fifo"):e("queue.wrr"),k=l.enabled!==!1,x=(O,F,S,D,ae)=>`
    <div class="card">
      <div class="label">${t(O)}</div>
      <div class="value value-sm" id="${t(D)}">${F}</div>
      ${S!=null&&S!==""?`<div class="muted card-sub"${ae?` id="${t(ae)}"`:""}>${t(String(S))}</div>`:""}
    </div>`,N=`
    <div class="grid queue-kpi-grid" id="queue-kpi-grid">
      ${x(e("queue.depth"),t(String(A)),I("queue.kpiDepthSub",{q:C,l:y}),"qk-depth","qk-depth-sub")}
      ${x(e("queue.activeJobs"),`${w}<span class="dash-kpi-den">/${l.globalConcurrency??"—"}</span>`,I("queue.kpiActiveSub",{n:p.workerActive??0}),"qk-running","qk-running-sub")}
      ${x(e("queue.queued"),t(String(C)),e("queue.kpiQueuedSub"),"qk-queued","qk-queued-sub")}
      ${x(e("queue.dead"),t(String(v)),e("queue.kpiDeadSub"),"qk-dead","qk-dead-sub")}
      ${x(e("queue.oldest"),t(p.oldestQueuedAgeMs?At(p.oldestQueuedAgeMs):"—"),e("queue.kpiOldestSub"),"qk-oldest","qk-oldest-sub")}
      ${x(e("queue.mode"),t(T),g,"qk-mode","qk-mode-sub")}
    </div>`,K=`
    <div class="panel data-table-panel queue-status-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("queue.statusPanel"))}</strong>
          <span class="muted panel-h-sub">${t(e("queue.statusPanelHint"))}</span>
        </div>
      </div>
      <div class="panel-pad">
        <div class="queue-status-row queue-status-row--6">
          <div class="queue-status-item">
            <span class="label">${t(e("queue.enabled"))}</span>
            <span id="qk-pill-enabled">${Ce(l.enabled!==!1,e("dash.on"),e("dash.off"))}</span>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.consumer"))}</span>
            <span id="qk-pill-consumer">${Ce(!l.paused&&l.enabled!==!1,e("queue.running"),l.paused?e("queue.paused"):e("queue.modeOff"))}</span>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.admission"))}</span>
            <span id="qk-pill-admission">${Ce(!l.drainMode,e("queue.accepting"),e("queue.drain"))}</span>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.fairness"))}</span>
            <strong class="queue-status-val" id="qk-fairness-val">${t(g)}</strong>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.concurrency"))}</span>
            <strong class="queue-status-val mono" id="qk-conc-val">${l.perKeyConcurrency??1} / ${l.globalConcurrency??"—"}</strong>
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
    </div>`,E=`
    ${G}
    <div id="queue-jobs-table" class="queue-jobs-table-host">${J}</div>`,_=`
    <div class="panel data-table-panel queue-policy-panel" id="queue-policy-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("queue.policyTitle"))}</strong>
          <span class="muted panel-h-sub">${t(e("queue.policyHint"))}</span>
        </div>
        ${es(Yt(l))}
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
            <input type="number" id="qp-gconc" min="1" max="64" value="${Number(l.globalConcurrency)||2}" />
            <span class="hint">${t(e("queue.hintGlobalConc"))}</span>
          </label>
          <label>${t(e("queue.perKeyConcurrency"))}
            <input type="number" id="qp-kconc" min="1" max="16" value="${Number(l.perKeyConcurrency)||1}" />
            <span class="hint">${t(e("queue.hintPerKeyConc"))}</span>
          </label>
          <label>${t(e("queue.maxDepth"))}
            <input type="number" id="qp-depth" min="1" value="${Number(l.maxQueueDepth)||100}" />
            <span class="hint">${t(e("queue.hintMaxDepth"))}</span>
          </label>
          <label>${t(e("queue.maxDepthKey"))}
            <input type="number" id="qp-depthk" min="1" value="${Number(l.maxQueueDepthPerKey)||20}" />
            <span class="hint">${t(e("queue.hintMaxDepthKey"))}</span>
          </label>
          <label>${t(e("queue.fairness"))}
            <select id="qp-fair">
              <option value="weighted_round_robin" ${l.fairness==="weighted_round_robin"?"selected":""}>${t(e("queue.wrr"))}</option>
              <option value="fifo_global" ${l.fairness==="fifo_global"?"selected":""}>${t(e("queue.fifo"))}</option>
            </select>
            <span class="hint">${t(e("queue.hintFairness"))}</span>
          </label>
          <label>${t(e("queue.defaultPriority"))}
            <input type="number" id="qp-pri" min="0" max="1000" value="${Number(l.defaultPriority)||100}" />
          </label>
          <label>${t(e("queue.playgroundPriority"))}
            <input type="number" id="qp-ppri" min="0" max="1000" value="${Number(l.playgroundPriority)||50}" />
          </label>
          <label>${t(e("queue.leaseMs"))}
            <input type="number" id="qp-lease" min="5000" step="1000" value="${Number(l.leaseMs)||45e3}" />
            <span class="hint">${t(e("queue.hintLease"))}</span>
          </label>
          <label>${t(e("queue.maxWaitMs"))}
            <input type="number" id="qp-wait" min="5000" step="1000" value="${Number(l.maxWaitMs)||6e5}" />
            <span class="hint">${t(e("queue.hintMaxWait"))}</span>
          </label>
        </div>
        <div class="toolbar settings-save-bar">
          <button type="button" class="btn sm" id="qp-save">${t(e("queue.savePolicy"))}</button>
        </div>
      </div>
    </div>`;if(document.getElementById("app").innerHTML=ne(`
  <div id="queue-root" class="${k?"":"is-feature-off"}">
    <div class="topbar">
      <h2>${t(e("queue.title"))}</h2>
      <div class="toolbar">
        ${la({id:"q-master-enabled",on:k,onLabel:e("queue.masterOn"),offLabel:e("queue.masterOff"),title:e("queue.masterHint")})}
        <button type="button" class="btn secondary sm" id="q-pause">${t(l.paused?e("queue.resume"):e("queue.pause"))}</button>
        <button type="button" class="btn secondary sm" id="q-drain">${t(l.drainMode?e("queue.undrain"):e("queue.drainBtn"))}</button>
        <button type="button" class="btn danger sm" id="q-purge">${t(e("queue.purgeDead"))}</button>
      </div>
    </div>
    ${we([e("queue.subtitle")])}
    <div class="feature-off-banner" id="queue-disabled-banner" ${k?"hidden":""} role="status">
      <strong>${t(e("common.featureOff"))}</strong>
      <span>${t(e("queue.disabledBanner"))}</span>
    </div>

    ${N}

    <div class="usage-tabs-panel panel queue-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("queue.title"))}">
        <button type="button" role="tab" class="seg-tab ${M==="overview"?"is-active":""}" data-queue-tab="overview" aria-selected="${M==="overview"}">
          ${t(e("queue.tabOverview"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${M==="jobs"?"is-active":""}" data-queue-tab="jobs" aria-selected="${M==="jobs"}">
          ${t(e("queue.tabJobs"))}
          <span class="seg-tab-count" id="q-tab-count-jobs">${h}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${M==="policy"?"is-active":""}" data-queue-tab="policy" aria-selected="${M==="policy"}">
          ${t(e("queue.tabPolicy"))}
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane queue-tab-pane-overview" id="queue-tab-overview" ${M==="overview"?"":"hidden"}>
          ${K}
        </div>
        <div class="usage-tab-pane queue-tab-pane-jobs" id="queue-tab-jobs" ${M==="jobs"?"":"hidden"}>
          ${E}
        </div>
        <div class="usage-tab-pane queue-tab-pane-policy" id="queue-tab-policy" ${M==="policy"?"":"hidden"}>
          ${_}
        </div>
      </div>
    </div>
  </div>
  `),oe(),document.querySelectorAll("[data-queue-tab]").forEach(O=>{O.addEventListener("click",()=>{const F=O.getAttribute("data-queue-tab")||"overview";F!=="overview"&&F!=="jobs"&&F!=="policy"||Q.tab!==F&&(Q.tab=F,se().catch($))})}),o>0){const O=Ea();O&&(O.scrollTop=o,requestAnimationFrame(()=>{O.scrollTop=o}))}document.getElementById("q-master-enabled").onclick=async()=>{const O=!Ue("q-master-enabled");Bt(O);try{const F=await P("/queue/policy",{method:"PUT",body:JSON.stringify({enabled:O})});c._queuePolicyCache={...c._queuePolicyCache||{},...F.data||{enabled:O}},ot()}catch(F){Bt(!O),$(F)}},document.getElementById("q-pause").onclick=async()=>{await P(l.paused?"/queue/resume":"/queue/pause",{method:"POST",body:"{}"}),se().catch($)},document.getElementById("q-drain").onclick=async()=>{await P(l.drainMode?"/queue/undrain":"/queue/drain",{method:"POST",body:"{}"}),se().catch($)};let j=!1;const me=async()=>{if(!j){j=!0;try{if(!await V({title:e("queue.purgeTitle"),message:e("queue.purgeConfirm"),variant:"danger",confirmText:e("queue.purgeConfirmBtn"),cancelText:e("common.cancel")}))return;const F=await P("/queue/purge-dead",{method:"POST",body:"{}"}),S=Number(F?.data?.deleted??0);await le({title:e("queue.purgeDoneTitle"),message:I("queue.purgeDoneMsg",{n:S}),confirmText:e("common.ok")}),await se()}finally{j=!1}}},L=document.getElementById("queue-root");L&&(L.onclick=O=>{O.target?.closest?.("#q-purge, #q-purge-dlq")&&(O.preventDefault(),me().catch($))}),document.getElementById("q-filter-dead")?.addEventListener("click",()=>{Q.status="dead",Q.offset=0,Q.tab="jobs",se().catch($)}),document.querySelectorAll("[data-filter-apply]").forEach(O=>{O.onclick=()=>{Q.status=document.getElementById("qf-status")?.value||"",Q.offset=0,se().catch($)}}),document.querySelectorAll("[data-filter-reset]").forEach(O=>{O.onclick=()=>{Q.status="",Q.offset=0,se().catch($)}}),Ze("queue",Q,()=>se().catch($)),document.getElementById("qp-save").onclick=async()=>{const O=ts();await P("/queue/policy",{method:"PUT",body:JSON.stringify(O)}),c._queuePolicyCache={...c._queuePolicyCache||{},...O},R(""),se().catch($)},mn(),ss(),xa()}c.page=ls();(!location.hash||location.hash==="#"||location.hash==="#/")&&aa(c.page);window.addEventListener("hashchange",()=>{const a=ta(location.hash);a&&a!==c.page&&na(a,{writeHash:!1})});window.addEventListener("popstate",()=>{const a=ta(location.hash);!a||a===c.page||na(a,{writeHash:!1})});Lt();
//# sourceMappingURL=boot.js.map
