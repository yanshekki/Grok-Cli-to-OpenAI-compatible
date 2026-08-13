const Aa="gog_admin_lang",Ft={en:{brand:"Grok Gateway",brandSub:"Admin Panel",loginTitle:"Admin",loginLabel:"API Key",loginOtpLabel:"One-time login code",loginBtn:"Sign in",loginCmdHint:"Get a key in terminal:",loginOtpHint:"Generate a code in terminal (required every login):",loginOtpExpiry:"Code expires in 5 minutes and can be used only once.",loginOtpFail:"Invalid or expired code",loginLostKey:"Lost old key? Create a new admin key (plaintext is not stored).",loginCopy:"Copy",loginCopied:"Copied",needKey:"Enter API key",needOtp:"Enter the one-time code from the terminal",logout:"Log out",shell:{menu:"Open menu",closeMenu:"Close menu"},nav:{dashboard:"Dashboard",chat:"Chat",chats:"Chat logs",keys:"API Keys",documents:"Documents",media:"Media",audit:"Audit Logs",settings:"Safety",apiFeatures:"API features",usage:"Usage & Limits",ddos:"DDoS Center",queue:"Queue",pm2:"PM2",system:"System"},queue:{title:"Chat queue",subtitle:"Pause, drain, requeue, and tune concurrency.",paused:"Paused",running:"Consuming",drain:"Drain mode",mode:"Mode",modeOff:"Disabled",depth:"Depth",queued:"Queued",leased:"Leased",activeJobs:"Running",dead:"Dead letter",oldest:"Oldest wait",concurrency:"Per-key / global",worker:"In-process workers",workerInstance:"Worker instance",workerInstanceHint:"This process’s consumer ID (lease owner). Changes on restart.",kpiActiveSub:"{n} active in this process",consumer:"Consumer",admission:"Admission",accepting:"Accepting jobs",pause:"Pause",resume:"Resume",drainBtn:"Drain",undrain:"Stop drain",savePolicy:"Save policy",refresh:"Refresh",jobs:"Jobs",tabOverview:"Overview",tabJobs:"Jobs",tabPolicy:"Policy",jobsMeta:"{n} matching",cancel:"Cancel",requeue:"Requeue",purgeDead:"Purge DLQ & old jobs",purgeTitle:"Purge finished jobs?",purgeConfirm:"Deletes all dead-letter (DLQ) jobs now, plus succeeded / failed / cancelled jobs finished more than 24 hours ago.",purgeConfirmBtn:"Delete",purgeDoneTitle:"Purge complete",purgeDoneMsg:"Deleted {n} job(s).",cancelConfirm:"Cancel this job? If it is running, cancellation is cooperative.",empty:"No jobs match this filter",enabled:"Queue enabled",masterOn:"Queue on",masterOff:"Queue off",masterHint:"Master switch for the durable chat queue. Applies immediately.",disabledBanner:"Queue is disabled — new chat requests bypass the queue and run immediately (subject to concurrency limits).",globalConcurrency:"Global concurrency",perKeyConcurrency:"Per-key concurrency",maxDepth:"Max queue depth",maxDepthKey:"Max per key",fairness:"Fairness",fifo:"Global FIFO",wrr:"Weighted round-robin",playgroundPriority:"Playground priority (lower first)",defaultPriority:"Default priority",leaseMs:"Lease (ms)",maxWaitMs:"Max wait (ms)",filterTitle:"Filter jobs",filterHint:"Filter by status. Auto-refreshes.",filterStatus:"Status",allStatuses:"All statuses",filterDead:"Dead letter (DLQ)",filterQueued:"Queued",filterRunning:"Running / leased",filterFailed:"Failed",filterSucceeded:"Succeeded",filterCancelled:"Cancelled",errorCol:"Error",priorityBtn:"Priority",priorityPh:"Priority (0–1000, lower first)",dlqTitle:"Dead letter queue",dlqHint:"Jobs that exhausted retries — requeue or purge when ready.",viewDlq:"View DLQ",statusPanel:"Runtime status",statusPanelHint:"Live consumer, admission, and worker identity. Auto-refreshes every few seconds.",policyTitle:"Queue policy",policyHint:"Pick a scheme or fine-tune values. Save to apply. Editing pauses auto-refresh.",presetTitle:"Policy schemes",presetHint:"One-click presets. Active = matches form · Saved = currently stored.",presetRelaxed:"Relaxed",presetBalanced:"Balanced",presetStrict:"Strict",presetCustom:"Custom",presetRelaxedHint:"Higher concurrency and deeper queues — better for multi-key playgrounds and burst traffic.",presetBalancedHint:"Default production balance: fair round-robin, moderate depth, one job per key.",presetStrictHint:"Tight limits + global FIFO — protects the host when traffic is untrusted or resource is scarce.",presetCustomHint:"Values do not match a built-in scheme. Adjust fields or pick a scheme above.",presetActiveLabel:"Active: {name}",presetFormLabel:"Draft: {name}",presetTagActive:"Active",presetTagDraft:"Draft",presetTagSaved:"Saved",hintGlobalConc:"Max jobs running at once across all keys",hintPerKeyConc:"Max concurrent jobs for a single API key",hintMaxDepth:"Reject new jobs when total queue is full",hintMaxDepthKey:"Reject when this key has too many waiting/running jobs",hintFairness:"WRR shares capacity across keys; FIFO is global order by priority/time",hintLease:"How long a worker holds a job before reclaim",hintMaxWait:"Client wait timeout while queued",colJob:"Job / request",colSource:"Source",colStatus:"Status",colModel:"Model",colPri:"Pri",colKey:"API key",colTry:"Try",colTime:"Queued",stQueued:"queued",stLeased:"leased",stRunning:"running",stSucceeded:"succeeded",stFailed:"failed",stDead:"dead",stCancelled:"cancelled",srcV1:"API",srcPlayground:"Playground",kpiDepthSub:"{q} queued · {l} leased",kpiQueuedSub:"Waiting for a worker",kpiDeadSub:"Exhausted attempts",kpiOldestSub:"Head of queue wait",wait:"Wait",started:"Started",cancelReq:"Cancel requested"},chat:{title:"Chat",new:"New chat",send:"Send",stop:"Stop",stopped:"stopped",placeholder:"Message… (Enter to send, Shift+Enter newline)",keyMode:"API key",keySelect:"API key",useSessionKey:"Signed-in admin key",useCustomKey:"Custom key",customKey:"Key",includeReasoning:"Show reasoning",resume:"Resume",resumePh:"Grok session UUID",resumeHint:"Continue a Grok CLI session (--resume)",fork:"Fork",memory:"Memory",noPlan:"No plan",permission:"Permission",effort:"Effort",effortDefault:"Default",effort_none:"None",effort_minimal:"Minimal",effort_low:"Low",effort_medium:"Medium",effort_high:"High",effort_xhigh:"X high",effort_max:"Max",tokens:"Tokens",cacheTokens:"cache",cost:"Cost",reasoning:"Thinking",needKey:"Enter or select an API key",attach:"Upload",attachLibrary:"From library",attachHint:"Drop files anywhere on this page, upload, or pick from library",dropTitle:"Drop files to attach",dropHint:"Release to upload — same formats as the attach button",formatsLabel:"Formats",formatsHint:"txt, md, csv, json, xml, html, pdf, images (png/jpg/webp/gif), code (js/ts/py/go/rs/java/c/cpp/css/yml/sql/sh…)",formatsReject:"Unsupported type: {name}. Allowed: {formats}",libraryTitle:"Previously uploaded files",librarySubtitle:"Select files owned by the current API key (same formats as upload).",librarySearch:"Search by name…",libraryEmpty:"No matching files for this key",libraryAdd:"Add selected",librarySelected:"{n} selected",libraryAlready:"Already attached",libraryLoadFail:"Could not load documents",uploading:"Uploading…",uploadFail:"Upload failed",uploadProgress:"Uploading {name}",uploadProgressMulti:"Uploading {name} ({i}/{n})",emptyTitle:"Start a conversation",emptyHint:"Send a message or attach files. Open a previous chat from the history panel to continue.",needContent:"Type a message or attach at least one file",tooManyFiles:"Too many files (max 10 per message)",fileOnlyPrompt:"Please review the attached files.",removeFile:"Remove",docs:"Attachments",you:"You",assistant:"Assistant",streaming:"Streaming…",emptyReply:"(empty reply)",systemPrompt:"System prompt",systemPlaceholder:"Optional system instructions for the model…",systemHint:"Sent as a system message on every turn. Not shown in the chat bubbles.",history:"History",historyEmpty:"No saved conversations yet",historySearch:"Search topics…",historyOpen:"Show history",historyClose:"Close history",rename:"Rename",renamePh:"Conversation topic",untitled:"Untitled chat",deleteConversation:"Delete",deleteConfirm:"Delete this conversation? This cannot be undone.",saveFail:"Could not save conversation",loadFail:"Could not load conversation",historyPrev:"Previous",historyNext:"Next",historyPage:"Page {n} / {total}",msgs:"{n} messages",compress:"Summarize for context",compressConfirm:"Generate a conversation summary for later turns? Your full chat history stays on screen. Only the model context is shortened. This uses one model call.",compressing:"Summarizing…",compressNeedMore:"Need at least 3 messages (or 2 long ones) to summarize. Continue chatting, then try again.",compressFail:"Could not create summary",compressNeedSummary:"Create a summary first (Summarize for context).",compressedBadge:"Summary",compressOk:"Summary ready — full history kept. Context mode set to summary.",compressBusy:"Wait for the current reply to finish",compressResultTitle:"Conversation summary",compressView:"View summary",summaryMeta:"Created: {when} · Based on {n} messages",ctxPolicyTitle:"Model context",ctxRemark:"Full messages stay visible. This only controls what is sent to the model next.",ctxMode:"Context",ctxModeFull:"Full history",ctxModeSummary:"Summary + recent",ctxModeRecent:"Recent only",ctxModeFullLabel:"Sending full history to the model",ctxModeSummaryLabel:"Sending summary + last {n} messages",ctxModeRecentLabel:"Sending last {n} messages only",ctxRecentN:"Recent N",ctxLongHint:"Long thread detected — consider Summary or Recent to reduce tokens and lag.",loadOlder:"Load {n} earlier messages",showMore:"Show more",showLess:"Show less",copy:"Copy",copied:"Copied",copyFail:"Copy failed"},status:{success:"success",error:"error",timeout:"timeout",pending:"pending",active:"active",finished:"finished",online:"online",stopped:"stopped"},dash:{title:"Dashboard",subtitle:"Traffic, queue, safety, and protection at a glance.",last24:"Requests (24h)",totalChat:"Total chats",success:"Success",errors:"Errors / timeout",docs:"Documents",keys:"Active keys",concurrent:"Grok concurrency",recent:"Recent API chats",empty:"No data yet",emptyModels:"No model traffic in the last 24h",updated:"Updated",refresh:"Refresh",viewAll:"View all",openDdos:"DDoS center",openSettings:"Safety",openQueue:"Open queue",kpi24h:"Requests (24h)",kpi24hSub:"{ok} ok · {err} errors",kpiSuccessRate:"Success rate (24h)",kpiSuccessRateSub:"All-time {all}%",kpiErrors:"Errors (24h)",kpiErrorsSub:"All-time {all}",kpiKeys:"API keys",kpiKeysSub:"Active / total",kpiDocs:"Documents",kpiMedia:"Media assets",kpiMediaSub:"{n} in 24h",kpiDocsSub:"Stored files",kpiConv:"Playground threads",kpiConvSub:"{n} updated in 24h",kpiSessions:"OTP sessions",kpiSessionsSub:"Active admin logins",kpiConcurrent:"Grok concurrency",kpiConcurrentSub:"Active / max slots",kpiQueue:"Chat queue",kpiQueueSub:"Depth · running / max · dead",kpiQueueSubLive:"{run}/{max} run · {dead} dead{wait}",kpiQueuePaused:"Paused",kpiQueueDrain:"Drain",kpiQueueOff:"Disabled",kpiSafe:"Global safe",kpiSafeOn:"On",kpiSafeOff:"Off",kpiSafeSub:"{tools} · turns {turns} · {model}",kpiSafeSubEmpty:"Settings unavailable",queuePanel:"Chat queue",queueState:"State",queueLive:"Live",qQueued:"Queued",qRunning:"Running",qDead:"Dead",qSucceeded:"Succeeded",qWorker:"Worker",qWorkerActive:"active slots",qOldest:"oldest wait",qUnavailable:"Queue stats unavailable",safety:"Safety settings",globalSafe:"Global safe mode",safeTools:"Tools",safeTurns:"Max turns",safeTimeout:"Timeout",defaultModel:"Default model",safetyHint:"Affects safe-mode keys and forced-safe traffic. Playground OTP sessions use agent mode unless global safe is on.",protection:"Protection",autoBan:"Auto-ban",on:"On",off:"Off",ruleAuth:"Auth",ruleRate:"429",ruleConn:"Conn",ruleVelocity:"Velocity",bans:"Blacklist",blocked:"Blocked hits",rateHits:"Rate-limit hits",liveConn:"Live connections",proxy:"Proxy IP",hops:"hops",limits:"Key/IP limits",models24h:"Models (24h)",runtime:"Runtime",port:"Listen port",defaultPort:"default",env:"Environment",authMode:"Admin auth",authOtp:"OTP session",encryption:"Encryption",ready:"Ready",notReady:"Not ready"},chats:{title:"Chat history",total:"Total",decrypt:"Open a row to view decrypted content.",search:"Search",searchPh:"Request ID, key name, model…",filterTitle:"Search & filters",filterHint:"Filter, then open a row for full detail.",status:"Status",allStatus:"All statuses",model:"Model",allModels:"All models",apiKey:"API key",allKeys:"All keys",from:"From",to:"To",mode:"Mode",allModes:"All modes",hasDocs:"Has attachments",filter:"Apply filters",reset:"Reset",request:"Request",prompt:"Prompt",response:"Response",time:"Time",attachments:"Attachments",page:"Page",prev:"Previous",next:"Next",perPage:"Per page",detail:"Chat detail",noAttach:"No attachments",openFile:"Open / preview",close:"Close",copyPrompt:"Copy prompt",copyContent:"Copy content",copySystem:"Copy system prompt",copyRawPrompt:"Copy raw prompt",duration:"Duration",stream:"Stream",reasoning:"Reasoning / thought",content:"Content (output)",raw:"Raw stored response",rawPrompt:"Raw stored prompt",userPrompt:"User / conversation prompt",systemPrompt:"System prompt",systemHint:"Extracted from the stored prompt (system role messages).",noSystem:"No system prompt in this request.",hasSystem:"Has system",none:"(none)",file:"file",img:"img",previewFailed:"Preview failed"},keys:{title:"API Keys",new:"New key",searchPh:"Name or key prefix…",name:"Name",role:"Role",mode:"Mode",rate:"Rate / min",status:"Status",created:"Created",edit:"Edit",revoke:"Revoke",confirmRevoke:"Revoke this key?",empty:"No keys",usage24:"24h use",maxTurns:"Max turns",timeoutMs:"Timeout (ms)",ipWhitelist:"IP whitelist",ipWhitelistHint:"One IP or CIDR per line. Empty = allow all IPs.",ipWhitelistCol:"IP allow",ipAll:"All IPs",keyOnce:"Store this key securely — shown once:",roleClient:"client",roleAdmin:"admin",roleClientBadge:"client",roleAdminBadge:"admin",modeSafe:"safe (external)",modeAgent:"agent (full tools)",modeSafeBadge:"safe",modeAgentBadge:"agent",ipCount:"{n} IPs",ipPlaceholder:`127.0.0.1
203.0.113.0/24`},docs:{title:"Documents",total:"Total",file:"File",mime:"MIME",size:"Size",time:"Time",storage:"Storage",storageDb:"Database (encrypted)",storageFs:"Filesystem (encrypted)",storageHint:"Encrypted storage · DB under {dbMax}, files in {dir} · max {upMax}.",download:"Download",downloadFail:"Download failed",binaryPreview:"This is a binary file (e.g. PDF). Preview is not available — please use Download.",delete:"Delete",confirmDel:"Delete this document?",detail:"Document detail",preview:"Preview",copy:"Copy content",empty:"No documents",searchPh:"File name or MIME…",page:"Page",prev:"Previous",next:"Next"},audit:{title:"Audit logs",searchPh:"Action, resource, IP, key…",time:"Time",action:"Action",resource:"Resource",key:"Key",meta:"Meta",empty:"No logs",id:"ID",actions:{chat_create:"Chat create",document_upload:"Document upload",document_delete:"Document delete",document_list:"Document list",document_read:"Document read",document_download:"Document download",api_key_create:"API key create",api_key_update:"API key update",api_key_delete:"API key revoke",api_key_list:"API key list",settings_update:"Settings update",chat_admin_view:"Chat admin view",system_update:"System update",system_update_check:"Update check",ip_ban:"IP ban",ip_unban:"IP unban",ddos_policy_update:"DDoS policy update",pm2_start:"PM2 start",pm2_stop:"PM2 stop",pm2_restart:"PM2 restart",pm2_reload:"PM2 reload",pm2_config:"PM2 config",pm2_switch:"PM2 switch runner",playground_chat:"Playground chat",playground_upload:"Playground upload"},resources:{document:"Document",chat:"Chat",api_key:"API key",settings:"Settings",system:"System",pm2:"PM2",playground:"Playground",ip:"IP"},metaStorage:"Storage",metaAsKey:"As key id",metaAsKeyName:"As key name"},settings:{title:"Safety settings",hint:"Global safe mode for all keys.",globalSafe:"Global safe mode",globalSafeHint:"On = all keys safe. Off = each key’s own mode.",masterOn:"Safe mode on",masterOff:"Safe mode off",disabledBanner:"Global safe is off — keys use their own safe/agent mode.",tools:"Tools mode",toolsHint:"none: no shell/web/write. readonly: read/search only.",toolsNone:"none",toolsReadonly:"readonly",maxTurns:"Max turns",maxTurnsHint:"Safe-mode steps. Chat 3–6 · API 8–12 · multi-step 15–40.",timeout:"Timeout (ms)",timeoutHint:"Safe-mode deadline. 60s–120s normal · 300s–600s long jobs.",defaultModel:"Default model",defaultModelHint:"When client omits model.",modelSource:"Grok CLI",refreshModels:"Refresh models",panel:"Admin Panel",save:"Save",saved:"Saved",guideTitle:"Presets",guideIntro:"Apply, then tweak if needed.",guideApply:"Apply",guideActive:"Applied",guideApplyConfirm:"Apply “{name}” and save? Current values will be replaced.",guideApplied:"Preset saved",chipGlobalOn:"Safe: On",chipGlobalOff:"Safe: Off",scLocalTitle:"Local playground",scLocalDesc:"Full tools on your machine.",scLocalDetail:"Safe OFF · agent keys.",scProdTitle:"Public API",scProdDesc:"Least privilege for apps/customers.",scProdDetail:"Safe ON · tools none · turns 8–12 · 60–120s.",scCodeTitle:"Coding agent",scCodeDesc:"Trusted host only — edit & run.",scCodeDetail:"Safe OFF · agent keys.",scReadTitle:"Read-only",scReadDesc:"Explain/search code, no writes.",scReadDetail:"Safe ON · tools readonly · turns 8–15 · 120–180s.",scChatTitle:"Q&A only",scChatDesc:"Text answers, no tools.",scChatDetail:"Safe ON · tools none · turns 3–6 · 60s.",scLongTitle:"Long safe tasks",scLongDesc:"Many steps without max-turns fail.",scLongDetail:"Safe ON · none/readonly · turns 20–40 · 300–600s.",dangerTitle:"Danger zone",disablePanel:"Disable Admin Panel",disablePanelConfirm:"Disable panel and sign out? Re-enable: gctoac admin on",disablePanelDone:"Panel disabled. Re-enable: gctoac admin on",panelOffHint:"Turn off here. Re-enable on server: gctoac admin on",panelStatus:"Status",panelOn:"On",panelOff:"Off"},apiFeatures:{title:"API features",intro:"Toggle protocols & capabilities · applies in ~2s · no restart.",tabProtocols:"Protocols",tabMedia:"Media",tabCaps:"Capabilities",tabEmu:"Emulation",kpiEnabled:"Enabled",kpiEnabledSub:"Flags currently on",groupMeta:"{on} / {n} enabled",groupProtocols:"Protocol surfaces",groupMedia:"Media APIs (OpenAI-compatible)",groupCaps:"Grok CLI capabilities",groupEmu:"Emulation & safety",presetOpen:"Preset: Open",presetLocked:"Preset: Locked",presetDev:"Preset: Dev",presetConfirm:"Apply feature preset “{name}”? This overwrites all API feature flags.",flag:{openaiChat:"OpenAI Chat Completions",openaiResponses:"OpenAI Responses",anthropicMessages:"Anthropic Messages",imagesApi:"Images API",filesOpenAiAlias:"Files API alias",videoApi:"Videos API (async jobs)",audioApi:"Audio API (speech / STT)",tools:"Tools / function calling",structuredOutput:"Structured output (--json-schema)",vision:"Vision / image parts (--prompt-json)",reasoningEffort:"Reasoning effort",webSearch:"Web search tools",subagents:"Subagents",planMode:"Plan mode",memory:"Cross-session memory",sessionResume:"Session resume / continue",bestOfN:"best-of-n (removed in Grok 1.0+)",checkLoop:"Self-check loop (removed in Grok 1.0+)",systemOverride:"System prompt override",rules:"Extra rules",permissionMode:"Permission mode",sandbox:"Sandbox profile",usageEstimate:"Estimate token usage",assistantsEmulation:"Assistants-lite (local)",strictSampling:"Strict sampling (reject temperature…)",forceDisableToolsInSafe:"Force tool limits in safe mode"},hint:{openaiChat:"POST /v1/chat/completions",openaiResponses:"POST /v1/responses",anthropicMessages:"POST /v1/messages",imagesApi:"POST /v1/images/generations + /edits (agent key)",filesOpenAiAlias:"POST/GET /v1/files → documents + media store",videoApi:"POST /v1/videos + poll GET /v1/videos/:id",audioApi:"POST /v1/audio/speech + /transcriptions (needs provider)",tools:"Maps tools → Grok --tools + system tool list",structuredOutput:"response_format / json_schema",vision:"image_url content parts",reasoningEffort:"--reasoning-effort",webSearch:"When off: --disable-web-search",subagents:"--no-subagents when off",planMode:"--no-plan when off",memory:"--experimental-memory",sessionResume:"--resume / --continue",bestOfN:"Deprecated — Grok Build 1.0+ rejects this flag",checkLoop:"Deprecated — Grok Build 1.0+ rejects this flag",systemOverride:"--system-prompt-override",rules:"--rules",permissionMode:"--permission-mode",sandbox:"--sandbox",usageEstimate:"Fill usage with char/4 estimates",assistantsEmulation:"Local /v1/assistants + /v1/threads",strictSampling:"400 if temperature/top_p/stop sent",forceDisableToolsInSafe:"Keep safe-mode tool policy"}},media:{title:"Media library",intro:"Studio, assets, and video jobs. Needs imagesApi / tools (videoApi for video).",tabStudio:"Studio",tabAssets:"Assets",tabJobs:"Jobs",kpiAssetsSub:"Stored media files",kpiJobsSub:"Video generation jobs",kpiStudioSub:"Generate, edit, or image-to-video",assets:"Assets",jobs:"Video jobs",empty:"No media assets yet",jobsEmpty:"No video jobs yet",kind:"Kind",bytes:"Size",provider:"Provider",providerPh:"Provider name…",prompt:"Prompt",created:"Created",status:"Status",preview:"Preview",previewUnsupported:"This format cannot be previewed in the browser. Please download the file.",previewFail:"Failed to load preview",previewTruncated:"preview truncated",download:"Download",delete:"Delete",deleteConfirm:"Soft-delete this media asset?",allKinds:"All kinds",searchPh:"Prompt, filename, MIME, provider, or ID…",from:"From",to:"To",generate:"Generate image",generateTitle:"Generate image",studioTitle:"Media studio",studioHint:"Create images, edit existing images, or start image-to-video jobs. Execution limits follow Safety settings. Requires imagesApi and tools (videoApi for video).",generateHint:"Uses Grok Imagine tools (image_gen, image_edit, image_to_video).",generatePrompt:"Prompt",generatePromptPh:"Describe the image you want to create…",generateSize:"Size",aspectRatio:"Aspect ratio",aspectHint:"Grok Imagine aspect_ratio values (not OpenAI pixel sizes)",generateN:"Count",nHint:"Grok does not batch n; the gateway runs sequential generations (1–4)",generateKey:"API key",generateKeySession:"Signed-in admin session",generateSubmit:"Generate",generateBusy:"Generating… this may take a minute",generateOk:"Image generated. See the assets list below.",generateFail:"Image generation failed",generateNeedPrompt:"Please enter a prompt",modeGenerate:"Generate",modeEdit:"Edit",modeVideo:"Video",modelDefault:"system default",modelEmpty:"No models reported by Grok CLI",modelHint:"All models from the local Grok CLI; system default is pre-selected",editSubmit:"Edit image",editBusy:"Editing…",editOk:"Image edited. See the assets list below.",editNeedImage:"Select or drop a source image to edit",editImage:"Source image",editImageHint:"Required for image_edit",editPromptPh:"Describe the changes to apply…",videoSubmit:"Create video job",videoBusy:"Queuing video job…",videoOk:"Video job queued. See the Jobs tab.",videoVoice:"Voice",videoVoiceNone:"No speech",videoVoiceHint:"Optional preset voice — uses reference_to_video",videoDuration:"Duration",videoDurationHint:"Grok image_to_video / reference_to_video: 1–15 seconds",videoSource:"Source frame (optional)",videoSourceHint:"Optional. If omitted, a frame is generated from the prompt first, then animated.",videoNoSource:"Auto-generate frame from prompt",videoPromptPh:"Describe camera motion and the shot…",sourceTitle:"Source image",sourceHint:"Drag and drop an image, choose a local file, or pick any image from Documents or Media assets.",dropzoneAria:"Drop zone for source image",dropTitle:"Drop an image here",dropHint:"Or choose a local file / pick from the system library",dropTitleVideo:"Drop a source frame (optional)",dropHintVideo:"Optional for video. Empty source generates a frame from the prompt first.",pickFile:"Choose file",pickLibrary:"System library",clearSource:"Clear",sourceNeedImage:"Please provide an image file (PNG, JPEG, WebP, GIF…)",sourceKindUpload:"Upload",sourceKindAsset:"Media asset",sourceKindDocument:"Document",libraryTitle:"Select source file",librarySubtitle:"Any image stored in Documents or Media assets on this gateway.",libraryTabDocs:"Documents",libraryTabAssets:"Media assets",librarySearch:"Search by name, MIME, or ID…",libraryFormats:"Images only (PNG, JPEG, WebP, GIF, …)",libraryEmpty:"No matching files",librarySelect:"Use selected",libraryLoadFail:"Failed to load library"},usage:{title:"Usage & anti-abuse",window:"Window",requests:"Requests",success:"Success",errors:"Errors",errorRate:"Error rate",byModel:"By model",byKey:"Per API key",rateLimit:"Limit / min",util:"Est. utilization",lastUsed:"Last used",limits:"Gateway limits",global:"Global max / window",ipMax:"Unauth IP max",burst:"Chat burst (10s)",block:"Auth fail block threshold",concurrent:"Grok max concurrent",refresh:"Refresh"},ddos:{title:"DDoS control center",tabPolicy:"Policy",tabLive:"Traffic",tabBlacklist:"Blacklist",tabEvents:"Events",live:"Live connections",recent:"Recent requests",blacklist:"IP blacklist",stats:"Abuse stats",refresh:"Refresh",pause:"Pause auto-refresh",resume:"Resume auto-refresh",ban:"Ban IP",unban:"Unban",banConfirm:"Ban this IP?",banWhitelistWarn:"This IP is on the auto-ban whitelist. Ban anyway?",unbanConfirm:"Remove this IP from blacklist?",ip:"IP",method:"Method",path:"Path",key:"API key",duration:"Duration",state:"State",ua:"User-Agent",reason:"Reason",source:"Source",expires:"Expires",permanent:"Permanent",addBan:"Add ban",ttl:"TTL",ttlPerm:"Permanent",ttl1h:"1 hour",ttl24h:"24 hours",ttl7d:"7 days",activeConn:"Active",rateHits:"Rate-limit hits",blockedHits:"Blocked hits",autoBans:"Auto bans",topIps:"Top IPs (recent)",emptyLive:"No active connections",emptyBan:"Blacklist is empty",emptyEvents:"No auto-ban events yet",reasonPh:"Optional reason",banReasonDefault:"manual from admin",ipPlaceholder:"1.2.3.4",policyTitle:"Protection policy",policyHint:"All thresholds are live — no restart. Env values are only the initial defaults.",autoOn:"Auto-judgment ON",autoOff:"Auto-judgment OFF",autoBanMaster:"Enable automatic IP bans",autoBanMasterHint:"When off, rate limits still apply but IPs are never auto-banned.",masterOn:"Auto-ban on",masterOff:"Auto-ban off",disabledBanner:"Automatic IP bans are off — rate limits still apply, but IPs will not be auto-blacklisted.",presetTitle:"Policy profile",presetHint:"Pick a profile or edit fields — custom is detected automatically.",presetRelaxed:"Relaxed",presetBalanced:"Balanced",presetStrict:"Strict",presetCustom:"Custom",presetActiveLabel:"Active: {name}",presetFormLabel:"Form: {name} (unsaved)",presetTagActive:"Active",presetTagDraft:"Draft",presetTagSaved:"Saved",presetActiveHint:"Current profile: {name}. Click Save if you changed other fields.",presetCustomHint:"Values do not match Relaxed / Balanced / Strict — treated as Custom.",presetUnsavedHint:"Form shows {form}; server still has {saved}. Click Save policy to apply.",savePolicy:"Save policy",resetPolicy:"Reset to env defaults",policySaved:"Protection policy saved. Rate limiters reloaded.",policyReset:"Policy reset to environment defaults.",confirmReset:"Reset all DDoS policy fields to .env defaults?",sectionProxy:"Reverse proxy / CDN",proxyHint:"When traffic passes through nginx or Cloudflare, enable trust hops so bans, rate limits, and audit logs use the real client IP — not the proxy IP.",proxyTrustHops:"Trusted proxy hops",proxyTrustHopsHint:"0 = direct only (ignore headers). 1 = nginx or Cloudflare→app. 2 = Cloudflare→nginx→app.",proxyIpSource:"Client IP source",proxyIpSourceHint:"auto tries CF-Connecting-IP, then X-Real-IP, then X-Forwarded-For. Use “socket” only for direct connections.",proxySrcAuto:"Auto (recommended)",proxySrcCf:"Cloudflare (CF-Connecting-IP)",proxySrcNginx:"nginx (X-Real-IP)",proxySrcXff:"X-Forwarded-For only",proxySrcSocket:"TCP socket only (no proxy)",trustedProxies:"Trusted proxy IPs / CIDRs",trustedProxiesHint:"Only these peers may set CF-Connecting-IP / X-Real-IP / XFF. Default 127.0.0.1 — add your nginx/LB host if remote. Direct clients cannot spoof headers.",sectionLimits:"Rate limits",sectionAuth:"Failed authentication",sectionRate:"Rate-limit abuse (429)",sectionConn:"Connection flood",sectionVelocity:"Request velocity",sectionEscalate:"Repeat offender escalation",sectionWhitelist:"Auto-ban whitelist",whitelistHint:"One IP or CIDR per line. These IPs are never auto-banned.",rateWindow:"Window (sec)",rateMaxKey:"Max / key",rateMaxIp:"Max / IP (no key)",burstWindow:"Burst window (sec)",burstMax:"Burst max",enableRule:"Enabled",threshold:"Threshold",windowSec:"Window (sec)",banMin:"Ban duration (min)",escalateAfter:"Escalate after N auto-bans",escalateMin:"Escalated ban (min)",maxConcurrent:"Max concurrent / IP",velocityMax:"Max requests",eventsTitle:"Recent auto-ban events",eventTime:"When",eventSource:"Rule",eventDuration:"Ban for",sources:{manual:"Manual","auto-auth":"Auto · auth","auto-rate":"Auto · 429","auto-conn":"Auto · concurrent","auto-velocity":"Auto · velocity","auto-escalate":"Auto · escalated"}},pm2:{title:"PM2 control",tabRunner:"Runner",tabPort:"Port",tabConfig:"Config",tabLogs:"Logs",status:"Process status",start:"Start with PM2",stop:"Stop PM2",restart:"Restart",reload:"Reload",logs:"Logs",logsHint:"Error log first",clearLogs:"Clear logs",confirmClearLogs:"Clear PM2 and gctoac log files? This cannot be undone (files are truncated).",logsCleared:"Cleared {n} log file(s).",logsAutoTrim:"Auto-trim over {maxMb} MB → keep last ~{keepKb} KB (on each log read).",refresh:"Refresh",confirmStop:"Stop the PM2 process?",confirmRestart:"Restart under PM2? Port will be handed over cleanly.",unavailable:"PM2 not available",disabled:"PM2 admin is disabled",app:"App name",pid:"PID",uptime:"Uptime",memory:"Memory",cpu:"CPU",restarts:"Restarts",portBusy:"Port in use",port:"Port",portTitle:"Listen port",portHint:"HTTP port for the gateway Admin UI and API. Changing the port updates .env and restarts the runner so the new port takes effect.",fieldPort:"Port",portDefaultNote:"Default is 3847. Valid range: 1–65535.",savePort:"Save port & restart",useDefaultPort:"Use default (3847)",portInvalid:"Enter a valid port number (1–65535).",confirmPortChange:"Change listen port to {port} and restart the gateway? You will need to open Admin on the new port (e.g. http://localhost:{port}/admin).",portChangedMsg:"Port updated: {from} → {to}.",portSavedNeedRestart:"Port {port} saved to .env. Restart the gateway for it to take effect.",portAfterRestart:"After restart, open Admin at http://localhost:{port}/admin",hint:"Run with PM2 or detached gctoac. Switch anytime here or via CLI.",switchTitle:"Runner",switchHint:"Only one runner should bind the port.",currentRunner:"Current runner",runnerPm2:"PM2",runnerGctoac:"gctoac (detached)",runnerNone:"Not running",runnerUnknown:"Unknown / mixed",switchToPm2:"Switch to PM2",switchToGctoac:"Switch to gctoac",confirmSwitchPm2:"Switch to PM2? Gateway restarts under PM2 in a few seconds.",confirmSwitchGctoac:"Switch to gctoac? Gateway restarts as a detached process in a few seconds.",switchScheduled:"Switch scheduled. Admin will refresh automatically in about 10 seconds.",autoRefreshIn:"This page will reload automatically in {n} seconds…",autoRefreshNow:"Reloading…",gctoacPid:"gctoac PID",configTitle:"PM2 config",configHint:"Saved to pm2.runtime.json and applied via ecosystem.config.cjs. Save & apply restarts PM2 if it is the active runner.",saveConfig:"Save & apply",saveOnly:"Save only",resetConfig:"Reset defaults",confirmReset:"Reset PM2 config to defaults?",configSaved:"Config saved",fieldName:"App name",fieldScript:"Script",fieldCwd:"Working directory (cwd)",fieldInstances:"Instances",fieldExecMode:"Exec mode",fieldAutorestart:"Autorestart",fieldWatch:"Watch",fieldMaxMem:"Max memory restart",fieldMaxRestarts:"Max restarts",fieldMinUptime:"Min uptime",fieldRestartDelay:"Restart delay (ms)",fieldBackoff:"Exp backoff restart delay (ms)",fieldMergeLogs:"Merge logs",fieldTime:"Log timestamps",fieldErrorFile:"Error log file",fieldOutFile:"Out log file",fieldEnvExtra:"Extra env (KEY=value per line)",fieldPreferred:"Preferred runner",empty:"App not in pm2 list",modeFork:"fork",modeCluster:"cluster",phCwd:"(package root)",phInstances:"1 or max",phEnv:"NODE_ENV=production",statusOnline:"online",statusErrored:"errored",statusStopped:"stopped",msgOk:"OK",msgDisabled:"PM2 admin is disabled (PM2_ADMIN_ENABLED=false).",msgBinaryMissing:"pm2 not found on PATH. Install: npm install -g pm2",msgNotInList:'App "{app}" is not in the PM2 list — use Start with PM2 or Switch to PM2.',msgPortGctoac:"Port {port} is held by gctoac (pid {pid}). Use “Switch to PM2” to hand over.",msgPortBusy:"Port {port} is in use (pid {pids}).",msgErrored:"PM2 process errored — check logs / config, then Restart or fix port conflicts.",msgBothRunners:"Both runners detected; gctoac pid {pid} also holds resources. Prefer one via Switch.",msgError:"PM2 error: {error}",msgSwitchPm2:"Switching to PM2… The gateway will restart under PM2 in a few seconds.",msgSwitchGctoac:"Switching to gctoac… The gateway will restart as a detached process in a few seconds."},system:{title:"System",tabSoftware:"Software",tabSessions:"Grok sessions",sessionsHint:"Local Grok Build sessions on this machine (not gateway chat logs).",sessionsSearch:"Search title, summary, or id…",sessionDelete:"Delete",sessionDeleteConfirm:"Permanently delete Grok session {id}? This cannot be undone.",sessionId:"Session",sessionTitle:"Title",sessionCwd:"cwd",sessionUpdated:"Updated",tabPackage:"Package",tabEnv:"Environment",envHint:"Runtime env & version snapshot.",checkUpdate:"Check for updates",oneClick:"Update package & restart",selfUpdate:"Package version",selfHint:"Compare versions · update package restarts the gateway.",current:"This install",npm:"npm latest",github:"GitHub latest",install:"Install channel",confirmUpdate:"Update the package and restart the gateway? API will be briefly unavailable.",scheduled:"Update scheduled. Refresh this page in ~30s.",database:"Database",grokCli:"Grok CLI",grokInspect:"Grok Build environment",grokInspectHint:"Read-only snapshot from grok inspect --json (skills, MCP, plugins on this machine).",grokVersion:"Grok version",inspectChannel:"Channel",inspectDefaultModel:"Default model",inspectModels:"Models",inspectSkills:"Skills",inspectMcp:"MCP servers",inspectPlugins:"Plugins",inspectHooks:"Hooks",concurrency:"Concurrency",runtime:"Runtime health",software:"Required software",softwareHint:"Required tools and installed versions.",softName:"Software",softLevel:"Need",softInstalled:"Installed",softVersion:"Version",softStatus:"Status",softDetail:"Note",levelRequired:"Required",levelRecommended:"Recommended",levelOptional:"Optional",levelBundled:"Bundled",softOk:"OK",softMissing:"Missing",softWarn:"Warning",envTitle:"Environment",up:"Up",down:"Down",yes:"Yes",no:"No",badgeUpdate:"Update available",badgeOk:"Up to date",badgeAhead:"Newer than npm",badgeUnknown:"Unknown",statusHintUpdate:"A newer published version is available. Use “Update package & restart”.",statusHintOk:"This install matches the latest known release.",statusHintAhead:"Local version is newer than npm (typical for git / dev). “Update package” still pulls latest git commits if on the git channel.",statusHintUnknown:"Could not reach npm/GitHub to compare versions.",checkResult:"Version check",channelGit:"git (dev tree)",channelNpmGlobal:"npm global",channelNpmLocal:"npm local",channelUnknown:"unknown",encryption:"Encryption",ready:"Ready",notReady:"Not ready",allRequiredOk:"All required software present",requiredMissing:"Some required software is missing"},common:{empty:"No data",active:"active",revoked:"revoked",save:"Save",cancel:"Close",loading:"Loading…",powered:"Powered by",actions:"Actions",yes:"Yes",no:"No",ok:"OK",confirm:"Confirm",notice:"Notice",confirmTitle:"Please confirm",dangerTitle:"Confirm action",apply:"Apply",reset:"Reset",search:"Search",prev:"Previous",next:"Next",perPage:"Per page",pagerTotal:"Total {n}",pagerPage:"Page {n} / {total}",filterTitle:"Search & filters",filterHint:"Narrow results, then apply",sortHint:"Click to sort (API). Default: newest first",all:"All",requestFailed:"Request failed",featureOff:"Off",ms:"{n} ms",perMin:"{n}/min",minutes:"{n} min",mb:"{n} MB",percent:"{n}%",ipLabel:"IP",uaLabel:"UA",httpStatus:"HTTP"},errors:{unauthorized:"Invalid or missing credentials. Please sign in again.",forbidden:"You do not have permission for this action.",not_found:"The requested resource was not found.",validation_error:"Invalid request. Please check your input.",rate_limit_exceeded:"Rate limit exceeded. Please try again later.",concurrency_limit_exceeded:"Too many concurrent Grok jobs. Please wait and retry.",internal_error:"An internal server error occurred.",grok_error:"Grok CLI returned an error.",grok_timeout:"Grok CLI timed out.",grok_not_available:"Grok CLI is not available on this server.",document_too_large:"The document exceeds the maximum allowed size.",document_type_not_allowed:"This document type is not allowed.",invalid_cwd:"The working directory is not allowed.",service_unavailable:"The service is temporarily unavailable.",queue_full:"The chat queue is full. Please try again later.",queue_draining:"The chat queue is paused or draining.",queue_wait_timeout:"Timed out while waiting in the chat queue.",queue_cancelled:"The chat job was cancelled.",media_not_supported:"This media feature is not available or is disabled.",media_provider_unavailable:"The media provider is not available.",media_generation_failed:"Media generation failed.",media_forbidden:"Media generation is not allowed for this API key. Use an agent-mode key or an admin session.",feature_disabled:"This API feature is disabled.",feature:{imagesApi:"Images API is disabled. Enable it under Admin → API features → Images API.",videoApi:"Video API is disabled. Enable it under Admin → API features → Videos API.",audioApi:"Audio API is disabled. Enable it under Admin → API features → Audio API.",tools:"Tools are disabled. Enable Tools under Admin → API features (required for image generation).",filesOpenAiAlias:"OpenAI Files API alias is disabled. Enable it under Admin → API features → Files API alias."},media:{agent_or_admin_required:"Image generation requires an agent-mode API key or an admin session. Safe-mode keys cannot use image tools.",source_required:"Provide an image file, a media asset, or a document as the source.",source_must_be_image:"The selected source must be an image for edit or video generation.",no_image_in_sandbox:"Grok finished but no image file was found. Ensure imagesApi and tools are enabled, and the key is agent-mode or admin.",no_video_in_sandbox:"Grok finished but no video file was found in the sandbox.",provider_no_edit:"The current media provider does not support image edits."}}},"zh-Hant":{brand:"Grok Gateway",brandSub:"管理面板",loginTitle:"管理員登入",loginLabel:"API 金鑰",loginOtpLabel:"一次性登入碼",loginBtn:"登入",loginCmdHint:"終端機取得 key：",loginOtpHint:"每次登入請在終端機產生新碼：",loginOtpExpiry:"登入碼 5 分鐘內有效，且只能使用一次。",loginOtpFail:"登入碼無效或已過期",loginLostKey:"舊 key 無法找回（只存 hash），請建立新的 admin key。",loginCopy:"複製",loginCopied:"已複製",needKey:"請輸入 API 金鑰",needOtp:"請輸入終端機產生的一次性登入碼",logout:"登出",shell:{menu:"開啟選單",closeMenu:"關閉選單"},nav:{dashboard:"儀表板",chat:"對話",chats:"對話記錄",keys:"API 金鑰",documents:"文件",media:"媒體庫",audit:"稽核日誌",settings:"安全設定",apiFeatures:"API 能力",usage:"用量與防護",ddos:"DDoS 中心",queue:"佇列",pm2:"PM2",system:"系統狀態"},queue:{title:"對話佇列",subtitle:"暫停、排空、重新入隊，並調整併發。",paused:"已暫停",running:"消費中",drain:"排空模式",mode:"模式",modeOff:"已停用",depth:"佇列深度",queued:"排隊中",leased:"已認領",activeJobs:"執行中",dead:"死信",oldest:"最長等待",concurrency:"每 Key / 全域",worker:"進程內 worker",workerInstance:"Worker 實例",workerInstanceHint:"本進程消費者 ID（租約持有者）。重啟後會變更。",kpiActiveSub:"本進程進行中 {n} 個",consumer:"消費者",admission:"接單",accepting:"接受新單",pause:"暫停消費",resume:"恢復消費",drainBtn:"排空",undrain:"停止排空",savePolicy:"儲存政策",refresh:"重新整理",jobs:"工作列表",tabOverview:"總覽",tabJobs:"工作列表",tabPolicy:"政策",jobsMeta:"共 {n} 筆",cancel:"取消",requeue:"重新入隊",purgeDead:"清理死信與舊工作",purgeTitle:"確認清理工作？",purgeConfirm:"會立即刪除全部死信（DLQ），以及完成已超過 24 小時的成功／失敗／取消工作。",purgeConfirmBtn:"確認刪除",purgeDoneTitle:"清理完成",purgeDoneMsg:"已刪除 {n} 筆工作。",cancelConfirm:"取消此工作？若正在執行，取消為協作式（cooperative）。",empty:"沒有符合篩選的工作",enabled:"啟用佇列",masterOn:"佇列已開",masterOff:"佇列已關",masterHint:"對話佇列總開關，即時生效。",disabledBanner:"佇列已關閉 — 新對話會跳過排隊、即時執行（仍受併發上限約束）。",globalConcurrency:"全域併發",perKeyConcurrency:"每 Key 併發",maxDepth:"全域佇列上限",maxDepthKey:"每 Key 上限",fairness:"公平策略",fifo:"全域 FIFO",wrr:"加權輪詢",playgroundPriority:"Playground 優先級（越小越先）",defaultPriority:"預設優先級",leaseMs:"租約（ms）",maxWaitMs:"最長等待（ms）",filterTitle:"篩選工作",filterHint:"依狀態篩選。會自動重新整理。",filterStatus:"狀態",allStatuses:"全部狀態",filterDead:"死信（DLQ）",filterQueued:"排隊中",filterRunning:"執行中 / 已認領",filterFailed:"失敗",filterSucceeded:"成功",filterCancelled:"已取消",errorCol:"錯誤",priorityBtn:"優先級",priorityPh:"優先級（0–1000，越小越先）",dlqTitle:"死信佇列",dlqHint:"已用盡重試次數 — 可重新入隊或清理。",viewDlq:"查看死信",statusPanel:"運行狀態",statusPanelHint:"消費者、接單與 worker 實例即時狀態；每隔數秒自動重新整理。",policyTitle:"佇列政策",policyHint:"可先選方案再微調數值；儲存後生效。編輯時會暫停自動重新整理。",presetTitle:"政策方案",presetHint:"一鍵套用。Active＝表單目前值 · Saved＝已儲存。",presetRelaxed:"寬鬆",presetBalanced:"均衡",presetStrict:"嚴格",presetCustom:"自訂",presetRelaxedHint:"較高併發、較深佇列 — 適合多 key／Playground 與突發流量。",presetBalancedHint:"預設生產平衡：公平輪詢、中等深度、每 key 同時只跑 1 個。",presetStrictHint:"較低上限 + 全域 FIFO — 流量不可信或主機資源緊張時使用。",presetCustomHint:"數值唔對應內建方案。可繼續微調，或上方選一個方案。",presetActiveLabel:"目前：{name}",presetFormLabel:"草稿：{name}",presetTagActive:"目前",presetTagDraft:"草稿",presetTagSaved:"已套用",hintGlobalConc:"全域同時執行的工作上限",hintPerKeyConc:"單一 API key 同時執行上限",hintMaxDepth:"佇列總深度滿時拒收新單",hintMaxDepthKey:"該 key 排隊／執行過多時拒收",hintFairness:"WRR 按 key 輪流；FIFO 按全域優先級與時間",hintLease:"Worker 持有工作多久未完成會被回收",hintMaxWait:"客戶端排隊最長等待時間",colJob:"工作 / 請求",colSource:"來源",colStatus:"狀態",colModel:"模型",colPri:"優先",colKey:"API 金鑰",colTry:"嘗試",colTime:"入隊時間",stQueued:"排隊",stLeased:"已認領",stRunning:"執行中",stSucceeded:"成功",stFailed:"失敗",stDead:"死信",stCancelled:"已取消",srcV1:"API",srcPlayground:"Playground",kpiDepthSub:"{q} 排隊 · {l} 認領",kpiQueuedSub:"等待 worker",kpiDeadSub:"重試已盡",kpiOldestSub:"隊頭等待時間",wait:"等待",started:"開始",cancelReq:"已請求取消"},chat:{title:"對話",new:"新對話",send:"傳送",stop:"停止",stopped:"已停止",placeholder:"輸入訊息…（Enter 傳送，Shift+Enter 換行）",keyMode:"API 金鑰",keySelect:"API 金鑰",useSessionKey:"目前登入的 admin 金鑰",useCustomKey:"自訂金鑰",customKey:"金鑰",includeReasoning:"顯示思考",resume:"繼續 session",resumePh:"Grok session UUID",resumeHint:"用 --resume 接續 Grok CLI session",fork:"Fork",memory:"記憶",noPlan:"關 plan",permission:"權限",effort:"推理力度",effortDefault:"預設",effort_none:"無",effort_minimal:"最低",effort_low:"低",effort_medium:"中",effort_high:"高",effort_xhigh:"極高",effort_max:"最大",tokens:"Tokens",cacheTokens:"快取",cost:"費用",reasoning:"思考過程",needKey:"請輸入或選擇 API 金鑰",attach:"上傳",attachLibrary:"從已上傳選擇",attachHint:"可喺本頁任意位置拖放檔案、上傳，或從已上傳庫挑選",dropTitle:"放開以附加檔案",dropHint:"放開即上傳 — 格式與「上傳」按鈕相同",formatsLabel:"格式",formatsHint:"txt、md、csv、json、xml、html、pdf、圖片（png/jpg/webp/gif）、程式碼（js/ts/py/go/rs/java/c/cpp/css/yml/sql/sh…）",formatsReject:"不支援的格式：{name}。允許：{formats}",libraryTitle:"已上傳的檔案",librarySubtitle:"選擇目前 API 金鑰名下的檔案（格式與上傳相同）。",librarySearch:"依檔名搜尋…",libraryEmpty:"此金鑰沒有符合的檔案",libraryAdd:"加入所選",librarySelected:"已選 {n} 個",libraryAlready:"已附加",libraryLoadFail:"無法載入檔案列表",uploading:"上傳中…",uploadFail:"上傳失敗",uploadProgress:"正在上傳 {name}",uploadProgressMulti:"正在上傳 {name}（{i}/{n}）",emptyTitle:"開始對話",emptyHint:"輸入訊息或附加檔案。可從右側歷史開啟舊對話繼續。",needContent:"請輸入訊息或至少附加一個檔案",tooManyFiles:"檔案太多（每則訊息最多 10 個）",fileOnlyPrompt:"請查看附加的檔案。",removeFile:"移除",docs:"附件",you:"你",assistant:"助理",streaming:"串流中…",emptyReply:"（無回覆內容）",systemPrompt:"系統提示",systemPlaceholder:"可選：模型系統指示（system 訊息）…",systemHint:"每次傳送會以 system 角色附帶，不會顯示於對話氣泡。",history:"歷史對話",historyEmpty:"尚未有已儲存的對話",historySearch:"搜尋主題…",historyOpen:"顯示歷史",historyClose:"關閉歷史",rename:"重新命名",renamePh:"對話主題",untitled:"未命名對話",deleteConversation:"刪除",deleteConfirm:"確定刪除此對話？此操作無法還原。",saveFail:"無法儲存對話",loadFail:"無法載入對話",historyPrev:"上一頁",historyNext:"下一頁",historyPage:"第 {n} / {total} 頁",msgs:"{n} 則訊息",compress:"產生語境摘要",compressConfirm:"為之後回合產生對話摘要以節省 token？畫面上的完整對話記錄不會被刪除或改寫，只影響傳送給模型的內容。此操作會呼叫模型一次。",compressing:"正在產生摘要…",compressNeedMore:"至少需要 3 則訊息（或 2 則較長內容）才可產生摘要。請先繼續對話再試。",compressFail:"無法產生摘要",compressNeedSummary:"請先按「產生語境摘要」建立摘要。",compressedBadge:"摘要",compressOk:"摘要已就緒（完整記錄仍保留）。已切換為「摘要 + 最近訊息」模式。",compressBusy:"請等待目前回覆完成",compressResultTitle:"對話摘要",compressView:"查看摘要",summaryMeta:"產生時間：{when} · 依據 {n} 則訊息",ctxPolicyTitle:"模型上下文",ctxRemark:"完整訊息仍顯示於對話區。此設定只控制下一次傳送給模型的內容。",ctxMode:"上下文",ctxModeFull:"完整記錄",ctxModeSummary:"摘要 + 最近",ctxModeRecent:"僅最近",ctxModeFullLabel:"目前送出完整對話記錄",ctxModeSummaryLabel:"目前送出摘要 + 最近 {n} 則",ctxModeRecentLabel:"目前只送出最近 {n} 則",ctxRecentN:"最近則數",ctxLongHint:"對話較長 — 建議改用「摘要 + 最近」或「僅最近」，以減少 token 並避免介面卡頓。",loadOlder:"載入較早的 {n} 則訊息",showMore:"顯示更多",showLess:"收合",copy:"複製",copied:"已複製",copyFail:"複製失敗"},status:{success:"成功",error:"錯誤",timeout:"逾時",pending:"處理中",active:"進行中",finished:"已完成",online:"運行中",stopped:"已停止"},dash:{title:"儀表板",subtitle:"流量、佇列、安全與防護一覽。",last24:"最近 24h 請求",totalChat:"總對話",success:"成功",errors:"錯誤/逾時",docs:"文件",keys:"活躍金鑰",concurrent:"Grok 併發",recent:"最近 API 請求",empty:"暫無資料",emptyModels:"最近 24h 尚無模型用量",updated:"更新於",refresh:"重新整理",viewAll:"查看全部",openDdos:"DDoS 中心",openSettings:"安全設定",openQueue:"開啟佇列",kpi24h:"請求（24h）",kpi24hSub:"{ok} 成功 · {err} 錯誤",kpiSuccessRate:"成功率（24h）",kpiSuccessRateSub:"全部時間 {all}%",kpiErrors:"錯誤（24h）",kpiErrorsSub:"全部時間 {all}",kpiKeys:"API 金鑰",kpiKeysSub:"活躍 / 總數",kpiDocs:"文件",kpiMedia:"媒體資產",kpiMediaSub:"24 小時 {n} 個",kpiDocsSub:"已儲存檔案",kpiConv:"Playground 對話",kpiConvSub:"24h 內更新 {n} 則",kpiSessions:"OTP 工作階段",kpiSessionsSub:"目前有效的管理員登入",kpiConcurrent:"Grok 併發",kpiConcurrentSub:"進行中 / 上限",kpiQueue:"對話佇列",kpiQueueSub:"深度 · 執行 / 上限 · 死信",kpiQueueSubLive:"{run}/{max} 執行 · {dead} 死信{wait}",kpiQueuePaused:"已暫停",kpiQueueDrain:"排空",kpiQueueOff:"已停用",kpiSafe:"全域安全",kpiSafeOn:"開",kpiSafeOff:"關",kpiSafeSub:"{tools} · turns {turns} · {model}",kpiSafeSubEmpty:"無法讀取設定",queuePanel:"對話佇列",queueState:"狀態",queueLive:"運作中",qQueued:"排隊中",qRunning:"執行中",qDead:"死信",qSucceeded:"已成功",qWorker:"Worker",qWorkerActive:"活躍槽",qOldest:"最舊等待",qUnavailable:"無法取得佇列統計",safety:"安全設定",globalSafe:"全域安全模式",safeTools:"工具",safeTurns:"最大 turns",safeTimeout:"逾時",defaultModel:"預設模型",safetyHint:"影響 safe 模式金鑰與強制 safe 的流量。Playground OTP 預設 agent；開啟全域安全後會套用 safe 限制。",protection:"防護狀態",autoBan:"自動封鎖",on:"開",off:"關",ruleAuth:"認證",ruleRate:"429",ruleConn:"並發",ruleVelocity:"速率",bans:"黑名單",blocked:"已攔截",rateHits:"限流次數",liveConn:"即時連線",proxy:"代理 IP",hops:"層數",limits:"金鑰/IP 上限",models24h:"模型用量（24h）",runtime:"運行環境",port:"監聽連接埠",defaultPort:"預設",env:"環境",authMode:"管理登入",authOtp:"OTP 工作階段",encryption:"加密",ready:"就緒",notReady:"未就緒"},chats:{title:"對話記錄",total:"共",decrypt:"點選列項可查看解密後內容。",search:"搜尋",searchPh:"請求 ID、金鑰名稱、模型…",filterTitle:"搜尋與篩選",filterHint:"篩選後點列項查看詳情。",status:"狀態",allStatus:"全部狀態",model:"模型",allModels:"全部模型",apiKey:"API 金鑰",allKeys:"全部金鑰",from:"由",to:"至",mode:"模式",allModes:"全部模式",hasDocs:"有附件",filter:"套用篩選",reset:"重設",request:"請求",prompt:"提示",response:"回覆",time:"時間",attachments:"附件",page:"頁",prev:"上一頁",next:"下一頁",perPage:"每頁",detail:"對話詳情",noAttach:"無附件",openFile:"開啟 / 預覽",close:"關閉",copyPrompt:"複製提示",copyContent:"複製內容",copySystem:"複製 system prompt",copyRawPrompt:"複製原始 prompt",duration:"耗時",stream:"串流",reasoning:"思考過程",content:"輸出內容",raw:"原始儲存回覆",rawPrompt:"原始儲存 prompt",userPrompt:"用戶／對話 prompt",systemPrompt:"System prompt",systemHint:"從已儲存 prompt 中抽出 system 角色內容。",noSystem:"此請求沒有 system prompt。",hasSystem:"有 system",none:"（無）",file:"檔案",img:"圖片",previewFailed:"預覽失敗"},keys:{title:"API 金鑰",new:"新增金鑰",searchPh:"名稱或 key 前綴…",name:"名稱",role:"角色",mode:"模式",rate:"速率 / 分",status:"狀態",created:"建立",edit:"編輯",revoke:"撤銷",confirmRevoke:"確定撤銷此金鑰？",empty:"暫無",usage24:"24h 用量",maxTurns:"最大 turns",timeoutMs:"逾時 (ms)",ipWhitelist:"IP 白名單",ipWhitelistHint:"每行一個 IP 或 CIDR。留空 = 不限制 IP。",ipWhitelistCol:"IP 允許",ipAll:"全部 IP",keyOnce:"請妥善保存（明文只顯示一次）：",roleClient:"用戶 (client)",roleAdmin:"管理員 (admin)",roleClientBadge:"用戶",roleAdminBadge:"管理員",modeSafe:"safe（對外）",modeAgent:"agent（全能力）",modeSafeBadge:"安全",modeAgentBadge:"代理",ipCount:"{n} 個 IP",ipPlaceholder:`127.0.0.1
203.0.113.0/24`},docs:{title:"文件",total:"共",file:"檔名",mime:"類型",size:"大小",time:"時間",storage:"儲存位置",storageDb:"資料庫（加密）",storageFs:"檔案系統（加密）",storageHint:"加密儲存 · 小於 {dbMax} 入 DB，其餘於 {dir} · 上限 {upMax}。",download:"下載",downloadFail:"下載失敗",binaryPreview:"此為二進位檔（例如 PDF），無法在此預覽，請使用「下載」。",delete:"刪除",confirmDel:"確定刪除此文件？",detail:"文件詳情",preview:"預覽",copy:"複製內容",empty:"暫無",searchPh:"檔名或 MIME…",page:"頁",prev:"上一頁",next:"下一頁"},audit:{title:"稽核日誌",searchPh:"動作、資源、IP、金鑰…",time:"時間",action:"動作",resource:"資源",key:"金鑰",meta:"詳情",empty:"暫無日誌",id:"識別碼",actions:{chat_create:"建立對話",document_upload:"上傳文件",document_delete:"刪除文件",document_list:"列出文件",document_read:"讀取文件",document_download:"下載文件",api_key_create:"建立金鑰",api_key_update:"更新金鑰",api_key_delete:"撤銷金鑰",api_key_list:"列出金鑰",settings_update:"更新設定",chat_admin_view:"管理員查看對話",system_update:"系統更新",system_update_check:"檢查更新",ip_ban:"封鎖 IP",ip_unban:"解除 IP 封鎖",ddos_policy_update:"DDoS 策略更新",pm2_start:"PM2 啟動",pm2_stop:"PM2 停止",pm2_restart:"PM2 重啟",pm2_reload:"PM2 重載",pm2_config:"PM2 設定",pm2_switch:"PM2 切換 runner",playground_chat:"對話試玩",playground_upload:"試玩上傳"},resources:{document:"文件",chat:"對話",api_key:"API 金鑰",settings:"設定",system:"系統",pm2:"PM2",playground:"試玩",ip:"IP"},metaStorage:"儲存方式",metaAsKey:"代行金鑰 ID",metaAsKeyName:"代行金鑰名稱"},settings:{title:"安全設定",hint:"全域安全模式，套用至所有金鑰。",globalSafe:"全域安全模式",globalSafeHint:"開＝全部 safe。關＝跟各金鑰自身模式。",masterOn:"安全模式：開",masterOff:"安全模式：關",disabledBanner:"全域安全已關 — 各金鑰用自身 safe／agent 設定。",tools:"工具模式",toolsHint:"none：禁 shell／上網／寫入。readonly：只讀搜尋。",toolsNone:"none",toolsReadonly:"readonly",maxTurns:"最大 turns",maxTurnsHint:"safe 步數。問答 3–6 · API 8–12 · 多步驟 15–40。",timeout:"逾時（ms）",timeoutHint:"safe 時限。一般 60–120s · 長任務 300–600s。",defaultModel:"預設模型",defaultModelHint:"客戶端未指定 model 時使用。",modelSource:"Grok CLI",refreshModels:"重新整理模型",panel:"管理面板",save:"儲存",saved:"已儲存",guideTitle:"建議預設",guideIntro:"套用後可再微調。",guideApply:"套用",guideActive:"已應用",guideApplyConfirm:"套用「{name}」並儲存？會覆寫目前數值。",guideApplied:"已套用",chipGlobalOn:"安全：開",chipGlobalOff:"安全：關",scLocalTitle:"本機試用",scLocalDesc:"本機完整能力。",scLocalDetail:"安全關 · agent 金鑰。",scProdTitle:"對外 API",scProdDesc:"產品端點，最小權限。",scProdDetail:"安全開 · none · turns 8–12 · 60–120s。",scCodeTitle:"程式代理",scCodeDesc:"可信主機改檔／跑指令。",scCodeDetail:"安全關 · agent 金鑰。",scReadTitle:"只讀分析",scReadDesc:"解碼／搜尋，不寫入。",scReadDetail:"安全開 · readonly · turns 8–15 · 120–180s。",scChatTitle:"純問答",scChatDesc:"只回文字，唔使工具。",scChatDetail:"安全開 · none · turns 3–6 · 60s。",scLongTitle:"長任務（safe）",scLongDesc:"多步驟，減少 max turns 失敗。",scLongDetail:"安全開 · none/readonly · turns 20–40 · 300–600s。",dangerTitle:"危險操作",disablePanel:"關閉管理面板",disablePanelConfirm:"關閉面板並登出？重開：gctoac admin on",disablePanelDone:"面板已關。重開：gctoac admin on",panelOffHint:"此處可關閉。重開請在伺服器執行 gctoac admin on。",panelStatus:"狀態",panelOn:"開",panelOff:"關"},apiFeatures:{title:"API 能力",intro:"開關協議與能力 · 約 2 秒生效 · 無需重啟。",tabProtocols:"協議",tabMedia:"媒體",tabCaps:"能力",tabEmu:"模擬",kpiEnabled:"已啟用",kpiEnabledSub:"目前開啟的開關",groupMeta:"已開 {on} / {n}",groupProtocols:"協議表面",groupMedia:"媒體 API（OpenAI 兼容）",groupCaps:"Grok CLI 能力",groupEmu:"模擬與安全",presetOpen:"預設：開放",presetLocked:"預設：鎖定",presetDev:"預設：開發",presetConfirm:"套用能力預設「{name}」？會覆寫全部 API 開關。",flag:{openaiChat:"OpenAI Chat Completions",openaiResponses:"OpenAI Responses",anthropicMessages:"Anthropic Messages",imagesApi:"Images API",filesOpenAiAlias:"Files API 別名",videoApi:"Videos API（異步 job）",audioApi:"Audio API（語音 / STT）",tools:"Tools / function calling",structuredOutput:"結構化輸出 (--json-schema)",vision:"視覺 / 圖片 (--prompt-json)",reasoningEffort:"推理力度",webSearch:"網絡搜尋工具",subagents:"子代理",planMode:"Plan 模式",memory:"跨 session 記憶",sessionResume:"恢復 session",bestOfN:"best-of-n（Grok 1.0+ 已移除）",checkLoop:"自我檢查迴圈（Grok 1.0+ 已移除）",systemOverride:"System prompt 覆寫",rules:"額外 rules",permissionMode:"權限模式",sandbox:"Sandbox profile",usageEstimate:"估算 token usage",assistantsEmulation:"Assistants-lite（本機）",strictSampling:"嚴格採樣（拒絕 temperature…）",forceDisableToolsInSafe:"Safe 模式強制工具限制"},hint:{openaiChat:"POST /v1/chat/completions",openaiResponses:"POST /v1/responses",anthropicMessages:"POST /v1/messages",imagesApi:"POST /v1/images/generations + /edits（要 agent key）",filesOpenAiAlias:"POST/GET /v1/files → documents + media",videoApi:"POST /v1/videos + poll GET /v1/videos/:id",audioApi:"POST /v1/audio/speech + /transcriptions（要 provider）",tools:"映射 tools → Grok --tools",structuredOutput:"response_format / json_schema",vision:"image_url content parts",reasoningEffort:"--reasoning-effort",webSearch:"關閉時加 --disable-web-search",subagents:"關閉時 --no-subagents",planMode:"關閉時 --no-plan",memory:"--experimental-memory",sessionResume:"--resume / --continue",bestOfN:"已棄用 — Grok Build 1.0+ 會拒絕此 flag",checkLoop:"已棄用 — Grok Build 1.0+ 會拒絕此 flag",systemOverride:"--system-prompt-override",rules:"--rules",permissionMode:"--permission-mode",sandbox:"--sandbox",usageEstimate:"usage 用字元/4 估算",assistantsEmulation:"本機 /v1/assistants + /v1/threads",strictSampling:"帶 temperature 等則 400",forceDisableToolsInSafe:"維持 safe 工具政策"}},media:{title:"媒體庫",intro:"工作室、資產與影片工作。需 imagesApi／tools（影片另需 videoApi）。",tabStudio:"工作室",tabAssets:"資產",tabJobs:"工作",kpiAssetsSub:"已儲存的媒體檔案",kpiJobsSub:"影片生成工作",kpiStudioSub:"生成、編輯或圖生影片",assets:"資產",jobs:"影片工作",empty:"尚無媒體資產",jobsEmpty:"尚無影片工作",kind:"類型",bytes:"大小",provider:"提供者",providerPh:"提供者名稱…",prompt:"提示詞",created:"建立時間",status:"狀態",preview:"預覽",previewUnsupported:"瀏覽器無法預覽此格式，請下載檔案後開啟。",previewFail:"無法載入預覽",previewTruncated:"預覽已截斷",download:"下載",delete:"刪除",deleteConfirm:"確定要軟刪除此媒體資產？",allKinds:"全部類型",searchPh:"提示詞、檔名、MIME、提供者或 ID…",from:"開始日期",to:"結束日期",generate:"生成圖片",generateTitle:"生成圖片",studioTitle:"媒體工作室",studioHint:"可生成圖片、編輯既有圖片，或建立圖生影片工作。執行限制依循安全設定。需啟用 imagesApi 與 tools（影片另需 videoApi）。",generateHint:"透過 Grok Imagine 工具（image_gen、image_edit、image_to_video）。",generatePrompt:"提示詞",generatePromptPh:"描述您想生成的圖像…",generateSize:"尺寸",aspectRatio:"長寬比",aspectHint:"採用 Grok Imagine 的 aspect_ratio（非 OpenAI 像素尺寸）",generateN:"數量",nHint:"Grok 不支援批量 n；閘道會依序執行 1–4 次",generateKey:"API 金鑰",generateKeySession:"目前登入的管理員工作階段",generateSubmit:"生成",generateBusy:"正在生成，可能需要一分鐘…",generateOk:"已生成圖像，請見下方資產列表。",generateFail:"圖像生成失敗",generateNeedPrompt:"請輸入提示詞",modeGenerate:"生成",modeEdit:"編輯",modeVideo:"影片",modelDefault:"系統預設",modelEmpty:"本機 Grok CLI 未回報模型",modelHint:"列出本機 Grok CLI 全部模型，並預選系統預設",editSubmit:"編輯圖像",editBusy:"正在編輯…",editOk:"已編輯圖像，請見下方資產列表。",editNeedImage:"請選擇或拖放來源圖像後再編輯",editImage:"來源圖像",editImageHint:"image_edit 必須提供來源圖像",editPromptPh:"描述要套用的變更…",videoSubmit:"建立影片工作",videoBusy:"正在將影片工作加入佇列…",videoOk:"影片工作已加入佇列，請見「影片工作」分頁。",videoVoice:"聲線",videoVoiceNone:"唔講對白",videoVoiceHint:"可選 preset voice — 會用 reference_to_video",videoDuration:"時長",videoDurationHint:"Grok image_to_video / reference_to_video：1–15 秒",videoSource:"來源幀（選填）",videoSourceHint:"選填。若未提供，會先依提示詞生成畫面，再進行動畫。",videoNoSource:"自動依提示詞生成畫面",videoPromptPh:"描述鏡頭運動與畫面內容…",sourceTitle:"來源圖像",sourceHint:"可拖放圖像、選擇本機檔案，或從文件庫／媒體資產中挑選任一圖像。",dropzoneAria:"來源圖像拖放區",dropTitle:"將圖像拖放至此",dropHint:"亦可選擇本機檔案，或從系統庫挑選",dropTitleVideo:"拖放來源幀（選填）",dropHintVideo:"影片可選填來源。未指定時，會先依提示詞生成畫面。",pickFile:"選擇檔案",pickLibrary:"系統庫",clearSource:"清除",sourceNeedImage:"請提供圖像檔（PNG、JPEG、WebP、GIF 等）",sourceKindUpload:"上傳",sourceKindAsset:"媒體資產",sourceKindDocument:"文件",libraryTitle:"選擇來源檔案",librarySubtitle:"可選取本閘道「文件」或「媒體資產」中的任一圖像。",libraryTabDocs:"文件",libraryTabAssets:"媒體資產",librarySearch:"依名稱、MIME 或 ID 搜尋…",libraryFormats:"僅圖像（PNG、JPEG、WebP、GIF 等）",libraryEmpty:"沒有符合的檔案",librarySelect:"使用所選",libraryLoadFail:"無法載入檔案庫"},usage:{title:"用量與防濫用",window:"統計區間",requests:"請求數",success:"成功",errors:"錯誤",errorRate:"錯誤率",byModel:"按模型",byKey:"按 API 金鑰",rateLimit:"上限 / 分",util:"估計使用率",lastUsed:"最近使用",limits:"Gateway 限流設定",global:"全域上限 / 視窗",ipMax:"未認證 IP 上限",burst:"對話短窗 burst（10s）",block:"認證失敗封鎖門檻",concurrent:"Grok 最大併發",refresh:"重新整理"},ddos:{title:"DDoS 控制中心",tabPolicy:"政策",tabLive:"流量",tabBlacklist:"黑名單",tabEvents:"事件",live:"即時連線",recent:"最近請求",blacklist:"IP 黑名單",stats:"濫用統計",refresh:"重新整理",pause:"暫停自動刷新",resume:"恢復自動刷新",ban:"封鎖 IP",unban:"解除封鎖",banConfirm:"確定封鎖此 IP？",banWhitelistWarn:"此 IP 在自動封鎖白名單內。仍要手動封鎖？",unbanConfirm:"確定從黑名單移除此 IP？",ip:"IP",method:"方法",path:"路徑",key:"API 金鑰",duration:"耗時",state:"狀態",ua:"瀏覽器識別 (UA)",reason:"原因",source:"來源",expires:"到期",permanent:"永久",addBan:"新增封鎖",ttl:"有效期",ttlPerm:"永久",ttl1h:"1 小時",ttl24h:"24 小時",ttl7d:"7 日",activeConn:"進行中",rateHits:"限流次數",blockedHits:"已封鎖攔截",autoBans:"自動封鎖",topIps:"熱門 IP（最近）",emptyLive:"目前無進行中連線",emptyBan:"黑名單為空",emptyEvents:"尚無自動封鎖事件",reasonPh:"可選原因",banReasonDefault:"管理員手動封鎖",ipPlaceholder:"1.2.3.4",policyTitle:"防護策略",policyHint:"所有門檻即時生效，無需重啟。環境變數僅作為初始預設值。",autoOn:"自動判斷：開",autoOff:"自動判斷：關",autoBanMaster:"啟用自動封鎖 IP",autoBanMasterHint:"關閉後仍會限流，但不會自動加入黑名單。",masterOn:"自動封鎖：開",masterOff:"自動封鎖：關",disabledBanner:"自動封鎖已關閉 — 仍會限流，但 IP 不會被自動加入黑名單。",presetTitle:"防護方案",presetHint:"點選預設方案，或自行改數值；系統會自動判斷是否為自訂。",presetRelaxed:"寬鬆",presetBalanced:"均衡",presetStrict:"嚴格",presetCustom:"自訂",presetActiveLabel:"目前：{name}",presetFormLabel:"表單：{name}（未儲存）",presetTagActive:"使用中",presetTagDraft:"草稿",presetTagSaved:"已儲存",presetActiveHint:"目前方案：{name}。若改動其他欄位請按「儲存策略」。",presetCustomHint:"目前數值唔屬於寬鬆／均衡／嚴格，已判定為「自訂」。",presetUnsavedHint:"表單顯示「{form}」，伺服器仍為「{saved}」。請按「儲存策略」先套用。",savePolicy:"儲存策略",resetPolicy:"重設為環境預設",policySaved:"防護策略已儲存，限流器已重新載入。",policyReset:"已重設為環境變數預設值。",confirmReset:"確定將所有 DDoS 策略欄位重設為 .env 預設？",sectionProxy:"反向代理 / CDN",proxyHint:"流量經 nginx 或 Cloudflare 時，請設定信任層數，令封鎖、限流、稽核日誌使用真實用戶 IP，而唔係代理伺服器 IP。",proxyTrustHops:"信任代理層數",proxyTrustHopsHint:"0 = 直連（忽略 header）。1 = nginx 或 Cloudflare→應用。2 = Cloudflare→nginx→應用。",proxyIpSource:"客戶端 IP 來源",proxyIpSourceHint:"auto 會依序嘗試 CF-Connecting-IP、X-Real-IP、X-Forwarded-For。僅直連時先選「socket」。",proxySrcAuto:"自動（建議）",proxySrcCf:"Cloudflare（CF-Connecting-IP）",proxySrcNginx:"nginx（X-Real-IP）",proxySrcXff:"僅 X-Forwarded-For",proxySrcSocket:"僅 TCP socket（無代理）",trustedProxies:"可信代理 IP / CIDR",trustedProxiesHint:"只有呢啲 peer 先可以設定 CF-Connecting-IP / X-Real-IP / XFF。預設 127.0.0.1（本機 nginx）。遠端代理請加其 IP。直連客戶無法偽造 header。",sectionLimits:"限流",sectionAuth:"失敗認證",sectionRate:"限流濫用（429）",sectionConn:"連線洪水",sectionVelocity:"請求速率",sectionEscalate:"累犯升級",sectionWhitelist:"自動封鎖白名單",whitelistHint:"每行一個 IP 或 CIDR。白名單 IP 永不被自動封鎖。",rateWindow:"視窗（秒）",rateMaxKey:"金鑰上限",rateMaxIp:"未認證 IP 上限",burstWindow:"Burst 視窗（秒）",burstMax:"Burst 上限",enableRule:"啟用",threshold:"門檻",windowSec:"視窗（秒）",banMin:"封鎖時長（分）",escalateAfter:"累計自動封鎖 N 次後升級",escalateMin:"升級後封鎖（分）",maxConcurrent:"每 IP 最大並發",velocityMax:"最大請求數",eventsTitle:"最近自動封鎖事件",eventTime:"時間",eventSource:"規則",eventDuration:"封鎖時長",sources:{manual:"手動","auto-auth":"自動 · 認證","auto-rate":"自動 · 429","auto-conn":"自動 · 並發","auto-velocity":"自動 · 速率","auto-escalate":"自動 · 升級"}},pm2:{title:"PM2 控制",tabRunner:"運行方式",tabPort:"連接埠",tabConfig:"設定",tabLogs:"日誌",status:"進程狀態",start:"用 PM2 啟動",stop:"停止 PM2",restart:"重啟",reload:"重載",logs:"日誌",logsHint:"優先顯示錯誤日誌",clearLogs:"清除日誌",confirmClearLogs:"確定清除 PM2 與 gctoac 日誌檔？此操作無法復原（檔案會被清空）。",logsCleared:"已清除 {n} 個日誌檔。",logsAutoTrim:"超過 {maxMb} MB 會自動裁剪，只保留最後約 {keepKb} KB（每次讀取日誌時檢查）。",refresh:"重新整理",confirmStop:"確定停止 PM2 進程？",confirmRestart:"確定以 PM2 重啟？會妥善移交 port。",unavailable:"PM2 不可用",disabled:"已停用 PM2 管理",app:"應用名稱",pid:"進程 ID",uptime:"運行時間",memory:"記憶體",cpu:"CPU",restarts:"重啟次數",portBusy:"連接埠佔用中",port:"連接埠",portTitle:"監聽連接埠",portHint:"Gateway Admin 與 API 的 HTTP 連接埠。更改後會寫入 .env 並重啟進程，新連接埠才會生效。",fieldPort:"連接埠",portDefaultNote:"預設為 3847。有效範圍：1–65535。",savePort:"儲存連接埠並重啟",useDefaultPort:"使用預設（3847）",portInvalid:"請輸入有效連接埠（1–65535）。",confirmPortChange:"將監聽連接埠改為 {port} 並重啟 Gateway？之後請用新連接埠開啟 Admin（例如 http://localhost:{port}/admin）。",portChangedMsg:"連接埠已更新：{from} → {to}。",portSavedNeedRestart:"連接埠 {port} 已寫入 .env。請重啟後才會生效。",portAfterRestart:"重啟後請開啟 http://localhost:{port}/admin",hint:"可用 PM2 或 gctoac 運行，可在此或 CLI 切換。",switchTitle:"運行方式",switchHint:"同一時間只應有一個進程綁定連接埠。",currentRunner:"目前 runner",runnerPm2:"PM2",runnerGctoac:"gctoac（獨立進程）",runnerNone:"未運行",runnerUnknown:"未知／混合",switchToPm2:"切換到 PM2",switchToGctoac:"切換到 gctoac",confirmSwitchPm2:"確定切換到 PM2？gateway 會在數秒內以 PM2 重啟。",confirmSwitchGctoac:"確定切換到 gctoac？gateway 會在數秒內以獨立進程重啟。",switchScheduled:"已排程切換。管理面板將在約 10 秒後自動重新整理。",autoRefreshIn:"本頁將於 {n} 秒後自動重新載入…",autoRefreshNow:"正在重新載入…",gctoacPid:"gctoac 進程 ID",configTitle:"PM2 設定",configHint:"儲存至 pm2.runtime.json，經 ecosystem.config.cjs 套用。若目前用 PM2 運行，「儲存並套用」會重啟 PM2。",saveConfig:"儲存並套用",saveOnly:"只儲存",resetConfig:"還原預設",confirmReset:"確定將 PM2 設定還原為預設？",configSaved:"設定已儲存",fieldName:"應用名稱",fieldScript:"啟動腳本",fieldCwd:"工作目錄 (cwd)",fieldInstances:"實例數",fieldExecMode:"執行模式",fieldAutorestart:"自動重啟",fieldWatch:"檔案監視 (Watch)",fieldMaxMem:"記憶體上限重啟",fieldMaxRestarts:"最大重啟次數",fieldMinUptime:"最短運行時間",fieldRestartDelay:"重啟延遲 (ms)",fieldBackoff:"指數退避延遲 (ms)",fieldMergeLogs:"合併日誌",fieldTime:"日誌時間戳",fieldErrorFile:"錯誤日誌檔",fieldOutFile:"輸出日誌檔",fieldEnvExtra:"額外環境變數（每行 KEY=value）",fieldPreferred:"偏好 runner",empty:"pm2 列表中找不到此應用",modeFork:"fork",modeCluster:"cluster",phCwd:"（套件根目錄）",phInstances:"1 或 max",phEnv:"NODE_ENV=production",statusOnline:"運行中",statusErrored:"錯誤",statusStopped:"已停止",msgOk:"正常",msgDisabled:"PM2 管理已停用（PM2_ADMIN_ENABLED=false）。",msgBinaryMissing:"找不到 pm2，請執行：npm install -g pm2",msgNotInList:"應用「{app}」不在 PM2 列表中 — 請用「用 PM2 啟動」或「切換到 PM2」。",msgPortGctoac:"連接埠 {port} 正由 gctoac 佔用（pid {pid}）。請按「切換到 PM2」移交。",msgPortBusy:"連接埠 {port} 被佔用（pid {pids}）。",msgErrored:"PM2 進程出錯 — 請查日誌／設定，然後重啟或處理連接埠衝突。",msgBothRunners:"偵測到兩個 runner；gctoac pid {pid} 仍佔用資源。請用「切換」只保留一個。",msgError:"PM2 錯誤：{error}",msgSwitchPm2:"正在切換至 PM2… Gateway 將於數秒內以 PM2 重新啟動。",msgSwitchGctoac:"正在切換至 gctoac… Gateway 將於數秒內以獨立進程重新啟動。"},system:{title:"系統狀態",tabSoftware:"軟件",tabSessions:"Grok sessions",sessionsHint:"本機 Grok Build session（唔係 gateway 對話紀錄）。",sessionsSearch:"搜尋標題、摘要或 id…",sessionDelete:"刪除",sessionDeleteConfirm:"永久刪除 Grok session {id}？無法復原。",sessionId:"Session",sessionTitle:"標題",sessionCwd:"cwd",sessionUpdated:"更新",tabPackage:"套件",tabEnv:"環境",envHint:"運行環境與版本快照。",checkUpdate:"檢查更新",oneClick:"更新套件並重啟",selfUpdate:"套件版本",selfHint:"對比版本 · 更新套件會重啟 gateway。",current:"本機版本",npm:"npm 最新版",github:"GitHub 最新版",install:"安裝渠道",confirmUpdate:"確定更新套件並重啟 gateway？期間 API 會短暫中斷。",scheduled:"已排程更新，請約 30 秒後重新整理頁面。",database:"資料庫",grokCli:"Grok CLI",grokInspect:"Grok Build 環境",grokInspectHint:"只讀快照（grok inspect --json）：本機 skills、MCP、plugins。",grokVersion:"Grok 版本",inspectChannel:"頻道",inspectDefaultModel:"預設模型",inspectModels:"模型數",inspectSkills:"Skills",inspectMcp:"MCP",inspectPlugins:"Plugins",inspectHooks:"Hooks",concurrency:"併發",runtime:"運行狀態",software:"系統軟件",softwareHint:"所需軟件與已安裝版本。",softName:"軟件",softLevel:"需求",softInstalled:"已安裝",softVersion:"版本",softStatus:"狀態",softDetail:"說明",levelRequired:"必須",levelRecommended:"建議",levelOptional:"可選",levelBundled:"內建",softOk:"正常",softMissing:"未安裝",softWarn:"注意",envTitle:"環境變數",up:"正常",down:"異常",yes:"是",no:"否",badgeUpdate:"有新版本",badgeOk:"已是最新",badgeAhead:"新於 npm",badgeUnknown:"無法比較",statusHintUpdate:"發佈庫有較新版本，可按「更新套件並重啟」。",statusHintOk:"本機版本與目前已知最新發佈版一致。",statusHintAhead:"本機版本比 npm 新（常見於 git／開發版）。若是 git 安裝，「更新套件」仍可拉取最新 commits。",statusHintUnknown:"無法連上 npm／GitHub，未能比較版本。",checkResult:"版本檢查結果",channelGit:"git（開發目錄）",channelNpmGlobal:"npm 全域",channelNpmLocal:"npm 本地",channelUnknown:"未知",encryption:"加密",ready:"就緒",notReady:"未就緒",allRequiredOk:"必須軟件齊全",requiredMissing:"有必須軟件缺失"},common:{empty:"暫無資料",active:"啟用",revoked:"已撤銷",save:"儲存",cancel:"關閉",loading:"載入中…",powered:"技術支援",actions:"操作",yes:"是",no:"否",ok:"確定",confirm:"確定",notice:"提示",confirmTitle:"請確認",dangerTitle:"確認操作",apply:"套用",reset:"重設",search:"搜尋",prev:"上一頁",next:"下一頁",perPage:"每頁",pagerTotal:"共 {n} 筆",pagerPage:"第 {n} / {total} 頁",filterTitle:"搜尋與篩選",filterHint:"設定條件後按「套用」",sortHint:"點擊欄位以 API 排序（預設：最新在前）",featureOff:"已關閉",all:"全部",requestFailed:"請求失敗",ms:"{n} 毫秒",perMin:"{n}/分",minutes:"{n} 分鐘",mb:"{n} MB",percent:"{n}%",ipLabel:"IP",uaLabel:"UA",httpStatus:"HTTP"},errors:{unauthorized:"憑證無效或缺失，請重新登入。",forbidden:"您沒有執行此操作的權限。",not_found:"找不到請求的資源。",validation_error:"請求無效，請檢查輸入內容。",rate_limit_exceeded:"已超過速率限制，請稍後再試。",concurrency_limit_exceeded:"Grok 並行工作過多，請稍候再試。",internal_error:"伺服器發生內部錯誤。",grok_error:"Grok CLI 回傳錯誤。",grok_timeout:"Grok CLI 執行逾時。",grok_not_available:"此伺服器無法使用 Grok CLI。",document_too_large:"文件大小超過允許上限。",document_type_not_allowed:"不允許此文件類型。",invalid_cwd:"不允許使用此工作目錄。",service_unavailable:"服務暫時無法使用。",queue_full:"對話佇列已滿，請稍後再試。",queue_draining:"對話佇列已暫停或正在排空。",queue_wait_timeout:"在對話佇列中等待逾時。",queue_cancelled:"對話工作已取消。",media_not_supported:"此媒體功能不可用或已停用。",media_provider_unavailable:"媒體提供者不可用。",media_generation_failed:"媒體生成失敗。",media_forbidden:"此 API 金鑰不允許生成媒體。請使用 agent 模式金鑰或管理員工作階段。",feature_disabled:"此 API 功能已停用。",feature:{imagesApi:"Images API 已停用。請至「管理 → API 能力 → Images API」啟用。",videoApi:"Video API 已停用。請至「管理 → API 能力 → Videos API」啟用。",audioApi:"Audio API 已停用。請至「管理 → API 能力 → Audio API」啟用。",tools:"Tools 已停用。請至「管理 → API 能力」啟用 Tools（圖像生成需要）。",filesOpenAiAlias:"OpenAI Files API 別名已停用。請至「管理 → API 能力 → Files API 別名」啟用。"},media:{agent_or_admin_required:"圖像生成需要 agent 模式 API 金鑰或管理員工作階段。安全模式金鑰無法使用圖像工具。",source_required:"請提供圖像檔、媒體資產或文件作為來源。",source_must_be_image:"編輯或生成影片時，來源必須為圖像。",no_image_in_sandbox:"Grok 已結束，但未在沙箱中找到圖像檔。請確認已啟用 imagesApi 與 tools，且金鑰為 agent 模式或管理員。",no_video_in_sandbox:"Grok 已結束，但未在沙箱中找到影片檔。",provider_no_edit:"目前媒體提供者不支援圖像編輯。"}}}};function cs(){const a=localStorage.getItem(Aa);return a==="en"||a==="zh-Hant"?a:(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh-Hant":"en"}let nt=cs();function yt(){return nt}function Ca(a){a!=="en"&&a!=="zh-Hant"||(nt=a,localStorage.setItem(Aa,a))}function e(a){const s=a.split(".");let o=Ft[nt]||Ft.en;for(const i of s)if(o&&typeof o=="object"&&i in o)o=o[i];else{o=Ft.en;for(const n of s)if(o&&typeof o=="object"&&n in o)o=o[n];else return a;break}return typeof o=="string"?o:a}function Te(a){return e(a)!==a}function M(a,s={}){let o=e(a);for(const[i,n]of Object.entries(s))o=o.replaceAll(`{${i}}`,String(n));return o}function Qt(){return`
  <div class="lang-switch" role="group" aria-label="${nt==="zh-Hant"?"語言":"Language"}">
    <button type="button" data-lang="en" class="${nt==="en"?"is-active":""}">EN</button>
    <button type="button" data-lang="zh-Hant" class="${nt==="zh-Hant"?"is-active":""}">中文</button>
  </div>`}const La=new Set([".txt",".md",".markdown",".csv",".json",".xml",".html",".htm",".js",".ts",".tsx",".jsx",".py",".java",".go",".rs",".c",".cpp",".h",".hpp",".css",".yml",".yaml",".toml",".ini",".env",".sh",".sql",".log",".pdf",".png",".jpg",".jpeg",".webp",".gif"]),us=[...La].join(","),sa="/admin/api",Tt="gog_admin_session";let We=null,Qe=!1;function oa(a,s){const o=a?.error&&typeof a.error=="object"?a.error:a||{},i=typeof o.code=="string"?o.code:"",n=o.details&&typeof o.details=="object"?o.details:{},r=typeof n.feature=="string"?n.feature:typeof n.flag=="string"?n.flag:"",d=typeof n.reason=="string"?n.reason:"",u=String(o.message||a?.message||s||"");if(r&&(i==="feature_disabled"||i==="media_not_supported"||i==="forbidden")){const l=`errors.feature.${r}`;if(Te(l))return e(l)}if(i==="feature_disabled"&&Te("errors.feature_disabled")){const l=Nt(u);return l&&Te(`errors.feature.${l}`)?e(`errors.feature.${l}`):e("errors.feature_disabled")}if(d&&Te(`errors.media.${d}`))return e(`errors.media.${d}`);if(i==="media_generation_failed"&&d&&Te(`errors.media.${d}`))return e(`errors.media.${d}`);if(i==="media_forbidden"&&Te("errors.media_forbidden"))return e("errors.media_forbidden");const m=Nt(u);if(m&&Te(`errors.feature.${m}`))return e(`errors.feature.${m}`);if(i){const l=`errors.${i}`;if(Te(l))return e(l)}const p=Nt(u);return p&&Te(`errors.feature.${p}`)?e(`errors.feature.${p}`):/agent-mode|agent mode|Safe keys cannot/i.test(u)?e("errors.media.agent_or_admin_required"):/no image file was found/i.test(u)?e("errors.media.no_image_in_sandbox"):/no video file was found/i.test(u)?e("errors.media.no_video_in_sandbox"):/does not support image edits/i.test(u)?e("errors.media.provider_no_edit"):/Provide an image file|sourceAssetId|sourceDocumentId/i.test(u)?e("errors.media.source_required"):/must be an image/i.test(u)?e("errors.media.source_must_be_image"):u||e("common.requestFailed")}function Nt(a){const s=String(a||"");return/videoApi/i.test(s)||/Video API is disabled/i.test(s)?"videoApi":/imagesApi/i.test(s)||/Images API is disabled/i.test(s)?"imagesApi":/audioApi/i.test(s)||/Audio API is disabled/i.test(s)?"audioApi":/filesOpenAiAlias/i.test(s)||/Files API alias/i.test(s)?"filesOpenAiAlias":/Tools are disabled/i.test(s)||/\btools\b/i.test(s)&&/disabled/i.test(s)&&/image/i.test(s)?"tools":""}const c={key:sessionStorage.getItem(Tt)||"",page:"dashboard",me:null,error:"",modal:null,chatFilter:{q:"",status:"",model:"",apiKeyId:"",from:"",to:"",policyMode:"",hasDocuments:"",sortBy:"createdAt",sortDir:"desc",limit:50,offset:0},docFilter:{q:"",apiKeyId:"",storageType:"",from:"",to:"",sortBy:"createdAt",sortDir:"desc",limit:20,offset:0},keyFilter:{q:"",role:"",mode:"",isActive:"",sortBy:"createdAt",sortDir:"desc",limit:20,offset:0},auditFilter:{q:"",action:"",apiKeyId:"",from:"",to:"",sortBy:"createdAt",sortDir:"desc",limit:50,offset:0},usageFilter:{tab:"model",modelQ:"",keyQ:"",keyActive:"",modelPage:0,keyPage:0,pageSize:10,sortBy:"lastUsedAt",sortDir:"desc",modelSortBy:"requests",modelSortDir:"desc"},ddosFilter:{tab:"policy",liveQ:"",banQ:"",banSource:"",livePage:0,banPage:0,pageSize:15,liveSortBy:"startedAt",liveSortDir:"desc",banSortBy:"createdAt",banSortDir:"desc",eventSortBy:"at",eventSortDir:"desc"},mediaFilter:{tab:"studio",q:"",kind:"",provider:"",from:"",to:"",sortBy:"createdAt",sortDir:"desc",jobSortBy:"createdAt",jobSortDir:"desc",limit:20,offset:0},systemTab:"software",grokSessionQ:"",pm2Tab:"runner",apiFeaturesTab:"protocols",models:[],keys:[]},ms={login:"login",dashboard:"dashboard",chat:"chat",chats:"chats",keys:"keys",documents:"documents",media:"media",audit:"audit",settings:"settings","api-features":"apiFeatures",apifeatures:"apiFeatures",usage:"usage",ddos:"ddos",queue:"queue",pm2:"pm2",system:"system"};function ps(a){return a==="apiFeatures"?"api-features":a||"dashboard"}function na(a){const s=String(a||"").replace(/^#\/?/,"").split("?")[0].split("/")[0].toLowerCase();return s&&ms[s]||null}function ia(a){const s=`#/${ps(a)}`;location.hash!==s&&history.pushState(null,"",s)}function fs(){const a=na(location.hash);return a||(c.key?"dashboard":"login")}async function P(a,s={}){const o={...s.body?{"Content-Type":"application/json"}:{},...c.key?{Authorization:`Bearer ${c.key}`}:{},...s.headers||{}},i=await fetch(`${sa}${a}`,{...s,headers:o}),n=await i.text();let r=null;try{r=n?JSON.parse(n):null}catch{r={error:{message:n}}}if(!i.ok){const d=oa(r,i.statusText),u=r?.error?.code||"";i.status===401?c.page!=="login"&&Bt(!1):i.status===403&&!["media_forbidden","feature_disabled","forbidden","media_not_supported"].includes(u)&&c.page!=="login"&&Bt(!1);const m=new Error(d);throw m.status=i.status,m.code=u,m.details=r?.error?.details,m}return r}async function ha(a){const s=await a.text();let o=null;try{o=s?JSON.parse(s):null}catch{o={error:{message:s}}}if(!a.ok){const i=oa(o,a.statusText),n=new Error(i);throw n.status=a.status,n.code=o?.error?.code,n.details=o?.error?.details,n}return o}function Bt(a=!0){const s=c.key;a&&s&&String(s).startsWith("gog_sess_")&&fetch("/admin/api/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${s}`}}).catch(()=>{}),a&&sessionStorage.removeItem(Tt),c.key="",c.me=null,c.page="login",ia("login"),Rt()}function da(a){ra(a,{writeHash:!0})}function ra(a,s={}){const o=a||"dashboard";c.page=o,c.modal=null,c.error="",o==="chats"&&(c.chatFilter.offset=0),o==="documents"&&(c.docFilter.offset=0),o==="keys"&&(c.keyFilter.offset=0),o==="audit"&&(c.auditFilter.offset=0),o==="media"&&(c.mediaFilter.offset=0),o!=="ddos"&&We&&(clearInterval(We),We=null),o!=="chat"&&document.body.classList.remove("chat-history-open"),s.writeHash!==!1&&ia(o),Rt()}function t(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}let Ie=null,At=null;function ze(a){const s=At;At=null,Ie&&(Ie.remove(),Ie=null),document.body.classList.remove("ui-dialog-open"),document.removeEventListener("keydown",la,!0),s&&s(a)}function la(a){if(Ie&&a.key==="Escape"){a.preventDefault(),a.stopPropagation();const s=Ie.dataset.cancelable!=="0";ze(s?Ie.dataset.prompt==="1"?null:!1:!0)}}function Da(a){Ie&&ze(!1);const s=a.variant||(a.showCancel===!1?"info":"confirm"),o=a.showCancel!==!1,i=!!a.input,n=a.title||e(s==="danger"?"common.dangerTitle":o?"common.confirmTitle":"common.notice"),r=a.confirmText||e(o?"common.confirm":"common.ok"),d=a.cancelText||e("common.cancel"),u=s==="danger"?"!":s==="info"&&!o?"i":"?",m=document.createElement("div");m.className="ui-dialog-back",m.id="ui-dialog-back",m.dataset.cancelable=o||i?"1":"0",m.dataset.prompt=i?"1":"0",m.setAttribute("role","presentation"),m.innerHTML=`
    <div class="ui-dialog ui-dialog--${t(s)}" role="alertdialog" aria-modal="true" aria-labelledby="ui-dialog-title" aria-describedby="ui-dialog-msg">
      <div class="ui-dialog-h">
        <div class="ui-dialog-icon" aria-hidden="true">${u}</div>
        <h3 class="ui-dialog-title" id="ui-dialog-title">${t(n)}</h3>
      </div>
      <div class="ui-dialog-body" id="ui-dialog-msg">${t(a.message||"")}</div>
      ${i?`<div class="ui-dialog-input-wrap">
              <input type="text" class="ui-dialog-input" id="ui-dialog-input" value="${t(a.defaultValue||"")}" placeholder="${t(a.placeholder||"")}" maxlength="${a.maxLength||500}" autocomplete="off" />
            </div>`:""}
      <div class="ui-dialog-actions">
        ${o||i?`<button type="button" class="btn secondary sm" id="ui-dialog-cancel">${t(d)}</button>`:""}
        <button type="button" class="btn ${s==="danger"?"danger":""} sm" id="ui-dialog-ok">${t(r)}</button>
      </div>
    </div>`,document.body.appendChild(m),document.body.classList.add("ui-dialog-open"),Ie=m,document.addEventListener("keydown",la,!0);const p=m.querySelector("#ui-dialog-ok"),l=m.querySelector("#ui-dialog-cancel"),S=m.querySelector("#ui-dialog-input"),g=f=>{if(i){if(!f){ze(null);return}const b=S instanceof HTMLInputElement?S.value:"";ze(b);return}ze(!!f)};return p?.addEventListener("click",f=>{f.preventDefault(),g(!0)}),l?.addEventListener("click",f=>{f.preventDefault(),g(!1)}),m.addEventListener("click",f=>{f.target===m&&(o||i)&&g(!1)}),S instanceof HTMLInputElement&&S.addEventListener("keydown",f=>{f.key==="Enter"&&(f.preventDefault(),g(!0))}),requestAnimationFrame(()=>{S instanceof HTMLInputElement?(S.focus(),S.select()):p?.focus()}),new Promise(f=>{At=f})}async function pe(a){const s=typeof a=="string"?{message:a,showCancel:!1,variant:"info"}:{title:a.title,message:a.message,showCancel:!1,variant:a.variant||"info",confirmText:a.confirmText||e("common.ok")};await Da(s)}async function J(a){const s=typeof a=="string"?{message:a,showCancel:!0,variant:"confirm"}:{title:a.title,message:a.message,showCancel:!0,variant:a.variant||"confirm",confirmText:a.confirmText,cancelText:a.cancelText};return!!await Da(s)}function ys(){const a=typeof window<"u"?window.marked:null;if(!a||a.__gogConfigured)return a;try{typeof a.setOptions=="function"?a.setOptions({gfm:!0,breaks:!0}):a.marked&&typeof a.marked.setOptions=="function"&&a.marked.setOptions({gfm:!0,breaks:!0})}catch{}return a.__gogConfigured=!0,a}function Ha(a){if(!a)return"";const s=ys(),o=typeof window<"u"?window.DOMPurify||window.dompurify:null;if(!s)return t(a);let i="";try{if(typeof s.parse=="function")i=s.parse(a,{gfm:!0,breaks:!0});else if(typeof s=="function")i=s(a,{gfm:!0,breaks:!0});else if(s.marked&&typeof s.marked.parse=="function")i=s.marked.parse(a,{gfm:!0,breaks:!0});else return t(a)}catch{return t(a)}if(typeof i!="string"&&(i=String(i??"")),o&&typeof o.sanitize=="function"){i=o.sanitize(i,{USE_PROFILES:{html:!0},ADD_ATTR:["target","rel"]});try{i=i.replace(/<a\s+([^>]*href=)/gi,'<a target="_blank" rel="noopener noreferrer" $1')}catch{}return i}return t(a)}async function ca(a){const s=String(a??"");if(!s)return!1;try{if(navigator.clipboard&&window.isSecureContext!==!1)return await navigator.clipboard.writeText(s),!0}catch{}try{const o=document.createElement("textarea");o.value=s,o.setAttribute("readonly",""),o.style.position="fixed",o.style.left="-9999px",document.body.appendChild(o),o.select();const i=document.execCommand("copy");return document.body.removeChild(o),i}catch{return!1}}function te(a){if(!a)return"-";try{return new Date(a).toLocaleString(yt()==="zh-Hant"?"zh-HK":"en-US")}catch{return a}}function xe(a){return a==null?"—":a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:M("common.mb",{n:(a/1024/1024).toFixed(1)})}function gt(a){return a==null||a===""?"—":M("common.ms",{n:a})}function _a(a){return a==null||a===""?"—":M("common.perMin",{n:a})}function j(a){c.error=a;const s=document.querySelector("#flash-error");s&&(s.hidden=!a,s.textContent=a)}function ua(a){const s=a==="success"?"success":a==="error"||a==="timeout"?"error":"pending",o=a==="success"?e("status.success"):a==="error"?e("status.error"):a==="timeout"?e("status.timeout"):a==="pending"?e("status.pending"):a||"-";return`<span class="badge ${s}">${t(o)}</span>`}function gs(a){const o={queued:{cls:"pending",label:e("queue.stQueued")},leased:{cls:"info",label:e("queue.stLeased")},running:{cls:"success",label:e("queue.stRunning")},succeeded:{cls:"success",label:e("queue.stSucceeded")},failed:{cls:"error",label:e("queue.stFailed")},dead:{cls:"error",label:e("queue.stDead")},cancelled:{cls:"muted",label:e("queue.stCancelled")}}[a]||{cls:"pending",label:a||"—"};return`<span class="badge ${o.cls}">${t(o.label)}</span>`}function bs(a){const s=a==="playground"?e("queue.srcPlayground"):a==="v1"?e("queue.srcV1"):a||"—";return`<span class="badge muted">${t(s)}</span>`}function Ot(a){const s=a==="agent"?"agent":a==="safe"?"safe":a||"safe",o=s==="agent"?e("keys.modeAgentBadge"):s==="safe"?e("keys.modeSafeBadge"):s;return`<span class="badge ${s==="agent"?"agent":"safe"}">${t(o)}</span>`}function hs(a){const s=String(a||"").toLowerCase(),o=s==="admin"?e("keys.roleAdminBadge"):s==="client"||s==="user"?e("keys.roleClientBadge"):a||"-";return t(o)}function vt(a){return String(a||"").toLowerCase().startsWith("image/")}function ma(a,s=""){const o=String(a||"").toLowerCase().trim(),n=(String(s||"").toLowerCase().match(/\.([a-z0-9]+)$/)||[])[1]||"";return o.startsWith("image/")||["png","jpg","jpeg","gif","webp","svg","bmp","avif","ico"].includes(n)?"image":o.startsWith("video/")||["mp4","webm","ogg","ogv","mov","m4v"].includes(n)?"video":o.startsWith("audio/")||["mp3","wav","ogg","oga","m4a","aac","flac","opus"].includes(n)?"audio":o==="application/pdf"||n==="pdf"?"pdf":o.startsWith("text/")||o==="application/json"||o==="application/xml"||o==="application/javascript"||["txt","md","csv","json","xml","html","htm","css","js","log","svg"].includes(n)?n==="svg"?"image":"text":null}function vs(a,s=""){return ma(a,s)!=null}let xt=null;function Oa(){if(xt){try{URL.revokeObjectURL(xt)}catch{}xt=null}}function $s(a,s,o){return a==="image"?`<img class="media-lb-media media-lb-img" src="${s}" alt="${t(o)}" />`:a==="video"?`<video class="media-lb-media media-lb-video" src="${s}" controls playsinline preload="metadata"></video>`:a==="audio"?`
      <div class="media-lb-audio-wrap">
        <div class="media-lb-audio-icon" aria-hidden="true">♪</div>
        <audio class="media-lb-media media-lb-audio" src="${s}" controls preload="metadata"></audio>
      </div>`:a==="pdf"?`<iframe class="media-lb-media media-lb-pdf" src="${s}#toolbar=1" title="${t(o)}"></iframe>`:a==="text"?`<div class="media-lb-text-loading muted">${t(e("common.loading")||"…")}</div>`:`<div class="data-empty"><strong>${t(e("media.previewUnsupported"))}</strong></div>`}function va(a,s){const o=a.mime||s.type||"",i=a.filename||a.id||"asset",n=ma(o,i)||"image",r=e("media.preview"),d=[i,o||"—",a.bytes!=null?xe(a.bytes):"",a.kind||""].filter(Boolean),u=t(d.join(" · ")),m=a.prompt?`<div class="media-lb-prompt"><span class="muted">${t(e("media.prompt"))}</span><p>${t(a.prompt)}</p></div>`:"";rt({title:r,subtitle:u,size:"xl",bodyHtml:`
      <div class="media-lightbox" data-preview-kind="${t(n)}">
        <div class="media-lb-stage">
          <div class="media-lb-text-loading muted">${t(e("common.loading")||"…")}</div>
        </div>
        ${m}
      </div>`,footerHtml:`
      <button type="button" class="btn secondary sm" id="media-lb-download">${t(e("media.download"))}</button>
      <button type="button" class="btn sm" id="media-lb-close">${t(e("common.cancel"))}</button>`});const p=document.querySelector("#modal-back .modal");p&&p.classList.add("modal--media-preview");const l=URL.createObjectURL(s);xt=l;const S=document.querySelector("#modal-back .media-lb-stage");S&&(S.innerHTML=$s(n,l,i));const g=()=>{document.querySelectorAll("#modal-back video, #modal-back audio").forEach(f=>{try{f.pause()}catch{}}),Oa(),ye()};document.getElementById("modal-close")?.addEventListener("click",f=>{f.preventDefault(),g()}),document.getElementById("media-lb-close")?.addEventListener("click",f=>{f.preventDefault(),g()}),document.getElementById("modal-back")?.addEventListener("click",f=>{f.target?.id==="modal-back"&&g()}),document.getElementById("media-lb-download")?.addEventListener("click",()=>{const f=document.createElement("a");f.href=l,f.download=i,f.click()}),n==="text"&&s.text().then(f=>{const b=document.querySelector("#modal-back .media-lb-stage");if(!b)return;const k=4e5,T=f.length>k?f.slice(0,k)+`
… (${e("media.previewTruncated")})`:f;b.innerHTML=`<pre class="media-lb-text">${t(T)}</pre>`}).catch(()=>{const f=document.querySelector("#modal-back .media-lb-stage");f&&(f.innerHTML=`<div class="error-box">${t(e("media.previewFail"))}</div>`)})}function Ra(){return`
  <footer class="site-footer">
    <a class="powered-by" href="https://ysk.hk/" target="_blank" rel="noopener noreferrer">
      <img src="/admin/assets/logo.svg" alt="" width="22" height="22" />
      <span>${t(e("common.powered"))} <strong>YSK Limited</strong></span>
    </a>
  </footer>`}function ks(){return{dashboard:e("nav.dashboard"),chat:e("nav.chat"),chats:e("nav.chats"),keys:e("nav.keys"),documents:e("nav.documents"),audit:e("nav.audit"),settings:e("nav.settings"),apiFeatures:e("nav.apiFeatures"),media:e("nav.media"),usage:e("nav.usage"),ddos:e("nav.ddos"),queue:e("nav.queue"),pm2:e("nav.pm2"),system:e("nav.system")}[c.page]||e("brand")}function wt(){document.body.classList.remove("nav-open")}function Ss(){document.body.classList.add("nav-open")}function ie(a){return`
  <div class="app-shell">
    <header class="mobile-bar">
      <button type="button" class="icon-btn" id="nav-open" aria-label="${t(e("shell.menu"))}">☰</button>
      <div class="mobile-title">${t(ks())}</div>
      ${Qt()}
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
        ${Qt()}
        ${ce("dashboard",e("nav.dashboard"))}
        ${ce("chat",e("nav.chat"))}
        ${ce("chats",e("nav.chats"))}
        ${ce("keys",e("nav.keys"))}
        ${ce("documents",e("nav.documents"))}
        ${ce("media",e("nav.media"))}
        ${ce("audit",e("nav.audit"))}
        ${ce("settings",e("nav.settings"))}
        ${ce("apiFeatures",e("nav.apiFeatures"))}
        ${ce("usage",e("nav.usage"))}
        ${ce("ddos",e("nav.ddos"))}
        ${ce("queue",e("nav.queue"))}
        ${ce("pm2",e("nav.pm2"))}
        ${ce("system",e("nav.system"))}
        <div class="sidebar-foot">
          <button class="btn secondary sm logout-btn" id="btn-logout">${t(e("logout"))}</button>
        </div>
      </aside>
      <main class="main">
        <div id="flash-error" class="error-box" ${c.error?"":"hidden"}>${t(c.error)}</div>
        ${a}
      </main>
    </div>
    ${Ra()}
  </div>
  ${c.modal||""}
  `}function ce(a,s){return`<button type="button" class="nav-btn ${c.page===a?"active":""}" data-nav="${a}">${t(s)}</button>`}function de(){wt(),document.querySelectorAll("[data-nav]").forEach(s=>{s.onclick=()=>{wt(),da(s.dataset.nav)}});const a=()=>Bt(!0);document.getElementById("btn-logout")?.addEventListener("click",a),document.getElementById("btn-logout-mobile")?.addEventListener("click",a),document.getElementById("nav-open")?.addEventListener("click",Ss),document.getElementById("nav-backdrop")?.addEventListener("click",wt),document.addEventListener("keydown",s=>{s.key==="Escape"&&wt()},{once:!0}),document.querySelectorAll("[data-lang]").forEach(s=>{s.onclick=()=>{Ca(s.dataset.lang),Rt().catch($)}})}function $(a){console.error(a),j(a.message||String(a))}async function Fa(){if(!c.key)return!1;const a=await P("/me");return c.me=a.data,!0}async function bt(a=!1){try{const s=await P(`/models${a?"?refresh=1":""}`);return c.models=s.data?.models||[],s.data}catch{return c.models=[],{models:[],source:"fallback",defaultModel:""}}}async function $t(){try{const a=await P("/keys?all=1");c.keys=a.data||[]}catch{c.keys=[]}}function qe(a){const s=(Array.isArray(a)?a:[a]).filter(Boolean);return s.length?`<div class="page-meta" role="status">${s.map(i=>`<span>${typeof i=="string"?t(i):i}</span>`).join('<span class="page-meta-sep" aria-hidden="true">·</span>')}</div>`:""}function Ne({title:a,hint:s,meta:o,searchHtml:i,gridHtml:n}){return`
    <div class="panel data-filter-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(a)}</strong>
          ${s?`<span class="muted">${t(s)}</span>`:""}
        </div>
        ${o?`<span class="panel-h-meta muted">${typeof o=="string"?t(o):o}</span>`:""}
      </div>
      <div class="data-filter">
        ${i||""}
        ${n?`<div class="data-filter-grid">${n}</div>`:""}
        <div class="data-filter-actions">
          <button type="button" class="btn secondary sm" data-filter-reset>${t(e("common.reset"))}</button>
          <button type="button" class="btn sm" data-filter-apply>${t(e("common.apply"))}</button>
        </div>
      </div>
    </div>`}function be({headHtml:a,bodyHtml:s,colSpan:o,emptyText:i,pagerHtml:n}){const r=s||`<tr class="empty-row"><td colspan="${o||6}">
      <div class="data-empty">
        <div class="data-empty-icon">∅</div>
        <strong>${t(i||e("common.empty"))}</strong>
      </div>
    </td></tr>`;return`
    <div class="panel data-table-panel">
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr>${a}</tr></thead>
          <tbody>${r}</tbody>
        </table>
      </div>
      ${n||""}
    </div>`}function $e(a,s,o="sortBy",i="sortDir"){const n=s?.[o],r=s?.[i];return n&&a.set("sortBy",String(n)),(r==="asc"||r==="desc")&&a.set("sortDir",r),a}function _({field:a,label:s,filterRef:o,sortByKey:i="sortBy",sortDirKey:n="sortDir"}){const r=o?.[i]===a,d=r?o?.[n]||"desc":"",u=r&&d==="asc"?"ascending":r&&d==="desc"?"descending":"none",m=r?d==="asc"?" ▲":" ▼":"";return`<th class="th-sort${r?" is-sorted":""}" data-sort-field="${t(a)}" data-sort-by-key="${t(i)}" data-sort-dir-key="${t(n)}" aria-sort="${u}" title="${t(e("common.sortHint")||"Sort")}"><button type="button" class="th-sort-btn">${t(s)}<span class="th-sort-ind" aria-hidden="true">${m}</span></button></th>`}function je(a,s){document.querySelectorAll("th.th-sort[data-sort-field]").forEach(o=>{(o.querySelector(".th-sort-btn")||o).addEventListener("click",n=>{n.preventDefault();const r=o.getAttribute("data-sort-field");if(!r||!a)return;const d=o.getAttribute("data-sort-by-key")||"sortBy",u=o.getAttribute("data-sort-dir-key")||"sortDir";a[d]===r?a[u]=a[u]==="asc"?"desc":"asc":(a[d]=r,a[u]="desc"),"offset"in a&&(a.offset=0),"modelPage"in a&&d==="modelSortBy"&&(a.modelPage=0),"keyPage"in a&&d==="sortBy"&&(a.keyPage=0),"livePage"in a&&d==="liveSortBy"&&(a.livePage=0),"banPage"in a&&d==="banSortBy"&&(a.banPage=0),s()})})}function Me({total:a,limit:s,offset:o,idPrefix:i}){const n=Math.max(1,Math.ceil((a||0)/s)||1),r=Math.floor(o/s)+1,d=o>0,u=o+s<a;return`
    <div class="data-pager" id="${i}-pager">
      <div class="data-pager-meta">
        <span>${t(M("common.pagerTotal",{n:a||0}))}</span>
        <span>${t(M("common.pagerPage",{n:r,total:n}))}</span>
        <label class="muted">${t(e("common.perPage"))}
          <select id="${i}-limit">
            ${[10,20,50,100].map(m=>`<option value="${m}" ${s===m?"selected":""}>${m}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="data-pager-actions">
        <button type="button" class="btn secondary sm" id="${i}-prev" ${d?"":"disabled"}>${t(e("common.prev"))}</button>
        <button type="button" class="btn secondary sm" id="${i}-next" ${u?"":"disabled"}>${t(e("common.next"))}</button>
      </div>
    </div>`}function dt(a,s,o){document.getElementById(`${a}-prev`)?.addEventListener("click",()=>{s.offset=Math.max(0,s.offset-s.limit),o()}),document.getElementById(`${a}-next`)?.addEventListener("click",()=>{s.offset=s.offset+s.limit,o()}),document.getElementById(`${a}-limit`)?.addEventListener("change",i=>{s.limit=Number(i.target.value)||20,s.offset=0,o()})}function ye(){document.querySelectorAll("#modal-back video, #modal-back audio").forEach(a=>{try{a.pause()}catch{}}),Oa(),document.getElementById("modal-back")?.remove(),c.modal=null}function rt({title:a,subtitle:s,bodyHtml:o,footerHtml:i,size:n="md"}){ye();const r=`
    <div class="modal-back" id="modal-back">
      <div class="modal modal--${t(n)}" role="dialog" aria-modal="true">
        <div class="modal-h">
          <div class="modal-title-block">
            <strong>${t(a||"")}</strong>
            ${s?`<div class="muted">${s}</div>`:""}
          </div>
          <button type="button" class="modal-x" id="modal-close" aria-label="${t(e("common.cancel"))}">×</button>
        </div>
        <div class="modal-b">${o||""}</div>
        ${i?`<div class="modal-f">${i}</div>`:""}
      </div>
    </div>`;document.getElementById("app").insertAdjacentHTML("beforeend",r);const d=()=>ye();document.getElementById("modal-close").onclick=d,document.getElementById("modal-back").onclick=m=>{m.target.id==="modal-back"&&d()};const u=m=>{m.key==="Escape"&&(d(),document.removeEventListener("keydown",u))};document.addEventListener("keydown",u)}async function Na(){const a="gctoac admin otp";document.getElementById("app").innerHTML=`
    <div class="login-wrap">
      <div class="login-stage">
        <div class="login-card">
          <div class="login-brand">
            <img src="/admin/assets/logo.svg" alt="YSK" width="48" height="48" />
            <h1 class="brand-title">${t(e("loginTitle"))}</h1>
          </div>
          ${Qt()}
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
      ${Ra()}
    </div>
  `,document.querySelectorAll("[data-lang]").forEach(s=>{s.onclick=()=>{Ca(s.dataset.lang),Na().catch($)}}),document.getElementById("btn-copy-cmd").onclick=async()=>{try{await navigator.clipboard.writeText(a);const s=document.getElementById("btn-copy-cmd");s.textContent=e("loginCopied"),setTimeout(()=>{s.textContent=e("loginCopy")},1500)}catch{}},document.getElementById("btn-login").onclick=async()=>{const s=document.getElementById("login-key").value.trim();if(!s)return j(e("needOtp"));try{const o=await fetch("/admin/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:s})}),i=await o.json().catch(()=>({}));if(!o.ok)throw new Error(i?.error?.message||i?.message||e("loginOtpFail"));const n=i?.data?.token;if(!n)throw new Error(e("loginOtpFail"));c.key=n,sessionStorage.setItem(Tt,n),await Fa(),c.error="",da("dashboard")}catch(o){c.key="",sessionStorage.removeItem(Tt),j(o.message||e("loginOtpFail"))}},document.getElementById("login-key").onkeydown=s=>{s.key==="Enter"&&document.getElementById("btn-login").click()}}function he({label:a,value:s,sub:o,tone:i,href:n,valueId:r,subId:d}){const u=i?` dash-kpi--${i}`:"",m=r?` id="${t(r)}"`:"",p=d?` id="${t(d)}"`:"",l=`
    <div class="label">${t(a)}</div>
    <div class="value"${m}>${s}</div>
    ${o!=null&&o!==""?`<div class="dash-kpi-sub muted"${p}>${o}</div>`:""}`;return n?`<button type="button" class="card dash-kpi${u}" data-nav="${t(n)}">${l}</button>`:`<div class="card dash-kpi${u}">${l}</div>`}function Re(a,s,o){return a?`<span class="badge success">${t(s)}</span>`:`<span class="badge warn">${t(o)}</span>`}function pa({id:a,on:s,onLabel:o,offLabel:i,title:n}){return`<button type="button"
    class="master-toggle ${s?"is-on":"is-off"}"
    id="${t(a)}"
    aria-pressed="${s?"true":"false"}"
    title="${t(n||"")}">
    <span class="master-toggle-track" aria-hidden="true"><span class="master-toggle-knob"></span></span>
    <span class="master-toggle-label">${t(s?o:i)}</span>
  </button>`}function Je(a){const s=document.getElementById(a);return s?s.classList.contains("is-on"):!1}function Xe(a,s,o,i){const n=document.getElementById(a);if(!n)return;n.classList.toggle("is-on",!!s),n.classList.toggle("is-off",!s),n.setAttribute("aria-pressed",s?"true":"false");const r=n.querySelector(".master-toggle-label");r&&o!=null&&i!=null&&(r.textContent=s?o:i)}function Ye(a,s){const o=document.getElementById(a);o&&(o.hidden=!s)}function Ze(a,s){const o=document.getElementById(a);o&&o.classList.toggle("is-feature-off",!!s)}function ws(a){return{auto:e("ddos.proxySrcAuto"),cloudflare:e("ddos.proxySrcCf"),nginx:e("ddos.proxySrcNginx"),"x-forwarded-for":e("ddos.proxySrcXff"),socket:e("ddos.proxySrcSocket")}[a]||a||"—"}async function zt(){const s=(await P("/stats")).data||{},o=s.totals||{},i=s.protection||{},n=s.runtime||{},r=s.concurrency||{},d=s.queue||null,u=s.safety||null,m=s.models24h||[],p=o.successRate24h??0,l=o.successRate??0,S=s.generatedAt?te(s.generatedAt):"—";let g="—",f=e("dash.kpiQueueSub"),b="";if(d){d.enabled?d.paused?(g=e("dash.kpiQueuePaused"),b="warn"):d.drainMode?(g=e("dash.kpiQueueDrain"),b="warn"):g=`${d.depth??0}`:(g=e("dash.kpiQueueOff"),b="warn");const C=d.oldestQueuedAgeMs>0?` · wait ${Math.round(d.oldestQueuedAgeMs/1e3)}s`:"";f=M("dash.kpiQueueSubLive",{run:d.running??0,max:d.globalConcurrency??"—",dead:d.dead??0,wait:C}),((d.dead||0)>0||(d.depth||0)>20)&&(b=b||"warn")}const k=!!u?.globalSafeMode,T=u?e(k?"dash.kpiSafeOn":"dash.kpiSafeOff"):"—",B=u?M("dash.kpiSafeSub",{tools:u.safeToolsMode||"—",turns:u.safeMaxTurns??"—",model:u.defaultModel||"—"}):e("dash.kpiSafeSubEmpty"),O=(s.recentChats||[]).map(C=>`
    <tr>
      <td><button class="linkish cell-primary" data-chat="${C.id}">${t(C.requestId)}</button>
        <div class="cell-sub">${t(C.apiKey?.name||"")}</div></td>
      <td>${t(C.model)}</td>
      <td>${ua(C.status)}</td>
      <td>${Ot(C.policyMode||"-")}</td>
      <td>${gt(C.durationMs)}</td>
      <td>${te(C.createdAt)}</td>
    </tr>`).join(""),E=be({headHtml:`
      <th>${t(e("chats.request"))}</th>
      <th>${t(e("chats.model"))}</th>
      <th>${t(e("chats.status"))}</th>
      <th>${t(e("chats.mode"))}</th>
      <th>${t(e("chats.duration"))}</th>
      <th>${t(e("chats.time"))}</th>`,bodyHtml:O,colSpan:6,emptyText:e("dash.empty")}),N=Math.max(1,...m.map(C=>C.requests||0)),h=m.length?m.map(C=>{const y=Math.round((C.requests||0)/N*100);return`
          <div class="dash-bar-row">
            <div class="dash-bar-label" title="${t(C.model)}">${t(C.model)}</div>
            <div class="dash-bar-track"><span style="width:${y}%"></span></div>
            <div class="dash-bar-n">${C.requests}</div>
          </div>`}).join(""):`<div class="data-empty" style="padding:20px"><strong>${t(e("dash.emptyModels"))}</strong></div>`,x=(C,y)=>`<span class="dash-rule-chip ${C?"is-on":"is-off"}">${t(y)}</span>`,U=d?`
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
      </div>`:`<div class="data-empty" style="padding:12px 0"><strong>${t(e("dash.qUnavailable"))}</strong></div>`;document.getElementById("app").innerHTML=ie(`
    <div class="dash-hero">
      <div class="dash-hero-text">
        <h2>${t(e("dash.title"))}</h2>
        <p class="muted">${t(e("dash.subtitle"))}</p>
      </div>
      <div class="dash-hero-meta">
        <span class="muted">${t(e("dash.updated"))}: ${t(S)}</span>
        <button type="button" class="btn secondary sm" id="dash-refresh">${t(e("dash.refresh"))}</button>
      </div>
    </div>

    <div class="dash-kpi-grid">
      ${he({label:e("dash.kpi24h"),value:o.chats24h??0,sub:M("dash.kpi24hSub",{ok:o.success24h??0,err:o.error24h??0}),tone:"primary",href:"chats"})}
      ${he({label:e("dash.kpiSuccessRate"),value:`${p}%`,sub:M("dash.kpiSuccessRateSub",{all:l}),tone:p>=90?"ok":p>=70?"warn":"danger",href:"usage"})}
      ${he({label:e("dash.kpiErrors"),value:o.error24h??0,sub:M("dash.kpiErrorsSub",{all:o.errors??0}),tone:(o.error24h||0)>0?"warn":"ok",href:"chats"})}
      ${he({label:e("dash.kpiQueue"),value:g,sub:f,tone:b,href:"queue"})}
      ${he({label:e("dash.kpiSafe"),value:T,sub:B,tone:u?k?"ok":"warn":"",href:"settings"})}
      ${he({label:e("dash.kpiKeys"),value:`${o.activeKeys??0}<span class="dash-kpi-den">/${o.totalKeys??0}</span>`,sub:e("dash.kpiKeysSub"),href:"keys"})}
      ${he({label:e("dash.kpiDocs"),value:o.documents??0,sub:e("dash.kpiDocsSub"),href:"documents"})}
      ${he({label:e("dash.kpiMedia")||"Media",value:o.mediaAssets??0,sub:M("dash.kpiMediaSub",{n:o.mediaAssets24h??0}),href:"media"})}
      ${he({label:e("dash.kpiConv"),value:o.conversations??0,sub:M("dash.kpiConvSub",{n:o.conversations24h??0}),href:"chat"})}
      ${he({label:e("dash.kpiSessions"),value:o.adminSessions??n.adminSessions??0,sub:e("dash.kpiSessionsSub")})}
      ${he({label:e("dash.kpiConcurrent"),value:`${r.active??0}<span class="dash-kpi-den">/${r.max??0}</span>`,sub:e("dash.kpiConcurrentSub"),tone:(r.active||0)>=(r.max||1)?"warn":""})}
    </div>

    <div class="dash-layout">
      <div class="dash-main">
        <div class="panel dash-panel">
          <div class="panel-h">
            <strong>${t(e("dash.recent"))}</strong>
            <button type="button" class="btn secondary sm" data-nav="chats">${t(e("dash.viewAll"))}</button>
          </div>
          ${E.replace("data-table-panel","data-table-panel dash-embed-table")}
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
            ${U}
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
              ${Re(k,e("dash.on"),e("dash.off"))}
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
              ${Re(!!i.autoBanEnabled,e("dash.on"),e("dash.off"))}
            </div>
            <div class="dash-rule-row">
              ${x(i.autoAuthEnabled,e("dash.ruleAuth"))}
              ${x(i.autoRateEnabled,e("dash.ruleRate"))}
              ${x(i.autoConnEnabled,e("dash.ruleConn"))}
              ${x(i.autoVelocityEnabled,e("dash.ruleVelocity"))}
            </div>
            <div class="dash-stat-grid">
              <div><div class="label">${t(e("dash.bans"))}</div><div class="value value-sm">${i.bans??0}</div></div>
              <div><div class="label">${t(e("dash.blocked"))}</div><div class="value value-sm">${i.blockedHits??0}</div></div>
              <div><div class="label">${t(e("dash.rateHits"))}</div><div class="value value-sm">${i.rateLimitedHits??0}</div></div>
              <div><div class="label">${t(e("dash.liveConn"))}</div><div class="value value-sm">${i.activeConnections??0}</div></div>
            </div>
            <div class="dash-prot-meta muted">
              ${t(e("dash.proxy"))}: ${t(ws(i.proxyIpSource))}
              · ${t(e("dash.hops"))}: ${i.proxyTrustHops??0}
              · ${t(e("dash.limits"))}: ${i.rateLimitMax??"—"}/${i.rateLimitIpMax??"—"}
            </div>
          </div>
        </div>

        <div class="panel dash-panel">
          <div class="panel-h"><strong>${t(e("dash.models24h"))}</strong></div>
          <div class="panel-pad">${h}</div>
        </div>

        <div class="panel dash-panel">
          <div class="panel-h"><strong>${t(e("dash.runtime"))}</strong></div>
          <div class="panel-pad dash-runtime">
            <div class="dash-prot-row">
              <span>${t(e("dash.port"))}</span>
              <strong>${n.port??"—"}<span class="muted" style="font-weight:500"> (${t(e("dash.defaultPort"))} ${n.defaultPort??3847})</span></strong>
            </div>
            <div class="dash-prot-row">
              <span>${t(e("dash.env"))}</span>
              <strong>${t(n.env||"—")}</strong>
            </div>
            <div class="dash-prot-row">
              <span>${t(e("dash.authMode"))}</span>
              <strong>${t(e("dash.authOtp"))}</strong>
            </div>
            <div class="dash-prot-row">
              <span>${t(e("dash.encryption"))}</span>
              ${Re(!!n.encryptionReady,e("dash.ready"),e("dash.notReady"))}
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
  `),de(),document.getElementById("dash-refresh")?.addEventListener("click",()=>zt().catch($)),document.querySelectorAll("[data-nav]").forEach(C=>{C.onclick=()=>{const y=C.dataset.nav;y&&da(y)}}),document.querySelectorAll("[data-chat]").forEach(C=>{C.onclick=()=>ja(C.dataset.chat)})}function Ps(a){return a?.length?a.map(s=>`<span class="chip ${vt(s.mimeType)?"img":""}" title="${t(s.mimeType)}">${t(s.originalName||e("chats.file"))}</span>`).join(" "):'<span class="muted">—</span>'}function Ka(a){const s=String(a||"");if(!s.trim())return{system:"",body:"",hasRoles:!1};if(!/^(system|user|assistant|tool): /m.test(s))return{system:"",body:s,hasRoles:!1};const o=/(^|\n)(system|user|assistant|tool): /g,i=[];let n;for(;(n=o.exec(s))!==null;)i.push({role:n[2],contentStart:n.index+n[0].length,index:n.index});if(!i.length)return{system:"",body:s,hasRoles:!1};const r=i.map((m,p)=>{const l=p+1<i.length?i[p+1].index:s.length;return{role:m.role,content:s.slice(m.contentStart,l)}}),d=r.filter(m=>m.role==="system").map(m=>m.content),u=r.filter(m=>m.role!=="system").map(m=>`${m.role}: ${m.content}`);return{system:d.join(`

`).trim(),body:u.length?u.join(`
`):s,hasRoles:!0,blocks:r}}async function ut(){await Promise.all([bt(),$t()]);const a=c.chatFilter,s=new URLSearchParams;if(s.set("limit",String(a.limit)),s.set("offset",String(a.offset)),a.status&&s.set("status",a.status),a.model&&s.set("model",a.model),a.apiKeyId&&s.set("apiKeyId",a.apiKeyId),a.q&&s.set("q",a.q),a.from&&s.set("from",new Date(a.from).toISOString()),a.to){const l=new Date(a.to);l.setHours(23,59,59,999),s.set("to",l.toISOString())}a.policyMode&&s.set("policyMode",a.policyMode),a.hasDocuments!==""&&s.set("hasDocuments",a.hasDocuments),$e(s,a);const o=await P(`/chats?${s}`),i=o.total||0,n=[`<option value="">${t(e("chats.allModels"))}</option>`,...c.models.map(l=>`<option value="${t(l)}" ${a.model===l?"selected":""}>${t(l)}</option>`)].join(""),r=[`<option value="">${t(e("chats.allKeys"))}</option>`,...c.keys.map(l=>`<option value="${l.id}" ${a.apiKeyId===l.id?"selected":""}>${t(l.name)} (${t(l.keyPrefix)})</option>`)].join(""),d=(o.items||[]).map(l=>{const S=Ka(l.promptPreview||""),g=!!S.system,f=g?S.body.slice(0,160):l.promptPreview||"";return`
    <tr>
      <td><button class="linkish cell-primary" data-chat="${l.id}">${t(l.requestId)}</button></td>
      <td><div class="cell-primary">${t(l.apiKey?.name||"")}</div><div class="cell-sub">${t(l.apiKey?.keyPrefix||"")}</div></td>
      <td>${t(l.model)}</td>
      <td>${ua(l.status)} ${Ot(l.policyMode||"-")}</td>
      <td>${Ps(l.documents)} ${l.documentCount?`<span class="muted">×${l.documentCount}</span>`:""}</td>
      <td class="chats-preview-cell">
        ${g?`<span class="chip sys-chip" title="${t(S.system.slice(0,400))}">${t(e("chats.hasSystem"))}</span>`:""}
        <div class="muted preview-text">${t(f)}</div>
      </td>
      <td class="chats-preview-cell"><div class="muted preview-text">${t(l.contentPreview)}</div></td>
      <td>${te(l.createdAt)}</td>
      <td class="muted">${l.durationMs!=null?gt(l.durationMs):"—"}</td>
    </tr>`}).join(""),u=Ne({title:e("chats.filterTitle")||e("common.filterTitle"),hint:e("chats.filterHint")||e("common.filterHint"),meta:M("common.pagerTotal",{n:i}),searchHtml:`
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
        <select id="f-model">${n}</select>
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
      ${_({field:"model",label:e("chats.model"),filterRef:a})}
      ${_({field:"status",label:e("chats.status"),filterRef:a})}
      <th>${t(e("chats.attachments"))}</th>
      <th>${t(e("chats.prompt"))}</th>
      <th>${t(e("chats.response"))}</th>
      ${_({field:"createdAt",label:e("chats.time"),filterRef:a})}
      ${_({field:"durationMs",label:e("ddos.duration"),filterRef:a})}`,bodyHtml:d,colSpan:9,emptyText:e("common.empty"),pagerHtml:Me({total:i,limit:a.limit,offset:a.offset,idPrefix:"chats"})});document.getElementById("app").innerHTML=ie(`
    <div class="topbar">
      <h2>${t(e("chats.title"))}</h2>
    </div>
    ${qe([e("chats.decrypt")])}
    ${u}
    ${m}
  `),de(),dt("chats",c.chatFilter,()=>ut().catch($)),je(c.chatFilter,()=>ut().catch($));const p=()=>{c.chatFilter.q=document.getElementById("f-q").value.trim(),c.chatFilter.status=document.getElementById("f-status").value,c.chatFilter.model=document.getElementById("f-model").value,c.chatFilter.apiKeyId=document.getElementById("f-key").value,c.chatFilter.policyMode=document.getElementById("f-mode").value,c.chatFilter.from=document.getElementById("f-from").value,c.chatFilter.to=document.getElementById("f-to").value,c.chatFilter.hasDocuments=document.getElementById("f-docs").checked?"true":"",c.chatFilter.offset=0,ut().catch($)};document.querySelector("[data-filter-apply]").onclick=p,document.getElementById("f-q").onkeydown=l=>{l.key==="Enter"&&p()},document.querySelector("[data-filter-reset]").onclick=()=>{c.chatFilter={q:"",status:"",model:"",apiKeyId:"",from:"",to:"",policyMode:"",hasDocuments:"",sortBy:"createdAt",sortDir:"desc",limit:50,offset:0},ut().catch($)},document.querySelectorAll("[data-chat]").forEach(l=>{l.onclick=()=>ja(l.dataset.chat)})}async function ja(a){const{data:s}=await P(`/chats/${a}`),o=s.response||{},i=s.documents||[];let n=`<p class="muted">${t(e("chats.noAttach"))}</p>`;if(i.length){const m=[];for(const p of i){let l="";if(vt(p.mimeType))try{const S=await P(`/documents/${p.id}`),g=await Wa(S.data||{id:p.id,isImage:!0,mimeType:p.mimeType});g?.src&&(l=`<img class="preview" src="${g.src}" alt="${t(p.originalName)}" />`)}catch{l=`<span class="muted">${t(e("chats.previewFailed"))}</span>`}m.push(`
        <div class="attach-item">
          <div style="flex:1;min-width:0">
            <strong>${t(p.originalName)}</strong>
            <div class="muted">${t(p.mimeType)} · ${xe(p.sizeBytes)}</div>
            ${l}
          </div>
          <button class="btn secondary sm" data-open-doc="${p.id}">${t(e("chats.openFile"))}</button>
        </div>`)}n=`<div class="attach-list">${m.join("")}</div>`}const r=Ka(s.prompt||""),d=r.system?`<div class="block block-system">
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
      <div class="card"><div class="label">${t(e("chats.duration"))}</div><div class="value value-sm">${gt(s.durationMs)}</div></div>
      <div class="card"><div class="label">${t(e("chats.apiKey"))}</div><div class="value value-sm">${t(s.apiKey?.name||"")}</div></div>
      <div class="card"><div class="label">${t(e("chats.stream"))}</div><div class="value value-sm">${s.stream?e("common.yes"):e("common.no")}</div></div>
    </div>
    ${s.errorMessage?`<div class="error-box">${t(s.errorMessage)}</div>`:""}
    ${d}
    <div class="block">
      <h4>${t(e("chats.attachments"))}</h4>
      ${n}
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
      <div class="pre">${t(o.reasoning_content||e("chats.none"))}</div>
    </div>
    <div class="block">
      <div class="block-head">
        <h4>${t(e("chats.content"))}</h4>
        <button class="btn secondary sm" data-copy="content">${t(e("chats.copyContent"))}</button>
      </div>
      <div class="pre">${t(o.content||e("chats.none"))}</div>
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
      <div class="pre">${t(o.raw||"")}</div>
    </div>
    <div class="modal-meta-foot muted">${t(e("common.ipLabel"))}: ${t(s.ip||"—")} · ${t(e("common.uaLabel"))}: ${t(s.userAgent||"—")} · ${te(s.createdAt)}</div>`;rt({title:e("chats.detail"),subtitle:`${t(s.requestId)} · ${ua(s.status)} ${Ot(s.policyMode||"-")}`,bodyHtml:u,size:"xl",footerHtml:`<button type="button" class="btn secondary sm" id="modal-ok">${t(e("chats.close"))}</button>`}),document.getElementById("modal-ok")?.addEventListener("click",()=>ye()),document.querySelector('[data-copy="system"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(r.system||"")}),document.querySelector('[data-copy="prompt"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(r.body||s.prompt||"")}),document.querySelector('[data-copy="raw-prompt"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(s.prompt||"")}),document.querySelector('[data-copy="content"]')?.addEventListener("click",()=>{navigator.clipboard.writeText(o.content||"")}),document.querySelectorAll("[data-open-doc]").forEach(m=>{m.onclick=()=>Qa(m.dataset.openDoc)})}async function _e(){const a=c.keyFilter;let s={};try{const p=await P("/usage");for(const l of p.data?.perKey||[])s[l.apiKeyId]=l}catch{}const o=new URLSearchParams;o.set("limit",String(a.limit)),o.set("offset",String(a.offset)),a.q&&o.set("q",a.q),a.role&&o.set("role",a.role),a.mode&&o.set("mode",a.mode),a.isActive!==""&&o.set("isActive",a.isActive),$e(o,a);const i=await P(`/keys?${o}`),n=i.data||[],r=i.total??n.length,d=n.map(p=>{const l=s[p.id],S=l?.requests??"—",g=l?Math.round((l.utilization||0)*100):0,f=p.ipWhitelist||[],b=f.length?M("keys.ipCount",{n:f.length}):e("keys.ipAll");return`
    <tr>
      <td><div class="cell-primary">${t(p.name)}</div><div class="cell-sub">${t(p.keyPrefix)}…</div></td>
      <td>${hs(p.role)}</td>
      <td>${Ot(p.mode)}</td>
      <td>${_a(p.rateLimit)}</td>
      <td title="${t(f.join(", "))}">${t(b)}</td>
      <td>
        <div>${S} <span class="muted">(${t(e("keys.usage24"))})</span></div>
        <div class="usage-bar ${g>80?"warn":""}"><span style="width:${g}%"></span></div>
      </td>
      <td>${p.isActive?`<span class="badge success">${t(e("common.active"))}</span>`:`<span class="badge error">${t(e("common.revoked"))}</span>`}</td>
      <td>${te(p.createdAt)}</td>
      <td><div class="row-actions">
        <button class="btn secondary sm" data-edit="${p.id}">${t(e("keys.edit"))}</button>
        ${p.isActive?`<button class="btn danger sm" data-revoke="${p.id}">${t(e("keys.revoke"))}</button>`:""}
      </div></td>
    </tr>`}).join(""),u=Ne({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:M("common.pagerTotal",{n:r}),searchHtml:`
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
      ${_({field:"name",label:e("keys.name"),filterRef:a})}
      ${_({field:"role",label:e("keys.role"),filterRef:a})}
      ${_({field:"mode",label:e("keys.mode"),filterRef:a})}
      ${_({field:"rateLimit",label:e("keys.rate"),filterRef:a})}
      <th>${t(e("keys.ipWhitelistCol"))}</th>
      <th>${t(e("keys.usage24"))}</th>
      ${_({field:"isActive",label:e("keys.status"),filterRef:a})}
      ${_({field:"createdAt",label:e("keys.created"),filterRef:a})}
      <th>${t(e("common.actions"))}</th>`,bodyHtml:d,colSpan:9,emptyText:e("keys.empty"),pagerHtml:Me({total:r,limit:a.limit,offset:a.offset,idPrefix:"keys"})});document.getElementById("app").innerHTML=ie(`
    <div class="topbar">
      <h2>${t(e("keys.title"))}</h2>
      <div class="toolbar">
        <button class="btn" id="btn-new-key">${t(e("keys.new"))}</button>
      </div>
    </div>
    ${u}
    ${m}
  `),de(),dt("keys",c.keyFilter,()=>_e().catch($)),je(c.keyFilter,()=>_e().catch($)),document.querySelector("[data-filter-apply]").onclick=()=>{c.keyFilter.q=document.getElementById("kf-q").value.trim(),c.keyFilter.role=document.getElementById("kf-role").value,c.keyFilter.mode=document.getElementById("kf-mode").value,c.keyFilter.isActive=document.getElementById("kf-active").value,c.keyFilter.offset=0,_e().catch($)},document.querySelector("[data-filter-reset]").onclick=()=>{c.keyFilter={q:"",role:"",mode:"",isActive:"",sortBy:"createdAt",sortDir:"desc",limit:20,offset:0},_e().catch($)},document.getElementById("btn-new-key").onclick=()=>$a(),document.querySelectorAll("[data-edit]").forEach(p=>{const l=n.find(S=>S.id===p.dataset.edit);p.onclick=()=>$a(l)}),document.querySelectorAll("[data-revoke]").forEach(p=>{p.onclick=async()=>{await J({message:e("keys.confirmRevoke"),variant:"danger",confirmText:e("keys.revoke")})&&(await P(`/keys/${p.dataset.revoke}`,{method:"DELETE"}),_e().catch($))}})}function $a(a){const s=!!a,o=(a?.ipWhitelist||[]).join(`
`);rt({title:e(s?"keys.edit":"keys.new"),subtitle:s?`${t(a?.name||"")} · ${t(a?.keyPrefix||"")}…`:"",size:"md",bodyHtml:`
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
          <textarea id="k-ip" rows="4" placeholder="${t(e("keys.ipPlaceholder"))}">${t(o)}</textarea>
          <span class="field-hint">${t(e("keys.ipWhitelistHint"))}</span>
        </label>
        ${s?`<label class="full">${t(e("keys.status"))}
          <select id="k-active"><option value="true">${t(e("common.active"))}</option><option value="false">${t(e("common.revoked"))}</option></select>
        </label>`:""}
      </div>
      <pre id="k-created" class="pre key-once-box" hidden></pre>`,footerHtml:`
      <button type="button" class="btn secondary sm" id="k-cancel">${t(e("common.cancel"))}</button>
      <button type="button" class="btn sm" id="k-save">${t(e("common.save"))}</button>`}),document.getElementById("k-role").value=a?.role||"client",document.getElementById("k-mode").value=a?.mode||"safe",s&&(document.getElementById("k-active").value=String(a.isActive)),document.getElementById("k-cancel").onclick=()=>ye(),document.getElementById("k-save").onclick=async()=>{const i=document.getElementById("k-ip").value.split(/[\n,]+/).map(r=>r.trim()).filter(Boolean),n={name:document.getElementById("k-name").value.trim(),role:document.getElementById("k-role").value,mode:document.getElementById("k-mode").value,rateLimit:Number(document.getElementById("k-rate").value||60),maxTurns:document.getElementById("k-turns").value?Number(document.getElementById("k-turns").value):null,timeoutMs:document.getElementById("k-timeout").value?Number(document.getElementById("k-timeout").value):null,ipWhitelist:i};try{if(s)n.isActive=document.getElementById("k-active").value==="true",await P(`/keys/${a.id}`,{method:"PATCH",body:JSON.stringify(n)}),ye(),_e().catch($);else{const r=await P("/keys",{method:"POST",body:JSON.stringify(n)}),d=document.getElementById("k-created");d&&(d.hidden=!1,d.textContent=`${e("keys.keyOnce")}
${r.data?.key||JSON.stringify(r.data)}`);const u=document.getElementById("k-save");u&&(u.textContent=e("chats.close"),u.onclick=()=>{ye(),_e().catch($)})}}catch(r){$(r)}}}function Ua(a){return e(a==="filesystem"?"docs.storageFs":"docs.storageDb")}async function Ga(a,s){try{const o=await fetch(`${sa}/documents/${a}/download`,{headers:c.key?{Authorization:`Bearer ${c.key}`}:{}});if(!o.ok){const d=await o.text();let u=d;try{u=JSON.parse(d).error?.message||d}catch{}throw new Error(u||e("docs.downloadFail"))}const i=await o.blob(),n=URL.createObjectURL(i),r=document.createElement("a");r.href=n,r.download=s||"download",document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}catch(o){j(o.message||e("docs.downloadFail"))}}async function at(){await $t();const a=c.docFilter,s=new URLSearchParams({limit:String(a.limit),offset:String(a.offset)});if(a.q&&s.set("q",a.q),a.apiKeyId&&s.set("apiKeyId",a.apiKeyId),a.storageType&&s.set("storageType",a.storageType),a.from&&s.set("from",new Date(a.from).toISOString()),a.to){const l=new Date(a.to);l.setHours(23,59,59,999),s.set("to",l.toISOString())}$e(s,a);const o=await P(`/documents?${s}`),i=o.total??0,n=o.meta||{},r=M("docs.storageHint",{dir:n.storageDir||"—",dbMax:xe(n.documentDbMaxBytes),upMax:xe(n.uploadMaxBytes)}),d=[`<option value="">${t(e("common.all"))}</option>`,...c.keys.map(l=>`<option value="${l.id}" ${a.apiKeyId===l.id?"selected":""}>${t(l.name)}</option>`)].join(""),u=(o.data||[]).map(l=>`
    <tr>
      <td><button class="linkish cell-primary" data-doc="${l.id}">${t(l.originalName)}</button>
        ${vt(l.mimeType)?`<span class="chip img">${t(e("chats.img"))}</span>`:""}</td>
      <td>${t(l.apiKey?.name||"")}</td>
      <td>${t(l.mimeType)}</td>
      <td>${xe(l.sizeBytes)}</td>
      <td>
        <span title="${t(l.storagePath||"")}">${t(Ua(l.storageType))}</span>
        ${l.storagePath?`<div class="cell-sub">${t(l.storagePath)}</div>`:""}
      </td>
      <td>${te(l.createdAt)}</td>
      <td><div class="row-actions">
        <button class="btn secondary sm" data-dl="${l.id}" data-name="${t(l.originalName)}">${t(e("docs.download"))}</button>
        <button class="btn danger sm" data-del="${l.id}">${t(e("docs.delete"))}</button>
      </div></td>
    </tr>`).join(""),m=Ne({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:M("common.pagerTotal",{n:i}),searchHtml:`
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
      ${_({field:"originalName",label:e("docs.file"),filterRef:a})}
      <th>${t(e("chats.apiKey"))}</th>
      ${_({field:"mimeType",label:e("docs.mime"),filterRef:a})}
      ${_({field:"sizeBytes",label:e("docs.size"),filterRef:a})}
      ${_({field:"storageType",label:e("docs.storage"),filterRef:a})}
      ${_({field:"createdAt",label:e("docs.time"),filterRef:a})}
      <th>${t(e("common.actions"))}</th>`,bodyHtml:u,colSpan:7,emptyText:e("docs.empty"),pagerHtml:Me({total:i,limit:a.limit,offset:a.offset,idPrefix:"docs"})});document.getElementById("app").innerHTML=ie(`
    <div class="topbar">
      <h2>${t(e("docs.title"))}</h2>
    </div>
    ${qe([r])}
    ${m}
    ${p}
  `),de(),dt("docs",c.docFilter,()=>at().catch($)),je(c.docFilter,()=>at().catch($)),document.querySelector("[data-filter-apply]").onclick=()=>{c.docFilter.q=document.getElementById("df-q").value.trim(),c.docFilter.apiKeyId=document.getElementById("df-key").value,c.docFilter.storageType=document.getElementById("df-storage").value,c.docFilter.from=document.getElementById("df-from").value,c.docFilter.to=document.getElementById("df-to").value,c.docFilter.offset=0,at().catch($)},document.querySelector("[data-filter-reset]").onclick=()=>{c.docFilter={q:"",apiKeyId:"",storageType:"",from:"",to:"",sortBy:"createdAt",sortDir:"desc",limit:20,offset:0},at().catch($)},document.querySelectorAll("[data-doc]").forEach(l=>{l.onclick=()=>Qa(l.dataset.doc)}),document.querySelectorAll("[data-dl]").forEach(l=>{l.onclick=()=>Ga(l.getAttribute("data-dl"),l.getAttribute("data-name")||"file")}),document.querySelectorAll("[data-del]").forEach(l=>{l.onclick=async()=>{await J({message:e("docs.confirmDel"),variant:"danger",confirmText:e("docs.delete")})&&(await P(`/documents/${l.dataset.del}`,{method:"DELETE"}),at().catch($))}})}async function Es(a){const s=await fetch(`${sa}/documents/${a}/download`,{headers:c.key?{Authorization:`Bearer ${c.key}`}:{}});if(!s.ok){const i=await s.text();let n=i;try{n=JSON.parse(i)?.error?.message||i}catch{}throw new Error(n||e("docs.downloadFail"))}const o=await s.blob();return URL.createObjectURL(o)}async function Wa(a){if(a?.imageDataUrl)return{src:a.imageDataUrl,revoke:null};if(a?.isImage||vt(a?.mimeType)){const s=await Es(a.id);return{src:s,revoke:s}}return null}async function Qa(a){const{data:s}=await P(`/documents/${a}`);let o,i=null;try{const d=await Wa(s);d?(i=d.revoke,o=`<img class="preview doc-preview-img" src="${d.src}" alt="${t(s.originalName||"")}" />`):s.isBinary||s.content==null?o=`<div class="data-empty"><div class="data-empty-icon">⧉</div><strong>${t(e("docs.binaryPreview"))}</strong></div>`:o=`<div class="pre" id="doc-content">${t(s.content||e("chats.none"))}</div>`}catch{o=`<div class="data-empty"><div class="data-empty-icon">⧉</div><strong>${t(e("chats.previewFailed")||e("docs.binaryPreview"))}</strong></div>`}const n=`${Ua(s.storageType)}${s.storagePath?` · ${s.storagePath}`:""}`;rt({title:e("docs.detail"),subtitle:`${t(s.originalName)} · ${t(s.mimeType)} · ${xe(s.sizeBytes)}<br/><span class="muted">${t(e("docs.storage"))}: ${t(n)}</span>`,size:"lg",bodyHtml:`
      <div class="block">
        <h4>${t(e("docs.preview"))}</h4>
        ${o}
      </div>`,footerHtml:`
      ${!s.imageDataUrl&&!(s.isImage||vt(s.mimeType))&&s.content&&!s.isBinary?`<button type="button" class="btn secondary sm" id="doc-copy">${t(e("docs.copy"))}</button>`:""}
      <button type="button" class="btn sm" id="doc-download">${t(e("docs.download"))}</button>
      <button type="button" class="btn secondary sm" id="doc-close">${t(e("chats.close"))}</button>`});const r=()=>{if(i)try{URL.revokeObjectURL(i)}catch{}ye()};document.getElementById("doc-close")?.addEventListener("click",r),document.getElementById("doc-download").onclick=()=>Ga(s.id,s.originalName),document.getElementById("doc-copy")?.addEventListener("click",async()=>{if(await ca(s.content||"")){const u=document.getElementById("doc-copy");u&&(u.textContent=e("chat.copied"))}})}function ka(a){if(!a)return"-";const s=`audit.actions.${String(a).replace(/\./g,"_")}`,o=e(s);return o===s?a:o}function Is(a){if(!a)return"";const s=`audit.resources.${String(a).replace(/\./g,"_")}`,o=e(s);return o===s?a:o}function xs(a){if(!a)return"";try{const s=typeof a=="string"?JSON.parse(a):a;return!s||typeof s!="object"?String(a):Object.entries(s).map(([o,i])=>{const n={originalName:e("docs.file"),mimeType:e("docs.mime"),sizeBytes:e("docs.size"),storageType:e("audit.metaStorage"),asKeyId:e("audit.metaAsKey"),asKeyName:e("audit.metaAsKeyName"),model:e("chats.model"),stream:e("chats.stream")}[o]||o,r=typeof i=="object"?JSON.stringify(i):String(i??"");return`${n}: ${r}`}).join(" · ")}catch{return String(a)}}async function mt(){await $t();const a=c.auditFilter,s=new URLSearchParams;if(s.set("limit",String(a.limit)),s.set("offset",String(a.offset)),a.q&&s.set("q",a.q),a.action&&s.set("action",a.action),a.apiKeyId&&s.set("apiKeyId",a.apiKeyId),a.from&&s.set("from",new Date(a.from).toISOString()),a.to){const l=new Date(a.to);l.setHours(23,59,59,999),s.set("to",l.toISOString())}$e(s,a);const o=await P(`/audit-logs?${s}`),i=o.total??0,n=["","chat.create","document.upload","document.delete","document.download","api_key.create","api_key.update","api_key.delete","settings.update","playground.chat","ip.ban","ip.unban","ddos.policy_update","pm2.switch","system.update"],r=[`<option value="">${t(e("common.all"))}</option>`,...c.keys.map(l=>`<option value="${l.id}" ${a.apiKeyId===l.id?"selected":""}>${t(l.name)}</option>`)].join(""),d=n.map(l=>l?`<option value="${t(l)}" ${a.action===l?"selected":""}>${t(ka(l))}</option>`:`<option value="">${t(e("common.all"))}</option>`).join(""),u=(o.data||[]).map(l=>`
    <tr>
      <td>${te(l.createdAt)}</td>
      <td title="${t(l.action||"")}"><span class="cell-primary">${t(ka(l.action))}</span></td>
      <td>
        <div>${t(Is(l.resource))}</div>
        ${l.resourceId?`<div class="cell-sub audit-id" title="${t(l.resourceId)}">${t(l.resourceId)}</div>`:""}
      </td>
      <td>${t(l.apiKey?.name||"-")}</td>
      <td class="muted audit-meta">${t(xs(l.metaJson))}</td>
    </tr>`).join(""),m=Ne({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:M("common.pagerTotal",{n:i}),searchHtml:`
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
      ${_({field:"createdAt",label:e("audit.time"),filterRef:a})}
      ${_({field:"action",label:e("audit.action"),filterRef:a})}
      ${_({field:"resource",label:e("audit.resource"),filterRef:a})}
      <th>${t(e("audit.key"))}</th>
      <th>${t(e("audit.meta"))}</th>`,bodyHtml:u,colSpan:5,emptyText:e("audit.empty"),pagerHtml:Me({total:i,limit:a.limit,offset:a.offset,idPrefix:"audit"})});document.getElementById("app").innerHTML=ie(`
    <div class="topbar">
      <h2>${t(e("audit.title"))}</h2>
    </div>
    ${m}
    ${p}
  `),de(),dt("audit",c.auditFilter,()=>mt().catch($)),je(c.auditFilter,()=>mt().catch($)),document.querySelector("[data-filter-apply]").onclick=()=>{c.auditFilter.q=document.getElementById("af-q").value.trim(),c.auditFilter.action=document.getElementById("af-action").value,c.auditFilter.apiKeyId=document.getElementById("af-key").value,c.auditFilter.from=document.getElementById("af-from").value,c.auditFilter.to=document.getElementById("af-to").value,c.auditFilter.offset=0,mt().catch($)},document.querySelector("[data-filter-reset]").onclick=()=>{c.auditFilter={q:"",action:"",apiKeyId:"",from:"",to:"",sortBy:"createdAt",sortDir:"desc",limit:50,offset:0},mt().catch($)}}function Vt(){return[{id:"local",titleKey:"settings.scLocalTitle",descKey:"settings.scLocalDesc",detailKey:"settings.scLocalDetail",values:{globalSafeMode:!1,safeToolsMode:"none",safeMaxTurns:16,safeTimeoutMs:18e4}},{id:"prod",titleKey:"settings.scProdTitle",descKey:"settings.scProdDesc",detailKey:"settings.scProdDetail",values:{globalSafeMode:!0,safeToolsMode:"none",safeMaxTurns:10,safeTimeoutMs:12e4}},{id:"code",titleKey:"settings.scCodeTitle",descKey:"settings.scCodeDesc",detailKey:"settings.scCodeDetail",values:{globalSafeMode:!1,safeToolsMode:"none",safeMaxTurns:20,safeTimeoutMs:3e5}},{id:"read",titleKey:"settings.scReadTitle",descKey:"settings.scReadDesc",detailKey:"settings.scReadDetail",values:{globalSafeMode:!0,safeToolsMode:"readonly",safeMaxTurns:12,safeTimeoutMs:15e4}},{id:"chat",titleKey:"settings.scChatTitle",descKey:"settings.scChatDesc",detailKey:"settings.scChatDetail",values:{globalSafeMode:!0,safeToolsMode:"none",safeMaxTurns:5,safeTimeoutMs:6e4}},{id:"long",titleKey:"settings.scLongTitle",descKey:"settings.scLongDesc",detailKey:"settings.scLongDetail",values:{globalSafeMode:!0,safeToolsMode:"none",safeMaxTurns:40,safeTimeoutMs:6e5}}]}function Ms(){return{globalSafeMode:document.getElementById("s-master-global")?Je("s-master-global"):!1,safeToolsMode:document.getElementById("s-tools")?.value||"none",safeMaxTurns:Number(document.getElementById("s-turns")?.value),safeTimeoutMs:Number(document.getElementById("s-timeout")?.value)}}function qs(a){const s=Ms();return!Number.isFinite(s.safeMaxTurns)||!Number.isFinite(s.safeTimeoutMs)?!1:s.globalSafeMode===!!a.globalSafeMode&&s.safeToolsMode===a.safeToolsMode&&s.safeMaxTurns===Number(a.safeMaxTurns)&&s.safeTimeoutMs===Number(a.safeTimeoutMs)}function ot(){for(const a of Vt()){const s=document.querySelector(`[data-preset="${a.id}"]`),o=document.querySelector(`[data-apply-preset="${a.id}"]`);if(!s||!o)continue;const i=qs(a.values);s.classList.toggle("is-applied",i),o.textContent=e(i?"settings.guideActive":"settings.guideApply"),o.disabled=i,o.classList.toggle("is-applied",i),o.setAttribute("aria-pressed",i?"true":"false")}}function Ts(a){const s=document.getElementById("s-tools"),o=document.getElementById("s-turns"),i=document.getElementById("s-timeout"),n=!!a.globalSafeMode;Xe("s-master-global",n,e("settings.masterOn"),e("settings.masterOff")),Ze("settings-root",!n),Ye("settings-disabled-banner",!n),s&&a.safeToolsMode&&(s.value=a.safeToolsMode),o&&a.safeMaxTurns!=null&&(o.value=String(a.safeMaxTurns)),i&&a.safeTimeoutMs!=null&&(i.value=String(a.safeTimeoutMs)),ot()}async function Bs(a){if(a?.values&&await J({title:e(a.titleKey),message:M("settings.guideApplyConfirm",{name:e(a.titleKey)}),variant:"confirm",confirmText:e("settings.guideApply")})){Ts(a.values);try{await P("/settings",{method:"PUT",body:JSON.stringify({globalSafeMode:!!a.values.globalSafeMode,safeToolsMode:a.values.safeToolsMode,safeMaxTurns:Number(a.values.safeMaxTurns),safeTimeoutMs:Number(a.values.safeTimeoutMs),defaultModel:document.getElementById("s-model")?.value?.trim()||""})}),ot();const s=document.querySelector("#flash-error");s&&(s.hidden=!1,s.classList.add("flash-ok"),s.textContent=e("settings.guideApplied"),setTimeout(()=>{s.textContent===e("settings.guideApplied")&&(s.hidden=!0,s.classList.remove("flash-ok"),s.textContent="")},2500))}catch(s){$(s)}}}async function za(){const[{data:a},s]=await Promise.all([P("/settings"),bt()]),o=(s.models||c.models||[]).map(d=>`<option value="${t(d)}" ${a.defaultModel===d?"selected":""}>${t(d)}</option>`).join(""),i=Vt().map(d=>`
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
      </article>`).join(""),n=!!a.globalSafeMode;document.getElementById("app").innerHTML=ie(`
    <div id="settings-root" class="${n?"":"is-feature-off"}">
    <div class="topbar">
      <h2>${t(e("settings.title"))}</h2>
      <div class="toolbar">
        ${pa({id:"s-master-global",on:n,onLabel:e("settings.masterOn"),offLabel:e("settings.masterOff"),title:e("settings.globalSafeHint")})}
        <button class="btn secondary sm" id="btn-refresh-models">${t(e("settings.refreshModels"))}</button>
      </div>
    </div>
    <div class="feature-off-banner" id="settings-disabled-banner" ${n?"hidden":""} role="status">
      <strong>${t(e("common.featureOff"))}</strong>
      <span>${t(e("settings.disabledBanner"))}</span>
    </div>
    ${qe([e("settings.globalSafeHint")])}
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
            <select id="s-model">${o||`<option value="${t(a.defaultModel)}">${t(a.defaultModel)}</option>`}</select>
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
        <div class="settings-guide-grid">${i}</div>
      </div>
    </div>
    <div class="danger-zone">
      <h3>${t(e("settings.dangerTitle"))}</h3>
      <p class="muted">${t(e("settings.panelOffHint"))} · ${t(e("settings.panelStatus"))}: <strong>${a.adminPanelEnabled?e("settings.panelOn"):e("settings.panelOff")}</strong></p>
      <button class="btn danger sm" id="s-disable-panel" ${a.adminPanelEnabled?"":"disabled"}>${t(e("settings.disablePanel"))}</button>
    </div>
    </div>
  `),de(),document.getElementById("s-tools").value=a.safeToolsMode||"none";const r=()=>ot();["s-tools","s-turns","s-timeout"].forEach(d=>{const u=document.getElementById(d);u&&(u.addEventListener("change",r),u.addEventListener("input",r))}),ot(),document.getElementById("s-master-global")?.addEventListener("click",async()=>{const d=!Je("s-master-global");Xe("s-master-global",d,e("settings.masterOn"),e("settings.masterOff")),Ze("settings-root",!d),Ye("settings-disabled-banner",!d),ot();try{await P("/settings",{method:"PUT",body:JSON.stringify({globalSafeMode:d,safeToolsMode:document.getElementById("s-tools").value,safeMaxTurns:Number(document.getElementById("s-turns").value),safeTimeoutMs:Number(document.getElementById("s-timeout").value),defaultModel:document.getElementById("s-model").value.trim()})})}catch(u){Xe("s-master-global",!d,e("settings.masterOn"),e("settings.masterOff")),Ze("settings-root",d),Ye("settings-disabled-banner",d),$(u)}}),document.getElementById("btn-refresh-models").onclick=async()=>{await bt(!0),za().catch($)},document.getElementById("s-save").onclick=async()=>{try{await P("/settings",{method:"PUT",body:JSON.stringify({globalSafeMode:Je("s-master-global"),safeToolsMode:document.getElementById("s-tools").value,safeMaxTurns:Number(document.getElementById("s-turns").value),safeTimeoutMs:Number(document.getElementById("s-timeout").value),defaultModel:document.getElementById("s-model").value.trim()})}),ot();const d=document.querySelector("#flash-error");d&&(d.hidden=!1,d.classList.add("flash-ok"),d.textContent=e("settings.saved"),setTimeout(()=>{d.hidden=!0,d.classList.remove("flash-ok"),d.textContent=""},2e3))}catch(d){$(d)}},document.querySelectorAll("[data-apply-preset]").forEach(d=>{d.addEventListener("click",async()=>{if(d.disabled)return;const u=d.getAttribute("data-apply-preset"),m=Vt().find(p=>p.id===u);m&&await Bs(m)})}),document.getElementById("s-disable-panel").onclick=async()=>{if(await J({message:e("settings.disablePanelConfirm"),variant:"danger",confirmText:e("settings.disablePanel")}))try{await P("/settings",{method:"PUT",body:JSON.stringify({adminPanelEnabled:!1})}),await pe({message:e("settings.disablePanelDone"),title:e("common.notice")}),Bt(!1)}catch(d){$(d)}}}async function Mt(){const a=await P("/api-features");if(c.page!=="apiFeatures")return;const s=a.data||{},o=[{id:"protocols",title:e("apiFeatures.groupProtocols"),tabLabel:e("apiFeatures.tabProtocols"),keys:["openaiChat","openaiResponses","anthropicMessages"]},{id:"media",title:e("apiFeatures.groupMedia"),tabLabel:e("apiFeatures.tabMedia"),keys:["imagesApi","filesOpenAiAlias","videoApi","audioApi"]},{id:"caps",title:e("apiFeatures.groupCaps"),tabLabel:e("apiFeatures.tabCaps"),keys:["tools","structuredOutput","vision","reasoningEffort","webSearch","subagents","planMode","memory","sessionResume","bestOfN","checkLoop","systemOverride","rules","permissionMode","sandbox"]},{id:"emu",title:e("apiFeatures.groupEmu"),tabLabel:e("apiFeatures.tabEmu"),keys:["usageEstimate","assistantsEmulation","strictSampling","forceDisableToolsInSafe"]}],i=c.apiFeaturesTab==="media"||c.apiFeaturesTab==="caps"||c.apiFeaturesTab==="emu"||c.apiFeaturesTab==="protocols"?c.apiFeaturesTab:"protocols";c.apiFeaturesTab=i;const n=f=>e(`apiFeatures.flag.${f}`)||f,r=f=>e(`apiFeatures.hint.${f}`)||"",d=f=>f.filter(b=>!!s[b]).length,u=f=>f.map(b=>{const k=!!s[b];return`
          <div class="dash-prot-row api-feat-row" data-feat="${t(b)}">
            <div>
              <strong>${t(n(b))}</strong>
              <div class="muted api-feat-hint">${t(r(b))}</div>
            </div>
            <button type="button" class="master-toggle ${k?"is-on":"is-off"}" data-feat-toggle="${t(b)}" aria-pressed="${k?"true":"false"}">
              <span class="master-toggle-track" aria-hidden="true"><span class="master-toggle-knob"></span></span>
              <span class="master-toggle-label">${t(e(k?"dash.on":"dash.off"))}</span>
            </button>
          </div>`}).join(""),m=o.reduce((f,b)=>f+b.keys.length,0),p=o.reduce((f,b)=>f+d(b.keys),0),l=`
    <div class="grid api-feat-kpi-grid">
      <div class="card">
        <div class="label">${t(e("apiFeatures.kpiEnabled"))}</div>
        <div class="value value-sm">${p}<span class="dash-kpi-den">/${m}</span></div>
        <div class="muted card-sub">${t(e("apiFeatures.kpiEnabledSub"))}</div>
      </div>
      ${o.map(f=>{const b=d(f.keys);return`
        <div class="card">
          <div class="label">${t(f.tabLabel)}</div>
          <div class="value value-sm">${b}<span class="dash-kpi-den">/${f.keys.length}</span></div>
          <div class="muted card-sub">${t(f.title)}</div>
        </div>`}).join("")}
    </div>`,S=o.map(f=>{const b=d(f.keys);return`
        <button type="button" role="tab" class="seg-tab ${i===f.id?"is-active":""}" data-feat-tab="${t(f.id)}" aria-selected="${i===f.id}">
          ${t(f.tabLabel)}
          <span class="seg-tab-count">${b}/${f.keys.length}</span>
        </button>`}).join(""),g=o.map(f=>`
        <div class="usage-tab-pane api-feat-tab-pane" id="api-feat-tab-${t(f.id)}" ${i===f.id?"":"hidden"}>
          <div class="panel data-table-panel api-feat-panel">
            <div class="panel-h">
              <div class="panel-h-text">
                <strong>${t(f.title)}</strong>
                <span class="muted panel-h-sub">${t(M("apiFeatures.groupMeta",{on:d(f.keys),n:f.keys.length}))}</span>
              </div>
            </div>
            <div class="panel-pad api-feat-list">${u(f.keys)}</div>
          </div>
        </div>`).join("");document.getElementById("app").innerHTML=ie(`
    <div class="topbar">
      <h2>${t(e("apiFeatures.title"))}</h2>
      <div class="toolbar">
        <button type="button" class="btn secondary sm" data-feat-preset="open">${t(e("apiFeatures.presetOpen"))}</button>
        <button type="button" class="btn secondary sm" data-feat-preset="locked">${t(e("apiFeatures.presetLocked"))}</button>
        <button type="button" class="btn secondary sm" data-feat-preset="dev">${t(e("apiFeatures.presetDev"))}</button>
      </div>
    </div>
    ${qe([e("apiFeatures.intro")])}
    ${l}

    <div class="usage-tabs-panel panel api-feat-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("apiFeatures.title"))}">
        ${S}
      </div>
      <div class="usage-tab-body">
        ${g}
      </div>
    </div>
  `),de(),document.querySelectorAll("[data-feat-tab]").forEach(f=>{f.addEventListener("click",()=>{const b=f.getAttribute("data-feat-tab")||"protocols",k=b==="media"||b==="caps"||b==="emu"||b==="protocols"?b:"protocols";c.apiFeaturesTab!==k&&(c.apiFeaturesTab=k,Mt().catch($))})}),document.querySelectorAll("[data-feat-toggle]").forEach(f=>{f.addEventListener("click",async()=>{const b=f.getAttribute("data-feat-toggle");if(!b)return;const k=!f.classList.contains("is-on");try{await P("/api-features",{method:"PUT",body:JSON.stringify({[b]:k})}),await Mt()}catch(T){$(T)}})}),document.querySelectorAll("[data-feat-preset]").forEach(f=>{f.addEventListener("click",async()=>{const b=f.getAttribute("data-feat-preset");if(await J({message:M("apiFeatures.presetConfirm",{name:b}),confirmText:e("common.confirm")}))try{await P("/api-features/preset",{method:"POST",body:JSON.stringify({name:b})}),await Mt()}catch(k){$(k)}})})}async function Pe(){c.mediaFilter||(c.mediaFilter={tab:"studio",q:"",kind:"",provider:"",from:"",to:"",sortBy:"createdAt",sortDir:"desc",jobSortBy:"createdAt",jobSortDir:"desc",limit:20,offset:0}),c.mediaFilter.sortBy||(c.mediaFilter.sortBy="createdAt"),c.mediaFilter.sortDir||(c.mediaFilter.sortDir="desc"),c.mediaFilter.jobSortBy||(c.mediaFilter.jobSortBy="createdAt"),c.mediaFilter.jobSortDir||(c.mediaFilter.jobSortDir="desc"),c.mediaFilter.tab||(c.mediaFilter.tab="studio");const a=c.mediaFilter,s=a.tab==="assets"||a.tab==="jobs"||a.tab==="studio"?a.tab:"studio";a.tab=s;const o=new URLSearchParams({limit:String(a.limit),offset:String(a.offset)});if(a.q&&o.set("q",a.q),a.kind&&o.set("kind",a.kind),a.provider&&o.set("provider",a.provider),a.from&&o.set("from",new Date(a.from).toISOString()),a.to){const y=new Date(a.to);y.setHours(23,59,59,999),o.set("to",y.toISOString())}$e(o,a);const i=new URLSearchParams({limit:"50",offset:"0"});$e(i,a,"jobSortBy","jobSortDir");const[n,,r,d]=await Promise.all([bt(!1).catch(()=>({models:c.models||[],defaultModel:""})),$t().catch(()=>{}),P(`/media/assets?${o}`),P(`/media/jobs?${i}`).catch(()=>({data:[],total:0}))]),u=r.data||[],m=r.total??u.length,p=d.data||[],l=d.total??p.length,S=(c.keys||[]).filter(y=>y.isActive!==!1&&(y.mode==="agent"||y.role==="admin")),g=[`<option value="">${t(e("media.generateKeySession"))}</option>`,...S.map(y=>`<option value="${t(y.id)}">${t(y.name||y.id)} · ${t(y.keyPrefix||"")}… · ${t(y.mode||"")}</option>`)].join(""),f=n.models?.length?n.models:c.models||[],b=n.defaultModel||f[0]||"",k=f.length?f.map(y=>`<option value="${t(y)}" ${y===b?"selected":""}>${t(y)}${y===b?` · ${t(e("media.modelDefault"))}`:""}</option>`).join(""):`<option value="">${t(b||e("media.modelEmpty"))}</option>`,T=[["1:1","1:1 · square"],["16:9","16:9 · landscape"],["9:16","9:16 · portrait / story"],["4:3","4:3"],["3:4","3:4"],["3:2","3:2"],["2:3","2:3"],["auto","auto"]].map(([y,v],F)=>`<option value="${y}" ${F===0?"selected":""}>${t(v)}</option>`).join(""),B=u.map(y=>{const v=y.mime||"",F=y.filename||y.originalName||"",W=vs(v,F),I=ma(v,F)||"",H=W?`<button type="button" class="btn ghost sm" data-media-preview="${t(y.id)}" data-media-mime="${t(v)}" data-media-name="${t(F)}" data-media-kind="${t(y.kind||"")}" data-media-bytes="${t(String(y.bytes??""))}" data-media-prompt="${t(y.prompt||"")}" data-preview-kind="${t(I)}" title="${t(e("media.preview"))}">${t(e("media.preview"))}</button>`:"";return`
    <tr>
      <td>
        <div class="cell-primary mono" title="${t(y.id)}">${t(String(y.id).slice(0,8))}…</div>
        <div class="cell-sub">${t(F||y.source||"—")}</div>
      </td>
      <td>${t(y.kind||"—")}</td>
      <td class="muted">${t(v||"—")}</td>
      <td>${xe(y.bytes)}</td>
      <td>${t(y.provider||"—")}</td>
      <td class="muted" title="${t(y.prompt||"")}">${t((y.prompt||"—").slice(0,48))}</td>
      <td>${te(y.created_at)}</td>
      <td><div class="row-actions">
        ${H}
        <button type="button" class="btn ghost sm" data-media-dl="${t(y.id)}" data-media-name="${t(F)}">${t(e("media.download"))}</button>
        <button type="button" class="btn danger sm" data-media-del="${t(y.id)}">${t(e("media.delete"))}</button>
      </div></td>
    </tr>`}).join(""),O=Ne({title:e("common.filterTitle"),hint:e("common.filterHint"),meta:M("common.pagerTotal",{n:m}),searchHtml:`
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
      </label>`}),E=be({headHtml:`
      <th>ID</th>
      ${_({field:"kind",label:e("media.kind"),filterRef:a})}
      ${_({field:"mime",label:"MIME",filterRef:a})}
      ${_({field:"byteSize",label:e("media.bytes"),filterRef:a})}
      ${_({field:"provider",label:e("media.provider"),filterRef:a})}
      <th>${t(e("media.prompt"))}</th>
      ${_({field:"createdAt",label:e("media.created"),filterRef:a})}
      <th>${t(e("common.actions"))}</th>`,bodyHtml:B,colSpan:8,emptyText:e("media.empty"),pagerHtml:Me({total:m,limit:a.limit,offset:a.offset,idPrefix:"media"})}),N=p.map(y=>`
    <tr>
      <td>
        <div class="cell-primary mono" title="${t(y.id)}">${t(String(y.id).slice(0,8))}…</div>
      </td>
      <td>${t(y.status||"—")}</td>
      <td class="muted" title="${t(y.prompt||"")}">${t((y.prompt||"—").slice(0,64))}</td>
      <td class="mono">${t(y.result_asset_id?String(y.result_asset_id).slice(0,8)+"…":"—")}</td>
      <td>${te(y.created_at)}</td>
    </tr>`).join(""),h=be({headHtml:`
      <th>ID</th>
      ${_({field:"status",label:e("media.status"),filterRef:a,sortByKey:"jobSortBy",sortDirKey:"jobSortDir"})}
      <th>${t(e("media.prompt"))}</th>
      <th>Asset</th>
      ${_({field:"createdAt",label:e("media.created"),filterRef:a,sortByKey:"jobSortBy",sortDirKey:"jobSortDir"})}`,bodyHtml:N,colSpan:5,emptyText:e("media.jobsEmpty")}),x=`
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
            <select id="mg-key">${g}</select>
          </label>
          <label>${t(e("chats.model"))}
            <select id="mg-model">${k}</select>
            <span class="hint">${t(e("media.modelHint"))}</span>
          </label>
          <label id="mg-aspect-wrap">${t(e("media.aspectRatio"))}
            <select id="mg-aspect">${T}</select>
            <span class="hint">${t(e("media.aspectHint"))}</span>
          </label>
          <label id="mg-n-wrap">${t(e("media.generateN"))}
            <input type="number" id="mg-n" min="1" max="4" value="1" />
            <span class="hint">${t(e("media.nHint"))}</span>
          </label>
          <label id="mg-voice-wrap" hidden>${t(e("media.videoVoice"))}
            <select id="mg-voice">
              <option value="">${t(e("media.videoVoiceNone"))}</option>
              ${["ara","eve","leo","rex","sal","mio"].map(y=>`<option value="${y}">${y}</option>`).join("")}
            </select>
            <span class="hint">${t(e("media.videoVoiceHint"))}</span>
          </label>
          <label id="mg-duration-wrap" hidden>${t(e("media.videoDuration"))}
            <select id="mg-duration">
              ${[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(y=>`<option value="${y}" ${y===6?"selected":""}>${y}s</option>`).join("")}
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
    </div>`,U=`
    <div class="grid media-kpi-grid" id="media-kpi-grid">
      <div class="card">
        <div class="label">${t(e("media.assets"))}</div>
        <div class="value value-sm">${m}</div>
        <div class="muted card-sub">${t(e("media.kpiAssetsSub"))}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("media.jobs"))}</div>
        <div class="value value-sm">${l}</div>
        <div class="muted card-sub">${t(e("media.kpiJobsSub"))}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("media.tabStudio"))}</div>
        <div class="value value-sm">${t(e("media.modeGenerate"))} / ${t(e("media.modeEdit"))} / ${t(e("media.modeVideo"))}</div>
        <div class="muted card-sub">${t(e("media.kpiStudioSub"))}</div>
      </div>
    </div>`;document.getElementById("app").innerHTML=ie(`
    <div class="topbar">
      <h2>${t(e("media.title"))}</h2>
    </div>
    ${qe([e("media.intro")])}
    ${U}
    <div class="usage-tabs-panel panel media-tabs-panel queue-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("media.title"))}">
        <button type="button" role="tab" class="seg-tab ${s==="studio"?"is-active":""}" data-media-tab="studio" aria-selected="${s==="studio"}">
          ${t(e("media.tabStudio"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${s==="assets"?"is-active":""}" data-media-tab="assets" aria-selected="${s==="assets"}">
          ${t(e("media.tabAssets"))}
          <span class="seg-tab-count">${m}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${s==="jobs"?"is-active":""}" data-media-tab="jobs" aria-selected="${s==="jobs"}">
          ${t(e("media.tabJobs"))}
          <span class="seg-tab-count">${l}</span>
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane media-tab-pane-studio" id="media-tab-studio" ${s==="studio"?"":"hidden"}>
          ${x}
        </div>
        <div class="usage-tab-pane media-tab-pane-assets" id="media-tab-assets" ${s==="assets"?"":"hidden"}>
          ${O}
          ${E}
        </div>
        <div class="usage-tab-pane media-tab-pane-jobs" id="media-tab-jobs" ${s==="jobs"?"":"hidden"}>
          ${h}
        </div>
      </div>
    </div>
  `),de(),document.querySelectorAll("[data-media-tab]").forEach(y=>{y.addEventListener("click",()=>{const v=y.getAttribute("data-media-tab")||"studio",F=v==="assets"||v==="jobs"||v==="studio"?v:"studio";c.mediaFilter.tab!==F&&(c.mediaFilter.tab=F,Pe().catch($))})});async function C(y){const v=await fetch(`/admin/api/media/assets/${y}/download`,{headers:{Authorization:`Bearer ${c.key}`}});if(!v.ok)throw new Error(await v.text());return v.blob()}{let y="generate",v=null;const F=()=>{const w=document.getElementById("mg-source-chip"),q=document.getElementById("mg-clear-source");if(!w)return;if(!v){w.hidden=!0,w.innerHTML="",q&&(q.hidden=!0);return}const Z=v.kind==="file"?e("media.sourceKindUpload"):v.kind==="asset"?e("media.sourceKindAsset"):e("media.sourceKindDocument");w.hidden=!1,w.innerHTML=`<span class="chip">${t(Z)}</span> <span class="mono">${t(v.name||v.id||"")}</span>`,q&&(q.hidden=!1)},W=w=>{v=w;const q=document.getElementById("mg-file");q&&w?.kind!=="file"&&(q.value=""),F()},I=w=>{y=w==="edit"||w==="video"?w:"generate",document.querySelectorAll("[data-mg-mode]").forEach(Se=>{const we=Se.getAttribute("data-mg-mode")===y;Se.classList.toggle("is-active",we),Se.setAttribute("aria-selected",we?"true":"false")});const q=document.getElementById("mg-source-section"),Z=document.getElementById("mg-n-wrap"),le=document.getElementById("mg-duration-wrap"),Ge=document.getElementById("mg-voice-wrap"),ke=document.getElementById("mg-submit");q&&(q.hidden=y==="generate"),Z&&(Z.hidden=y==="video"),le&&(le.hidden=y!=="video"),Ge&&(Ge.hidden=y!=="video"),ke&&(ke.textContent=e(y==="edit"?"media.editSubmit":y==="video"?"media.videoSubmit":"media.generateSubmit"));const se=document.getElementById("mg-prompt");se&&(se.placeholder=e(y==="edit"?"media.editPromptPh":y==="video"?"media.videoPromptPh":"media.generatePromptPh"));const Le=document.getElementById("mg-drop-title"),fe=document.getElementById("mg-drop-hint");Le&&(Le.textContent=e(y==="video"?"media.dropTitleVideo":"media.dropTitle")),fe&&(fe.textContent=e(y==="video"?"media.dropHintVideo":"media.dropHint"))};document.querySelectorAll("[data-mg-mode]").forEach(w=>{w.addEventListener("click",()=>I(w.getAttribute("data-mg-mode")||"generate"))}),I("generate");const H=document.getElementById("mg-dropzone"),K=document.getElementById("mg-file"),re=w=>w?w.type&&w.type.startsWith("image/")?!0:/\.(png|jpe?g|webp|gif|bmp|svg)$/i.test(w.name||""):!1,me=w=>{const q=[...w||[]].find(re);if(!q){j(e("media.sourceNeedImage"));return}W({kind:"file",file:q,name:q.name,mime:q.type||"image/*"}),j("")};if(document.getElementById("mg-pick-file")?.addEventListener("click",w=>{w.preventDefault(),w.stopPropagation(),K?.click()}),K?.addEventListener("change",()=>{K.files?.length&&me(K.files)}),document.getElementById("mg-clear-source")?.addEventListener("click",w=>{w.preventDefault(),w.stopPropagation(),W(null)}),document.getElementById("mg-pick-lib")?.addEventListener("click",w=>{w.preventDefault(),w.stopPropagation(),As({imagesOnly:!0,onPick:q=>{W({kind:q.kind,id:q.id,name:q.name,mime:q.mime}),j("")}}).catch(q=>j(q.message||e("media.libraryLoadFail")))}),H&&(H.addEventListener("click",w=>{w.target.closest("button")||K?.click()}),H.addEventListener("keydown",w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),K?.click())}),["dragenter","dragover"].forEach(w=>{H.addEventListener(w,q=>{q.preventDefault(),q.stopPropagation(),H.classList.add("is-dragover")})}),["dragleave","drop"].forEach(w=>{H.addEventListener(w,q=>{q.preventDefault(),q.stopPropagation(),H.classList.remove("is-dragover")})}),H.addEventListener("drop",w=>{const q=w.dataTransfer;q?.files?.length&&me(q.files)})),c._mediaDragAbort)try{c._mediaDragAbort.abort()}catch{}c._mediaDragAbort=new AbortController;const G={signal:c._mediaDragAbort.signal},X=document.getElementById("app");let D=0;window.addEventListener("dragenter",w=>{y!=="generate"&&[...w.dataTransfer?.types||[]].includes("Files")&&(D+=1,X?.classList.add("is-media-file-drag"))},G),window.addEventListener("dragleave",()=>{D=Math.max(0,D-1),D===0&&X?.classList.remove("is-media-file-drag")},G),window.addEventListener("drop",w=>{D=0,X?.classList.remove("is-media-file-drag"),y!=="generate"&&w.dataTransfer?.files?.length&&(w.preventDefault(),me(w.dataTransfer.files))},G),window.addEventListener("dragover",w=>{y!=="generate"&&[...w.dataTransfer?.types||[]].includes("Files")&&w.preventDefault()},G),document.getElementById("mg-submit")?.addEventListener("click",async()=>{const w=document.getElementById("mg-prompt")?.value?.trim()||"";if(!w){j(e("media.generateNeedPrompt"));return}const q=document.getElementById("mg-key")?.value||"",Z=document.getElementById("mg-model")?.value||void 0,le=document.getElementById("mg-aspect")?.value||"1:1",Ge=Math.min(4,Math.max(1,Number(document.getElementById("mg-n")?.value)||1)),ke=document.getElementById("mg-submit"),se=document.getElementById("mg-status"),Le=e(y==="video"?"media.videoBusy":y==="edit"?"media.editBusy":"media.generateBusy");ke&&(ke.disabled=!0,ke.textContent=Le),se&&(se.hidden=!1,se.textContent=Le),j("");try{if(y==="edit"){if(!v)throw new Error(e("media.editNeedImage"));const V=new FormData;V.append("prompt",w),V.append("aspect_ratio",le),V.append("n",String(Ge)),V.append("response_format","url"),Z&&V.append("model",Z),q&&V.append("apiKeyId",q),v.kind==="file"&&v.file?V.append("image",v.file):v.kind==="asset"&&v.id?V.append("sourceAssetId",v.id):v.kind==="document"&&v.id&&V.append("sourceDocumentId",v.id),await ha(await fetch("/admin/api/media/edit",{method:"POST",headers:{Authorization:`Bearer ${c.key}`},body:V})),se&&(se.textContent=e("media.editOk")),c.mediaFilter.tab="assets",c.mediaFilter.offset=0,await Pe();return}if(y==="video"){const V=new FormData;V.append("prompt",w),V.append("aspect_ratio",le),V.append("seconds",String(document.getElementById("mg-duration")?.value||6)),Z&&V.append("model",Z),q&&V.append("apiKeyId",q);const ba=document.getElementById("mg-voice")?.value||"";ba&&V.append("voices",ba),v?.kind==="file"&&v.file?V.append("image",v.file):v?.kind==="asset"&&v.id?V.append("source_asset_id",v.id):v?.kind==="document"&&v.id&&V.append("source_document_id",v.id),await ha(await fetch("/admin/api/media/videos",{method:"POST",headers:{Authorization:`Bearer ${c.key}`},body:V})),se&&(se.textContent=e("media.videoOk")),c.mediaFilter.tab="jobs",await Pe();return}const fe={prompt:w,aspect_ratio:le,n:Ge,response_format:"url"};Z&&(fe.model=Z),q&&(fe.apiKeyId=q);const we=(await P("/media/generate",{method:"POST",body:JSON.stringify(fe)}))?.data?.grok?.asset_ids||[];if(se&&(se.textContent=e("media.generateOk")),c.mediaFilter.tab="assets",c.mediaFilter.offset=0,await Pe(),we[0])try{const V=await C(we[0]);va({id:we[0],mime:V.type||"image/png",filename:`generated-${String(we[0]).slice(0,8)}`,kind:"image",bytes:V.size,prompt:w},V)}catch{}}catch(fe){$(fe),se&&(se.textContent=fe.message||e("media.generateFail")),ke&&(ke.disabled=!1,I(y))}})}(s==="assets"||s==="jobs")&&je(c.mediaFilter,()=>Pe().catch($)),s==="assets"&&(dt("media",c.mediaFilter,()=>Pe().catch($)),document.querySelector("#media-tab-assets [data-filter-apply]")?.addEventListener("click",()=>{c.mediaFilter.q=document.getElementById("mf-q")?.value.trim()||"",c.mediaFilter.kind=document.getElementById("mf-kind")?.value||"",c.mediaFilter.provider=document.getElementById("mf-provider")?.value.trim()||"",c.mediaFilter.from=document.getElementById("mf-from")?.value||"",c.mediaFilter.to=document.getElementById("mf-to")?.value||"",c.mediaFilter.offset=0,Pe().catch($)}),document.querySelector("#media-tab-assets [data-filter-reset]")?.addEventListener("click",()=>{const y=c.mediaFilter.tab;c.mediaFilter={tab:y,q:"",kind:"",provider:"",from:"",to:"",sortBy:"createdAt",sortDir:"desc",jobSortBy:"createdAt",jobSortDir:"desc",limit:20,offset:0},Pe().catch($)}),document.querySelectorAll("[data-media-preview]").forEach(y=>{y.addEventListener("click",async()=>{try{const v=y.getAttribute("data-media-preview");if(!v)return;const F=y.getAttribute("data-media-mime")||"",W=y.getAttribute("data-media-name")||"",I=y.getAttribute("data-media-kind")||"",H=y.getAttribute("data-media-bytes")||"",K=y.getAttribute("data-media-prompt")||"",re=await C(v);va({id:v,mime:F||re.type||"",filename:W,kind:I,bytes:H?Number(H):re.size,prompt:K},re)}catch(v){$(v)}})}),document.querySelectorAll("[data-media-dl]").forEach(y=>{y.addEventListener("click",async()=>{try{const v=y.getAttribute("data-media-dl"),F=y.getAttribute("data-media-name")||"",W=await C(v),I=document.createElement("a");I.href=URL.createObjectURL(W),I.download=F||`media-${String(v).slice(0,8)}`,I.click(),setTimeout(()=>URL.revokeObjectURL(I.href),3e4)}catch(v){$(v)}})}),document.querySelectorAll("[data-media-del]").forEach(y=>{y.addEventListener("click",async()=>{const v=y.getAttribute("data-media-del");if(await J({message:e("media.deleteConfirm"),variant:"danger",confirmText:e("media.delete")}))try{await P(`/media/assets/${v}`,{method:"DELETE"}),await Pe()}catch(F){$(F)}})}))}async function As(a){const s=a.imagesOnly!==!1;let o="documents",i=0,n=null;rt({title:e("media.libraryTitle"),subtitle:t(e("media.librarySubtitle")),size:"md",bodyHtml:`
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
      <button type="button" class="btn sm" id="mlib-add" disabled>${t(e("media.librarySelect"))}</button>`});const r=document.getElementById("mlib-list"),d=document.getElementById("mlib-q"),u=document.getElementById("mlib-add");document.getElementById("mlib-cancel")?.addEventListener("click",()=>ye());const m=()=>{u&&(u.disabled=!n,u.textContent=n?`${e("media.librarySelect")} · ${n.name.slice(0,24)}`:e("media.librarySelect"))},p=b=>String(b||"").startsWith("image/"),l=b=>/\.(png|jpe?g|webp|gif|bmp|svg)$/i.test(String(b||"")),S=b=>{if(r){if(!b.length){r.innerHTML=`<div class="data-empty chat-lib-empty"><strong>${t(e("media.libraryEmpty"))}</strong></div>`;return}r.innerHTML=b.map(k=>{const T=n?.id===k.id&&n?.kind===k.kind;return`
          <label class="chat-lib-row ${T?"is-selected":""}" data-kind="${t(k.kind)}" data-id="${t(k.id)}">
            <input type="radio" name="mlib-pick" ${T?"checked":""} />
            <span class="chat-lib-meta">
              <span class="chat-lib-name" title="${t(k.name)}">${t(k.name)}</span>
              <span class="muted">${t(k.kindLabel)} · ${t(k.mime||"—")}${k.size!=null?` · ${xe(k.size)}`:""}</span>
            </span>
          </label>`}).join(""),r.querySelectorAll(".chat-lib-row").forEach(k=>{k.addEventListener("click",()=>{const T=k.getAttribute("data-kind"),B=k.getAttribute("data-id"),O=b.find(E=>E.id===B&&E.kind===T);O&&(n={kind:O.kind,id:O.id,name:O.name,mime:O.mime},r.querySelectorAll(".chat-lib-row").forEach(E=>{E.classList.toggle("is-selected",E.getAttribute("data-id")===B&&E.getAttribute("data-kind")===T);const N=E.querySelector("input");N&&(N.checked=E.getAttribute("data-id")===B&&E.getAttribute("data-kind")===T)}),m())})})}},g=async()=>{const b=++i;r&&(r.innerHTML=`<div class="muted chat-lib-status">${t(e("common.loading")||"…")}</div>`);try{const k=(d?.value||"").trim();let T=[];if(o==="assets"){const B=new URLSearchParams({limit:"80",offset:"0"});k&&B.set("q",k),s&&B.set("kind","image"),T=((await P(`/media/assets?${B}`)).data||[]).filter(E=>!s||p(E.mime)||l(E.filename)).map(E=>({kind:"asset",kindLabel:e("media.sourceKindAsset"),id:E.id,name:E.filename||E.prompt||E.id,mime:E.mime||"",size:E.bytes}))}else{const B=new URLSearchParams({limit:"80",offset:"0"});k&&B.set("q",k),T=((await P(`/documents?${B}`)).data||[]).filter(E=>!s||p(E.mimeType)||l(E.originalName)).map(E=>({kind:"document",kindLabel:e("media.sourceKindDocument"),id:E.id,name:E.originalName||E.id,mime:E.mimeType||"",size:E.sizeBytes}))}if(b!==i)return;S(T)}catch(k){if(b!==i)return;r&&(r.innerHTML=`<div class="error-box">${t(k.message||e("media.libraryLoadFail"))}</div>`)}};document.querySelectorAll("[data-mlib-tab]").forEach(b=>{b.addEventListener("click",()=>{o=b.getAttribute("data-mlib-tab")==="assets"?"assets":"documents",document.querySelectorAll("[data-mlib-tab]").forEach(k=>{k.classList.toggle("is-active",k.getAttribute("data-mlib-tab")===o)}),n=null,m(),g()})});let f=null;d?.addEventListener("input",()=>{f&&clearTimeout(f),f=setTimeout(()=>g(),280)}),u?.addEventListener("click",()=>{n&&(a.onPick(n),ye())}),m(),await g()}async function ue(){const a=c.usageFilter;a.sortBy||(a.sortBy="lastUsedAt"),a.sortDir||(a.sortDir="desc"),a.modelSortBy||(a.modelSortBy="requests"),a.modelSortDir||(a.modelSortDir="desc");const s=new URLSearchParams;$e(s,a),a.modelSortBy&&s.set("modelSortBy",a.modelSortBy),(a.modelSortDir==="asc"||a.modelSortDir==="desc")&&s.set("modelSortDir",a.modelSortDir);const{data:o}=await P(`/usage?${s}`),i=o.totals||{},n=o.limits||{},r=a.pageSize||10;let d=o.byModel||[];if(a.modelQ.trim()){const h=a.modelQ.trim().toLowerCase();d=d.filter(x=>String(x.model||"").toLowerCase().includes(h))}const u=d.length,p=d.slice(a.modelPage*r,a.modelPage*r+r).map(h=>`<tr><td class="cell-primary">${t(h.model)}</td><td>${h.requests}</td></tr>`).join("");let l=o.perKey||[];if(a.keyQ.trim()){const h=a.keyQ.trim().toLowerCase();l=l.filter(x=>String(x.name||"").toLowerCase().includes(h)||String(x.keyPrefix||"").toLowerCase().includes(h))}a.keyActive==="true"&&(l=l.filter(h=>h.isActive)),a.keyActive==="false"&&(l=l.filter(h=>!h.isActive));const S=l.length,f=l.slice(a.keyPage*r,a.keyPage*r+r).map(h=>{const x=Math.round((h.utilization||0)*100);return`<tr>
        <td><div class="cell-primary">${t(h.name)}</div><div class="cell-sub">${t(h.keyPrefix)}</div></td>
        <td>${h.requests}</td>
        <td>${_a(h.rateLimit)}</td>
        <td>
          <div>${M("common.percent",{n:x})}</div>
          <div class="usage-bar ${x>80?"warn":""}"><span style="width:${x}%"></span></div>
        </td>
        <td>${h.isActive?`<span class="badge success">${t(e("common.active"))}</span>`:`<span class="badge error">${t(e("common.revoked"))}</span>`}</td>
        <td class="muted">${h.lastUsedAt?te(h.lastUsedAt):"—"}</td>
      </tr>`}).join(""),b=Me({total:u,limit:r,offset:a.modelPage*r,idPrefix:"umodel"}),k=Me({total:S,limit:r,offset:a.keyPage*r,idPrefix:"ukey"}),T=a.tab==="key"?"key":"model",B=Ne({title:e("usage.byModel"),hint:e("common.filterHint"),searchHtml:`<div class="data-filter-search"><label>${t(e("common.search"))}<input type="search" id="uf-model" value="${t(a.modelQ)}" placeholder="${t(e("chats.model"))}" /></label></div>`,gridHtml:""}),O=be({headHtml:`
      ${_({field:"model",label:e("chats.model"),filterRef:a,sortByKey:"modelSortBy",sortDirKey:"modelSortDir"})}
      ${_({field:"requests",label:e("usage.requests"),filterRef:a,sortByKey:"modelSortBy",sortDirKey:"modelSortDir"})}`,bodyHtml:p,colSpan:2,emptyText:e("common.empty"),pagerHtml:b}),E=Ne({title:e("usage.byKey"),hint:e("common.filterHint"),searchHtml:`<div class="data-filter-search"><label>${t(e("common.search"))}<input type="search" id="uf-key" value="${t(a.keyQ)}" placeholder="${t(e("keys.name"))}" /></label></div>`,gridHtml:`<label>${t(e("keys.status"))}
      <select id="uf-active">
        <option value="">${t(e("common.all"))}</option>
        <option value="true" ${a.keyActive==="true"?"selected":""}>${t(e("common.active"))}</option>
        <option value="false" ${a.keyActive==="false"?"selected":""}>${t(e("common.revoked"))}</option>
      </select>
    </label>`}),N=be({headHtml:`
      ${_({field:"name",label:e("keys.name"),filterRef:a})}
      ${_({field:"requests",label:e("usage.requests"),filterRef:a})}
      ${_({field:"rateLimit",label:e("usage.rateLimit"),filterRef:a})}
      ${_({field:"utilization",label:e("usage.util"),filterRef:a})}
      ${_({field:"isActive",label:e("keys.status"),filterRef:a})}
      ${_({field:"lastUsedAt",label:e("usage.lastUsed")||e("media.created"),filterRef:a})}`,bodyHtml:f,colSpan:6,emptyText:e("common.empty"),pagerHtml:k});document.getElementById("app").innerHTML=ie(`
    <div class="topbar">
      <h2>${t(e("usage.title"))}</h2>
      <button class="btn secondary sm" id="btn-usage-refresh">${t(e("usage.refresh"))}</button>
    </div>
    ${qe([`${e("usage.window")}: ${te(o.from)} → ${te(o.to)} (${M("common.minutes",{n:o.windowMinutes})})`])}
    <div class="grid">
      <div class="card"><div class="label">${t(e("usage.requests"))}</div><div class="value">${i.requests??0}</div></div>
      <div class="card"><div class="label">${t(e("usage.success"))}</div><div class="value">${i.success??0}</div></div>
      <div class="card"><div class="label">${t(e("usage.errors"))}</div><div class="value">${i.errors??0}</div></div>
      <div class="card"><div class="label">${t(e("usage.errorRate"))}</div><div class="value">${Math.round((i.errorRate||0)*100)}%</div></div>
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
        <button type="button" role="tab" class="seg-tab ${T==="model"?"is-active":""}" data-usage-tab="model" aria-selected="${T==="model"}">
          ${t(e("usage.byModel"))}
          <span class="seg-tab-count">${u}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${T==="key"?"is-active":""}" data-usage-tab="key" aria-selected="${T==="key"}">
          ${t(e("usage.byKey"))}
          <span class="seg-tab-count">${S}</span>
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane" id="usage-tab-model" ${T==="model"?"":"hidden"}>
          ${B}
          ${O}
        </div>
        <div class="usage-tab-pane" id="usage-tab-key" ${T==="key"?"":"hidden"}>
          ${E}
          ${N}
        </div>
      </div>
    </div>
  `),de(),je(c.usageFilter,()=>ue().catch($)),document.getElementById("btn-usage-refresh").onclick=()=>ue().catch($),document.querySelectorAll("[data-usage-tab]").forEach(h=>{h.onclick=()=>{const x=h.dataset.usageTab==="key"?"key":"model";c.usageFilter.tab!==x&&(c.usageFilter.tab=x,ue().catch($))}}),document.getElementById("umodel-prev")?.addEventListener("click",()=>{c.usageFilter.modelPage=Math.max(0,a.modelPage-1),ue().catch($)}),document.getElementById("umodel-next")?.addEventListener("click",()=>{(a.modelPage+1)*r<u&&(c.usageFilter.modelPage+=1,ue().catch($))}),document.getElementById("umodel-limit")?.addEventListener("change",h=>{c.usageFilter.pageSize=Number(h.target.value)||10,c.usageFilter.modelPage=0,ue().catch($)}),document.getElementById("ukey-prev")?.addEventListener("click",()=>{c.usageFilter.keyPage=Math.max(0,a.keyPage-1),ue().catch($)}),document.getElementById("ukey-next")?.addEventListener("click",()=>{(a.keyPage+1)*r<S&&(c.usageFilter.keyPage+=1,ue().catch($))}),document.getElementById("ukey-limit")?.addEventListener("change",h=>{c.usageFilter.pageSize=Number(h.target.value)||10,c.usageFilter.keyPage=0,ue().catch($)}),document.querySelectorAll("#usage-tab-model [data-filter-apply]").forEach(h=>{h.onclick=()=>{c.usageFilter.modelQ=document.getElementById("uf-model")?.value?.trim()||"",c.usageFilter.modelPage=0,ue().catch($)}}),document.querySelectorAll("#usage-tab-model [data-filter-reset]").forEach(h=>{h.onclick=()=>{c.usageFilter.modelQ="",c.usageFilter.modelPage=0,ue().catch($)}}),document.querySelectorAll("#usage-tab-key [data-filter-apply]").forEach(h=>{h.onclick=()=>{c.usageFilter.keyQ=document.getElementById("uf-key")?.value?.trim()||"",c.usageFilter.keyActive=document.getElementById("uf-active")?.value||"",c.usageFilter.keyPage=0,ue().catch($)}}),document.querySelectorAll("#usage-tab-key [data-filter-reset]").forEach(h=>{h.onclick=()=>{c.usageFilter.keyQ="",c.usageFilter.keyActive="",c.usageFilter.keyPage=0,ue().catch($)}})}function Sa(a){const s=a.versionStatus||(a.updateAvailable?"update_available":a.latest?"up_to_date":"unknown");return s==="update_available"?{badge:`<span class="badge warn" title="${t(e("system.statusHintUpdate"))}">${t(e("system.badgeUpdate"))}</span>`,hint:e("system.statusHintUpdate")}:s==="ahead"?{badge:`<span class="badge pending" title="${t(e("system.statusHintAhead"))}">${t(e("system.badgeAhead"))}</span>`,hint:e("system.statusHintAhead")}:s==="up_to_date"?{badge:`<span class="badge success" title="${t(e("system.statusHintOk"))}">${t(e("system.badgeOk"))}</span>`,hint:e("system.statusHintOk")}:{badge:`<span class="badge pending" title="${t(e("system.statusHintUnknown"))}">${t(e("system.badgeUnknown"))}</span>`,hint:e("system.statusHintUnknown")}}function Cs(a){return e(a==="git"?"system.channelGit":a==="npm-global"?"system.channelNpmGlobal":a==="npm-local"?"system.channelNpmLocal":"system.channelUnknown")}function Ls(a){return a==="required"?e("system.levelRequired"):a==="recommended"?e("system.levelRecommended"):a==="optional"?e("system.levelOptional"):a==="bundled"?e("system.levelBundled"):a||"—"}function Ds(a){return a.installed?a.ok?`<span class="badge success">${t(e("system.softOk"))}</span>`:`<span class="badge warn">${t(e("system.softWarn"))}</span>`:a.level==="required"||a.level==="bundled"?`<span class="badge error">${t(e("system.softMissing"))}</span>`:`<span class="badge pending">${t(e("system.softMissing"))}</span>`}function wa(a){return a==="up"?`<span class="badge success">${t(e("system.up"))}</span>`:`<span class="badge error">${t(e("system.down"))}</span>`}async function st(){const{data:a}=await P("/system");if(c.page!=="system")return;const s=a.version||{},o=Sa(s),i=a.software||{checks:[],allRequiredOk:!0},n=i.checks||[],r=c.systemTab==="package"||c.systemTab==="env"||c.systemTab==="sessions"?c.systemTab:"software";c.systemTab=r;let d={data:[],total:0};if(r==="sessions")try{const h=new URLSearchParams({limit:"50",offset:"0"});c.grokSessionQ&&h.set("q",c.grokSessionQ);const x=await P(`/grok/sessions?${h}`);d={data:x.data||[],total:x.total||0}}catch(h){d={data:[],total:0,error:h.message||String(h)}}const u=n.map(h=>`
      <tr>
        <td><div class="cell-primary">${t(h.name||h.id)}</div>${h.requiredVersion?`<div class="cell-sub">${t(h.requiredVersion)}</div>`:""}</td>
        <td>${t(Ls(h.level))}</td>
        <td>${t(h.installed?e("system.yes"):e("system.no"))}${h.path?`<div class="cell-sub soft-path">${t(h.path)}</div>`:""}</td>
        <td><code class="cell-code">${t(h.version||"—")}</code></td>
        <td>${Ds(h)}</td>
        <td class="muted">${t(h.detail||"")}</td>
      </tr>`).join(""),m=i.allRequiredOk?`<span class="badge success">${t(e("system.allRequiredOk"))}</span>`:`<span class="badge error">${t(e("system.requiredMissing"))}</span>`,p=a.encryption&&a.encryption.ready,l=Cs(s.channel),S=s.installSource?`${l} · ${s.installSource}`:l,g=be({headHtml:`
      <th>${t(e("system.softName"))}</th>
      <th>${t(e("system.softLevel"))}</th>
      <th>${t(e("system.softInstalled"))}</th>
      <th>${t(e("system.softVersion"))}</th>
      <th>${t(e("system.softStatus"))}</th>
      <th>${t(e("system.softDetail"))}</th>`,bodyHtml:u,colSpan:6,emptyText:e("common.empty")}),f=`
    <div class="grid system-kpi-grid" id="system-kpi-grid">
      <div class="card">
        <div class="label">${t(e("system.database"))}</div>
        <div class="value value-sm">${wa(a.database)}</div>
        <div class="muted card-sub">${t(e("system.runtime"))}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("system.grokCli"))}</div>
        <div class="value value-sm">${wa(a.grokCli)}</div>
        <div class="muted card-sub">${t(a.grokInspect?.grokVersion?`${a.grokInspect.grokVersion}${a.grokInspect.channel?` · ${a.grokInspect.channel}`:""}`:e("system.runtime"))}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("system.concurrency"))}</div>
        <div class="value value-sm">${a.concurrency?.active??0}<span class="dash-kpi-den">/${a.concurrency?.max??"—"}</span></div>
        <div class="muted card-sub">${t(e("system.concurrency"))}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("system.encryption"))}</div>
        <div class="value value-sm">${p?`<span class="badge success">${t(e("system.ready"))}</span>`:`<span class="badge error">${t(e("system.notReady"))}</span>`}</div>
        <div class="muted card-sub">${t(e("system.runtime"))}</div>
      </div>
    </div>`,b=a.grokInspect,k=b?`
    <div class="panel data-table-panel" style="margin-bottom:1rem">
      <div class="panel-h">${t(e("system.grokInspect"))}</div>
      <div class="panel-b">
        <div class="muted" style="margin-bottom:0.5rem">${t(e("system.grokInspectHint"))}</div>
        <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0.75rem">
          <div><div class="label">${t(e("system.grokVersion"))}</div><div>${t(b.grokVersion||"—")}</div></div>
          <div><div class="label">${t(e("system.inspectChannel"))}</div><div>${t(b.channel||"—")}</div></div>
          <div><div class="label">${t(e("system.inspectDefaultModel"))}</div><div>${t(b.defaultModel||"—")}</div></div>
          <div><div class="label">${t(e("system.inspectModels"))}</div><div>${b.models?.length??0}</div></div>
          <div><div class="label">${t(e("system.inspectSkills"))}</div><div>${b.skills??0}</div></div>
          <div><div class="label">${t(e("system.inspectMcp"))}</div><div>${b.mcpServers??0}</div></div>
          <div><div class="label">${t(e("system.inspectPlugins"))}</div><div>${b.plugins??0}</div></div>
          <div><div class="label">${t(e("system.inspectHooks"))}</div><div>${b.hooks??0}</div></div>
        </div>
        ${b.error?`<div class="error-box" style="margin-top:0.75rem">${t(b.error)}</div>`:""}
      </div>
    </div>`:"",T=`
    <div class="system-tab-toolbar">
      <span class="muted">${t(e("system.softwareHint"))}</span>
      ${m}
    </div>
    ${k}
    ${g}`,B=`
    <div class="panel data-table-panel system-package-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("system.selfUpdate"))}</strong>
          <span class="muted panel-h-sub">${t(o.hint)}</span>
        </div>
        ${o.badge}
      </div>
      <div class="panel-pad">
        <div class="grid">
          <div class="card"><div class="label">${t(e("system.current"))}</div><div class="value value-sm">${t(s.current||"-")} ${o.badge}</div></div>
          <div class="card"><div class="label">${t(e("system.npm"))}</div><div class="value value-sm">${t(s.latestNpm||"n/a")}</div></div>
          <div class="card"><div class="label">${t(e("system.github"))}</div><div class="value value-sm">${t(s.latestGithub||"n/a")}</div></div>
          <div class="card"><div class="label">${t(e("system.install"))}</div><div class="value value-sm">${t(S)}</div></div>
        </div>
        <pre id="update-log" class="pre" style="display:none;margin-top:12px"></pre>
      </div>
    </div>`,O=`
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
    </div>`,E=(d.data||[]).map(h=>`
      <tr>
        <td><code class="cell-code">${t(h.id)}</code></td>
        <td><div class="cell-primary">${t(h.title||"—")}</div>
          <div class="cell-sub">${t(h.summary||"")}</div></td>
        <td class="muted">${t(h.cwd||"—")}</td>
        <td>${t((h.updatedAt||"").slice(0,19).replace("T"," ")||"—")}</td>
        <td>${h.messageCount!=null?h.messageCount:"—"}</td>
        <td><button type="button" class="btn danger sm" data-del-gsess="${t(h.id)}">${t(e("system.sessionDelete"))}</button></td>
      </tr>`).join(""),N=`
    <div class="system-tab-toolbar">
      <span class="muted">${t(e("system.sessionsHint"))}</span>
      <form id="gsess-search" class="inline-form">
        <input type="search" id="gsess-q" value="${t(c.grokSessionQ||"")}" placeholder="${t(e("system.sessionsSearch"))}" />
        <button type="submit" class="btn secondary sm">${t(e("common.search")||"Search")}</button>
      </form>
    </div>
    ${d.error?`<div class="error-box">${t(d.error)}</div>`:""}
    ${be({headHtml:`
        <th>${t(e("system.sessionId"))}</th>
        <th>${t(e("system.sessionTitle"))}</th>
        <th>${t(e("system.sessionCwd"))}</th>
        <th>${t(e("system.sessionUpdated"))}</th>
        <th>${t(e("chats.msgs")||"#")}</th>
        <th></th>`,bodyHtml:E,colSpan:6,emptyText:e("common.empty")})}
    <div class="muted">${t(String(d.total||0))}</div>`;document.getElementById("app").innerHTML=ie(`
    <div class="topbar">
      <h2>${t(e("system.title"))}</h2>
      <div class="toolbar">
        <button class="btn secondary sm" id="btn-check-update" title="${t(e("system.selfHint"))}">${t(e("system.checkUpdate"))}</button>
        <button class="btn sm" id="btn-one-click-update" title="${t(e("system.confirmUpdate"))}">${t(e("system.oneClick"))}</button>
      </div>
    </div>
    ${qe([e("system.selfHint")])}
    ${f}

    <div class="usage-tabs-panel panel system-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("system.title"))}">
        <button type="button" role="tab" class="seg-tab ${r==="software"?"is-active":""}" data-system-tab="software" aria-selected="${r==="software"}">
          ${t(e("system.tabSoftware"))}
          <span class="seg-tab-count">${n.length}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${r==="package"?"is-active":""}" data-system-tab="package" aria-selected="${r==="package"}">
          ${t(e("system.tabPackage"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${r==="env"?"is-active":""}" data-system-tab="env" aria-selected="${r==="env"}">
          ${t(e("system.tabEnv"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${r==="sessions"?"is-active":""}" data-system-tab="sessions" aria-selected="${r==="sessions"}">
          ${t(e("system.tabSessions"))}
          <span class="seg-tab-count">${r==="sessions"?d.total:""}</span>
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane system-tab-pane-software" id="system-tab-software" ${r==="software"?"":"hidden"}>
          ${T}
        </div>
        <div class="usage-tab-pane system-tab-pane-package" id="system-tab-package" ${r==="package"?"":"hidden"}>
          ${B}
        </div>
        <div class="usage-tab-pane system-tab-pane-env" id="system-tab-env" ${r==="env"?"":"hidden"}>
          ${O}
        </div>
        <div class="usage-tab-pane system-tab-pane-sessions" id="system-tab-sessions" ${r==="sessions"?"":"hidden"}>
          ${N}
        </div>
      </div>
    </div>
  `),de(),document.getElementById("gsess-search")?.addEventListener("submit",h=>{h.preventDefault(),c.grokSessionQ=document.getElementById("gsess-q")?.value||"",st().catch($)}),document.querySelectorAll("[data-del-gsess]").forEach(h=>{h.addEventListener("click",async()=>{const x=h.getAttribute("data-del-gsess");if(!(!x||!await J({title:e("system.sessionDelete"),message:e("system.sessionDeleteConfirm").replace("{id}",x)})))try{await P(`/grok/sessions/${encodeURIComponent(x)}`,{method:"DELETE"}),await st()}catch(C){$(C)}})}),document.querySelectorAll("[data-system-tab]").forEach(h=>{h.addEventListener("click",()=>{const x=h.getAttribute("data-system-tab")||"software",U=x==="package"||x==="env"||x==="software"||x==="sessions"?x:"software";c.systemTab!==U&&(c.systemTab=U,st().catch($))})}),document.getElementById("btn-check-update").onclick=async()=>{try{const x=(await P("/system/update-check")).data||{},U=Sa(x);await pe({title:e("system.checkResult"),message:`${e("system.current")}: ${x.current||"?"}
${e("system.npm")}: ${x.latestNpm||"n/a"}
${e("system.github")}: ${x.latestGithub||"n/a"}
${U.hint}`}),c.systemTab="package",st().catch($)}catch(h){$(h)}},document.getElementById("btn-one-click-update").onclick=async()=>{if(!await J({message:e("system.confirmUpdate"),variant:"danger",confirmText:e("system.oneClick")}))return;c.systemTab!=="package"&&(c.systemTab="package",await st());const h=document.getElementById("update-log");try{const x=document.getElementById("btn-one-click-update");x&&(x.disabled=!0);const U=await P("/system/update",{method:"POST",body:JSON.stringify({restart:!0})});h&&(h.style.display="block",h.textContent=U.data&&(U.data.message||JSON.stringify(U.data,null,2))||e("system.scheduled")),await pe(U.data&&U.data.message||e("system.scheduled"))}catch(x){$(x)}}}function Jt(a){if(!a)return"—";const s=`ddos.sources.${a}`,o=e(s);return o===s?a:o}function Ee(a){return Math.max(1,Math.round(Number(a||0)/1e3))}function ve(a){return Math.max(1,Math.round(Number(a||0)/6e4))}function lt(a){return Math.max(1e3,Math.round(Number(a||0)*1e3))}function ct(a){return Math.max(1e3,Math.round(Number(a||0)*6e4))}function z(a,s){const o=Number(document.getElementById(a)?.value);return Number.isFinite(o)?o:s}function tt(a){return document.getElementById(a)?.checked===!0}function Xt(){const a=(document.getElementById("dp-whitelist")?.value||"").split(/[\n,]+/).map(i=>i.trim()).filter(Boolean),s=(document.getElementById("dp-trustedProxies")?.value||"").split(/[\n,]+/).map(i=>i.trim()).filter(Boolean);return{autoBanEnabled:document.getElementById("ddos-master-autoban")?Je("ddos-master-autoban"):tt("dp-autoBanEnabled")||document.getElementById("dp-autoBanEnabled")?.value==="1",rateLimitWindowMs:lt(z("dp-rateWindowSec",60)),rateLimitMax:Math.floor(z("dp-rateMaxKey",120)),rateLimitIpMax:Math.floor(z("dp-rateMaxIp",60)),chatBurstWindowMs:lt(z("dp-burstWindowSec",10)),chatBurstMax:Math.floor(z("dp-burstMax",20)),autoAuthEnabled:tt("dp-autoAuthEnabled"),failedAuthThreshold:Math.floor(z("dp-authThreshold",20)),failedAuthWindowMs:lt(z("dp-authWindowSec",300)),authBanDurationMs:ct(z("dp-authBanMin",10)),autoRateEnabled:tt("dp-autoRateEnabled"),rateHitThreshold:Math.floor(z("dp-rateHitThreshold",30)),rateHitWindowMs:lt(z("dp-rateHitWindowSec",60)),rateBanDurationMs:ct(z("dp-rateBanMin",15)),autoConnEnabled:tt("dp-autoConnEnabled"),maxConcurrentPerIp:Math.floor(z("dp-maxConcurrent",20)),connBanDurationMs:ct(z("dp-connBanMin",10)),autoVelocityEnabled:tt("dp-autoVelocityEnabled"),velocityMaxRequests:Math.floor(z("dp-velocityMax",200)),velocityWindowMs:lt(z("dp-velocityWindowSec",60)),velocityBanDurationMs:ct(z("dp-velocityBanMin",10)),escalateEnabled:tt("dp-escalateEnabled"),escalateAfterBans:Math.floor(z("dp-escalateAfter",3)),escalateDurationMs:ct(z("dp-escalateMin",1440)),whitelist:a,proxyTrustHops:Math.max(0,Math.min(10,Math.floor(z("dp-proxyTrustHops",1)))),proxyIpSource:document.getElementById("dp-proxyIpSource")?.value||"auto",trustedProxies:s.length?s:["127.0.0.1","::1"]}}const Hs=["autoBanEnabled","rateLimitWindowMs","rateLimitMax","rateLimitIpMax","chatBurstWindowMs","chatBurstMax","autoAuthEnabled","failedAuthThreshold","failedAuthWindowMs","authBanDurationMs","autoRateEnabled","rateHitThreshold","rateHitWindowMs","rateBanDurationMs","autoConnEnabled","maxConcurrentPerIp","connBanDurationMs","autoVelocityEnabled","velocityMaxRequests","velocityWindowMs","velocityBanDurationMs","escalateEnabled","escalateAfterBans","escalateDurationMs"];function Pa(a){if(!a)return{};const s={};for(const o of Hs){const i=a[o];typeof i=="boolean"?s[o]=i:typeof i=="number"&&Number.isFinite(i)?s[o]=Math.round(i):i==null?s[o]=null:s[o]=i}return s}function Va(a,s){return JSON.stringify(Pa(a))===JSON.stringify(Pa(s))}function Yt(a){const s=c._ddosPresetsCache;if(!s||!a)return"custom";for(const o of["relaxed","balanced","strict"])if(s[o]&&Va(a,s[o]))return o;return"custom"}function qt(a){return e(a==="relaxed"?"ddos.presetRelaxed":a==="balanced"?"ddos.presetBalanced":a==="strict"?"ddos.presetStrict":"ddos.presetCustom")}function Ja(a,{unsaved:s=!1}={}){const o=qt(a),i=a==="relaxed"?"relaxed":a==="balanced"?"balanced":a==="strict"?"strict":"custom",n=s?M("ddos.presetFormLabel",{name:o}):M("ddos.presetActiveLabel",{name:o});return`<span class="ddos-preset-badge is-${i}" id="ddos-preset-badge" title="${t(n)}">${t(n)}</span>`}function De(){if(!document.getElementById("ddos-policy-panel"))return;let a;try{a=Xt()}catch{return}const s=Yt(a),o=Yt(c._ddosPolicyCache||a),i=!Va(a,c._ddosPolicyCache||a);document.querySelectorAll("[data-ddos-preset]").forEach(u=>{const m=u.dataset.ddosPreset,p=m===s,l=m===o;u.classList.toggle("is-active",p),u.classList.toggle("is-saved",l&&!p),u.setAttribute("aria-pressed",p?"true":"false");const S=e(m==="relaxed"?"ddos.presetRelaxed":m==="balanced"?"ddos.presetBalanced":"ddos.presetStrict");p&&l?u.innerHTML=`${t(S)} <span class="preset-tag">${t(e("ddos.presetTagActive"))}</span>`:p&&i?u.innerHTML=`${t(S)} <span class="preset-tag preset-tag--draft">${t(e("ddos.presetTagDraft"))}</span>`:l?u.innerHTML=`${t(S)} <span class="preset-tag preset-tag--saved">${t(e("ddos.presetTagSaved"))}</span>`:u.textContent=S});const n=document.getElementById("ddos-preset-badge");if(n){const u=Ja(s,{unsaved:i&&s!==o});n.outerHTML=u}const r=document.getElementById("ddos-preset-custom");r&&(r.classList.toggle("is-active",s==="custom"),r.setAttribute("aria-pressed",s==="custom"?"true":"false"));const d=document.getElementById("ddos-preset-hint");d&&(i&&s!==o?(d.textContent=M("ddos.presetUnsavedHint",{form:qt(s),saved:qt(o)}),d.hidden=!1):s==="custom"?(d.textContent=e("ddos.presetCustomHint"),d.hidden=!1):(d.textContent=M("ddos.presetActiveHint",{name:qt(s)}),d.hidden=!1))}function Kt(a){if(!a||!document.getElementById("dp-autoBanEnabled"))return;const s=(i,n)=>{const r=document.getElementById(i);r&&(r.type==="checkbox"?r.checked=!!n:r.value=n)},o=document.getElementById("dp-autoBanEnabled");o&&(o.type==="checkbox"?o.checked=!!a.autoBanEnabled:o.value=a.autoBanEnabled?"1":"0"),Xe("ddos-master-autoban",!!a.autoBanEnabled,e("ddos.masterOn"),e("ddos.masterOff")),Ze("ddos-root",!a.autoBanEnabled),Ye("ddos-disabled-banner",!a.autoBanEnabled),s("dp-rateWindowSec",Ee(a.rateLimitWindowMs)),s("dp-rateMaxKey",a.rateLimitMax),s("dp-rateMaxIp",a.rateLimitIpMax),s("dp-burstWindowSec",Ee(a.chatBurstWindowMs)),s("dp-burstMax",a.chatBurstMax),s("dp-autoAuthEnabled",a.autoAuthEnabled),s("dp-authThreshold",a.failedAuthThreshold),s("dp-authWindowSec",Ee(a.failedAuthWindowMs)),s("dp-authBanMin",ve(a.authBanDurationMs)),s("dp-autoRateEnabled",a.autoRateEnabled),s("dp-rateHitThreshold",a.rateHitThreshold),s("dp-rateHitWindowSec",Ee(a.rateHitWindowMs)),s("dp-rateBanMin",ve(a.rateBanDurationMs)),s("dp-autoConnEnabled",a.autoConnEnabled),s("dp-maxConcurrent",a.maxConcurrentPerIp),s("dp-connBanMin",ve(a.connBanDurationMs)),s("dp-autoVelocityEnabled",a.autoVelocityEnabled),s("dp-velocityMax",a.velocityMaxRequests),s("dp-velocityWindowSec",Ee(a.velocityWindowMs)),s("dp-velocityBanMin",ve(a.velocityBanDurationMs)),s("dp-escalateEnabled",a.escalateEnabled),s("dp-escalateAfter",a.escalateAfterBans),s("dp-escalateMin",ve(a.escalateDurationMs)),s("dp-whitelist",(a.whitelist||[]).join(`
`)),s("dp-proxyTrustHops",a.proxyTrustHops??1),s("dp-proxyIpSource",a.proxyIpSource||"auto"),s("dp-trustedProxies",(a.trustedProxies&&a.trustedProxies.length?a.trustedProxies:["127.0.0.1","::1"]).join(`
`)),fa(a.autoBanEnabled),De()}function fa(a){const s=document.getElementById("ddos-auto-badge");s&&(s.className=`badge ${a?"success":"pending"}`,s.textContent=e(a?"ddos.autoOn":"ddos.autoOff"))}function _s(a){const s=(r,d)=>`<label class="data-filter-check policy-enable"><input type="checkbox" id="${r}" ${d?"checked":""} /> <span>${t(e("ddos.enableRule"))}</span></label>`,o=(r,d,u,m="1")=>`<label>${t(r)}<input type="number" id="${d}" value="${t(String(u))}" min="1" step="${m}" /></label>`,i=Yt(a),n=Ja(i);return`
    <div class="panel data-table-panel ddos-policy-panel" id="ddos-policy-panel">
      <div class="panel-h">
        <div>
          <strong>${t(e("ddos.policyTitle"))}</strong>
          <span class="muted">${t(e("ddos.policyHint"))}</span>
        </div>
        <div class="ddos-header-badges">
          ${n}
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
            ${o(e("ddos.rateWindow"),"dp-rateWindowSec",Ee(a.rateLimitWindowMs))}
            ${o(e("ddos.rateMaxKey"),"dp-rateMaxKey",a.rateLimitMax)}
            ${o(e("ddos.rateMaxIp"),"dp-rateMaxIp",a.rateLimitIpMax)}
            ${o(e("ddos.burstWindow"),"dp-burstWindowSec",Ee(a.chatBurstWindowMs))}
            ${o(e("ddos.burstMax"),"dp-burstMax",a.chatBurstMax)}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionAuth"))}</h4>${s("dp-autoAuthEnabled",a.autoAuthEnabled)}</div>
          <div class="form-grid">
            ${o(e("ddos.threshold"),"dp-authThreshold",a.failedAuthThreshold)}
            ${o(e("ddos.windowSec"),"dp-authWindowSec",Ee(a.failedAuthWindowMs))}
            ${o(e("ddos.banMin"),"dp-authBanMin",ve(a.authBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionRate"))}</h4>${s("dp-autoRateEnabled",a.autoRateEnabled)}</div>
          <div class="form-grid">
            ${o(e("ddos.threshold"),"dp-rateHitThreshold",a.rateHitThreshold)}
            ${o(e("ddos.windowSec"),"dp-rateHitWindowSec",Ee(a.rateHitWindowMs))}
            ${o(e("ddos.banMin"),"dp-rateBanMin",ve(a.rateBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionConn"))}</h4>${s("dp-autoConnEnabled",a.autoConnEnabled)}</div>
          <div class="form-grid">
            ${o(e("ddos.maxConcurrent"),"dp-maxConcurrent",a.maxConcurrentPerIp)}
            ${o(e("ddos.banMin"),"dp-connBanMin",ve(a.connBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionVelocity"))}</h4>${s("dp-autoVelocityEnabled",a.autoVelocityEnabled)}</div>
          <div class="form-grid">
            ${o(e("ddos.velocityMax"),"dp-velocityMax",a.velocityMaxRequests)}
            ${o(e("ddos.windowSec"),"dp-velocityWindowSec",Ee(a.velocityWindowMs))}
            ${o(e("ddos.banMin"),"dp-velocityBanMin",ve(a.velocityBanDurationMs))}
          </div>
        </div>

        <div class="policy-section">
          <div class="policy-section-h"><h4>${t(e("ddos.sectionEscalate"))}</h4>${s("dp-escalateEnabled",a.escalateEnabled)}</div>
          <div class="form-grid">
            ${o(e("ddos.escalateAfter"),"dp-escalateAfter",a.escalateAfterBans)}
            ${o(e("ddos.escalateMin"),"dp-escalateMin",ve(a.escalateDurationMs))}
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
    </div>`}function Os(a){return a?.length?a.map(s=>`
    <tr>
      <td>${te(s.at)}</td>
      <td class="cell-primary">${t(s.ip)}</td>
      <td><span class="badge ${s.escalated?"warn":"pending"}">${t(Jt(s.source))}</span></td>
      <td class="muted" style="max-width:280px;word-break:break-word">${t(s.reason||"")}</td>
      <td>${t(ve(s.durationMs))} min</td>
    </tr>`).join(""):`<tr class="empty-row"><td colspan="5"><div class="data-empty"><strong>${t(e("ddos.emptyEvents"))}</strong></div></td></tr>`}async function ee(a={}){const s=!!a.soft&&document.getElementById("ddos-root"),o=document.querySelector(".main"),i=o?o.scrollTop:0;We&&(clearInterval(We),We=null);const n=c.ddosFilter;n.liveSortBy||(n.liveSortBy="startedAt"),n.liveSortDir||(n.liveSortDir="desc"),n.banSortBy||(n.banSortBy="createdAt"),n.banSortDir||(n.banSortDir="desc"),n.eventSortBy||(n.eventSortBy="at"),n.eventSortDir||(n.eventSortDir="desc");const r=new URLSearchParams;$e(r,n,"liveSortBy","liveSortDir");const d=new URLSearchParams;$e(d,n,"banSortBy","banSortDir");const u=new URLSearchParams;$e(u,n,"eventSortBy","eventSortDir");const m=[P(`/ddos/connections?${r}`),P(`/ddos/blacklist?${d}`),P("/ddos/stats"),P(`/ddos/events?${u}`)];s||m.push(P("/ddos/policy"));const p=await Promise.all(m),[l,S,g,f]=p,b=s?null:p[4],k=n.pageSize||15;let T=l.data?.active||[],B=l.data?.recent||[],O=S.data||[];const E=g.data||{},N=f.data||[],h=b?.data||c._ddosPolicyCache||null,x=b?.presets||c._ddosPresetsCache||null;h&&(c._ddosPolicyCache=h),x&&(c._ddosPresetsCache=x);const U=(c._ddosPolicyCache?.whitelist||[]).map(String);if(n.liveQ.trim()){const D=n.liveQ.trim().toLowerCase(),w=q=>[q.ip,q.path,q.method,q.apiKeyName,q.apiKeyPrefix].filter(Boolean).some(Z=>String(Z).toLowerCase().includes(D));T=T.filter(w),B=B.filter(w)}if(n.banQ.trim()){const D=n.banQ.trim().toLowerCase();O=O.filter(w=>String(w.ip||"").toLowerCase().includes(D)||String(w.reason||"").toLowerCase().includes(D))}n.banSource&&(O=O.filter(D=>D.source===n.banSource));const C=T.slice(n.livePage*k,n.livePage*k+k),y=O.slice(n.banPage*k,n.banPage*k+k),v=C.map(D=>`
    <tr>
      <td class="cell-primary">${t(D.ip)}</td>
      <td>${t(D.method)}</td>
      <td class="muted" style="max-width:220px;word-break:break-all">${t(D.path)}</td>
      <td>${t(D.apiKeyName||D.apiKeyPrefix||"—")}</td>
      <td><span class="badge pending">${t(e("status.active"))}</span></td>
      <td>${gt(Date.now()-D.startedAt)}</td>
      <td><div class="row-actions"><button class="btn danger sm" data-ban="${t(D.ip)}">${t(e("ddos.ban"))}</button></div></td>
    </tr>`).join(""),F=B.slice(0,40).map(D=>`
    <tr>
      <td class="cell-primary">${t(D.ip)}</td>
      <td>${t(D.method)} ${t(D.path)}</td>
      <td>${D.statusCode??"—"}</td>
      <td>${gt(D.durationMs)}</td>
      <td><div class="row-actions"><button class="btn danger sm" data-ban="${t(D.ip)}">${t(e("ddos.ban"))}</button></div></td>
    </tr>`).join(""),W=y.map(D=>`
    <tr>
      <td class="cell-primary">${t(D.ip)}</td>
      <td>${t(D.reason||"—")}</td>
      <td><span class="badge pending">${t(Jt(D.source))}</span></td>
      <td>${D.expiresAt?te(D.expiresAt):t(e("ddos.permanent"))}</td>
      <td><div class="row-actions"><button class="btn secondary sm" data-unban="${t(D.ip)}">${t(e("ddos.unban"))}</button></div></td>
    </tr>`).join(""),I=(E.topIps||[]).map(D=>`<tr><td class="cell-primary">${t(D.ip)}</td><td>${D.requests}</td>
      <td><div class="row-actions"><button class="btn danger sm" data-ban="${t(D.ip)}">${t(e("ddos.ban"))}</button></div></td></tr>`).join(""),H=Os(N),K=`<tr class="empty-row"><td colspan="7"><div class="data-empty"><strong>${t(e("ddos.emptyLive"))}</strong></div></td></tr>`,re=`<tr class="empty-row"><td colspan="5"><div class="data-empty"><strong>${t(e("common.empty"))}</strong></div></td></tr>`,me=`<tr class="empty-row"><td colspan="5"><div class="data-empty"><strong>${t(e("ddos.emptyBan"))}</strong></div></td></tr>`,G=`<tr class="empty-row"><td colspan="3"><div class="data-empty"><strong>${t(e("common.empty"))}</strong></div></td></tr>`,X=["","manual","auto-auth","auto-rate","auto-conn","auto-velocity","auto-escalate"].map(D=>D?`<option value="${D}" ${n.banSource===D?"selected":""}>${t(Jt(D))}</option>`:`<option value="">${t(e("common.all"))}</option>`).join("");if(s){const D=(q,Z)=>{const le=document.getElementById(q);le&&(le.innerHTML=Z)},w=(q,Z)=>{const le=document.getElementById(q);le&&(le.textContent=Z)};w("ddos-stat-active",String(E.activeConnections??T.length)),w("ddos-stat-rate",String(E.rateLimitedHits??0)),w("ddos-stat-blocked",String(E.blockedHits??0)),w("ddos-stat-ban",String(O.length)),w("ddos-stat-auto",String(E.autoBanTotal??0)),w("ddos-tab-count-live",String(T.length)),w("ddos-tab-count-ban",String(O.length)),w("ddos-tab-count-events",String(N.length)),D("ddos-live-body",v||K),D("ddos-recent-body",F||re),D("ddos-ban-body",W||me),D("ddos-top-body",I||G),D("ddos-events-body",H),E.policySummary&&fa(!!E.policySummary.autoBanEnabled),Ea(),o&&(o.scrollTop=i)}else{const D=h||{autoBanEnabled:!0,rateLimitWindowMs:6e4,rateLimitMax:120,rateLimitIpMax:60,chatBurstWindowMs:1e4,chatBurstMax:20,autoAuthEnabled:!0,failedAuthThreshold:20,failedAuthWindowMs:3e5,authBanDurationMs:6e5,autoRateEnabled:!0,rateHitThreshold:30,rateHitWindowMs:6e4,rateBanDurationMs:9e5,autoConnEnabled:!0,maxConcurrentPerIp:20,connBanDurationMs:6e5,autoVelocityEnabled:!0,velocityMaxRequests:200,velocityWindowMs:6e4,velocityBanDurationMs:6e5,escalateEnabled:!0,escalateAfterBans:3,escalateDurationMs:864e5,whitelist:["127.0.0.1","::1"],proxyTrustHops:1,proxyIpSource:"auto",trustedProxies:["127.0.0.1","::1"]},w=!!D.autoBanEnabled,q=n.tab==="live"||n.tab==="blacklist"||n.tab==="events"||n.tab==="policy"?n.tab:"policy";c.ddosFilter.tab=q;const Z=`
    <div class="grid ddos-kpi-grid">
      <div class="card"><div class="label">${t(e("ddos.activeConn"))}</div><div class="value value-sm" id="ddos-stat-active">${E.activeConnections??T.length}</div><div class="muted card-sub">${t(e("ddos.live"))}</div></div>
      <div class="card"><div class="label">${t(e("ddos.rateHits"))}</div><div class="value value-sm" id="ddos-stat-rate">${E.rateLimitedHits??0}</div><div class="muted card-sub">${t(e("ddos.stats"))}</div></div>
      <div class="card"><div class="label">${t(e("ddos.blockedHits"))}</div><div class="value value-sm" id="ddos-stat-blocked">${E.blockedHits??0}</div><div class="muted card-sub">${t(e("ddos.stats"))}</div></div>
      <div class="card"><div class="label">${t(e("ddos.blacklist"))}</div><div class="value value-sm" id="ddos-stat-ban">${O.length}</div><div class="muted card-sub">${t(e("ddos.tabBlacklist"))}</div></div>
      <div class="card"><div class="label">${t(e("ddos.autoBans"))}</div><div class="value value-sm" id="ddos-stat-auto">${E.autoBanTotal??0}</div><div class="muted card-sub">${t(e("ddos.tabEvents"))}</div></div>
    </div>`,le=_s(D),Ge=`
    <div class="panel data-filter-panel ddos-filter-panel">
      <div class="panel-h"><strong>${t(e("common.filterTitle"))}</strong></div>
      <div class="data-filter">
        <div class="data-filter-grid">
          <label class="full">${t(e("ddos.live"))} / ${t(e("ddos.recent"))}
            <input type="search" id="ddos-live-q" value="${t(n.liveQ)}" placeholder="IP / path / key" />
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
        <span class="muted">${t(M("common.pagerTotal",{n:T.length}))}</span>
      </div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          ${_({field:"ip",label:e("ddos.ip"),filterRef:n,sortByKey:"liveSortBy",sortDirKey:"liveSortDir"})}
          ${_({field:"method",label:e("ddos.method"),filterRef:n,sortByKey:"liveSortBy",sortDirKey:"liveSortDir"})}
          ${_({field:"path",label:e("ddos.path"),filterRef:n,sortByKey:"liveSortBy",sortDirKey:"liveSortDir"})}
          <th>${t(e("ddos.key"))}</th>
          <th>${t(e("ddos.state"))}</th>
          ${_({field:"durationMs",label:e("ddos.duration"),filterRef:n,sortByKey:"liveSortBy",sortDirKey:"liveSortDir"})}
          <th>${t(e("common.actions"))}</th>
        </tr></thead>
        <tbody id="ddos-live-body">${v||K}</tbody>
      </table>
      </div>
      ${Me({total:T.length,limit:k,offset:n.livePage*k,idPrefix:"ddoslive"})}
    </div>
    <div class="panel data-table-panel ddos-stack-panel">
      <div class="panel-h"><strong>${t(e("ddos.recent"))}</strong></div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          ${_({field:"ip",label:e("ddos.ip"),filterRef:n,sortByKey:"liveSortBy",sortDirKey:"liveSortDir"})}
          ${_({field:"path",label:e("ddos.path"),filterRef:n,sortByKey:"liveSortBy",sortDirKey:"liveSortDir"})}
          ${_({field:"statusCode",label:e("common.httpStatus"),filterRef:n,sortByKey:"liveSortBy",sortDirKey:"liveSortDir"})}
          ${_({field:"durationMs",label:e("ddos.duration"),filterRef:n,sortByKey:"liveSortBy",sortDirKey:"liveSortDir"})}
          <th>${t(e("common.actions"))}</th>
        </tr></thead>
        <tbody id="ddos-recent-body">${F||re}</tbody>
      </table>
      </div>
    </div>`,ke=`
    <div class="panel data-filter-panel ddos-filter-panel">
      <div class="panel-h"><strong>${t(e("common.filterTitle"))}</strong></div>
      <div class="data-filter">
        <div class="data-filter-grid">
          <label>${t(e("ddos.blacklist"))}
            <input type="search" id="ddos-ban-q" value="${t(n.banQ)}" placeholder="IP / reason" />
          </label>
          <label>${t(e("ddos.source"))}
            <select id="ddos-ban-source">${X}</select>
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
        <span class="muted">${t(M("common.pagerTotal",{n:O.length}))}</span>
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
          ${_({field:"ip",label:e("ddos.ip"),filterRef:n,sortByKey:"banSortBy",sortDirKey:"banSortDir"})}
          ${_({field:"reason",label:e("ddos.reason"),filterRef:n,sortByKey:"banSortBy",sortDirKey:"banSortDir"})}
          ${_({field:"source",label:e("ddos.source"),filterRef:n,sortByKey:"banSortBy",sortDirKey:"banSortDir"})}
          ${_({field:"expiresAt",label:e("ddos.expires"),filterRef:n,sortByKey:"banSortBy",sortDirKey:"banSortDir"})}
          <th>${t(e("common.actions"))}</th>
        </tr></thead>
        <tbody id="ddos-ban-body">${W||me}</tbody>
      </table>
      </div>
      ${Me({total:O.length,limit:k,offset:n.banPage*k,idPrefix:"ddosban"})}
    </div>`,se=`
    <div class="panel data-table-panel ddos-stack-panel">
      <div class="panel-h"><strong>${t(e("ddos.eventsTitle"))}</strong>
        <span class="muted">${t(M("common.pagerTotal",{n:N.length}))}</span>
      </div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          ${_({field:"at",label:e("ddos.eventTime"),filterRef:n,sortByKey:"eventSortBy",sortDirKey:"eventSortDir"})}
          ${_({field:"ip",label:e("ddos.ip"),filterRef:n,sortByKey:"eventSortBy",sortDirKey:"eventSortDir"})}
          ${_({field:"source",label:e("ddos.eventSource"),filterRef:n,sortByKey:"eventSortBy",sortDirKey:"eventSortDir"})}
          ${_({field:"reason",label:e("ddos.reason"),filterRef:n,sortByKey:"eventSortBy",sortDirKey:"eventSortDir"})}
          ${_({field:"durationMs",label:e("ddos.eventDuration"),filterRef:n,sortByKey:"eventSortBy",sortDirKey:"eventSortDir"})}
        </tr></thead>
        <tbody id="ddos-events-body">${H}</tbody>
      </table>
      </div>
    </div>
    <div class="panel data-table-panel ddos-stack-panel">
      <div class="panel-h"><strong>${t(e("ddos.topIps"))}</strong></div>
      <div class="table-wrap">
      <table class="data-table">
        <thead><tr><th>${t(e("ddos.ip"))}</th><th>${t(e("usage.requests"))}</th><th>${t(e("common.actions"))}</th></tr></thead>
        <tbody id="ddos-top-body">${I||G}</tbody>
      </table>
      </div>
    </div>`;document.getElementById("app").innerHTML=ie(`
    <div id="ddos-root" class="${w?"":"is-feature-off"}">
    <div class="topbar">
      <h2>${t(e("ddos.title"))}</h2>
      <div class="toolbar">
        ${pa({id:"ddos-master-autoban",on:w,onLabel:e("ddos.masterOn"),offLabel:e("ddos.masterOff"),title:e("ddos.autoBanMasterHint")})}
        <button class="btn secondary sm" id="ddos-refresh">${t(e("ddos.refresh"))}</button>
        <button class="btn secondary sm" id="ddos-pause">${t(e(Qe?"ddos.resume":"ddos.pause"))}</button>
      </div>
    </div>
    ${qe([e("ddos.policyHint")])}
    <div class="feature-off-banner" id="ddos-disabled-banner" ${w?"hidden":""} role="status">
      <strong>${t(e("common.featureOff"))}</strong>
      <span>${t(e("ddos.disabledBanner"))}</span>
    </div>
    ${Z}

    <div class="usage-tabs-panel panel ddos-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("ddos.title"))}">
        <button type="button" role="tab" class="seg-tab ${q==="policy"?"is-active":""}" data-ddos-tab="policy" aria-selected="${q==="policy"}">
          ${t(e("ddos.tabPolicy"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${q==="live"?"is-active":""}" data-ddos-tab="live" aria-selected="${q==="live"}">
          ${t(e("ddos.tabLive"))}
          <span class="seg-tab-count" id="ddos-tab-count-live">${T.length}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${q==="blacklist"?"is-active":""}" data-ddos-tab="blacklist" aria-selected="${q==="blacklist"}">
          ${t(e("ddos.tabBlacklist"))}
          <span class="seg-tab-count" id="ddos-tab-count-ban">${O.length}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${q==="events"?"is-active":""}" data-ddos-tab="events" aria-selected="${q==="events"}">
          ${t(e("ddos.tabEvents"))}
          <span class="seg-tab-count" id="ddos-tab-count-events">${N.length}</span>
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane ddos-tab-pane ddos-tab-pane-policy" id="ddos-tab-policy" ${q==="policy"?"":"hidden"}>
          ${le}
        </div>
        <div class="usage-tab-pane ddos-tab-pane ddos-tab-pane-stack" id="ddos-tab-live" ${q==="live"?"":"hidden"}>
          ${Ge}
        </div>
        <div class="usage-tab-pane ddos-tab-pane ddos-tab-pane-stack" id="ddos-tab-blacklist" ${q==="blacklist"?"":"hidden"}>
          ${ke}
        </div>
        <div class="usage-tab-pane ddos-tab-pane ddos-tab-pane-stack" id="ddos-tab-events" ${q==="events"?"":"hidden"}>
          ${se}
        </div>
      </div>
    </div>
    </div>
  `),de(),Ea(!0,U),je(c.ddosFilter,()=>ee().catch($)),document.querySelectorAll("[data-ddos-tab]").forEach(fe=>{fe.addEventListener("click",()=>{const Se=fe.getAttribute("data-ddos-tab")||"policy",we=Se==="live"||Se==="blacklist"||Se==="events"||Se==="policy"?Se:"policy";c.ddosFilter.tab!==we&&(c.ddosFilter.tab=we,ee().catch($))})}),document.getElementById("ddos-live-filter-apply")?.addEventListener("click",()=>{c.ddosFilter.liveQ=document.getElementById("ddos-live-q")?.value?.trim()||"",c.ddosFilter.livePage=0,ee().catch($)}),document.getElementById("ddos-live-filter-reset")?.addEventListener("click",()=>{c.ddosFilter.liveQ="",c.ddosFilter.liveSortBy="startedAt",c.ddosFilter.liveSortDir="desc",c.ddosFilter.livePage=0,ee().catch($)}),document.getElementById("ddos-ban-filter-apply")?.addEventListener("click",()=>{c.ddosFilter.banQ=document.getElementById("ddos-ban-q")?.value?.trim()||"",c.ddosFilter.banSource=document.getElementById("ddos-ban-source")?.value||"",c.ddosFilter.banPage=0,ee().catch($)}),document.getElementById("ddos-ban-filter-reset")?.addEventListener("click",()=>{c.ddosFilter.banQ="",c.ddosFilter.banSource="",c.ddosFilter.banSortBy="createdAt",c.ddosFilter.banSortDir="desc",c.ddosFilter.banPage=0,ee().catch($)}),document.getElementById("ddoslive-prev")?.addEventListener("click",()=>{c.ddosFilter.livePage=Math.max(0,n.livePage-1),ee().catch($)}),document.getElementById("ddoslive-next")?.addEventListener("click",()=>{(n.livePage+1)*k<T.length&&(c.ddosFilter.livePage+=1,ee().catch($))}),document.getElementById("ddosban-prev")?.addEventListener("click",()=>{c.ddosFilter.banPage=Math.max(0,n.banPage-1),ee().catch($)}),document.getElementById("ddosban-next")?.addEventListener("click",()=>{(n.banPage+1)*k<O.length&&(c.ddosFilter.banPage+=1,ee().catch($))});const Le=document.querySelector(".main");Le&&(Le.onscroll=()=>{c._ddosScrollPauseUntil=Date.now()+4e3})}!Qe&&c.page==="ddos"&&(We=setInterval(()=>{c.page!=="ddos"||Qe||c._ddosScrollPauseUntil&&Date.now()<c._ddosScrollPauseUntil||ee({soft:!0}).catch(()=>{})},2e3))}function Ea(a=!1,s=[]){const o=s.length?s:c._ddosPolicyCache?.whitelist||[],i=async n=>{if(!n)return;const r=o.some(d=>String(d)===n||String(d).startsWith(n));await J({message:e(r?"ddos.banWhitelistWarn":"ddos.banConfirm"),variant:"danger",confirmText:e("ddos.ban")})&&(await P("/ddos/blacklist",{method:"POST",body:JSON.stringify({ip:n,reason:e("ddos.banReasonDefault"),ttlSeconds:null})}),ee({soft:!0}).catch($))};if(document.querySelectorAll("[data-ban]").forEach(n=>{n.onclick=()=>i(n.dataset.ban)}),document.querySelectorAll("[data-unban]").forEach(n=>{n.onclick=async()=>{await J({message:e("ddos.unbanConfirm"),variant:"danger",confirmText:e("ddos.unban")})&&(await P(`/ddos/blacklist/${encodeURIComponent(n.dataset.unban)}`,{method:"DELETE"}),ee({soft:!0}).catch($))}}),a){document.getElementById("ban-add").onclick=async()=>{const r=document.getElementById("ban-ip").value.trim();if(!r||o.some(m=>String(m)===r)&&!await J({message:e("ddos.banWhitelistWarn"),variant:"danger",confirmText:e("ddos.ban")}))return;const u=document.getElementById("ban-ttl").value;await P("/ddos/blacklist",{method:"POST",body:JSON.stringify({ip:r,reason:document.getElementById("ban-reason").value.trim()||void 0,ttlSeconds:u?Number(u):null})}),ee({soft:!0}).catch($)},document.getElementById("ddos-refresh").onclick=()=>ee({soft:!1}).catch($),document.getElementById("ddos-pause").onclick=()=>{Qe=!Qe;const r=document.getElementById("ddos-pause");r&&(r.textContent=e(Qe?"ddos.resume":"ddos.pause")),Qe||ee({soft:!0}).catch($)},document.getElementById("ddos-master-autoban")?.addEventListener("click",async()=>{const r=!Je("ddos-master-autoban");Xe("ddos-master-autoban",r,e("ddos.masterOn"),e("ddos.masterOff"));const d=document.getElementById("dp-autoBanEnabled");d&&(d.type==="checkbox"?d.checked=r:d.value=r?"1":"0"),fa(r),Ze("ddos-root",!r),Ye("ddos-disabled-banner",!r),De();try{const u=Xt(),m=await P("/ddos/policy",{method:"PUT",body:JSON.stringify(u)});c._ddosPolicyCache=m.data,De()}catch(u){Xe("ddos-master-autoban",!r,e("ddos.masterOn"),e("ddos.masterOff")),Ze("ddos-root",r),Ye("ddos-disabled-banner",r),$(u)}});const n=document.getElementById("ddos-policy-panel");n?.addEventListener("input",()=>De()),n?.addEventListener("change",()=>De()),document.querySelectorAll("[data-ddos-preset]").forEach(r=>{r.onclick=()=>{const d=r.dataset.ddosPreset;if(d==="custom")return;const u=c._ddosPresetsCache?.[d];u&&Kt(u)}}),De(),document.getElementById("dp-save")?.addEventListener("click",async()=>{try{const r=Xt(),d=await P("/ddos/policy",{method:"PUT",body:JSON.stringify(r)});c._ddosPolicyCache=d.data,Kt(d.data),De(),await pe({title:e("ddos.policyTitle"),message:e("ddos.policySaved")}),ee({soft:!0}).catch($)}catch(r){$(r)}}),document.getElementById("dp-reset")?.addEventListener("click",async()=>{if(await J({message:e("ddos.confirmReset"),variant:"danger",confirmText:e("ddos.resetPolicy")}))try{const r=await P("/ddos/policy/reset",{method:"POST"});c._ddosPolicyCache=r.data,Kt(r.data),De(),await pe({title:e("ddos.policyTitle"),message:e("ddos.policyReset")}),ee({soft:!0}).catch($)}catch(r){$(r)}})}}function Pt(a){return e(a==="pm2"?"pm2.runnerPm2":a==="gctoac"?"pm2.runnerGctoac":a==="none"?"pm2.runnerNone":"pm2.runnerUnknown")}function Zt(a){if(!a)return"";const s=a.messageKey;if(s&&typeof s=="string"){if(s==="pm2.msgOk")return"";const i=a.messageParams||{},n=M(s,i);if(n&&n!==s)return n}const o=a.message||"";return!o||o==="ok"?"":o}function Ia(a=10){const s=Math.max(1,Number(a)||10)*1e3;window.setTimeout(()=>{try{window.location.reload()}catch{window.location.href=window.location.href}},s)}function Rs(a,s){const o=s?.messageKey||(a==="pm2"?"pm2.msgSwitchPm2":"pm2.msgSwitchGctoac");let i=Zt({messageKey:o,messageParams:s?.messageParams,message:void 0});i||(i=e(a==="pm2"?"pm2.msgSwitchPm2":"pm2.msgSwitchGctoac"));const n=s?.port||s?.messageParams?.port||(typeof location<"u"&&location.port?location.port:"3847");return[i,M("pm2.portAfterRestart",{port:n}),M("pm2.autoRefreshIn",{n:10})].filter(Boolean).join(`
`)}function jt(a){return a==="pm2"?`<span class="badge success">${t(Pt(a))}</span>`:a==="gctoac"?`<span class="badge agent">${t(Pt(a))}</span>`:a==="none"?`<span class="badge pending">${t(Pt(a))}</span>`:`<span class="badge warn">${t(Pt(a))}</span>`}function Fs(a){return!a||typeof a!="object"?"":Object.entries(a).map(([s,o])=>`${s}=${o}`).join(`
`)}function Ns(a){const s={};for(const o of(a||"").split(`
`)){const i=o.trim();if(!i||i.startsWith("#"))continue;const n=i.indexOf("=");n<=0||(s[i.slice(0,n).trim()]=i.slice(n+1).trim())}return s}function Ks(){const a=r=>document.getElementById(r)?.checked===!0,s=r=>document.getElementById(r)?.value??"";let o=s("pm2-cfg-instances").trim();if(o!=="max"){const r=Number(o);o=Number.isFinite(r)&&r>=1?r:1}const i=s("pm2-cfg-port").trim(),n=Number(i);return{port:Number.isFinite(n)&&n>=1&&n<=65535?n:void 0,name:s("pm2-cfg-name").trim()||"grok-openai-gateway",script:s("pm2-cfg-script").trim()||"dist/server.js",cwd:s("pm2-cfg-cwd").trim()||void 0,instances:o,exec_mode:s("pm2-cfg-exec")==="cluster"?"cluster":"fork",autorestart:a("pm2-cfg-autorestart"),watch:a("pm2-cfg-watch"),max_memory_restart:s("pm2-cfg-maxmem").trim()||"512M",max_restarts:Number(s("pm2-cfg-maxrestarts"))||10,min_uptime:s("pm2-cfg-minuptime").trim()||"5s",restart_delay:Number(s("pm2-cfg-restartdelay"))||2e3,exp_backoff_restart_delay:Number(s("pm2-cfg-backoff"))||1e3,merge_logs:a("pm2-cfg-mergelogs"),time:a("pm2-cfg-time"),error_file:s("pm2-cfg-errfile").trim()||"logs/pm2-error.log",out_file:s("pm2-cfg-outfile").trim()||"logs/pm2-out.log",env_extra:Ns(s("pm2-cfg-envextra")),preferred_runner:s("pm2-cfg-preferred")==="pm2"?"pm2":"gctoac"}}async function Be(){const s=(await P("/pm2/status")).data||{},o=s.app,i=s.config||{},n=s.portHolders||{},r=n.pids&&n.pids.length>0||!1,d=Zt(s);let u="",m=null;try{const I=await P("/pm2/logs?lines=80");u=(I.data?.stdout||"")+(I.data?.stderr?`
`+I.data.stderr:""),m=I.data||null}catch(I){u=I.message||""}s.lastError&&(u=`===== last errors =====
${s.lastError}

${u}`);const p=m?.files||[],l=p.length?p.filter(I=>I.exists).map(I=>`${I.label}: ${I.size<1024?I.size+" B":Math.round(I.size/1024)+" KB"}`).join(" · "):"",S=m?.maxBytes?Math.round(m.maxBytes/(1024*1024)):5,g=m?.keepBytes?Math.round(m.keepBytes/1024):512,f=o?.status||"—",b=f==="online"?e("pm2.statusOnline"):f==="errored"?e("pm2.statusErrored"):f==="stopped"?e("pm2.statusStopped"):f,k=f==="online"?`<span class="badge success">${t(b)}</span>`:f==="errored"?`<span class="badge error">${t(b)}</span>`:t(b),T=s.available,B=s.available&&o,O=s.runner||"unknown",E=d&&f!=="errored"&&s.available!==!1&&s.messageKey!=="pm2.msgErrored",N=Fs(i.env_extra),h=c.pm2Tab==="port"||c.pm2Tab==="config"||c.pm2Tab==="logs"||c.pm2Tab==="runner"?c.pm2Tab:"runner";c.pm2Tab=h;const x=`
    <div class="grid pm2-kpi-grid" id="pm2-kpi-grid">
      <div class="card">
        <div class="label">${t(e("pm2.app"))}</div>
        <div class="value value-sm">${t(s.appName||i.name||"grok-openai-gateway")}</div>
        <div class="muted card-sub">${jt(O)}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("pm2.status"))}</div>
        <div class="value value-sm">${k}</div>
        <div class="muted card-sub">${t(e("pm2.pid"))}: ${o?.pid&&o.pid!==0?o.pid:"—"}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("pm2.restarts"))}</div>
        <div class="value value-sm">${o?.restarts??"—"}</div>
        <div class="muted card-sub">CPU ${o?.cpu!=null?o.cpu+"%":"—"} · ${o?.memory!=null?M("common.mb",{n:Math.round(o.memory/1024/1024)}):"—"}</div>
      </div>
      <div class="card">
        <div class="label">${t(e("pm2.port"))}</div>
        <div class="value value-sm">${s.port??"—"}</div>
        <div class="muted card-sub">${t(e("pm2.portBusy"))}: ${e(r?"common.yes":"common.no")}</div>
      </div>
    </div>`,U=`
    <div class="panel data-table-panel pm2-section-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("pm2.switchTitle"))}</strong>
          <span class="muted panel-h-sub">${t(e("pm2.switchHint"))}</span>
        </div>
        ${jt(O)}
      </div>
      <div class="panel-pad">
        <div class="grid">
          <div class="card"><div class="label">${t(e("pm2.currentRunner"))}</div><div class="value value-sm">${jt(O)}</div></div>
          <div class="card"><div class="label">${t(e("pm2.gctoacPid"))}</div><div class="value value-sm">${s.gctoac?.running&&s.gctoac?.pid?s.gctoac.pid:"—"}</div></div>
          <div class="card"><div class="label">${t(e("pm2.port"))}</div><div class="value value-sm">${s.port??"—"}</div></div>
          <div class="card"><div class="label">${t(e("pm2.portBusy"))}</div><div class="value value-sm">${e(r?"common.yes":"common.no")}</div></div>
        </div>
        <div class="toolbar settings-save-bar">
          <button class="btn sm" id="pm2-switch-pm2" ${T?"":"disabled"}>${t(e("pm2.switchToPm2"))}</button>
          <button class="btn secondary sm" id="pm2-switch-gctoac">${t(e("pm2.switchToGctoac"))}</button>
        </div>
      </div>
    </div>`,C=`
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
    </div>`,y=`
    <div class="panel data-table-panel pm2-section-panel" id="pm2-config-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("pm2.configTitle"))}</strong>
          <span class="muted panel-h-sub">${t(e("pm2.configHint"))}</span>
        </div>
      </div>
      <div class="panel-pad">
        <div class="form-grid pm2-config-form">
          <label>${t(e("pm2.fieldName"))}<input id="pm2-cfg-name" value="${t(i.name||"")}" /></label>
          <label>${t(e("pm2.fieldScript"))}<input id="pm2-cfg-script" value="${t(i.script||"dist/server.js")}" /></label>
          <label>${t(e("pm2.fieldCwd"))}<input id="pm2-cfg-cwd" value="${t(i.cwd||"")}" placeholder="${t(e("pm2.phCwd"))}" /></label>
          <label>${t(e("pm2.fieldInstances"))}<input id="pm2-cfg-instances" value="${t(String(i.instances??1))}" placeholder="${t(e("pm2.phInstances"))}" /></label>
          <label>${t(e("pm2.fieldExecMode"))}
            <select id="pm2-cfg-exec">
              <option value="fork" ${i.exec_mode!=="cluster"?"selected":""}>${t(e("pm2.modeFork"))}</option>
              <option value="cluster" ${i.exec_mode==="cluster"?"selected":""}>${t(e("pm2.modeCluster"))}</option>
            </select>
          </label>
          <label>${t(e("pm2.fieldMaxMem"))}<input id="pm2-cfg-maxmem" value="${t(i.max_memory_restart||"512M")}" /></label>
          <label>${t(e("pm2.fieldMaxRestarts"))}<input id="pm2-cfg-maxrestarts" type="number" value="${t(String(i.max_restarts??10))}" /></label>
          <label>${t(e("pm2.fieldMinUptime"))}<input id="pm2-cfg-minuptime" value="${t(String(i.min_uptime??"5s"))}" /></label>
          <label>${t(e("pm2.fieldRestartDelay"))}<input id="pm2-cfg-restartdelay" type="number" value="${t(String(i.restart_delay??2e3))}" /></label>
          <label>${t(e("pm2.fieldBackoff"))}<input id="pm2-cfg-backoff" type="number" value="${t(String(i.exp_backoff_restart_delay??1e3))}" /></label>
          <label>${t(e("pm2.fieldErrorFile"))}<input id="pm2-cfg-errfile" value="${t(i.error_file||"logs/pm2-error.log")}" /></label>
          <label>${t(e("pm2.fieldOutFile"))}<input id="pm2-cfg-outfile" value="${t(i.out_file||"logs/pm2-out.log")}" /></label>
          <label>${t(e("pm2.fieldPreferred"))}
            <select id="pm2-cfg-preferred">
              <option value="gctoac" ${i.preferred_runner!=="pm2"?"selected":""}>gctoac</option>
              <option value="pm2" ${i.preferred_runner==="pm2"?"selected":""}>pm2</option>
            </select>
          </label>
          <label class="check"><input type="checkbox" id="pm2-cfg-autorestart" ${i.autorestart!==!1?"checked":""}/> ${t(e("pm2.fieldAutorestart"))}</label>
          <label class="check"><input type="checkbox" id="pm2-cfg-watch" ${i.watch?"checked":""}/> ${t(e("pm2.fieldWatch"))}</label>
          <label class="check"><input type="checkbox" id="pm2-cfg-mergelogs" ${i.merge_logs!==!1?"checked":""}/> ${t(e("pm2.fieldMergeLogs"))}</label>
          <label class="check"><input type="checkbox" id="pm2-cfg-time" ${i.time!==!1?"checked":""}/> ${t(e("pm2.fieldTime"))}</label>
          <label class="full">${t(e("pm2.fieldEnvExtra"))}<textarea id="pm2-cfg-envextra" rows="4" placeholder="${t(e("pm2.phEnv"))}">${t(N)}</textarea></label>
        </div>
        <div class="toolbar settings-save-bar">
          <button class="btn sm" id="pm2-cfg-save">${t(e("pm2.saveConfig"))}</button>
          <button class="btn secondary sm" id="pm2-cfg-save-only">${t(e("pm2.saveOnly"))}</button>
          <button class="btn secondary sm" id="pm2-cfg-reset">${t(e("pm2.resetConfig"))}</button>
        </div>
      </div>
    </div>`,v=`
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
          ${t(M("pm2.logsAutoTrim",{maxMb:S,keepKb:g}))}
          ${l?` · ${t(l)}`:""}
        </p>
        <pre class="pre pre-logs" id="pm2-logs-pre">${t(u||e("common.empty"))}</pre>
      </div>
    </div>`;document.getElementById("app").innerHTML=ie(`
    <div class="topbar">
      <h2>${t(e("pm2.title"))}</h2>
      <div class="toolbar">
        <button class="btn secondary sm" id="pm2-refresh">${t(e("pm2.refresh"))}</button>
        <button class="btn sm" id="pm2-start" ${T?"":"disabled"}>${t(e("pm2.start"))}</button>
        <button class="btn secondary sm" id="pm2-stop" ${B?"":"disabled"}>${t(e("pm2.stop"))}</button>
        <button class="btn sm" id="pm2-restart" ${T?"":"disabled"}>${t(e("pm2.restart"))}</button>
        <button class="btn secondary sm" id="pm2-reload" ${!B||o?.status!=="online"?"disabled":""}>${t(e("pm2.reload"))}</button>
      </div>
    </div>
    ${qe([e("pm2.hint")])}
    ${d?`<div class="error-box${E?" warn-box":""}">${t(d)}</div>`:s.available?"":`<div class="error-box">${t(e("pm2.unavailable"))}</div>`}
    ${x}

    <div class="usage-tabs-panel panel pm2-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("pm2.title"))}">
        <button type="button" role="tab" class="seg-tab ${h==="runner"?"is-active":""}" data-pm2-tab="runner" aria-selected="${h==="runner"}">
          ${t(e("pm2.tabRunner"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${h==="port"?"is-active":""}" data-pm2-tab="port" aria-selected="${h==="port"}">
          ${t(e("pm2.tabPort"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${h==="config"?"is-active":""}" data-pm2-tab="config" aria-selected="${h==="config"}">
          ${t(e("pm2.tabConfig"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${h==="logs"?"is-active":""}" data-pm2-tab="logs" aria-selected="${h==="logs"}">
          ${t(e("pm2.tabLogs"))}
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane pm2-tab-pane" id="pm2-tab-runner" ${h==="runner"?"":"hidden"}>
          ${U}
        </div>
        <div class="usage-tab-pane pm2-tab-pane" id="pm2-tab-port" ${h==="port"?"":"hidden"}>
          ${C}
        </div>
        <div class="usage-tab-pane pm2-tab-pane" id="pm2-tab-config" ${h==="config"?"":"hidden"}>
          ${y}
        </div>
        <div class="usage-tab-pane pm2-tab-pane" id="pm2-tab-logs" ${h==="logs"?"":"hidden"}>
          ${v}
        </div>
      </div>
    </div>
  `),de(),document.querySelectorAll("[data-pm2-tab]").forEach(I=>{I.addEventListener("click",()=>{const H=I.getAttribute("data-pm2-tab")||"runner",K=H==="port"||H==="config"||H==="logs"||H==="runner"?H:"runner";c.pm2Tab!==K&&(c.pm2Tab=K,Be().catch($))})}),document.getElementById("pm2-logs-refresh")?.addEventListener("click",()=>{c.pm2Tab="logs",Be().catch($)}),document.getElementById("pm2-logs-clear")?.addEventListener("click",async()=>{if(await J({message:e("pm2.confirmClearLogs"),variant:"danger",confirmText:e("pm2.clearLogs")}))try{const H=(await P("/pm2/logs/clear",{method:"POST",body:JSON.stringify({which:"all"})})).data?.cleared?.length||0;await pe({message:M("pm2.logsCleared",{n:H})}),Be().catch($)}catch(I){$(I)}});const F=async I=>{if(await J({message:e(I==="pm2"?"pm2.confirmSwitchPm2":"pm2.confirmSwitchGctoac"),variant:"confirm",confirmText:e(I==="pm2"?"pm2.switchToPm2":"pm2.switchToGctoac")}))try{const K=await P("/pm2/switch",{method:"POST",body:JSON.stringify({mode:I})}),re=K?.data||K||{},me=Rs(I==="pm2"?"pm2":"gctoac",re);Ia(10),await pe({title:e("common.notice"),message:me,confirmText:e("common.ok")});try{window.location.reload()}catch{window.location.href=window.location.href}}catch(K){$(K)}};document.getElementById("pm2-refresh").onclick=()=>Be().catch($),document.getElementById("pm2-switch-pm2").onclick=()=>F("pm2"),document.getElementById("pm2-switch-gctoac").onclick=()=>F("gctoac"),document.getElementById("pm2-start").onclick=()=>F("pm2"),document.getElementById("pm2-stop").onclick=async()=>{if(await J({message:e("pm2.confirmStop"),variant:"danger",confirmText:e("pm2.stop")}))try{await P("/pm2/stop",{method:"POST",body:"{}"}),Be().catch($)}catch(I){$(I)}},document.getElementById("pm2-restart").onclick=async()=>{if(await J({message:e("pm2.confirmRestart"),variant:"confirm",confirmText:e("pm2.restart")}))try{await F("pm2")}catch(I){$(I)}},document.getElementById("pm2-reload").onclick=async()=>{try{await P("/pm2/reload",{method:"POST",body:"{}"}),Be().catch($)}catch(I){$(I)}};const W=async I=>{try{const H={...Ks(),restart:I};if(H.port==null){await pe({message:e("pm2.portInvalid")});return}const K=await P("/pm2/config",{method:"PUT",body:JSON.stringify(H)});if(K.data?.scheduled){const re=K.data.portChange?`
${M("pm2.portChangedMsg",{from:K.data.portChange.previous,to:K.data.portChange.port})}`:"",me=Zt(K.data.scheduled)||e("pm2.switchScheduled");Ia(10),await pe({title:e("common.notice"),message:me+re+`
${M("pm2.autoRefreshIn",{n:10})}`});try{window.location.reload()}catch{window.location.href=window.location.href}}else await pe(K.data?.portChange?M("pm2.portSavedNeedRestart",{port:K.data.port}):e("pm2.configSaved")),Be().catch($)}catch(H){$(H)}};document.getElementById("pm2-cfg-save").onclick=()=>W(!0),document.getElementById("pm2-cfg-save-only").onclick=()=>W(!1),document.getElementById("pm2-port-default")?.addEventListener("click",()=>{const I=document.getElementById("pm2-cfg-port");I&&(I.value="3847")}),document.getElementById("pm2-port-save")?.addEventListener("click",async()=>{const I=Number(document.getElementById("pm2-cfg-port")?.value);if(!Number.isFinite(I)||I<1||I>65535){await pe({message:e("pm2.portInvalid")});return}if(await J({message:M("pm2.confirmPortChange",{port:I}),variant:"confirm",confirmText:e("pm2.savePort")}))try{const H=await P("/pm2/config",{method:"PUT",body:JSON.stringify({port:I,restart:!0})}),K=H.data?.scheduled?.message||(H.data?.portChange?M("pm2.portChangedMsg",{from:H.data.portChange.previous,to:H.data.portChange.port}):e("pm2.configSaved"));await pe(K+`
`+M("pm2.portAfterRestart",{port:I}))}catch(H){$(H)}}),document.getElementById("pm2-cfg-reset").onclick=async()=>{if(await J({message:e("pm2.confirmReset"),variant:"danger",confirmText:e("pm2.resetConfig")}))try{await P("/pm2/config/reset",{method:"POST",body:"{}"}),Be().catch($)}catch(I){$(I)}}}let Y=[],ge=null,ae=[],pt=!1,Oe=0;const He=new Map,R={keyId:"",model:"",reasoning:!0,effort:"",resumeId:"",forkSession:!1,memory:!1,noPlan:!1,permissionMode:"",systemPrompt:"",systemOpen:!1},L={mode:"full",recentN:6,summary:"",summaryAt:null,summarySourceCount:0},js=3,Xa=40,Us=20,Gs=2200,A={conversationId:null,historyPage:0,historyLimit:20,historyQ:"",historyTotal:0,historyItems:[],historyLoading:!1,historyOpenMobile:!1,saving:!1,saveQueued:!1,renamingId:null};let Ut=null;const Ct=10,ya=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function Ws(a){const s=String(a||"").split(/[/\\]/).pop()||"",o=s.lastIndexOf(".");return o<0?"":s.slice(o).toLowerCase()}function Lt(a){return La.has(Ws(a))}function Dt(){return e("chat.formatsHint")}function Ya(){L.mode="full",L.recentN=6,L.summary="",L.summaryAt=null,L.summarySourceCount=0,Oe=0,He.clear()}function Qs(a){const s=(a?.title||"").trim();if(s)return s;const o=(a?.preview||"").trim();return o||e("chat.untitled")}function zs(){return Y.filter(a=>!a.streaming).map(a=>{const s={role:a.role,content:a.content||""};return a.reasoning&&(s.reasoning=a.reasoning),a.docs&&a.docs.length&&(s.docs=a.docs),a.error&&(s.error=!0),s})}function Vs(){return{contextMode:L.mode,contextRecentN:L.recentN,summaryText:L.summary||"",summaryAt:L.summaryAt,summarySourceCount:L.summarySourceCount||0}}function Js(a){a&&(L.mode=a.contextMode==="summary"||a.contextMode==="recent"?a.contextMode:"full",L.recentN=Math.min(40,Math.max(2,Number(a.contextRecentN)||6)),L.summary=(a.summaryText||"").trim(),L.summaryAt=a.summaryAt||null,L.summarySourceCount=Number(a.summarySourceCount)||0,L.mode==="summary"&&!L.summary&&(L.mode="full"))}function Za(a){return a.reduce((s,o)=>s+(o.content||"").length+(o.reasoning||"").length,0)}function es(){const a=Y.filter(s=>!s.streaming);return a.length<2?!1:a.length>=js?!0:Za(a)>=800}function Xs(){const a=(R.systemPrompt||"").trim(),s=Y.filter(d=>!d.streaming),o=Math.min(40,Math.max(2,Number(L.recentN)||6));let i=s.map(d=>({role:d.role,content:d.content||""})),n=a;if(L.mode==="summary"&&L.summary){const d=(yt()==="zh-Hant"?`【先前對話摘要 — 僅供延續語境，完整記錄仍在用戶介面】
`:`[Prior conversation summary — full history remains in the UI]
`)+L.summary;n=n?`${n}

${d}`:d;const u=s.slice(L.summarySourceCount||0);i=(u.length?u:s.slice(-o)).slice(-o).map(p=>({role:p.role,content:p.content||""}))}else L.mode==="recent"&&(i=s.slice(-o).map(d=>({role:d.role,content:d.content||""})));const r=i.map(d=>({role:d.role,content:d.content}));return n&&r.unshift({role:"system",content:n}),r}function Ys(){return L.mode==="summary"&&L.summary?M("chat.ctxModeSummaryLabel",{n:L.recentN}):L.mode==="recent"?M("chat.ctxModeRecentLabel",{n:L.recentN}):e("chat.ctxModeFullLabel")}function it(){const a=document.getElementById("chat-compress");if(!a)return;const s=Y.some(n=>n.streaming),o=!!ge||pt||s,i=es();a.disabled=o||!i,a.textContent=e(pt?"chat.compressing":"chat.compress"),a.title=e(i?"chat.compress":"chat.compressNeedMore"),Fe(),et()}function et(){const a=document.getElementById("chat-ctx-mode"),s=document.getElementById("chat-ctx-n");if(a){const o=L.mode==="summary"&&!L.summary?"full":L.mode;a.value=o;const i=a.querySelector('option[value="summary"]');i&&(i.disabled=!L.summary)}s&&(s.value=String(L.recentN),s.disabled=L.mode==="full")}function Fe(){const a=document.getElementById("chat-compress-banner");if(!a)return;const s=!!L.summary,o=Y.filter(r=>!r.streaming).length>40||Za(Y)>6e4;if(!s&&L.mode==="full"&&!o){a.hidden=!0,a.innerHTML="";return}a.hidden=!1;const i=s?L.summary.length>160?`${L.summary.slice(0,159)}…`:L.summary:"",n=o?`<p class="chat-compress-warn">${t(e("chat.ctxLongHint"))}</p>`:"";a.innerHTML=`
    <div class="chat-compress-banner-inner">
      <div class="chat-compress-banner-text">
        <strong>${t(e("chat.ctxPolicyTitle"))}</strong>
        <span class="muted">${t(Ys())}</span>
        <p class="chat-compress-remark">${t(e("chat.ctxRemark"))}</p>
        ${i?`<p class="chat-compress-preview">${t(i)}</p>`:""}
        ${n}
      </div>
      <div class="chat-compress-banner-actions">
        ${s?`<button type="button" class="btn secondary sm" id="chat-summary-view">${t(e("chat.compressView"))}</button>`:""}
      </div>
    </div>`,document.getElementById("chat-summary-view")?.addEventListener("click",()=>{ts()})}async function ts(){if(!L.summary){j(e("chat.compressNeedSummary"));return}const a=L.summaryAt?te(L.summaryAt):"—",s=Ha(L.summary);Ie&&ze(!1);const o=document.createElement("div");return o.className="ui-dialog-back",o.id="ui-dialog-back",o.dataset.cancelable="1",o.innerHTML=`
    <div class="ui-dialog ui-dialog--info ui-dialog--large" role="dialog" aria-modal="true">
      <div class="ui-dialog-h">
        <div class="ui-dialog-icon" aria-hidden="true">Σ</div>
        <h3 class="ui-dialog-title">${t(e("chat.compressResultTitle"))}</h3>
      </div>
      <div class="ui-dialog-body ui-dialog-body--md">
        <p class="muted" style="margin:0 0 10px">${t(M("chat.summaryMeta",{when:a,n:L.summarySourceCount}))}</p>
        <div class="chat-content md">${s}</div>
      </div>
      <div class="ui-dialog-actions">
        <button type="button" class="btn secondary sm" id="ui-dialog-copy">${t(e("chat.copy"))}</button>
        <button type="button" class="btn sm" id="ui-dialog-ok">${t(e("common.ok"))}</button>
      </div>
    </div>`,document.body.appendChild(o),document.body.classList.add("ui-dialog-open"),Ie=o,document.addEventListener("keydown",la,!0),new Promise(i=>{At=i;const n=()=>ze(!0);o.querySelector("#ui-dialog-ok")?.addEventListener("click",n),o.addEventListener("click",r=>{r.target===o&&n()}),o.querySelector("#ui-dialog-copy")?.addEventListener("click",async()=>{const r=await ca(L.summary),d=o.querySelector("#ui-dialog-copy");r&&d&&(d.textContent=e("chat.copied"),setTimeout(()=>{d.isConnected&&(d.textContent=e("chat.copy"))},1500))})})}function Zs(a){return a.map(s=>{const o=s.role||"user";let i=(s.content||"").trim();if(s.docs&&s.docs.length){const n=s.docs.map(r=>r.name).join(", ");i=i?`${i}
[attachments: ${n}]`:`[attachments: ${n}]`}return i.length>5e3&&(i=`${i.slice(0,4999)}…`),`${o}: ${i}`}).join(`

`)}function eo(){return yt()==="zh-Hant"?["你是對話摘要助手。只輸出精簡摘要，不要使用任何工具、不要上網、不要反問。","若已有舊摘要，請合併更新為一份。","請用繁體中文（或對齊原對話語言）條列：","1) 主題與目標 2) 已確定事實／決定 3) 未完成事項 4) 用戶偏好或約束","控制在約 600–1000 字。不要大段複製原文。只輸出摘要正文。"].join(`
`):["You are a conversation summary assistant. Output only a concise summary.","Merge any prior summary into one updated summary. No tools, no browsing, no questions.","Cover: (1) topics/goals (2) facts/decisions (3) open items (4) preferences.","Keep under ~600–1000 words. Summary body only."].join(`
`)}async function to(){if(pt||ge||Y.some(n=>n.streaming)){j(e("chat.compressBusy"));return}const a=Y.filter(n=>!n.streaming);if(!es()){j(e("chat.compressNeedMore"));return}if(!await J({title:e("chat.compress"),message:e("chat.compressConfirm"),variant:"confirm",confirmText:e("chat.compress")}))return;const s=St();if(!s){j(e("chat.needKey"));return}ne(),pt=!0,it();const o=document.getElementById("chat-send");o&&(o.disabled=!0);const i=document.getElementById("chat-stream-status");i&&(i.hidden=!1,i.textContent=e("chat.compressing"));try{let n=Zs(a);L.summary&&(n=(yt()==="zh-Hant"?`先前摘要：
${L.summary}

完整對話：
`:`Prior summary:
${L.summary}

Full conversation:
`)+n);const r=document.getElementById("chat-model")?.value||R.model||"grok-4.5",d=ga(),u={model:r,stream:!1,include_reasoning:!1,messages:[{role:"system",content:eo()},{role:"user",content:(yt()==="zh-Hant"?`請為以下對話產生摘要（僅供之後回合作為語境，不會刪除用戶介面中的記錄）：

`:`Summarize the following conversation (for later context only; UI history is kept):

`)+n}]},m=kt();m&&(u.apiKeyId=m);const p=await fetch("/admin/api/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify(u)});if(!p.ok){const g=await p.text();let f=g;try{f=JSON.parse(g).error?.message||g}catch{}throw new Error(f||e("chat.compressFail"))}const l=await p.json();let S=l?.choices?.[0]?.message?.content||l?.choices?.[0]?.delta?.content||"";if(typeof S!="string"&&(S=String(S||"")),S=S.trim().replace(/^【對話摘要】\s*/u,"").replace(/^\[Conversation summary\]\s*/i,""),!S)throw new Error(e("chat.compressFail"));L.summary=S,L.summaryAt=new Date().toISOString(),L.summarySourceCount=a.length,L.mode="summary",Fe(),et(),j(""),i&&(i.hidden=!1,i.textContent=e("chat.compressOk"),setTimeout(()=>{const g=document.getElementById("chat-stream-status");g&&g.textContent===e("chat.compressOk")&&(g.hidden=!0,g.textContent="")},2800)),await ht().catch(()=>{}),await ts()}catch(n){j(n.message||e("chat.compressFail"))}finally{pt=!1,it(),o&&(o.disabled=!1),i&&i.textContent===e("chat.compressing")&&(i.hidden=!0,i.textContent="")}}function ea(a){A.historyOpenMobile=!!a,document.body.classList.toggle("chat-history-open",A.historyOpenMobile)}function ta(){ea(!1)}async function Ke(){if(c.key){A.historyLoading=!0,Ce();try{const a=A.historyPage*A.historyLimit,s=new URLSearchParams({limit:String(A.historyLimit),offset:String(a)});A.historyQ.trim()&&s.set("q",A.historyQ.trim());const o=await P(`/conversations?${s}`);A.historyItems=o.data||[],A.historyTotal=o.total??0}catch(a){A.historyItems=[],A.historyTotal=0,console.warn(a)}finally{A.historyLoading=!1,Ce()}}}function Ce(){const a=document.getElementById("chat-history-list"),s=document.getElementById("chat-history-pager");if(a){if(A.historyLoading&&!A.historyItems.length?a.innerHTML=`<li class="chat-history-empty">${t(e("common.loading"))}</li>`:A.historyItems.length?a.innerHTML=A.historyItems.map(o=>{const i=A.conversationId===o.id?" is-active":"",n=Qs(o),r=o.title&&o.preview&&o.preview!==o.title?o.preview:o.model||M("chat.msgs",{n:o.messageCount||0}),d=A.renamingId===o.id,u=n,m=d?`<input type="text" class="chat-history-title-input" data-title-input="${t(o.id)}" value="${t(u)}" maxlength="120" placeholder="${t(e("chat.renamePh"))}" aria-label="${t(e("chat.renamePh"))}" />
            <span class="preview">${t(r||"—")}</span>
            <span class="meta"><span>${t(te(o.updatedAt))}</span></span>`:`<span class="title" data-title-label="${t(o.id)}" title="${t(e("chat.rename"))}">${t(n)}</span>
            <span class="preview">${t(r||"—")}</span>
            <span class="meta"><span>${t(te(o.updatedAt))}</span></span>`,p=d?`<div class="chat-history-item${i} is-editing" data-conv-body="${t(o.id)}">${m}</div>`:`<div class="chat-history-item${i}" data-open-conv="${t(o.id)}" role="button" tabindex="0" title="${t(n)}">${m}</div>`;return`
        <li class="chat-history-row${i}${d?" is-renaming":""}" data-conv-row="${t(o.id)}">
          ${p}
          <div class="chat-history-item-actions">
            <button type="button" class="icon-action" data-rename-conv="${t(o.id)}" title="${t(e("chat.rename"))}" aria-label="${t(e("chat.rename"))}">✎</button>
            <button type="button" class="icon-action danger" data-del-conv="${t(o.id)}" title="${t(e("chat.deleteConversation"))}" aria-label="${t(e("chat.deleteConversation"))}">×</button>
          </div>
        </li>`}).join(""):a.innerHTML=`<li class="chat-history-empty">${t(e("chat.historyEmpty"))}</li>`,s){const o=A.historyLimit,i=Math.max(1,Math.ceil(A.historyTotal/o)||1),n=Math.min(A.historyPage+1,i),r=M("chat.historyPage",{n,total:i}),d=A.historyPage>0,u=(A.historyPage+1)*o<A.historyTotal;s.innerHTML=`
      <button type="button" class="btn secondary sm" id="chat-hist-prev" ${d?"":"disabled"}>${t(e("chat.historyPrev"))}</button>
      <span>${t(r)}</span>
      <button type="button" class="btn secondary sm" id="chat-hist-next" ${u?"":"disabled"}>${t(e("chat.historyNext"))}</button>
    `;const m=document.getElementById("chat-hist-prev"),p=document.getElementById("chat-hist-next");m&&(m.onclick=()=>{A.historyPage>0&&(A.historyPage-=1,Ke())}),p&&(p.onclick=()=>{(A.historyPage+1)*o<A.historyTotal&&(A.historyPage+=1,Ke())})}if(a.querySelectorAll("[data-open-conv]").forEach(o=>{const i=o.getAttribute("data-open-conv");if(!i)return;let n=null;const r=()=>{n&&(clearTimeout(n),n=null)};o.addEventListener("click",d=>{A.renamingId||d.target instanceof Element&&d.target.closest(".chat-history-item-actions")||(r(),n=setTimeout(()=>{n=null,!A.renamingId&&xa(i)},280))}),o.addEventListener("dblclick",d=>{d.preventDefault(),d.stopPropagation(),r(),Gt(i)}),o.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),A.renamingId||xa(i))})}),a.querySelectorAll("[data-title-label]").forEach(o=>{o.addEventListener("dblclick",i=>{i.preventDefault(),i.stopPropagation();const n=o.getAttribute("data-title-label");n&&Gt(n)})}),a.querySelectorAll("[data-rename-conv]").forEach(o=>{o.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation();const n=o.getAttribute("data-rename-conv");n&&Gt(n)})}),a.querySelectorAll("[data-del-conv]").forEach(o=>{o.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation();const n=o.getAttribute("data-del-conv");n&&so(n)})}),A.renamingId){const o=String(A.renamingId).replace(/\\/g,"\\\\").replace(/"/g,'\\"'),i=a.querySelector(`[data-title-input="${o}"]`);i instanceof HTMLInputElement&&(ao(i,A.renamingId),requestAnimationFrame(()=>{i.isConnected&&(i.focus(),i.select())}))}}}function Gt(a){a&&(A.renamingId&&A.renamingId!==a&&(A.renamingId=null),A.renamingId=a,Ce())}function ao(a,s){let o=!1;const i=async n=>{if(o)return;o=!0;const r=a.value;if(A.renamingId=null,!n){Ce();return}const d=String(r??"").trim().slice(0,120),u=A.historyItems.find(p=>p.id===s),m=u?(u.title||"").trim():"";if(d===m){Ce();return}u&&(u.title=d),Ce();try{await P(`/conversations/${s}`,{method:"PATCH",body:JSON.stringify({title:d})}),await Ke()}catch(p){j(p.message||e("chat.saveFail")),await Ke()}};a.addEventListener("keydown",n=>{n.stopPropagation(),n.key==="Enter"?(n.preventDefault(),i(!0)):n.key==="Escape"&&(n.preventDefault(),i(!1))}),a.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation()}),a.addEventListener("mousedown",n=>n.stopPropagation()),a.addEventListener("dblclick",n=>{n.preventDefault(),n.stopPropagation()}),a.addEventListener("blur",()=>{setTimeout(()=>i(!0),0)})}async function xa(a){(!a||ge)&&ge&&ge.abort();try{j("");const s=await P(`/conversations/${a}`),o=s.data||s;A.conversationId=o.id,Oe=0,He.clear(),Y=(o.messages||[]).filter(u=>!u.compressed).map(u=>({role:u.role,content:u.content||"",reasoning:u.reasoning||void 0,docs:u.docs,error:u.error})),ae=[],R.systemPrompt=o.systemPrompt||"",Js(o),o.model&&(R.model=o.model),o.apiKeyId&&(R.keyId=o.apiKeyId);const i=document.getElementById("chat-system");i&&(i.value=R.systemPrompt);const n=document.getElementById("chat-system-wrap");n&&(n.hidden=!R.systemPrompt.trim()&&!R.systemOpen);const r=document.getElementById("chat-model");r&&o.model&&(r.value=o.model);const d=document.getElementById("chat-key-select");d&&o.apiKeyId&&[...d.options].some(m=>m.value===o.apiKeyId)&&(d.value=o.apiKeyId,R.keyId=o.apiKeyId),Ae(),Ue(),Ce(),Fe(),et(),ta()}catch(s){j(s.message||e("chat.loadFail"))}}function kt(){const a=ga();return!a||String(a).startsWith("admin-session:")||!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(a)?null:a}async function ht(){const a=zs();if(!a.length&&!L.summary)return;if(A.saving){A.saveQueued=!0;return}A.saving=!0,A.saveQueued=!1,ne();const s={messages:a,model:R.model||null,systemPrompt:R.systemPrompt||"",apiKeyId:kt(),...Vs()};try{if(A.conversationId)await P(`/conversations/${A.conversationId}`,{method:"PATCH",body:JSON.stringify(s)});else{if(!a.length)return;const o=await P("/conversations",{method:"POST",body:JSON.stringify({...s,title:""})}),i=o.data||o;A.conversationId=i.id}await Ke()}catch(o){console.warn(o)}finally{A.saving=!1,A.saveQueued&&(A.saveQueued=!1,ht().catch(()=>{}))}}async function so(a){if(await J({title:e("chat.deleteConversation"),message:e("chat.deleteConfirm"),variant:"danger",confirmText:e("chat.deleteConversation")}))try{await P(`/conversations/${a}`,{method:"DELETE"}),A.conversationId===a&&(A.conversationId=null,Y=[],ae=[],Ya(),Ae(),Ue(),Fe(),et()),A.historyItems.length<=1&&A.historyPage>0&&(A.historyPage-=1),await Ke()}catch(s){j(s.message||e("common.requestFailed"))}}function oo(a=!0){ge&&ge.abort(),Y=[],ae=[],A.conversationId=null,Ya(),a||(R.systemPrompt="",R.systemOpen=!1),Ae(),Ue(),Ce(),Fe(),et()}function St(){return c.key}function ga(){const s=document.getElementById("chat-key-select")?.value||R.keyId||"";return s&&s!=="session"?s:c.me?.id||""}function ne(){const a=document.getElementById("chat-key-select"),s=document.getElementById("chat-model"),o=document.getElementById("chat-reasoning"),i=document.getElementById("chat-system");a&&(R.keyId=a.value==="session"?"":a.value),s&&(R.model=s.value),o&&(R.reasoning=o.checked);const n=document.getElementById("chat-effort");n&&(R.effort=n.value||"");const r=document.getElementById("chat-resume");r&&(R.resumeId=r.value.trim());const d=document.getElementById("chat-fork");d&&(R.forkSession=d.checked);const u=document.getElementById("chat-memory");u&&(R.memory=u.checked);const m=document.getElementById("chat-no-plan");m&&(R.noPlan=m.checked);const p=document.getElementById("chat-perm");p&&(R.permissionMode=p.value||""),i&&(R.systemPrompt=i.value)}function Ue(){const a=document.getElementById("chat-pending");if(a){if(!ae.length){a.innerHTML="",a.hidden=!0;return}a.hidden=!1,a.innerHTML=ae.map((s,o)=>`
      <div class="chat-pending-item" title="${t(s.name)}">
        <span class="name">${t(s.name)}</span>
        <span class="muted">${xe(s.size)}</span>
        <button type="button" class="rm" data-rm-doc="${o}" aria-label="${t(e("chat.removeFile"))}">×</button>
      </div>`).join(""),a.querySelectorAll("[data-rm-doc]").forEach(s=>{s.onclick=()=>{const o=Number(s.getAttribute("data-rm-doc"));ae.splice(o,1),Ue()}})}}function no(a,s){return`${a}:${(s||"").length}:${(s||"").slice(0,40)}`}function Ae(){const a=document.getElementById("chat-messages");if(!a)return;const s=a.scrollHeight-a.scrollTop-a.clientHeight<120,o=Y.some(l=>l.streaming),i=document.getElementById("chat-stream-status");if(i&&(i.hidden=!o,i.textContent=o?e("chat.streaming"):""),!Y.length){a.innerHTML=`
      <div class="chat-empty">
        <strong>${t(e("chat.emptyTitle"))}</strong>
        <p>${t(e("chat.emptyHint"))}</p>
      </div>`,it();return}const n=Y.length,r=Math.max(0,n-Xa);Oe>r&&(Oe=r);const d=Oe,u=Y.slice(d),m=d,p=m>0?`<div class="chat-load-older">
          <button type="button" class="btn secondary sm" id="chat-load-older">${t(M("chat.loadOlder",{n:m}))}</button>
        </div>`:"";a.innerHTML=p+u.map((l,S)=>{const g=d+S,f=l.role==="user"?"user":"assistant",b=l.role==="user"?e("chat.you"):e("chat.assistant"),k=l.docs&&l.docs.length?`<div class="chat-attach-list">${l.docs.map(H=>`<span class="chat-attach-chip" title="${t(H.name)}"><span>📎 ${t(H.name)}</span></span>`).join("")}</div>`:"",B=!!l.reasoning?`<details class="chat-reasoning" ${l.streaming||!l.content?"open":""}>
            <summary>${t(e("chat.reasoning"))}${l.streaming&&!l.content?` · ${t(e("chat.streaming"))}`:""}</summary>
            <pre>${t(l.reasoning)}</pre>
          </details>`:"";let O=l.content||"";!O&&l.streaming&&(O=l.reasoning?"":"…");const E=l.error?" error":"",N=l.streaming?" is-streaming":"",h=f==="assistant"&&!l.streaming&&!!O;let x;if(h){const H=no(g,O);if(He.has(H))x=He.get(H);else if(x=Ha(O),He.set(H,x),He.size>200){const K=He.keys().next().value;He.delete(K)}}else x=t(O);const U=!l.streaming&&O.length>Gs,C=`${h?"chat-content md":"chat-content"}${U?" is-collapsible":""}`,y=U?`<button type="button" class="btn ghost sm chat-expand-btn" data-expand="${g}">${t(e("chat.showMore"))}</button>`:"",v=io(l),F=v?`<div class="muted chat-spend">${t(v)}</div>`:"",W=Array.isArray(l.tools)&&l.tools.length?`<div class="chat-tools">${l.tools.map(H=>`<span class="chat-tool-chip" title="${t(H.arguments||"")}">${t(H.name||"tool")}</span>`).join("")}</div>`:"",I=O?`<button type="button" class="chat-copy-btn" data-copy-msg="${g}" title="${t(e("chat.copy"))}">${t(e("chat.copy"))}</button>`:"";return`<div class="chat-bubble ${f}${E}${N}" data-msg-idx="${g}">
        <div class="chat-bubble-head">
          <div class="chat-role">${t(b)}${l.streaming?` <span class="chat-live">${t(e("chat.streaming"))}</span>`:""}</div>
          ${I}
        </div>
        ${k}
        ${B}
        ${W}
        <div class="${C}" data-content-idx="${g}">${x}${l.streaming?'<span class="chat-cursor">▍</span>':""}</div>
        ${y}
        ${F}
      </div>`}).join(""),(s||o)&&(a.scrollTop=a.scrollHeight),it(),document.getElementById("chat-load-older")?.addEventListener("click",()=>{const l=a.scrollHeight;Oe=Math.max(0,Oe-Us),Ae();const S=document.getElementById("chat-messages");S&&(S.scrollTop=S.scrollHeight-l)}),a.querySelectorAll("[data-expand]").forEach(l=>{l.addEventListener("click",()=>{const S=a.querySelector(`[data-content-idx="${l.getAttribute("data-expand")}"]`);S&&(S.classList.toggle("is-expanded"),l.textContent=S.classList.contains("is-expanded")?e("chat.showLess"):e("chat.showMore"))})}),a.querySelectorAll("[data-copy-msg]").forEach(l=>{l.addEventListener("click",async S=>{S.preventDefault(),S.stopPropagation();const g=Number(l.getAttribute("data-copy-msg")),f=Y[g];if(!f?.content)return;if(await ca(f.content)){const k=l.textContent;l.textContent=e("chat.copied"),l.classList.add("is-copied"),setTimeout(()=>{l.isConnected&&(l.textContent=k||e("chat.copy"),l.classList.remove("is-copied"))},1600)}else j(e("chat.copyFail"))})})}function Wt(a){const o=a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),i=o.pop()||"",n=[];for(const r of o){const d=r.trim();if(!d||d.startsWith(":")||!d.startsWith("data:"))continue;const u=d.slice(5).trim();u&&n.push(u)}return{events:n,rest:i}}function io(a){if(!a||a.streaming)return"";const s=[],o=a.usage;if(o&&(o.prompt_tokens||o.completion_tokens||o.total_tokens)){const n=o.prompt_tokens_details?.cached_tokens,r=n!=null?` · ${e("chat.cacheTokens")}: ${n}`:"";s.push(`${e("chat.tokens")}: ${o.prompt_tokens||0}+${o.completion_tokens||0}=${o.total_tokens||0}${r}`)}const i=a.grok?.cost?.total_cost_usd;return typeof i=="number"&&s.push(`${e("chat.cost")}: $${i.toFixed(6)}`),a.grok?.sessionId&&s.push(`${e("chat.resume")}: ${a.grok.sessionId}`),s.join(" · ")}function Et(a,s){if(!s||typeof s!="object")return!1;if(s.error){const d=oa({error:s.error});return a.error=!0,a.content=(a.content||"")+`
✗ ${d}`,!0}const o=s.choices?.[0]?.delta||{};let i=!1;if(o.reasoning_content&&(a.reasoning=(a.reasoning||"")+o.reasoning_content,i=!0),(o.thought&&!o.reasoning_content||o.thought&&o.reasoning_content&&o.thought!==o.reasoning_content)&&(a.reasoning=(a.reasoning||"")+o.thought,i=!0),typeof o.content=="string"&&o.content.length&&(a.content=(a.content||"")+o.content,i=!0),s.usage&&typeof s.usage=="object"&&(a.usage=s.usage,i=!0),s.grok&&typeof s.grok=="object"){if(a.grok={...a.grok||{},...s.grok},a.grok.sessionId){R.resumeId=a.grok.sessionId;const d=document.getElementById("chat-resume");d&&(d.value=a.grok.sessionId)}i=!0}if(s.grok_event&&typeof s.grok_event=="object"){const d=s.grok_event;if(Array.isArray(a.tools)||(a.tools=[]),d.type==="tool_call"||d.type==="tool_call_update"){const u=d.toolCallId,m=u?a.tools.find(g=>g.id===u):null,p=d.toolName||d.title||m?.name||"tool",l=d.rawInput!=null?typeof d.rawInput=="string"?d.rawInput:JSON.stringify(d.rawInput):m?.arguments||"",S=d.status?`${p} (${d.status})`:p;m?(m.name=S,l&&(m.arguments=l)):a.tools.push({id:u,name:S,arguments:l}),i=!0}}const n=s.choices?.[0]?.delta?.tool_calls;if(Array.isArray(n)&&n.length){Array.isArray(a.tools)||(a.tools=[]);for(const d of n){const u=d?.function?.name||d?.name||"tool",m=d?.function?.arguments||"";a.tools.push({id:d?.id,name:u,arguments:typeof m=="string"?m:JSON.stringify(m||{})})}i=!0}const r=s.choices?.[0]?.message;return r&&(r.content&&!a.content&&(a.content=r.content,i=!0),r.reasoning_content&&!a.reasoning&&(a.reasoning=r.reasoning_content,i=!0)),i}function ro(a,s){const o=St();return o?new Promise((i,n)=>{const r=new FormData;r.append("file",a,a.name);const d=kt();d&&r.append("apiKeyId",d);const u=new XMLHttpRequest;u.open("POST","/admin/api/documents"),u.setRequestHeader("Authorization",`Bearer ${o}`),u.upload.onprogress=m=>{if(s)if(m.lengthComputable&&m.total>0){const p=Math.min(100,Math.round(m.loaded/m.total*100));s({loaded:m.loaded,total:m.total,percent:p})}else s({loaded:m.loaded||0,total:0,percent:-1})},u.onload=()=>{let m=null;try{m=u.responseText?JSON.parse(u.responseText):null}catch{m=null}if(u.status<200||u.status>=300){const S=m?.error?.message||m?.message||u.responseText||u.statusText;n(new Error(S||e("chat.uploadFail")));return}const p=m?.data||m,l=p?.id;if(!l||typeof l!="string"){n(new Error(e("chat.uploadFail")));return}i({id:l,name:p.originalName||p.filename||a.name,mime:p.mimeType||a.type||"",size:p.sizeBytes??p.size??a.size??0})},u.onerror=()=>n(new Error(e("chat.uploadFail"))),u.onabort=()=>n(new Error(e("chat.uploadFail"))),u.send(r)}):Promise.reject(new Error(e("chat.needKey")))}function It(a){const s=document.getElementById("chat-upload-progress");if(!s)return;const{visible:o,fileName:i,fileIndex:n,fileTotal:r,percent:d,indeterminate:u}=a;if(!o){s.hidden=!0,s.setAttribute("aria-hidden","true");return}s.hidden=!1,s.setAttribute("aria-hidden","false");const m=document.getElementById("chat-upload-label"),p=document.getElementById("chat-upload-bar"),l=document.getElementById("chat-upload-pct"),S=i||"",g=n||1,f=r||1;m&&(m.textContent=f>1?M("chat.uploadProgressMulti",{name:S,i:g,n:f}):M("chat.uploadProgress",{name:S}));const b=!!u||d<0;p&&(p.classList.toggle("is-indeterminate",b),b?p.style.width="40%":p.style.width=`${Math.max(0,Math.min(100,d))}%`),l&&(l.textContent=b?e("chat.uploading"):M("common.percent",{n:Math.max(0,Math.min(100,d))}))}function lo(a){const s=Array.isArray(a)?a:[];if(!s.length)return{added:0,skipped:0};let o=0,i=0;const n=new Set(ae.map(r=>r.id));for(const r of s){if(ae.length>=Ct){i+=s.length-o-i;break}const d=r?.id,u=r?.name||r?.originalName||"";if(!d||!ya.test(String(d))){i+=1;continue}if(!Lt(u)){i+=1;continue}if(n.has(d)){i+=1;continue}ae.push({id:d,name:u||d,mime:r.mime||r.mimeType||"",size:r.size??r.sizeBytes??0}),n.add(d),o+=1}return Ue(),{added:o,skipped:i}}async function co(){if(!St()){j(e("chat.needKey"));return}const a=kt(),s=Math.max(0,Ct-ae.length);if(s<=0){j(e("chat.tooManyFiles"));return}const o=new Map;let i=0;rt({title:e("chat.libraryTitle"),subtitle:t(e("chat.librarySubtitle")),size:"md",bodyHtml:`
      <div class="chat-lib">
        <div class="chat-lib-toolbar">
          <input type="search" id="chat-lib-q" class="chat-lib-search" placeholder="${t(e("chat.librarySearch"))}" autocomplete="off" />
          <span class="muted chat-lib-count" id="chat-lib-count">${t(M("chat.librarySelected",{n:0}))}</span>
        </div>
        <div class="muted chat-lib-formats">${t(e("chat.formatsLabel"))}: ${t(Dt())}</div>
        <div id="chat-lib-list" class="chat-lib-list" role="listbox" aria-multiselectable="true">
          <div class="muted chat-lib-status">${t(e("common.loading")||"…")}</div>
        </div>
      </div>`,footerHtml:`
      <button type="button" class="btn secondary sm" id="chat-lib-cancel">${t(e("common.cancel"))}</button>
      <button type="button" class="btn sm" id="chat-lib-add" disabled>${t(e("chat.libraryAdd"))}</button>`});const n=document.getElementById("chat-lib-list"),r=document.getElementById("chat-lib-q"),d=document.getElementById("chat-lib-count"),u=document.getElementById("chat-lib-add");document.getElementById("chat-lib-cancel")?.addEventListener("click",()=>ye());const m=()=>{d&&(d.textContent=M("chat.librarySelected",{n:o.size})),u&&(u.disabled=o.size===0,u.textContent=o.size>0?`${e("chat.libraryAdd")} (${o.size})`:e("chat.libraryAdd"))},p=g=>{if(!n)return;const f=new Set(ae.map(k=>k.id)),b=(g||[]).filter(k=>Lt(k.originalName));if(!b.length){n.innerHTML=`<div class="data-empty chat-lib-empty"><strong>${t(e("chat.libraryEmpty"))}</strong></div>`;return}n.innerHTML=b.map(k=>{const T=f.has(k.id),B=o.has(k.id),O=T&&!B;return`
          <label class="chat-lib-row ${T?"is-already":""} ${B?"is-selected":""}" data-id="${t(k.id)}">
            <input type="checkbox" data-lib-id="${t(k.id)}" ${B?"checked":""} ${O?"disabled":""} />
            <span class="chat-lib-meta">
              <span class="chat-lib-name" title="${t(k.originalName)}">${t(k.originalName)}</span>
              <span class="muted">${t(k.mimeType||"")} · ${xe(k.sizeBytes||0)}${T?` · ${t(e("chat.libraryAlready"))}`:""}</span>
            </span>
          </label>`}).join(""),n.querySelectorAll("input[data-lib-id]").forEach(k=>{k.addEventListener("change",()=>{const T=k.getAttribute("data-lib-id"),B=b.find(E=>E.id===T);if(!B)return;if(k.checked){if(o.size>=s&&!o.has(T)){k.checked=!1,j(e("chat.tooManyFiles"));return}o.set(T,B)}else o.delete(T);const O=k.closest(".chat-lib-row");O&&O.classList.toggle("is-selected",k.checked),m()})})},l=async()=>{const g=++i;n&&(n.innerHTML=`<div class="muted chat-lib-status">${t(e("common.loading")||"…")}</div>`);try{const f=new URLSearchParams({limit:"50",offset:"0"});a&&f.set("apiKeyId",a);const b=(r?.value||"").trim();b&&f.set("q",b);const k=await P(`/documents?${f}`);if(g!==i)return;p(k.data||[])}catch(f){if(g!==i)return;n&&(n.innerHTML=`<div class="error-box">${t(f.message||e("chat.libraryLoadFail"))}</div>`)}};let S=null;r?.addEventListener("input",()=>{S&&clearTimeout(S),S=setTimeout(()=>l(),280)}),u?.addEventListener("click",()=>{const g=[...o.values()],{added:f}=lo(g.map(b=>({id:b.id,name:b.originalName,mime:b.mimeType,size:b.sizeBytes})));ye(),f>0&&j("")}),m(),await l(),r?.focus()}async function as(a){const s=[...a||[]];if(!s.length)return;if(!St()){j(e("chat.needKey"));return}const o=s.filter(u=>!Lt(u.name)),i=s.filter(u=>Lt(u.name));if(o.length&&(j(M("chat.formatsReject",{name:o.map(u=>u.name).join(", "),formats:Dt()})),!i.length))return;if(ae.length+i.length>Ct){j(e("chat.tooManyFiles"));return}const n=document.getElementById("chat-attach"),r=document.getElementById("chat-send");n&&(n.disabled=!0,n.textContent=e("chat.uploading")),r&&(r.disabled=!0);const d=i.length;try{let u=0;for(const m of i){if(ae.length>=Ct)break;u+=1,It({visible:!0,fileName:m.name,fileIndex:u,fileTotal:d,percent:0,indeterminate:!1});const p=await ro(m,({percent:l})=>{It({visible:!0,fileName:m.name,fileIndex:u,fileTotal:d,percent:l<0?0:l,indeterminate:l<0})});It({visible:!0,fileName:m.name,fileIndex:u,fileTotal:d,percent:100,indeterminate:!1}),ae.some(l=>l.id===p.id)||ae.push(p),Ue()}o.length||j("")}catch(u){j(u.message||e("chat.uploadFail"))}finally{It({visible:!1}),n&&(n.disabled=!1,n.textContent=e("chat.attach")),r&&(r.disabled=!1)}}function uo(){const a=c.me?.id||"",s=c.me?`${e("chat.useSessionKey")} · ${c.me.name||""} (${c.me.keyPrefix||""}…)`:e("chat.useSessionKey"),o=R.keyId||"session",i=(c.keys||[]).filter(r=>r.isActive!==!1),n=[`<option value="session" ${o==="session"||o===a||!o?"selected":""}>${t(s)}</option>`];for(const r of i){if(a&&r.id===a)continue;const d=`${r.name||"key"} · ${r.keyPrefix||""}… · ${r.role||""}/${r.mode||""}`;n.push(`<option value="${t(r.id)}" ${o===r.id?"selected":""}>${t(d)}</option>`)}return n.join("")}async function mo(){await Promise.all([bt(!1),$t()]);const a=c.models||[];!R.model&&a.length&&(R.model=a[0]);const s=a.map(m=>`<option value="${t(m)}" ${R.model===m?"selected":""}>${t(m)}</option>`).join("");ea(!1),document.getElementById("app").innerHTML=ie(`
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
              <select id="chat-key-select">${uo()}</select>
            </label>
            <label>${t(e("chats.model"))}
              <select id="chat-model">${s||'<option value="grok-4.5">grok-4.5</option>'}</select>
            </label>
            <label class="check-inline" for="chat-reasoning">
              <input type="checkbox" id="chat-reasoning" ${R.reasoning!==!1?"checked":""} />
              ${t(e("chat.includeReasoning"))}
            </label>
            <label class="chat-ctx-label">${t(e("chat.effort"))}
              <select id="chat-effort">
                ${["","none","minimal","low","medium","high","xhigh","max"].map(m=>{const p=e(m?`chat.effort_${m}`:"chat.effortDefault"),l=(R.effort||"")===m?" selected":"";return`<option value="${t(m)}"${l}>${t(p)}</option>`}).join("")}
              </select>
            </label>
            <label class="chat-ctx-label">${t(e("chat.ctxMode"))}
              <select id="chat-ctx-mode">
                <option value="full">${t(e("chat.ctxModeFull"))}</option>
                <option value="summary">${t(e("chat.ctxModeSummary"))}</option>
                <option value="recent">${t(e("chat.ctxModeRecent"))}</option>
              </select>
            </label>
            <label class="chat-ctx-label chat-ctx-n-label">${t(e("chat.ctxRecentN"))}
              <input type="number" id="chat-ctx-n" min="2" max="40" value="${L.recentN}" />
            </label>
            <button type="button" class="btn ghost sm" id="chat-system-toggle" title="${t(e("chat.systemHint"))}">
              ${t(e("chat.systemPrompt"))}${R.systemPrompt?" ·":""}
            </button>
            <label class="chat-ctx-label" title="${t(e("chat.resumeHint"))}">${t(e("chat.resume"))}
              <input type="text" id="chat-resume" value="${t(R.resumeId||"")}" placeholder="${t(e("chat.resumePh"))}" spellcheck="false" />
            </label>
            <label class="check-inline" for="chat-fork">
              <input type="checkbox" id="chat-fork" ${R.forkSession?"checked":""} />
              ${t(e("chat.fork"))}
            </label>
            <label class="check-inline" for="chat-memory">
              <input type="checkbox" id="chat-memory" ${R.memory?"checked":""} />
              ${t(e("chat.memory"))}
            </label>
            <label class="check-inline" for="chat-no-plan">
              <input type="checkbox" id="chat-no-plan" ${R.noPlan?"checked":""} />
              ${t(e("chat.noPlan"))}
            </label>
            <label class="chat-ctx-label">${t(e("chat.permission"))}
              <select id="chat-perm">
                ${["","default","acceptEdits","auto","dontAsk","bypassPermissions","plan"].map(m=>{const p=m||e("chat.effortDefault"),l=(R.permissionMode||"")===m?" selected":"";return`<option value="${t(m)}"${l}>${t(p)}</option>`}).join("")}
              </select>
            </label>
          </div>
          <div class="chat-system-wrap" id="chat-system-wrap" ${R.systemOpen||R.systemPrompt?"":"hidden"}>
            <label class="chat-system-label" for="chat-system">${t(e("chat.systemPrompt"))}
              <span class="hint">${t(e("chat.systemHint"))}</span>
            </label>
            <textarea id="chat-system" rows="3" placeholder="${t(e("chat.systemPlaceholder"))}">${t(R.systemPrompt||"")}</textarea>
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
                <input type="file" id="chat-file" class="chat-file-input" multiple accept="${t(us)}" />
                <button type="button" class="btn secondary sm" id="chat-attach" title="${t(e("chat.attachHint"))}">${t(e("chat.attach"))}</button>
                <button type="button" class="btn secondary sm" id="chat-attach-lib" title="${t(e("chat.libraryTitle"))}">${t(e("chat.attachLibrary"))}</button>
                <span class="chat-formats-hint" title="${t(Dt())}">
                  <span class="chat-formats-label">${t(e("chat.formatsLabel"))}</span>
                  <span class="muted">${t(Dt())}</span>
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
            <input type="search" id="chat-history-search" class="chat-history-search" placeholder="${t(e("chat.historySearch"))}" value="${t(A.historyQ)}" />
          </div>
          <ul class="chat-history-list" id="chat-history-list"></ul>
          <div class="chat-history-pager" id="chat-history-pager"></div>
        </aside>
      </div>
    </div>
  `),de(),Ae(),Ue(),Ce(),it(),Fe(),et(),Ke().catch(()=>{}),document.getElementById("chat-key-select").onchange=()=>ne();const o=document.getElementById("chat-ctx-mode"),i=document.getElementById("chat-ctx-n");o&&(o.onchange=()=>{const m=o.value;if(m==="summary"&&!L.summary){j(e("chat.compressNeedSummary")),o.value=L.mode==="recent"?"recent":"full";return}L.mode=m==="summary"||m==="recent"?m:"full",Fe(),et(),ht().catch(()=>{})}),i&&(i.onchange=()=>{L.recentN=Math.min(40,Math.max(2,Number(i.value)||6)),Fe(),ht().catch(()=>{})}),document.getElementById("chat-model").onchange=()=>ne(),document.getElementById("chat-reasoning").onchange=()=>ne(),document.getElementById("chat-effort")?.addEventListener("change",()=>ne()),document.getElementById("chat-resume")?.addEventListener("change",()=>ne()),document.getElementById("chat-fork")?.addEventListener("change",()=>ne()),document.getElementById("chat-memory")?.addEventListener("change",()=>ne()),document.getElementById("chat-no-plan")?.addEventListener("change",()=>ne()),document.getElementById("chat-perm")?.addEventListener("change",()=>ne()),document.getElementById("chat-system").oninput=()=>ne(),document.getElementById("chat-system-toggle").onclick=()=>{ne(),R.systemOpen=!R.systemOpen;const m=document.getElementById("chat-system-wrap");m&&(m.hidden=!R.systemOpen&&!R.systemPrompt.trim()),R.systemOpen&&document.getElementById("chat-system")?.focus()},document.getElementById("chat-new").onclick=()=>{oo(!0)},document.getElementById("chat-compress").onclick=()=>{to().catch(()=>{})},document.getElementById("chat-stop").onclick=()=>{ge&&ge.abort()},document.getElementById("chat-send").onclick=()=>Ma(),document.getElementById("chat-attach").onclick=()=>{document.getElementById("chat-file")?.click()},document.getElementById("chat-attach-lib")?.addEventListener("click",()=>{co().catch(m=>j(m.message||e("chat.libraryLoadFail")))}),document.getElementById("chat-file").onchange=m=>{const p=m.target;as(p.files).finally(()=>{p.value=""})};const n=document.getElementById("chat-history-toggle"),r=document.getElementById("chat-history-backdrop"),d=document.getElementById("chat-history-close-mobile");n&&(n.onclick=()=>{ea(!A.historyOpenMobile)}),r&&(r.onclick=()=>ta()),d&&(d.onclick=()=>ta());const u=document.getElementById("chat-history-search");u&&(u.oninput=()=>{A.historyQ=u.value,Ut&&clearTimeout(Ut),Ut=setTimeout(()=>{A.historyPage=0,Ke()},280)}),po(),document.getElementById("chat-input").onkeydown=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Ma())}}function po(){const a=document.getElementById("chat-page"),s=document.getElementById("chat-drop-overlay"),o=document.getElementById("chat-composer");if(!a)return;let i=0;const n=g=>{const f=g.dataTransfer?.types;return f?typeof f.includes=="function"?f.includes("Files"):[...f].includes("Files"):!1},r=g=>{a.classList.toggle("is-file-drag",g),o&&o.classList.toggle("is-dragover",g),s&&(s.hidden=!g,s.setAttribute("aria-hidden",g?"false":"true"))},d=g=>{n(g)&&(g.preventDefault(),g.stopPropagation(),i+=1,r(!0))},u=g=>{n(g)&&(g.preventDefault(),g.stopPropagation(),g.dataTransfer&&(g.dataTransfer.dropEffect="copy"),r(!0))},m=g=>{n(g)&&(g.preventDefault(),g.stopPropagation(),i=Math.max(0,i-1),i===0&&r(!1))},p=g=>{if(!n(g))return;g.preventDefault(),g.stopPropagation(),i=0,r(!1);const f=g.dataTransfer?.files;f?.length&&as(f).catch(b=>j(b.message||e("chat.uploadFail")))};a.addEventListener("dragenter",d),a.addEventListener("dragover",u),a.addEventListener("dragleave",m),a.addEventListener("drop",p);const l=g=>{c.page==="chat"&&n(g)&&g.preventDefault()},S=g=>{c.page==="chat"&&n(g)&&g.preventDefault()};window.addEventListener("dragover",l),window.addEventListener("drop",S),a._chatDropCleanup=()=>{window.removeEventListener("dragover",l),window.removeEventListener("drop",S)}}function fo(a){const s=new Set,o=[],i=n=>{if(!n||typeof n!="string")return;const r=n.trim();!ya.test(r)||s.has(r)||(s.add(r),o.push(r))};for(const n of a||[])i(n?.id);for(const n of Y)if(n?.docs?.length)for(const r of n.docs)i(r?.id);return o}async function Ma(){ne();const a=document.getElementById("chat-input");let s=a?.value.trim()||"";const o=[...ae];if(!s&&!o.length){j(e("chat.needContent"));return}const i=St();if(!i){j(e("chat.needKey"));return}if(!s&&o.length&&(s=e("chat.fileOnlyPrompt")),o.filter(B=>!B?.id||!ya.test(String(B.id))).length){j(e("chat.uploadFail"));return}const r=document.getElementById("chat-model")?.value||R.model||"grok-4.5",d=document.getElementById("chat-reasoning")?.checked!==!1,u=document.getElementById("chat-effort")?.value||R.effort||"";ga();const m=o.map(B=>({id:B.id,name:B.name})),p=fo(o);Y.push({role:"user",content:s,docs:m.length?m:void 0}),a&&(a.value=""),ae=[],Ue();const l={role:"assistant",content:"",reasoning:"",streaming:!0};Y.push(l),Oe=Math.max(0,Y.length-Xa),Ae();const g=Xs(),f=document.getElementById("chat-send"),b=document.getElementById("chat-stop"),k=document.getElementById("chat-attach"),T=document.getElementById("chat-attach-lib");f&&(f.disabled=!0),k&&(k.disabled=!0),T&&(T.disabled=!0),b&&(b.disabled=!1),ge=new AbortController;try{const B={model:r,stream:!0,include_reasoning:d,messages:g};u&&(B.reasoning_effort=u),ne(),R.resumeId&&(B.resume=R.resumeId),R.forkSession&&(B.fork_session=!0),R.memory&&(B.experimental_memory=!0),R.noPlan&&(B.no_plan=!0),R.permissionMode&&(B.permission_mode=R.permissionMode),p.length&&(B.document_ids=p);const O=kt();O&&(B.apiKeyId=O);const E=await fetch("/admin/api/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify(B),signal:ge.signal});if(!E.ok){const N=await E.text();let h=N;try{h=JSON.parse(N).error?.message||N}catch{}throw new Error(h||E.statusText)}if(E.body&&typeof E.body.getReader=="function"){const N=E.body.getReader(),h=new TextDecoder;let x="",U=0;const C=(y=!1)=>{const v=performance.now();(y||v-U>40)&&(U=v,Ae())};for(;;){const{done:y,value:v}=await N.read();if(y)break;x+=h.decode(v,{stream:!0});const{events:F,rest:W}=Wt(x);x=W;let I=!1;for(const H of F)if(H!=="[DONE]")try{const K=JSON.parse(H);Et(l,K)&&(I=!0)}catch{}I&&C(!1)}if(x.trim()){const{events:y}=Wt(x+`
`);for(const v of y)if(v!=="[DONE]")try{Et(l,JSON.parse(v))}catch{}}C(!0)}else{const N=await E.text(),{events:h}=Wt(N+`
`);for(const x of h)if(x!=="[DONE]")try{Et(l,JSON.parse(x))}catch{try{const U=JSON.parse(N);Et(l,U)}catch{}}Ae()}!l.content&&!l.reasoning&&(l.content=e("chat.emptyReply")),j("")}catch(B){B.name==="AbortError"?l.content=(l.content||"")+`
[${e("chat.stopped")}]`:(l.error=!0,l.content=(l.content||"")+`
✗ ${B.message||B}`,j(B.message||String(B)))}finally{l.streaming=!1,ge=null,Ae(),it(),f&&(f.disabled=!1),k&&(k.disabled=!1),T&&(T.disabled=!1),b&&(b.disabled=!0),ht().catch(()=>{})}}async function Rt(){const a=document.getElementById("app");try{if(!c.key){await Na();return}c.me||await Fa(),c.page==="dashboard"?await zt():c.page==="chat"?await mo():c.page==="chats"?await ut():c.page==="keys"?await _e():c.page==="documents"?await at():c.page==="media"?await Pe():c.page==="audit"?await mt():c.page==="settings"?await za():c.page==="apiFeatures"?await Mt():c.page==="usage"?await ue():c.page==="ddos"?await ee():c.page==="queue"?await oe():c.page==="pm2"?await Be():c.page==="system"?await st():await zt()}catch(s){a.innerHTML=ie(`<div class="error-box">${t(s.message)}</div>`),de()}}let Ve=null;const Q={tab:"overview",status:"",sortBy:"queuedAt",sortDir:"desc",limit:20,offset:0};function Ht(a){return!a||a<0?"—":a<1e3?`${a}ms`:a<6e4?`${Math.round(a/1e3)}s`:a<36e5?`${Math.round(a/6e4)}m`:`${(a/36e5).toFixed(1)}h`}const yo=["enabled","globalConcurrency","perKeyConcurrency","maxQueueDepth","maxQueueDepthPerKey","fairness","defaultPriority","playgroundPriority","leaseMs","maxWaitMs"];function ss(){return{relaxed:{enabled:!0,globalConcurrency:6,perKeyConcurrency:2,maxQueueDepth:200,maxQueueDepthPerKey:40,fairness:"weighted_round_robin",defaultPriority:100,playgroundPriority:40,leaseMs:6e4,maxWaitMs:9e5},balanced:{enabled:!0,globalConcurrency:4,perKeyConcurrency:1,maxQueueDepth:100,maxQueueDepthPerKey:20,fairness:"weighted_round_robin",defaultPriority:100,playgroundPriority:50,leaseMs:45e3,maxWaitMs:6e5},strict:{enabled:!0,globalConcurrency:2,perKeyConcurrency:1,maxQueueDepth:40,maxQueueDepthPerKey:8,fairness:"fifo_global",defaultPriority:100,playgroundPriority:80,leaseMs:3e4,maxWaitMs:3e5}}}function qa(a){if(!a)return{};const s={};for(const o of yo){const i=a[o];typeof i=="boolean"?s[o]=i:typeof i=="number"&&Number.isFinite(i)?s[o]=Math.round(i):typeof i=="string"?s[o]=i:i==null?s[o]=null:s[o]=i}return s}function os(a,s){return JSON.stringify(qa(a))===JSON.stringify(qa(s))}function aa(a){if(!a)return"custom";const s=ss();for(const o of["relaxed","balanced","strict"])if(os(a,s[o]))return o;return"custom"}function go(a){return e(a==="relaxed"?"queue.presetRelaxed":a==="balanced"?"queue.presetBalanced":a==="strict"?"queue.presetStrict":"queue.presetCustom")}function ns(a,{unsaved:s=!1}={}){const o=go(a),i=a==="relaxed"?"relaxed":a==="balanced"?"balanced":a==="strict"?"strict":"custom",n=s?M("queue.presetFormLabel",{name:o}):M("queue.presetActiveLabel",{name:o});return`<span class="ddos-preset-badge is-${i}" id="queue-preset-badge" title="${t(n)}">${t(n)}</span>`}function is(){return{enabled:document.getElementById("q-master-enabled")?Je("q-master-enabled"):!0,globalConcurrency:Math.max(1,Math.min(64,Math.floor(z("qp-gconc",4)))),perKeyConcurrency:Math.max(1,Math.min(16,Math.floor(z("qp-kconc",1)))),maxQueueDepth:Math.max(1,Math.floor(z("qp-depth",100))),maxQueueDepthPerKey:Math.max(1,Math.floor(z("qp-depthk",20))),fairness:document.getElementById("qp-fair")?.value==="fifo_global"?"fifo_global":"weighted_round_robin",defaultPriority:Math.max(0,Math.min(1e3,Math.floor(z("qp-pri",100)))),playgroundPriority:Math.max(0,Math.min(1e3,Math.floor(z("qp-ppri",50)))),leaseMs:Math.max(5e3,Math.floor(z("qp-lease",45e3))),maxWaitMs:Math.max(5e3,Math.floor(z("qp-wait",6e5)))}}function _t(a){Xe("q-master-enabled",a,e("queue.masterOn"),e("queue.masterOff")),Ze("queue-root",!a),Ye("queue-disabled-banner",!a);const s=document.getElementById("qk-pill-enabled");s&&(s.innerHTML=Re(a,e("dash.on"),e("dash.off")))}function bo(a){if(!a)return;const s=(i,n)=>{const r=document.getElementById(i);r&&(r.value=String(n))};_t(a.enabled!==!1),s("qp-gconc",a.globalConcurrency),s("qp-kconc",a.perKeyConcurrency),s("qp-depth",a.maxQueueDepth),s("qp-depthk",a.maxQueueDepthPerKey);const o=document.getElementById("qp-fair");o&&(o.value=a.fairness||"weighted_round_robin"),s("qp-pri",a.defaultPriority),s("qp-ppri",a.playgroundPriority),s("qp-lease",a.leaseMs),s("qp-wait",a.maxWaitMs),ft()}function ft(){if(!document.getElementById("queue-policy-panel"))return;let a;try{a=is()}catch{return}const s=aa(a),o=aa(c._queuePolicyCache||a),i=!os(a,c._queuePolicyCache||a);document.querySelectorAll("[data-queue-preset]").forEach(d=>{const u=d.dataset.queuePreset;if(u==="custom"){const S=s==="custom";d.classList.toggle("is-active",S),d.setAttribute("aria-pressed",S?"true":"false"),d.disabled=!S;return}const m=u===s,p=u===o;d.classList.toggle("is-active",m),d.classList.toggle("is-saved",p&&!m),d.setAttribute("aria-pressed",m?"true":"false");const l=e(u==="relaxed"?"queue.presetRelaxed":u==="balanced"?"queue.presetBalanced":"queue.presetStrict");m&&p?d.innerHTML=`${t(l)} <span class="preset-tag">${t(e("queue.presetTagActive"))}</span>`:m&&i?d.innerHTML=`${t(l)} <span class="preset-tag preset-tag--draft">${t(e("queue.presetTagDraft"))}</span>`:p?d.innerHTML=`${t(l)} <span class="preset-tag preset-tag--saved">${t(e("queue.presetTagSaved"))}</span>`:d.textContent=l});const n=document.getElementById("queue-preset-badge");n&&(n.outerHTML=ns(s,{unsaved:i&&s!==o}));const r=document.getElementById("queue-preset-hint");if(r){const d={relaxed:e("queue.presetRelaxedHint"),balanced:e("queue.presetBalancedHint"),strict:e("queue.presetStrictHint"),custom:e("queue.presetCustomHint")};r.textContent=d[s]||d.custom}}function ho(){document.querySelectorAll("[data-queue-preset]").forEach(a=>{a.dataset.queuePreset!=="custom"&&(a.onclick=()=>{const s=a.dataset.queuePreset,o=ss()[s];o&&bo(o)})}),["qp-gconc","qp-kconc","qp-depth","qp-depthk","qp-fair","qp-pri","qp-ppri","qp-lease","qp-wait"].forEach(a=>{const s=document.getElementById(a);s&&(s.addEventListener("change",()=>ft()),s.addEventListener("input",()=>ft()))}),ft()}function Ta(){return document.querySelector(".main")}function ds(a){return a.map(s=>{const o=s.status==="queued"||s.status==="leased"||s.status==="running",i=s.status==="failed"||s.status==="dead"||s.status==="cancelled",n=s.startedAt||s.finishedAt?null:s.queuedAt?Date.now()-new Date(s.queuedAt).getTime():null;return`
    <tr data-q-row="${t(s.id)}">
      <td>
        <div class="cell-primary mono" title="${t(s.id||"")}">${t((s.id||"").slice(0,10))}…</div>
        <div class="cell-sub mono" title="${t(s.requestId||"")}">${t((s.requestId||"").slice(0,18))}${(s.requestId||"").length>18?"…":""}</div>
        ${s.errorMessage?`<div class="queue-job-err" title="${t(s.errorMessage)}">${t(String(s.errorMessage).slice(0,80))}</div>`:""}
      </td>
      <td>${bs(s.source)}</td>
      <td>
        ${gs(s.status)}
        ${s.cancelRequested?`<div class="cell-sub">${t(e("queue.cancelReq"))}</div>`:""}
      </td>
      <td class="mono" title="${t(s.model||"")}">${t(s.model||"—")}</td>
      <td><span class="queue-pri">${s.priority??"—"}</span></td>
      <td>
        <div class="cell-primary mono" title="${t(s.apiKeyId||"")}">${t((s.apiKeyId||"").slice(0,8))}…</div>
      </td>
      <td class="mono">${s.attempt??0}<span class="muted">/${s.maxAttempts??1}</span></td>
      <td>
        <div class="cell-primary">${te(s.queuedAt)}</div>
        ${n!=null&&s.status==="queued"?`<div class="cell-sub" data-q-wait>${t(e("queue.wait"))}: ${Ht(n)}</div>`:s.startedAt?`<div class="cell-sub">${t(e("queue.started"))}: ${te(s.startedAt)}</div>`:""}
      </td>
      <td>
        <div class="row-actions">
        ${o?`<button type="button" class="btn danger sm" data-q-cancel="${t(s.id)}">${t(e("queue.cancel"))}</button>`:""}
        ${s.status==="queued"?`<button type="button" class="btn secondary sm" data-q-pri="${t(s.id)}" data-pri="${s.priority}">${t(e("queue.priorityBtn"))}</button>`:""}
        ${i?`<button type="button" class="btn secondary sm" data-q-requeue="${t(s.id)}">${t(e("queue.requeue"))}</button>`:""}
        </div>
      </td>
    </tr>`}).join("")}function rs(){document.querySelectorAll("[data-q-cancel]").forEach(a=>{a.onclick=async()=>{await J({title:e("queue.cancel"),message:e("queue.cancelConfirm"),variant:"danger",confirmText:e("queue.cancel")})&&(await P(`/queue/jobs/${a.dataset.qCancel}/cancel`,{method:"POST",body:"{}"}),oe().catch($))}}),document.querySelectorAll("[data-q-requeue]").forEach(a=>{a.onclick=async()=>{await P(`/queue/jobs/${a.dataset.qRequeue}/requeue`,{method:"POST",body:"{}"}),oe().catch($)}}),document.querySelectorAll("[data-q-pri]").forEach(a=>{a.onclick=async()=>{const s=Number(a.dataset.pri)||100,o=window.prompt(e("queue.priorityPh"),String(s));if(o==null)return;const i=Number(o);!Number.isFinite(i)||i<0||i>1e3||(await P(`/queue/jobs/${a.dataset.qPri}/priority`,{method:"POST",body:JSON.stringify({priority:i})}),oe().catch($))}})}function ls(a){return a.enabled?a.paused?e("queue.paused"):a.drainMode?e("queue.drain"):e("queue.running"):e("queue.modeOff")}function vo({s:a,pol:s,jobs:o,total:i,by:n}){const r=a.dead??n.dead??0,d=a.leased??n.leased??0,u=a.running??n.running??0,m=a.queued??n.queued??0,p=a.depth??m+d+u,l=ls(s),S=s.fairness==="fifo_global"?e("queue.fifo"):e("queue.wrr"),g=(C,y)=>{const v=document.getElementById(C);v&&(v.textContent=y)},f=(C,y)=>{const v=document.getElementById(C);v&&(v.innerHTML=y)};g("qk-depth",String(p)),g("qk-depth-sub",M("queue.kpiDepthSub",{q:m,l:d})),f("qk-running",`${u}<span class="dash-kpi-den">/${s.globalConcurrency??"—"}</span>`),g("qk-running-sub",M("queue.kpiActiveSub",{n:a.workerActive??0})),g("qk-queued",String(m)),g("qk-dead",String(r)),g("qk-oldest",a.oldestQueuedAgeMs?Ht(a.oldestQueuedAgeMs):"—"),g("qk-mode",l),g("qk-mode-sub",S);const b=document.getElementById("qk-worker-id");if(b){const C=a.workerId||"—";b.textContent=C,b.title=C}const k=(C,y,v,F)=>{const W=document.getElementById(C);W&&(W.outerHTML=`<span id="${C}">${Re(y,v,F)}</span>`)};k("qk-pill-enabled",s.enabled!==!1,e("dash.on"),e("dash.off")),k("qk-pill-consumer",!s.paused&&s.enabled!==!1,e("queue.running"),s.paused?e("queue.paused"):e("queue.modeOff")),k("qk-pill-admission",!s.drainMode,e("queue.accepting"),e("queue.drain")),g("qk-fairness-val",S),g("qk-conc-val",`${s.perKeyConcurrency??1} / ${s.globalConcurrency??"—"}`);const T=document.getElementById("queue-dlq-slot");T&&(r>0?(T.innerHTML=`
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
        </div>`,document.getElementById("q-filter-dead")?.addEventListener("click",()=>{Q.status="dead",Q.offset=0,Q.tab="jobs",oe().catch($)})):T.innerHTML="");const B=(C,y)=>{const v=document.getElementById(C);v&&(v.textContent=String(y??0))};B("q-tab-count-jobs",i),B("q-tab-count-dead",r);const O=document.getElementById("qk-jobs-meta");O&&(O.textContent=M("queue.jobsMeta",{n:i}));const E=document.querySelector("#queue-jobs-table tbody");if(E){const C=o.map(v=>`${v.id}|${v.status}|${v.priority}|${v.attempt}|${v.cancelRequested?1:0}|${v.errorMessage||""}|${v.startedAt||""}|${v.finishedAt||""}`).join(";"),y=ds(o)||`<tr class="empty-row"><td colspan="9">
        <div class="data-empty">
          <div class="data-empty-icon">∅</div>
          <strong>${t(e("queue.empty"))}</strong>
        </div>
      </td></tr>`;if(E.dataset.qsig!==C){const v=document.querySelector("#queue-jobs-table .table-wrap"),F=v?.scrollLeft||0;E.dataset.qsig=C,E.innerHTML=y,rs(),v&&(v.scrollLeft=F)}else o.forEach(v=>{if(v.status!=="queued"||!v.queuedAt)return;const F=Date.now()-new Date(v.queuedAt).getTime(),W=String(v.id||"");let I=null;E.querySelectorAll("[data-q-row]").forEach(K=>{K.getAttribute("data-q-row")===W&&(I=K)});const H=I?.querySelector("[data-q-wait]");H&&(H.textContent=`${e("queue.wait")}: ${Ht(F)}`)})}if(document.querySelector("#queue-pager .data-pager-meta span")){const C=Math.max(1,Math.ceil((i||0)/Q.limit)||1),y=Math.floor(Q.offset/Q.limit)+1,v=document.querySelectorAll("#queue-pager .data-pager-meta > span");v[0]&&(v[0].textContent=M("common.pagerTotal",{n:i||0})),v[1]&&(v[1].textContent=M("common.pagerPage",{n:y,total:C}));const F=document.getElementById("queue-prev"),W=document.getElementById("queue-next");F&&(F.disabled=Q.offset<=0),W&&(W.disabled=Q.offset+Q.limit>=i)}const h=document.getElementById("q-pause");h&&(h.textContent=s.paused?e("queue.resume"):e("queue.pause"));const x=document.getElementById("q-drain");x&&(x.textContent=s.drainMode?e("queue.undrain"):e("queue.drainBtn"));const U=document.getElementById("q-master-enabled");U&&document.activeElement!==U&&_t(s.enabled!==!1)}function Ba(){Ve||(Ve=setInterval(()=>{if(c.page!=="queue"){clearInterval(Ve),Ve=null;return}const a=document.activeElement;a&&a.closest&&a.closest("#queue-policy-panel")&&(a.tagName==="INPUT"||a.tagName==="SELECT"||a.tagName==="TEXTAREA")||oe({soft:!0}).catch(()=>{})},4e3))}async function oe(a={}){const s=!!a.soft&&document.getElementById("queue-root");!s&&Ve&&(clearInterval(Ve),Ve=null);const o=Ta(),i=!s&&o?o.scrollTop:0,n=Q;n.sortBy||(n.sortBy="queuedAt"),n.sortDir||(n.sortDir="desc");const r=new URLSearchParams;r.set("limit",String(n.limit)),r.set("offset",String(n.offset)),n.status&&r.set("status",n.status),$e(r,n);const[d,u,m]=await Promise.all([P("/queue/stats"),P(`/queue/jobs?${r}`),P("/queue/policy")]);if(c.page!=="queue")return;const p=d.data||{},l=m.data||p.policy||{},S=u.data||[],g=u.total??S.length,f=p.byStatus||{},b=p.dead??f.dead??0,k=p.leased??f.leased??0,T=p.running??f.running??0,B=p.queued??f.queued??0,O=p.depth??B+k+T,E=ls(l);if(c._queuePolicyCache={...l},s){vo({s:p,pol:l,jobs:S,total:g,by:f}),Ba();return}Q.tab||(Q.tab="overview");const N=Q.tab==="jobs"||Q.tab==="policy"?Q.tab:"overview";Q.tab=N;const h=ds(S),x=Ne({title:e("queue.filterTitle"),hint:e("queue.filterHint"),meta:M("queue.jobsMeta",{n:g}),gridHtml:`
      <label>${t(e("queue.filterStatus"))}
        <select id="qf-status">
          <option value="">${t(e("queue.allStatuses"))}</option>
          <option value="queued" ${n.status==="queued"?"selected":""}>${t(e("queue.filterQueued"))}</option>
          <option value="active" ${n.status==="active"?"selected":""}>${t(e("queue.filterRunning"))}</option>
          <option value="dead" ${n.status==="dead"?"selected":""}>${t(e("queue.filterDead"))}</option>
          <option value="failed" ${n.status==="failed"?"selected":""}>${t(e("queue.filterFailed"))}</option>
          <option value="succeeded" ${n.status==="succeeded"?"selected":""}>${t(e("queue.filterSucceeded"))}</option>
          <option value="cancelled" ${n.status==="cancelled"?"selected":""}>${t(e("queue.filterCancelled"))}</option>
        </select>
      </label>`}),U=be({headHtml:`
      <th>${t(e("queue.colJob"))}</th>
      <th>${t(e("queue.colSource"))}</th>
      ${_({field:"status",label:e("queue.colStatus"),filterRef:n})}
      ${_({field:"model",label:e("queue.colModel"),filterRef:n})}
      ${_({field:"priority",label:e("queue.colPri"),filterRef:n})}
      <th>${t(e("queue.colKey"))}</th>
      ${_({field:"attempt",label:e("queue.colTry"),filterRef:n})}
      ${_({field:"queuedAt",label:e("queue.colTime"),filterRef:n})}
      <th>${t(e("common.actions"))}</th>`,bodyHtml:h,colSpan:9,emptyText:e("queue.empty"),pagerHtml:Me({total:g,limit:n.limit,offset:n.offset,idPrefix:"queue"})}),C=l.fairness==="fifo_global"?e("queue.fifo"):e("queue.wrr"),y=l.enabled!==!1,v=(G,X,D,w,q)=>`
    <div class="card">
      <div class="label">${t(G)}</div>
      <div class="value value-sm" id="${t(w)}">${X}</div>
      ${D!=null&&D!==""?`<div class="muted card-sub"${q?` id="${t(q)}"`:""}>${t(String(D))}</div>`:""}
    </div>`,F=`
    <div class="grid queue-kpi-grid" id="queue-kpi-grid">
      ${v(e("queue.depth"),t(String(O)),M("queue.kpiDepthSub",{q:B,l:k}),"qk-depth","qk-depth-sub")}
      ${v(e("queue.activeJobs"),`${T}<span class="dash-kpi-den">/${l.globalConcurrency??"—"}</span>`,M("queue.kpiActiveSub",{n:p.workerActive??0}),"qk-running","qk-running-sub")}
      ${v(e("queue.queued"),t(String(B)),e("queue.kpiQueuedSub"),"qk-queued","qk-queued-sub")}
      ${v(e("queue.dead"),t(String(b)),e("queue.kpiDeadSub"),"qk-dead","qk-dead-sub")}
      ${v(e("queue.oldest"),t(p.oldestQueuedAgeMs?Ht(p.oldestQueuedAgeMs):"—"),e("queue.kpiOldestSub"),"qk-oldest","qk-oldest-sub")}
      ${v(e("queue.mode"),t(E),C,"qk-mode","qk-mode-sub")}
    </div>`,W=`
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
            <span id="qk-pill-enabled">${Re(l.enabled!==!1,e("dash.on"),e("dash.off"))}</span>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.consumer"))}</span>
            <span id="qk-pill-consumer">${Re(!l.paused&&l.enabled!==!1,e("queue.running"),l.paused?e("queue.paused"):e("queue.modeOff"))}</span>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.admission"))}</span>
            <span id="qk-pill-admission">${Re(!l.drainMode,e("queue.accepting"),e("queue.drain"))}</span>
          </div>
          <div class="queue-status-item">
            <span class="label">${t(e("queue.fairness"))}</span>
            <strong class="queue-status-val" id="qk-fairness-val">${t(C)}</strong>
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
    ${b>0?`<div class="queue-dlq-banner" role="status">
      <div class="queue-dlq-text">
        <strong>${t(e("queue.dlqTitle"))}</strong>
        <span class="queue-dlq-count">${b}</span>
        <span class="muted">${t(e("queue.dlqHint"))}</span>
      </div>
      <div class="toolbar">
        <button type="button" class="btn secondary sm" id="q-filter-dead">${t(e("queue.viewDlq"))}</button>
        <button type="button" class="btn danger sm" id="q-purge-dlq">${t(e("queue.purgeDead"))}</button>
      </div>
    </div>`:""}
    </div>`,I=`
    ${x}
    <div id="queue-jobs-table" class="queue-jobs-table-host">${U}</div>`,H=`
    <div class="panel data-table-panel queue-policy-panel" id="queue-policy-panel">
      <div class="panel-h">
        <div class="panel-h-text">
          <strong>${t(e("queue.policyTitle"))}</strong>
          <span class="muted panel-h-sub">${t(e("queue.policyHint"))}</span>
        </div>
        ${ns(aa(l))}
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
    </div>`;if(document.getElementById("app").innerHTML=ie(`
  <div id="queue-root" class="${y?"":"is-feature-off"}">
    <div class="topbar">
      <h2>${t(e("queue.title"))}</h2>
      <div class="toolbar">
        ${pa({id:"q-master-enabled",on:y,onLabel:e("queue.masterOn"),offLabel:e("queue.masterOff"),title:e("queue.masterHint")})}
        <button type="button" class="btn secondary sm" id="q-pause">${t(l.paused?e("queue.resume"):e("queue.pause"))}</button>
        <button type="button" class="btn secondary sm" id="q-drain">${t(l.drainMode?e("queue.undrain"):e("queue.drainBtn"))}</button>
        <button type="button" class="btn danger sm" id="q-purge">${t(e("queue.purgeDead"))}</button>
      </div>
    </div>
    ${qe([e("queue.subtitle")])}
    <div class="feature-off-banner" id="queue-disabled-banner" ${y?"hidden":""} role="status">
      <strong>${t(e("common.featureOff"))}</strong>
      <span>${t(e("queue.disabledBanner"))}</span>
    </div>

    ${F}

    <div class="usage-tabs-panel panel queue-tabs-panel">
      <div class="seg-tabs" role="tablist" aria-label="${t(e("queue.title"))}">
        <button type="button" role="tab" class="seg-tab ${N==="overview"?"is-active":""}" data-queue-tab="overview" aria-selected="${N==="overview"}">
          ${t(e("queue.tabOverview"))}
        </button>
        <button type="button" role="tab" class="seg-tab ${N==="jobs"?"is-active":""}" data-queue-tab="jobs" aria-selected="${N==="jobs"}">
          ${t(e("queue.tabJobs"))}
          <span class="seg-tab-count" id="q-tab-count-jobs">${g}</span>
        </button>
        <button type="button" role="tab" class="seg-tab ${N==="policy"?"is-active":""}" data-queue-tab="policy" aria-selected="${N==="policy"}">
          ${t(e("queue.tabPolicy"))}
        </button>
      </div>
      <div class="usage-tab-body">
        <div class="usage-tab-pane queue-tab-pane-overview" id="queue-tab-overview" ${N==="overview"?"":"hidden"}>
          ${W}
        </div>
        <div class="usage-tab-pane queue-tab-pane-jobs" id="queue-tab-jobs" ${N==="jobs"?"":"hidden"}>
          ${I}
        </div>
        <div class="usage-tab-pane queue-tab-pane-policy" id="queue-tab-policy" ${N==="policy"?"":"hidden"}>
          ${H}
        </div>
      </div>
    </div>
  </div>
  `),de(),document.querySelectorAll("[data-queue-tab]").forEach(G=>{G.addEventListener("click",()=>{const X=G.getAttribute("data-queue-tab")||"overview";X!=="overview"&&X!=="jobs"&&X!=="policy"||Q.tab!==X&&(Q.tab=X,oe().catch($))})}),i>0){const G=Ta();G&&(G.scrollTop=i,requestAnimationFrame(()=>{G.scrollTop=i}))}document.getElementById("q-master-enabled").onclick=async()=>{const G=!Je("q-master-enabled");_t(G);try{const X=await P("/queue/policy",{method:"PUT",body:JSON.stringify({enabled:G})});c._queuePolicyCache={...c._queuePolicyCache||{},...X.data||{enabled:G}},ft()}catch(X){_t(!G),$(X)}},document.getElementById("q-pause").onclick=async()=>{await P(l.paused?"/queue/resume":"/queue/pause",{method:"POST",body:"{}"}),oe().catch($)},document.getElementById("q-drain").onclick=async()=>{await P(l.drainMode?"/queue/undrain":"/queue/drain",{method:"POST",body:"{}"}),oe().catch($)};let K=!1;const re=async()=>{if(!K){K=!0;try{if(!await J({title:e("queue.purgeTitle"),message:e("queue.purgeConfirm"),variant:"danger",confirmText:e("queue.purgeConfirmBtn"),cancelText:e("common.cancel")}))return;const X=await P("/queue/purge-dead",{method:"POST",body:"{}"}),D=Number(X?.data?.deleted??0);await pe({title:e("queue.purgeDoneTitle"),message:M("queue.purgeDoneMsg",{n:D}),confirmText:e("common.ok")}),await oe()}finally{K=!1}}},me=document.getElementById("queue-root");me&&(me.onclick=G=>{G.target?.closest?.("#q-purge, #q-purge-dlq")&&(G.preventDefault(),re().catch($))}),document.getElementById("q-filter-dead")?.addEventListener("click",()=>{Q.status="dead",Q.offset=0,Q.tab="jobs",oe().catch($)}),document.querySelectorAll("[data-filter-apply]").forEach(G=>{G.onclick=()=>{Q.status=document.getElementById("qf-status")?.value||"",Q.offset=0,oe().catch($)}}),document.querySelectorAll("[data-filter-reset]").forEach(G=>{G.onclick=()=>{Q.status="",Q.sortBy="queuedAt",Q.sortDir="desc",Q.offset=0,oe().catch($)}}),dt("queue",Q,()=>oe().catch($)),je(Q,()=>oe().catch($)),document.getElementById("qp-save").onclick=async()=>{const G=is();await P("/queue/policy",{method:"PUT",body:JSON.stringify(G)}),c._queuePolicyCache={...c._queuePolicyCache||{},...G},j(""),oe().catch($)},ho(),rs(),Ba()}c.page=fs();(!location.hash||location.hash==="#"||location.hash==="#/")&&ia(c.page);window.addEventListener("hashchange",()=>{const a=na(location.hash);a&&a!==c.page&&ra(a,{writeHash:!1})});window.addEventListener("popstate",()=>{const a=na(location.hash);!a||a===c.page||ra(a,{writeHash:!1})});Rt();
//# sourceMappingURL=boot.js.map
